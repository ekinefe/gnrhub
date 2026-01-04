export async function onRequestGet(context) {
    // 1. Parse the Cookie manually
    const cookieHeader = context.request.headers.get("Cookie");
    if (!cookieHeader || !cookieHeader.includes("auth_token=")) {
        return new Response(JSON.stringify({ user: null }), { status: 401 });
    }

    // Extract the token (Simple extraction for this example)
    const token = cookieHeader.split('auth_token=')[1].split(';')[0];

    try {
        // 2. Decode the fake session (In production, use JWT verification here)
        const sessionData = JSON.parse(atob(token));

        // 3. Optional: Double check user role from DB to be safe
        const db = context.env.DB;
        const user = await db.prepare('SELECT id, email, name, access_level FROM users WHERE id = ?')
            .bind(sessionData.id).first();

        if (!user) {
            return new Response(JSON.stringify({ user: null }), { status: 401 });
        }

        // 4. Return User Info (Excluding password)
        return new Response(JSON.stringify({ user }), { status: 200 });

    } catch (e) {
        return new Response(JSON.stringify({ user: null }), { status: 401 });
    }
}