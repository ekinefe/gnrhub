import { emailLayout } from './layout.js';

export const verifyEmailTemplate = (data) => {
    // You must change this URL to your live domain when deploying!
    const baseUrl = data.origin || "https://gnrhub.pages.dev";
    const link = `${baseUrl}/verify-email?token=${data.token}`;

    const content = `
        <p>User: <span class="accent">${data.username}</span></p>
        <p>Action Required: <span style="color:#ffcc00">VERIFICATION PENDING</span></p>
        <br>
        <p>To activate your identity and access GNRHUB services, you must verify this email address.</p>
        <p>Click the link below to finalize registration:</p>
        
        <a href="${link}" class="btn">CONFIRM IDENTITY</a>
        
        <br><br>
        <p style="font-size: 0.8em; color: #666;">If you did not request this, please ignore this signal.</p>
    `;

    return {
        subject: "Action Required: Verify GNRHUB Identity",
        html: emailLayout(content)
    };
};