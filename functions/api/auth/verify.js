export async function onRequestPost(context) {
    const db = context.env.DB;
    const { token } = await context.request.json();

    if (!token) return new Response(JSON.stringify({ error: "Missing token" }), { status: 400 });

    try {
        // 1. Find user with this token
        const user = await db.prepare('SELECT id FROM users WHERE verification_token = ?').bind(token).first();

        if (!user) {
            return new Response(JSON.stringify({ error: "Invalid or expired token" }), { status: 400 });
        }

        // 2. Activate User & Clear Token
        await db.prepare('UPDATE users SET is_verified = 1, verification_token = NULL WHERE id = ?')
            .bind(user.id).run();

        return new Response(JSON.stringify({ message: "Verified" }), { status: 200 });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}