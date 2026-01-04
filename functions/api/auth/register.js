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

        return new Response(JSON.stringify({ message: "User created successfully" }), { status: 201 });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}