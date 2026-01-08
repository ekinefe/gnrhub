export function roleApplicationTemplate(variables) {
    const {
        username,
        email,
        userId,
        fullName,
        appliedRole,
        reason
    } = variables;

    return {
        subject: `[ROLE APPLICATION] User: ${username} -> ${appliedRole}`,
        html: `
            <div style="font-family: monospace; background: #000; color: #fff; padding: 20px; border: 1px solid #333;">
                <h2 style="border-bottom: 1px solid #333; padding-bottom: 10px; color: #0f0;">/NEW_APPLICATION_RECEIVED</h2>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: #888; margin: 0;">APPLICANT IDENTITY:</p>
                    <p style="margin: 5px 0;"><strong>Username:</strong> ${username}</p>
                    <p style="margin: 5px 0;"><strong>Full Name:</strong> ${fullName}</p>
                    <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                    <p style="margin: 5px 0;"><strong>User ID:</strong> ${userId}</p>
                </div>

                <div style="margin-bottom: 20px; border-top: 1px dashed #333; padding-top: 10px;">
                    <p style="color: #888; margin: 0;">REQUESTED ROLE:</p>
                    <h3 style="margin: 5px 0; color: #var(--accent);">${appliedRole}</h3>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: #888; margin: 0;">STATEMENT OF INTENT (REASON):</p>
                    <blockquote style="border-left: 2px solid #fff; margin: 10px 0; padding-left: 15px; color: #ddd;">
                        "${reason}"
                    </blockquote>
                </div>

                <div style="margin-top: 30px; font-size: 0.8rem; color: #666;">
                    > SYSTEM_MESSAGE: Review this user in the Admin Dashboard to approve/deny.
                </div>
            </div>
        `
    };
}