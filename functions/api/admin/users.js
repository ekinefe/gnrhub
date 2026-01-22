import { verify, getTokenFromRequest } from '../../utils/session';

export async function onRequest(context) {
    try {
        const { request, env } = context;

        // --- AUTH MIDDLEWARE START ---
        const token = getTokenFromRequest(request);
        const user = await verify(token, env.JWT_SECRET);

        if (!user) {
            return new Response(JSON.stringify({ error: 'Unauthorized' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        if (user.role !== 'admin') {
            return new Response(JSON.stringify({ error: 'Forbidden' }), {
                status: 403,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        // --- AUTH MIDDLEWARE END ---

        // Protected Admin Logic
        const stmt = env.DB.prepare('SELECT id, email, username, role, created_at FROM users LIMIT 100');
        const { results } = await stmt.all();

        return new Response(JSON.stringify({ users: results }), {
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error('Admin users error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}