import { parse, serialize } from 'cookie';

export async function onRequestDelete(context) {
    const db = context.env.DB;

    // 1. Validate Session (Cookie)
    const cookieHeader = context.request.headers.get("Cookie");
    if (!cookieHeader) {
        return new Response("Unauthorized", { status: 401 });
    }

    try {
        const cookies = parse(cookieHeader);
        const token = cookies.auth_token;

        if (!token) {
            return new Response("Unauthorized", { status: 401 });
        }

        const sessionData = JSON.parse(atob(token));
        const userId = sessionData.id;

        // 2. Delete User
        // Note: Frontend does not send password for confirmation, relying on active session.
        await db.prepare('DELETE FROM users WHERE id = ?').bind(userId).run();

        // 3. Logout (Clear Cookie)
        const cookie = serialize('auth_token', '', {
            httpOnly: true,
            secure: true,
            sameSite: 'Lax', // Align with login.js
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
