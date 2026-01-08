import { welcomeTemplate } from '../templates/welcome.js';
import { brandBookTemplate } from '../templates/brand_book.js';
import { verifyEmailTemplate } from '../templates/verify_email.js';

export async function onRequestPost(context) {
    try {
        const { templateId, recipientEmail, variables } = await context.request.json();

        // 1. LOAD SECRETS (Secure names, NO VITE_ prefix)
        const {
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            EMAILJS_PUBLIC_KEY,
            EMAILJS_PRIVATE_KEY
        } = context.env;

        // 2. VALIDATION CHECK
        if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY) {
            console.error("Missing Env Vars: Service ID or Public Key is null");
            return new Response(JSON.stringify({ error: "Server Configuration Error: Missing Email Keys" }), { status: 500 });
        }

        // 3. SELECT TEMPLATE
        let emailData = null;
        switch (templateId) {
            case 'welcome': emailData = welcomeTemplate(variables); break;
            case 'brand_book': emailData = brandBookTemplate(variables); break;
            case 'verify_email': emailData = verifyEmailTemplate(variables); break;
            default:
                return new Response(JSON.stringify({ error: "Invalid Template ID" }), { status: 400 });
        }

        // 4. PREPARE EMAILJS DATA
        const data = {
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_TEMPLATE_ID,
            user_id: EMAILJS_PUBLIC_KEY,
            accessToken: EMAILJS_PRIVATE_KEY,
            template_params: {
                subject: emailData.subject,
                html_content: emailData.html,
                to_email: recipientEmail,
            }
        };

        // 5. SEND
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            return new Response(JSON.stringify({ message: "Email Sent" }), { status: 200 });
        } else {
            const errorText = await response.text();
            console.error("EmailJS Error:", errorText);
            return new Response(JSON.stringify({ error: "EmailJS Error: " + errorText }), { status: 500 });
        }

    } catch (err) {
        console.error("System Error:", err.message);
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}