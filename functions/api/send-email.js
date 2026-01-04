export async function onRequestPost(context) {
    const { brandName, recipientEmail, htmlContent } = await context.request.json();

    // 1. Construct the Email Payload (Your Algorithm)
    // We manually build the JSON structure required by the mail sender
    const emailPayload = {
        personalizations: [{
            to: [{ email: recipientEmail, name: "Recipient" }]
        }],
        from: { email: "no-reply@gnrhub.com", name: "GNRHUB Bot" }, // You need a verified domain
        subject: `Brand Book: ${brandName}`,
        content: [{
            type: "text/html",
            value: htmlContent
        }]
    };

    // 2. Send via MailChannels (No API Key needed on Cloudflare)
    // Note: This only works if you have configured SPF/DKIM records for your domain.
    const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(emailPayload)
    });

    if (response.ok) {
        return new Response("Sent via Custom Algorithm", { status: 200 });
    } else {
        return new Response("Failed to send", { status: 500 });
    }
}