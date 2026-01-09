export async function onRequestGet(context) {
    const db = context.env.DB;
    const cookieHeader = context.request.headers.get("Cookie");

    // 1. Auth Check (Manual Parser)
    if (!cookieHeader || !cookieHeader.includes("auth_token=")) return new Response("Unauthorized", { status: 401 });
    const token = cookieHeader.split('auth_token=')[1].split(';')[0];
    const user = JSON.parse(atob(token));

    try {
        // 2. Fetch Sessions
        const { results: sessions } = await db.prepare(
            'SELECT * FROM gym_sessions WHERE user_id = ? ORDER BY created_at DESC'
        ).bind(user.id).all();

        // 3. Fetch Logs for these sessions
        // (For simplicity, we fetch all logs for this user and map them in JS)
        // In a huge app, you'd fetch only what you need, but this is efficient enough for personal use.
        const { results: logs } = await db.prepare(
            `SELECT l.* FROM gym_logs l 
             JOIN gym_sessions s ON l.session_id = s.id 
             WHERE s.user_id = ?`
        ).bind(user.id).all();

        // 4. Nest logs into sessions
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

    if (!cookieHeader || !cookieHeader.includes("auth_token=")) return new Response("Unauthorized", { status: 401 });
    const token = cookieHeader.split('auth_token=')[1].split(';')[0];
    const user = JSON.parse(atob(token));

    try {
        const { name, date } = await context.request.json();

        // Insert new session
        const res = await db.prepare(
            'INSERT INTO gym_sessions (user_id, name, created_at) VALUES (?, ?, ?)'
        ).bind(user.id, name, date || new Date().toISOString()).run();

        // Return the new ID so frontend can use it immediately
        return new Response(JSON.stringify({ id: res.meta.last_row_id }), { status: 201 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}