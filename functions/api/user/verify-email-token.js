export async function onRequestPost(context) {
    const db = context.env.DB;
    const { token } = await context.request.json();

    if (!token) return new Response(JSON.stringify({ error: "Missing token" }), { status: 400 });

    try {
        // 1. Find user with this pending token
        const user = await db.prepare('SELECT id, pending_email FROM users WHERE pending_email_token = ?').bind(token).first();

        if (!user) {
            return new Response(JSON.stringify({ error: "Invalid or expired token" }), { status: 400 });
        }

        // 2. Commit the Change (Swap email, clear pending)
        await db.prepare('UPDATE users SET email = ?, pending_email = NULL, pending_email_token = NULL WHERE id = ?')
            .bind(user.pending_email, user.id).run();

        return new Response(JSON.stringify({ message: "Email updated successfully" }), { status: 200 });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}