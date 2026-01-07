import bcrypt from 'bcryptjs';
import { serialize } from 'cookie';

export async function onRequestPost(context) {
    const db = context.env.DB;

    // 1. Validate Session (Cookie)
    const cookieHeader = context.request.headers.get("Cookie");
    if (!cookieHeader || !cookieHeader.includes("auth_token=")) {
        return new Response("Unauthorized", { status: 401 });
    }

    try {
        const token = cookieHeader.split('auth_token=')[1].split(';')[0];
        const sessionData = JSON.parse(atob(token));
        const userId = sessionData.id;

        // 2. Parse Input
        const { password } = await context.request.json();

        if (!password) {
            return new Response(JSON.stringify({ error: "Password required" }), { status: 400 });
        }

        // 3. Get User from DB
        const user = await db.prepare('SELECT password_hash FROM users WHERE id = ?').bind(userId).first();

        if (!user) {
            return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
        }

        // 4. Verify Password
        const isValid = await bcrypt.compare(password, user.password_hash);
        if (!isValid) {
            return new Response(JSON.stringify({ error: "Incorrect password" }), { status: 403 });
        }

        // 5. Delete User
        await db.prepare('DELETE FROM users WHERE id = ?').bind(userId).run();

        // 6. Logout (Clear Cookie)
        const cookie = serialize('auth_token', '', {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
            path: '/',
            maxAge: -1,
        });

        return new Response(JSON.stringify({ message: "Account deleted successfully" }), {
            headers: {
                'Set-Cookie': cookie,
                'Content-Type': 'application/json'
            }
        });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
