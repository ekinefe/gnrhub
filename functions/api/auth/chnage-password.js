import bcrypt from 'bcryptjs';

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
        const { currentPassword, newPassword } = await context.request.json();

        if (!currentPassword || !newPassword) {
            return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
        }

        // 3. Get User from DB
        const user = await db.prepare('SELECT password_hash FROM users WHERE id = ?').bind(userId).first();

        if (!user) {
            return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
        }

        // 4. Verify OLD Password
        const isValid = await bcrypt.compare(currentPassword, user.password_hash);
        if (!isValid) {
            return new Response(JSON.stringify({ error: "Incorrect current password" }), { status: 403 });
        }

        // 5. Hash NEW Password
        const salt = await bcrypt.genSalt(10);
        const newHash = await bcrypt.hash(newPassword, salt);

        // 6. Update DB
        await db.prepare('UPDATE users SET password_hash = ? WHERE id = ?')
            .bind(newHash, userId).run();

        return new Response(JSON.stringify({ message: "Password updated successfully" }), { status: 200 });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}