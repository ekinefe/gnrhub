export function verifyEmailChangeTemplate(variables) {
    const { username, verify_link } = variables;

    return {
        subject: `[ACTION REQUIRED] Verify your new email address`,
        html: `
            <div style="font-family: monospace; background: #000; color: #fff; padding: 20px; border: 1px solid #333;">
                <h2 style="border-bottom: 1px solid #333; padding-bottom: 10px; color: #0f0;">/EMAIL_UPDATE_PROTOCOL</h2>
                <p>User <strong>${username}</strong> requested to change their email address.</p>
                <p>If this was you, please confirm the update by clicking the link below:</p>
                
                <div style="margin: 30px 0;">
                    <a href="${verify_link}" style="background: #0f0; color: #000; padding: 10px 20px; text-decoration: none; font-weight: bold; text-transform: uppercase;">
                        [CONFIRM_NEW_EMAIL]
                    </a>
                </div>

                <p style="color: #666; font-size: 0.8rem;">
                    > If you did not request this change, ignore this transmission. Your current email remains active.
                </p>
            </div>
        `
    };
}