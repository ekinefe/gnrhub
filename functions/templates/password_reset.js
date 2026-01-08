export function passwordResetTemplate(variables) {
    const { reset_link, username } = variables;

    return {
        subject: "Reset Your Password - GNRHUB",
        html: `
            <div style="font-family: monospace; background: #000; color: #fff; padding: 20px;">
                <h1 style="border-bottom: 1px solid #333; padding-bottom: 10px;">/RESET_PASSWORD</h1>
                <p>User: ${username}</p>
                <p>We received a request to override your access credentials.</p>
                
                <div style="margin: 30px 0;">
                    <a href="${reset_link}" style="background: #fff; color: #000; padding: 10px 20px; text-decoration: none; font-weight: bold;">
                        > INITIALIZE_RESET
                    </a>
                </div>
                
                <p style="color: #666; font-size: 0.8rem;">
                    If you did not request this, please ignore this signal.
                </p>
            </div>
        `
    };
}