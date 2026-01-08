export async function onRequestPost(context) {
    try {
        const { userId, appliedRole, reason, customRoleName } = await context.request.json();
        const db = context.env.DB;

        // 1. Fetch Full User Details from DB to be safe
        const user = await db.prepare('SELECT * FROM users WHERE id = ?').bind(userId).first();

        if (!user) {
            return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
        }

        // 2. Determine Final Role Name
        const finalRole = appliedRole === 'SPECIAL' ? `SPECIAL: ${customRoleName}` : appliedRole;

        // 3. Send Email to Admin (YOU)
        const url = new URL(context.request.url);
        const emailApiUrl = `${url.origin}/api/send-email`;

        // The recipient is YOU (The Admin), not the user applying
        // Replace this string with your actual admin email if different from the site owner
        const ADMIN_EMAIL = "ekinefegnr@gmail.com";

        context.waitUntil(
            fetch(emailApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    templateId: 'role_application',
                    recipientEmail: ADMIN_EMAIL,
                    variables: {
                        username: user.username,
                        email: user.email,
                        fullName: `${user.name} ${user.surname}`,
                        userId: user.id,
                        appliedRole: finalRole,
                        reason: reason
                    }
                })
            })
        );

        return new Response(JSON.stringify({ message: "Application transmitted successfully." }), { status: 200 });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}