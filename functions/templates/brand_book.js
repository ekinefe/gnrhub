import { emailLayout } from './layout.js';

export const brandBookTemplate = (data) => {
    const content = `
        <h2 style="color: ${data.primaryColor || '#fff'}">${data.brandName}</h2>
        <p style="font-style: italic; opacity: 0.8;">${data.slogan || ''}</p>
        
        <hr style="border: 0; border-bottom: 1px solid #333; margin: 20px 0;">
        
        <p><strong>Primary Color:</strong> <span class="highlight">${data.primaryColor}</span></p>
        <p><strong>Typography:</strong> <span class="highlight">${data.font}</span></p>
        
        <br>
        <p>Your brand configuration has been saved. You can access the dashboard at any time to edit or download assets.</p>
        
        <a href="https://gnrhub.pages.dev/services/brand-book" class="btn">Open Dashboard</a>
    `;

    return {
        subject: `Brand Assets: ${data.brandName}`,
        html: emailLayout(content)
    };
};