import bcrypt from 'bcryptjs';

export async function onRequestPost(context) {
    try {
        // 1. Get all fields from the request
        const { email, password, name, surname } = await context.request.json();
        const db = context.env.DB;

        if (!email || !password) {
            return new Response("Missing email or password", { status: 400 });
        }

        // 2. Hash Password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // 3. Insert into D1 (Role defaults to 'user' automatically)
        const result = await db.prepare(
            'INSERT INTO users (email, password_hash, name, surname) VALUES (?, ?, ?, ?)'
        ).bind(email, hash, name, surname).run();

        if (!result.success) {
            return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
        }

        return new Response(JSON.stringify({ message: "User created successfully" }), { status: 201 });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}