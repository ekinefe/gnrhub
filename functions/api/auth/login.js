import bcrypt from 'bcryptjs';

export async function onRequestPost(context) {
    const { email, password } = await context.request.json();
    const db = context.env.DB;

    // 1. Find User
    const user = await db.prepare('SELECT * FROM users WHERE email = ?').bind(email).first();

    if (!user) {
        return new Response("Invalid credentials", { status: 401 });
    }

    // 2. Verify Password
    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
        return new Response("Invalid credentials", { status: 401 });
    }

    // 3. Create Session Cookie (Simplified)
    // In production, use a JWT library or a sessions table.
    // Here we will set a simple cookie for demonstration.
    const sessionData = JSON.stringify({ id: user.id, email: user.email });
    const encodedSession = btoa(sessionData); // Base64 encode (Not secure for sensitive data, but functional for logic)

    return new Response(JSON.stringify({ message: "Login successful" }), {
        status: 200,
        headers: {
            // Set a cookie that lasts 1 day, HTTP only (secure)
            'Set-Cookie': `auth_token=${encodedSession}; HttpOnly; Secure; Path=/; Max-Age=86400`
        }
    });
}