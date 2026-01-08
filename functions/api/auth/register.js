import bcrypt from 'bcryptjs';

export async function onRequestPost(context) {
    try {
        const { email, password, name, surname, username } = await context.request.json();
        const db = context.env.DB;

        if (!email || !password || !username) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        // 1. FORCE LOWERCASE (Sanitization)
        const cleanEmail = email.toLowerCase().trim();
        const cleanUsername = username.toLowerCase().trim();

        // 2. Check if Email OR Username already exists
        const existing = await db.prepare(
            'SELECT id FROM users WHERE email = ? OR username = ?'
        ).bind(cleanEmail, cleanUsername).first();

        if (existing) {
            return new Response(JSON.stringify({ error: "Email or Username already taken" }), { status: 400 });
        }

        // 3. Hash Password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // 4. Insert User
        const result = await db.prepare(
            'INSERT INTO users (email, username, password_hash, name, surname) VALUES (?, ?, ?, ?, ?)'
        ).bind(cleanEmail, cleanUsername, hash, name, surname).run();

        if (!result.success) {
            return new Response(JSON.stringify({ error: "Database error" }), { status: 500 });
        }

        // 5. DEBUGGING: Trigger Verification Email
        console.log(`[REGISTER DEBUG] Attempting to send email to ${cleanEmail}`);

        // Construct the absolute URL for the email API
        const url = new URL(context.request.url);
        const emailApiUrl = `${url.origin}/api/send-email`;

        const emailReq = await fetch(emailApiUrl, {
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
        });

        if (emailReq.ok) {
            console.log("[REGISTER DEBUG] Email sent successfully");
        } else {
            const errorText = await emailReq.text();
            console.error(`[REGISTER ERROR] Email failed: ${emailReq.status} - ${errorText}`);
        }

        return new Response(JSON.stringify({ message: "Registration successful. Please check your email." }), { status: 201 });

    } catch (err) {
        console.error(`[REGISTER CRITICAL ERROR] ${err.message}`);
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}