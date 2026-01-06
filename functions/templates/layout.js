export const emailLayout = (content) => {
    const year = new Date().getFullYear();

    return `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { background-color: #050505; color: #eeeeee; font-family: 'Courier New', monospace; padding: 20px; margin: 0; }
            .container { max-width: 600px; margin: 0 auto; border: 1px solid #333; background-color: #111; }
            .header { background-color: #000; padding: 20px; border-bottom: 1px solid #333; text-align: center; }
            .header h1 { color: #eeeeee; margin: 0; letter-spacing: 2px; font-size: 24px; }
            .content { padding: 30px; line-height: 1.6; color: #cccccc; }
            .btn { display: inline-block; background-color: #eeeeee; color: #000000; padding: 12px 24px; text-decoration: none; font-weight: bold; margin-top: 20px; text-transform: uppercase; border: 1px solid #fff; }
            .btn:hover { background-color: #000; color: #fff; }
            .footer { font-size: 10px; text-align: center; padding: 20px; color: #666; border-top: 1px solid #333; }
            .accent { color: #FF318C; }
            .success { color: #00ff9d; }
            .highlight { background: rgba(255,255,255,0.1); padding: 2px 5px; border-radius: 4px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>GNRHUB_</h1>
            </div>
            
            <div class="content">
                ${content}
            </div>

            <div class="footer">
                <p>SYSTEM GENERATED MESSAGE // ${year}</p>
                <p>GNRHUB SYSTEMS • WARSAW, PL</p>
            </div>
        </div>
    </body>
    </html>
    `;
};