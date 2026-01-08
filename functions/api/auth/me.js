import { parse } from 'cookie';

export async function onRequest(context) {
    const cookieHeader = context.request.headers.get('Cookie');

    // 1. If no cookie, return 401 (Not Logged In)
    if (!cookieHeader) {
        return new Response(JSON.stringify(null), { status: 401 });
    }

    // 2. Parse the Cookie
    const cookies = parse(cookieHeader);
    const token = cookies.auth_token;

    if (!token) {
        return new Response(JSON.stringify(null), { status: 401 });
    }

    // 3. Decode the Session
    try {
        // We decode the base64 token we created in login.js
        const sessionData = JSON.parse(atob(token));

        // Return the user data to the frontend
        return new Response(JSON.stringify(sessionData), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        return new Response(JSON.stringify(null), { status: 401 });
    }
}