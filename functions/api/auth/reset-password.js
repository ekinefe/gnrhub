import bcrypt from 'bcryptjs';

export async function onRequestPost(context) {
    try {
        const { token, newPassword } = await context.request.json();
        const db = context.env.DB;

        if (!token || !newPassword) {
            return new Response(JSON.stringify({ error: "Missing token or password" }), { status: 400 });
        }

        // 1. Find User by Token
        const user = await db.prepare('SELECT id, reset_expires FROM users WHERE reset_token = ?').bind(token).first();

        if (!user) {
            return new Response(JSON.stringify({ error: "Invalid token" }), { status: 400 });
        }

        // 2. Check Expiration
        if (Date.now() > user.reset_expires) {
            return new Response(JSON.stringify({ error: "Token expired" }), { status: 400 });
        }

        // 3. Hash New Password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(newPassword, salt);

        // 4. Update Password & Clear Token
        await db.prepare('UPDATE users SET password_hash = ?, reset_token = NULL, reset_expires = NULL WHERE id = ?')
            .bind(hash, user.id).run();

        return new Response(JSON.stringify({ message: "Password updated successfully" }), { status: 200 });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}