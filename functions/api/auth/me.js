import { parse } from 'cookie';

export async function onRequestGet(context) {
    const db = context.env.DB;

    // 1. ROBUST COOKIE PARSING
    const cookieHeader = context.request.headers.get("Cookie");
    if (!cookieHeader) {
        return new Response(JSON.stringify(null), { status: 401 });
    }

    try {
        const cookies = parse(cookieHeader);
        const token = cookies.auth_token;

        if (!token) {
            return new Response(JSON.stringify(null), { status: 401 });
        }

        // 2. DECODE TOKEN (Safe Base64)
        let sessionData;
        try {
            sessionData = JSON.parse(atob(token));
        } catch (e) {
            console.error("Token Decode Failed:", e);
            return new Response(JSON.stringify(null), { status: 400 });
        }

        const userId = sessionData.id;

        // 3. FETCH USER
        const user = await db.prepare('SELECT id, email, username, name, surname, role, is_verified FROM users WHERE id = ?')
            .bind(userId).first();

        if (!user) {
            return new Response(JSON.stringify(null), { status: 401 });
        }

        // 4. RETURN USER
        return new Response(JSON.stringify(user), { status: 200 });

    } catch (err) {
        console.error("Auth System Error:", err);
        return new Response(JSON.stringify(null), { status: 500 });
    }
}