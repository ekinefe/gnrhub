export async function onRequestGet(context) {
    const db = context.env.DB;
    const cookieHeader = context.request.headers.get("Cookie");

    // Auth Check
    if (!cookieHeader || !cookieHeader.includes("auth_token=")) return new Response("Unauthorized", { status: 401 });
    const token = cookieHeader.split('auth_token=')[1].split(';')[0];
    const user = JSON.parse(atob(token));

    try {
        // Fetch Sessions
        const { results: sessions } = await db.prepare(
            'SELECT * FROM gym_sessions WHERE user_id = ? ORDER BY created_at DESC'
        ).bind(user.id).all();

        // Fetch Logs
        const { results: logs } = await db.prepare(
            `SELECT l.* FROM gym_logs l 
             JOIN gym_sessions s ON l.session_id = s.id 
             WHERE s.user_id = ?`
        ).bind(user.id).all();

        // Combine them
        const combined = sessions.map(session => ({
            ...session,
            exercises: logs.filter(log => log.session_id === session.id)
        }));

        return new Response(JSON.stringify(combined), { headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}

export async function onRequestPost(context) {
    const db = context.env.DB;
    const cookieHeader = context.request.headers.get("Cookie");

    // 1. Get User Info from Cookie
    if (!cookieHeader || !cookieHeader.includes("auth_token=")) return new Response("Unauthorized", { status: 401 });
    const token = cookieHeader.split('auth_token=')[1].split(';')[0];
    const user = JSON.parse(atob(token));

    try {
        const { name, date } = await context.request.json();

        // 2. Insert with Extra User Details
        const res = await db.prepare(
            `INSERT INTO gym_sessions (user_id, username, user_email, user_role, name, created_at) 
             VALUES (?, ?, ?, ?, ?, ?)`
        ).bind(
            user.id,
            user.username,
            user.email,
            user.role,
            name,
            date || new Date().toISOString()
        ).run();

        return new Response(JSON.stringify({ id: res.meta.last_row_id }), { status: 201 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}