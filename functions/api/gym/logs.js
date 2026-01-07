export async function onRequest(context) {
    const db = context.env.DB;
    const request = context.request;

    // 1. SECURITY: Get User ID from Cookie
    const cookieHeader = request.headers.get("Cookie");
    if (!cookieHeader || !cookieHeader.includes("auth_token=")) {
        return new Response("Unauthorized", { status: 401 });
    }

    // Decode token to find out WHO is asking
    const token = cookieHeader.split('auth_token=')[1].split(';')[0];
    const session = JSON.parse(atob(token));
    const userId = session.id;

    try {
        // === POST: SAVE NEW WORKOUT ===
        if (request.method === "POST") {
            const { title, date, notes } = await request.json();

            if (!title || !date) {
                return new Response("Missing Data", { status: 400 });
            }

            await db.prepare(
                'INSERT INTO gym_logs (user_id, title, date, notes) VALUES (?, ?, ?, ?)'
            ).bind(userId, title, date, notes).run();

            return new Response(JSON.stringify({ message: "Workout Logged" }), { status: 201 });
        }

        // === GET: FETCH MY WORKOUTS ===
        if (request.method === "GET") {
            // Only fetch rows belonging to THIS userId
            const { results } = await db.prepare(
                'SELECT * FROM gym_logs WHERE user_id = ? ORDER BY date DESC'
            ).bind(userId).all();

            return new Response(JSON.stringify(results), { status: 200 });
        }

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}