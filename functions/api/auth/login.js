import bcrypt from 'bcryptjs';
import { serialize } from 'cookie';
import { sign } from '../../utils/session';

export async function onRequestPost(context) {
    try {
        const { request, env } = context;

        if (!env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined in the environment variables');
        }

        // Check for identifier (from frontend) or email (direct API usage)
        const body = await request.json();
        const identifier = body.identifier || body.email;
        const password = body.password;

        if (!identifier || !password) {
            return new Response(JSON.stringify({ error: 'Email/Username and password are required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Prepare the statement to fetch the user by email or username
        const stmt = env.DB.prepare('SELECT * FROM users WHERE email = ? OR username = ?');
        const user = await stmt.bind(identifier, identifier).first();

        if (!user) {
            // Return generic error for security
            return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, user.password_hash);

        if (!isValidPassword) {
            return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Generate signed session token
        // Using a minimal payload for the session
        const sessionData = {
            id: user.id,
            email: user.email,
            username: user.username,
            role: user.role || 'user', // Default to 'user' if role column missing/empty
        };

        const token = await sign(sessionData, env.JWT_SECRET);

        // Set secure cookie
        const cookie = serialize('auth_token', token, {
            httpOnly: true,
            secure: true, // Always true for production/Cloudflare
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 7, // 1 week
        });

        // Return sanitized user data
        const { password_hash, ...sanitizedUser } = user;

        return new Response(JSON.stringify({ user: sanitizedUser }), {
            headers: {
                'Content-Type': 'application/json',
                'Set-Cookie': cookie,
            },
        });

    } catch (error) {
        console.error('Login error:', error);
        return new Response(JSON.stringify({ error: error.message || error.toString() }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}