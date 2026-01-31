import { verify, getTokenFromRequest } from '../../utils/session';

export async function onRequestPost(context) {
    const { request, env } = context;
    const db = env.DB;

    // 1. Auth Check (Secure)
    const token = getTokenFromRequest(request);
    const sessionData = await verify(token, env.JWT_SECRET);

    if (!sessionData) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const userId = sessionData.id;

    try {
        const { type, value } = await context.request.json();

        // === CHANGE USERNAME ===
        if (type === 'username') {
            const cleanUsername = value.toLowerCase().trim();
            if (cleanUsername.length < 3) return new Response(JSON.stringify({ error: "Username too short" }), { status: 400 });

            // Check Uniqueness
            const existing = await db.prepare('SELECT id FROM users WHERE username = ?').bind(cleanUsername).first();
            if (existing) return new Response(JSON.stringify({ error: "Username already taken" }), { status: 400 });

            // Update
            await db.prepare('UPDATE users SET username = ? WHERE id = ?').bind(cleanUsername, userId).run();
            return new Response(JSON.stringify({ message: "Username updated successfully" }), { status: 200 });
        }

        // === CHANGE EMAIL ===
        if (type === 'email') {
            const cleanEmail = value.toLowerCase().trim();
            // Check Uniqueness
            const existing = await db.prepare('SELECT id FROM users WHERE email = ?').bind(cleanEmail).first();
            if (existing) return new Response(JSON.stringify({ error: "Email already in use" }), { status: 400 });

            // Generate Verification Token
            const verifyToken = crypto.randomUUID();

            // Store Pending Email
            await db.prepare('UPDATE users SET pending_email = ?, pending_email_token = ? WHERE id = ?')
                .bind(cleanEmail, verifyToken, userId).run();

            // Send Verification Email
            const url = new URL(context.request.url);
            const verifyLink = `${url.origin}/verify-email-change?token=${verifyToken}`;
            const emailApiUrl = `${url.origin}/api/send-email`;

            context.waitUntil(
                fetch(emailApiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        templateId: 'verify_email_change',
                        recipientEmail: cleanEmail, // Send to NEW email
                        variables: {
                            username: sessionData.username,
                            verify_link: verifyLink
                        }
                    })
                })
            );

            return new Response(JSON.stringify({ message: "Verification email sent. Check your new inbox." }), { status: 200 });
        }

        return new Response(JSON.stringify({ error: "Invalid type" }), { status: 400 });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}