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

        // Fetch fresh user data from DB
        const stmt = env.DB.prepare('SELECT * FROM users WHERE id = ?');
        const user = await stmt.bind(userSession.id).first();

        if (!user) {
            // User deleted or invalid
            return new Response(JSON.stringify({ error: 'User not found' }), {
                status: 404, // OR 401 and clear cookie
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Return sanitized user data
        const { password_hash: _password_hash, ...sanitizedUser } = user;

        // Ensure role is present
        sanitizedUser.role = sanitizedUser.role || sanitizedUser.access_level || 'user';

        return new Response(JSON.stringify({ user: sanitizedUser }), {
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