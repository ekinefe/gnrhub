export async function onRequestGet(context) {
    try {
        const { request, env } = context;
        const url = new URL(request.url);
        const username = url.searchParams.get('username');
        const secret = url.searchParams.get('key');

        // Simple protection to prevent accidental public access
        // User must provide ?key=emergency-access-123
        if (secret !== 'emergency-access-123') {
            return new Response('Unauthorized Access', { status: 403 });
        }

        if (!username) {
            return new Response('Missing username parameter', { status: 400 });
        }

        // Prepare statement
        // Note: binding name 'DB' comes from usage in login.js
        // Updated to use 'access_level' based on schema feedback
        const stmt = env.DB.prepare("UPDATE users SET access_level = 'ADMIN' WHERE username = ?");
        const info = await stmt.bind(username).run();

        if (info.success) {
            return new Response(JSON.stringify({
                message: `Successfully promoted user '${username}' to ADMIN.`,
                meta: info.meta
            }), {
                headers: { 'Content-Type': 'application/json' }
            });
        } else {
            return new Response('Database update failed', { status: 500 });
        }

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
