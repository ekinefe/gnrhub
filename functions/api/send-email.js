// 1. IMPORT YOUR TEMPLATES
import { welcomeTemplate } from '../templates/welcome.js';
import { brandBookTemplate } from '../templates/brand_book.js';

export async function onRequestPost(context) {
    try {
        const { templateId, recipientEmail, variables } = await context.request.json();

        // 2. TEMPLATE REGISTRY
        // This maps the ID sent from React to the actual file
        let emailData = null;

        switch (templateId) {
            case 'welcome':
                emailData = welcomeTemplate(variables);
                break;
            case 'brand_book':
                emailData = brandBookTemplate(variables);
                break;
            default:
                return new Response(JSON.stringify({ error: "Invalid Template ID" }), { status: 400 });
        }

        // 3. CONSTRUCT PAYLOAD
        const emailPayload = {
            personalizations: [{
                to: [{ email: recipientEmail, name: variables.name || "User" }]
            }],
            from: { email: "ekinefegnr@gmail.com", name: "GNRHUB System" },
            subject: emailData.subject,
            content: [{
                type: "text/html",
                value: emailData.html
            }]
        };

        // 4. SEND (MailChannels)
        const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(emailPayload)
        });

        if (response.ok) {
            return new Response(JSON.stringify({ message: "Email Dispatched" }), { status: 200 });
        } else {
            return new Response(JSON.stringify({ error: "Upstream Provider Error" }), { status: 500 });
        }

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}