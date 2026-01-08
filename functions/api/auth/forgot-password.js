export async function onRequestPost(context) {
    try {
        const { email } = await context.request.json();
        const db = context.env.DB;

        // 1. Check if user exists
        const user = await db.prepare('SELECT id, username FROM users WHERE email = ?').bind(email).first();

        // Security: Always say "If email exists..." to prevent user enumeration
        if (!user) {
            return new Response(JSON.stringify({ message: "If registered, an email has been sent." }), { status: 200 });
        }

        // 2. Generate Reset Token
        const token = crypto.randomUUID();
        const expires = Date.now() + (60 * 60 * 1000); // 1 Hour

        // 3. Save Token to DB (Make sure you ran the SQL ALTER command!)
        await db.prepare('UPDATE users SET reset_token = ?, reset_expires = ? WHERE id = ?')
            .bind(token, expires, user.id).run();

        // 4. Send Email (Using your Universal Template system)
        const url = new URL(context.request.url);
        const resetLink = `${url.origin}/reset-password?token=${token}`;
        const emailApiUrl = `${url.origin}/api/send-email`;

        context.waitUntil(
            fetch(emailApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    templateId: 'password_reset', // Calls the local template we made in Step 1
                    recipientEmail: email,
                    variables: {
                        username: user.username,
                        reset_link: resetLink
                    }
                })
            })
        );

        return new Response(JSON.stringify({ message: "If registered, an email has been sent." }), { status: 200 });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}