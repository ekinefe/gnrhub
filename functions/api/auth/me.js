export async function onRequestGet(context) {
    const db = context.env.DB;

    // 1. Validate Session (Cookie)
    const cookieHeader = context.request.headers.get("Cookie");
    if (!cookieHeader || !cookieHeader.includes("auth_token=")) {
        return new Response(JSON.stringify(null), { status: 401 });
    }

    try {
        const token = cookieHeader.split('auth_token=')[1].split(';')[0];
        const sessionData = JSON.parse(atob(token));
        const userId = sessionData.id;

        // 2. Fetch User
        const user = await db.prepare('SELECT id, email, username, name, surname, role, is_verified FROM users WHERE id = ?')
            .bind(userId).first();

        if (!user) {
            return new Response(JSON.stringify(null), { status: 401 });
        }

        // 3. Return User Data
        return new Response(JSON.stringify(user), { status: 200 });

    } catch (err) {
        return new Response(JSON.stringify(null), { status: 500 });
    }
}