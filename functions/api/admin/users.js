export async function onRequestGet(context) {
    const db = context.env.DB;

    // 1. EXTRACT COOKIE (Check if they are logged in at all)
    const cookieHeader = context.request.headers.get("Cookie");
    if (!cookieHeader || !cookieHeader.includes("auth_token=")) {
        return new Response("Unauthorized: No Cookie", { status: 401 });
    }

    try {
        // 2. DECODE TOKEN (Find out WHO is asking)
        const token = cookieHeader.split('auth_token=')[1].split(';')[0];
        const sessionData = JSON.parse(atob(token));
        // Now we have sessionData.id

        // 3. VERIFY ADMIN STATUS (Check DB using the ID we just found)
        const user = await db.prepare('SELECT access_level FROM users WHERE id = ?')
            .bind(sessionData.id).first();

        // If user doesn't exist OR is not an admin -> BLOCK THEM
        if (!user || user.access_level !== 'admin') {
            return new Response("Forbidden: You are not an Admin", { status: 403 });
        }

        // 4. FETCH ALL USERS (Only runs if the check above passes)
        const { results } = await db.prepare(
            'SELECT id, name, surname, email, access_level, created_at FROM users ORDER BY created_at DESC'
        ).all();

        // Return the list to the frontend
        return new Response(JSON.stringify(results), { status: 200 });

    } catch (err) {
        return new Response("Server Error: " + err.message, { status: 500 });
    }
}