import { emailLayout } from './layout.js';

export const welcomeTemplate = (data) => {
    const content = `
        <p>USER: <span class="accent">${data.name || 'Unknown'}</span></p>
        <p>STATUS: <span class="success">CONFIRMED</span></p>
        <br>
        <p>Your identity has been successfully registered in our database.</p>
        <p>You now have authorized access to:</p>
        <ul>
            <li>Micro-SaaS Tools</li>
            <li>Brand Book Automator</li>
            <li>Documentation Logs</li>
        </ul>
        <br>
        <p>Please initialize your session below.</p>
        <a href="https://gnrhub.pages.dev/sign-in" class="btn">Initialize Session</a>
    `;

    return {
        subject: "Identity Verified: Welcome to GNRHUB",
        html: emailLayout(content)
    };
};