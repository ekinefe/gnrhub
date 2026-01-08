import { welcomeTemplate } from '../templates/welcome.js';
import { brandBookTemplate } from '../templates/brand_book.js';
import { verifyEmailTemplate } from '../templates/verify_email.js';

export async function onRequestPost(context) {
    try {
        const { templateId, recipientEmail, variables } = await context.request.json();

        // 1. LOAD SECRETS FROM ENVIRONMENT
        // These come from .dev.vars (Locally) or Cloudflare Dashboard (Production)
        const {
            VITE_EMAILJS_SERVICE_ID,
            VITE_EMAILJS_TEMPLATE_ID,
            VITE_EMAILJS_PUBLIC_KEY,
            VITE_EMAILJS_PRIVATE_KEY
        } = context.env;

        // Check if keys exist
        if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY) {
            return new Response(JSON.stringify({ error: "Server Configuration Error: Missing Email Keys" }), { status: 500 });
        }

        // 2. SELECT TEMPLATE
        let emailData = null;
        switch (templateId) {
            case 'welcome': emailData = welcomeTemplate(variables); break;
            case 'brand_book': emailData = brandBookTemplate(variables); break;
            case 'verify_email': emailData = verifyEmailTemplate(variables); break;
            default:
                return new Response(JSON.stringify({ error: "Invalid Template ID" }), { status: 400 });
        }

        // 3. PREPARE EMAILJS DATA
        const data = {
            service_id: VITE_EMAILJS_SERVICE_ID,
            template_id: VITE_EMAILJS_TEMPLATE_ID,
            user_id: VITE_EMAILJS_PUBLIC_KEY,
            accessToken: VITE_EMAILJS_PRIVATE_KEY,
            template_params: {
                subject: emailData.subject,
                html_content: emailData.html,
                to_email: recipientEmail,
            }
        };

        // 4. SEND
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            return new Response(JSON.stringify({ message: "Email Sent" }), { status: 200 });
        } else {
            const errorText = await response.text();
            return new Response(JSON.stringify({ error: "EmailJS Error: " + errorText }), { status: 500 });
        }

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}