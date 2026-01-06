export async function onRequestGet(context) {
    const db = context.env.DB;

    // 1. Security Check (Cookie)
    const cookieHeader = context.request.headers.get("Cookie");
    if (!cookieHeader || !cookieHeader.includes("auth_token=")) {
        return new Response("Unauthorized", { status: 401 });
    }
    // (Ideally, you verify the token here again like in users.js)

    try {
        // 2. RUN QUERIES PARALLEL
        const [totalUsers, onlineUsers, admins] = await Promise.all([
            // Count All
            db.prepare('SELECT COUNT(*) as count FROM users').first(),

            // Count "Online" (Logged in within last 30 mins)
            db.prepare("SELECT COUNT(*) as count FROM users WHERE last_login > datetime('now', '-30 minutes')").first(),

            // Count Admins
            db.prepare("SELECT COUNT(*) as count FROM users WHERE access_level = 'admin'").first()
        ]);

        // 3. DEFINE SERVICES STATUS (Hardcoded for now, or fetch from DB if you had a services table)
        const services = [
            { id: 1, name: 'Auth System', status: 'operational', version: 'v2.0' },
            { id: 2, name: 'Brand Book', status: 'operational', version: 'v1.5' },
            { id: 3, name: 'Email Dispatcher', status: 'operational', version: 'v1.0' },
            { id: 4, name: 'Database (D1)', status: 'operational', version: 'SQLite' }
        ];

        return new Response(JSON.stringify({
            counts: {
                total: totalUsers.count,
                online: onlineUsers.count,
                admins: admins.count
            },
            services: services
        }), { status: 200 });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}