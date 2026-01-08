import bcrypt from 'bcryptjs';

export async function onRequestPost(context) {
    try {
        const { email, password, name, surname, username, origin } = await context.request.json();
        const db = context.env.DB;

        if (!email || !password || !username) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const cleanEmail = email.toLowerCase().trim();
        const cleanUsername = username.toLowerCase().trim();

        // 1. Check if User Exists
        const existing = await db.prepare('SELECT id FROM users WHERE email = ? OR username = ?')
            .bind(cleanEmail, cleanUsername).first();

        if (existing) {
            return new Response(JSON.stringify({ error: "Email or Username already taken" }), { status: 400 });
        }

        // 2. Hash Password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // 3. Generate Token (THIS IS THE CRITICAL FIX)
        const token = crypto.randomUUID();

        // 4. Insert User (Default is_verified = 0)
        const result = await db.prepare(
            'INSERT INTO users (email, username, password_hash, name, surname, is_verified, verification_token) VALUES (?, ?, ?, ?, ?, 0, ?)'
        ).bind(cleanEmail, cleanUsername, hash, name, surname, token).run();

        if (!result.success) {
            return new Response(JSON.stringify({ error: "Database error" }), { status: 500 });
        }

        // 5. Trigger Verification Email
        const url = new URL(context.request.url);
        const emailApiUrl = `${url.origin}/api/send-email`;

        context.waitUntil(
            fetch(emailApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    templateId: 'verify_email',
                    recipientEmail: cleanEmail,
                    variables: {
                        username: cleanUsername,
                        token: token,
                        origin: origin || url.origin
                    }
                })
            })
        );

        return new Response(JSON.stringify({ message: "Registration successful. Please check your email." }), { status: 201 });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}