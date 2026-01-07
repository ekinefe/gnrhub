import { serialize } from 'cookie';

export async function onRequestPost() {
    // Overwrite the cookie with an immediate expiration date
    const cookie = serialize('auth_token', '', {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict',
        path: '/',
        maxAge: -1, // Expire immediately
    });

    return new Response(JSON.stringify({ message: "Logged out" }), {
        headers: {
            'Set-Cookie': cookie,
            'Content-Type': 'application/json'
        }
    });
}