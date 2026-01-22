import { serialize } from 'cookie';
import { verify, getTokenFromRequest } from '../../utils/session';

export async function onRequestGet(context) {
    try {
        const { request, env } = context;

        // Extract token
        const token = getTokenFromRequest(request);

        // Verify token
        const userSession = await verify(token, env.JWT_SECRET);

        if (!userSession) {
            // Invalid or missing token
            // Clear the cookie to be safe
            const cookie = serialize('auth_token', '', {
                httpOnly: true,
                secure: true,
                sameSite: 'lax',
                path: '/',
                maxAge: 0, // Expire immediately
            });

            return new Response(JSON.stringify({ error: 'Unauthorized' }), {
                status: 401,
                headers: {
                    'Content-Type': 'application/json',
                    'Set-Cookie': cookie,
                },
            });
        }

        // Token is valid, return session data
        // Optionally fetch fresh data from DB if needed, but session data is usually enough for auth check
        return new Response(JSON.stringify({ user: userSession }), {
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error('Session verify error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}