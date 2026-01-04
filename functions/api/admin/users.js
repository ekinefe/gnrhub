export async function onRequestGet(context) {
    const db = context.env.DB;

    // 1. EXTRACT COOKIE
    const cookieHeader = context.request.headers.get("Cookie");
    if (!cookieHeader || !cookieHeader.includes("auth_token=")) {
        return new Response("Unauthorized", { status: 401 });
    }

    try {
        const token = cookieHeader.split('auth_token=')[1].split(';')[0];
        const sessionData = JSON.parse(atob(token));

        // 2. VERIFY ADMIN STATUS IN DB
        // (We check the DB again to ensure they weren't demoted recently)
        const user = await db.prepare('SELECT access_level FROM users WHERE id = ?')
            .bind(sessionData.id).first();

        if (!user || user.access_level !== 'admin') {
            return new Response("Forbidden: Admins Only", { status: 403 });
        }

        // 3. FETCH ALL USERS (If Admin)
        const { results } = await db.prepare(
            'SELECT id, name, surname, email, access_level, created_at FROM users ORDER BY created_at DESC'
        ).all();

        return new Response(JSON.stringify(results), { status: 200 });

    } catch (err) {
        return new Response("Server Error", { status: 500 });
    }
}