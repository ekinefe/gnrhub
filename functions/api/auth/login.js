import bcrypt from 'bcryptjs';

export async function onRequestPost(context) {
    try {
        // We expect "identifier" which can be email OR username
        const { identifier, password } = await context.request.json();
        const db = context.env.DB;

        if (!identifier || !password) {
            return new Response("Missing credentials", { status: 400 });
        }

        // 1. FORCE LOWERCASE
        const cleanIdentifier = identifier.toLowerCase().trim();

        // 2. FIND USER (Check both columns)
        // "SELECT * FROM users WHERE email = input OR username = input"
        const user = await db.prepare(
            'SELECT * FROM users WHERE email = ? OR username = ?'
        ).bind(cleanIdentifier, cleanIdentifier).first();

        if (!user) {
            return new Response("Invalid credentials", { status: 401 });
        }

        // 3. CHECK PASSWORD
        const isValid = await bcrypt.compare(password, user.password_hash);
        if (!isValid) {
            return new Response("Invalid credentials", { status: 401 });
        }

        // --- NEW: UPDATE LAST_LOGIN TIMESTAMP ---
        await db.prepare('UPDATE users SET last_login = datetime("now") WHERE id = ?')
            .bind(user.id).run();
        // ----------------------------------------

        // 4. CREATE SESSION (Cookie)
        const sessionData = JSON.stringify({
            id: user.id,
            email: user.email,
            role: user.access_level
        });
        const token = btoa(sessionData);

        return new Response(JSON.stringify({ message: "Login Success" }), {
            status: 200,
            headers: {
                "Set-Cookie": `auth_token=${token}; HttpOnly; Secure; Path=/; SameSite=Strict; Max-Age=86400`,
                "Content-Type": "application/json"
            }
        });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}