const https = require('https');

/**
 * Send an email using Resend API via HTTPS module to avoid external dependencies
 * @param {Object} options { to, subject, html }
 */
async function sendEmail({ to, subject, html }) {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const FALLBACK_EMAIL = 'chuyencaiom@gmail.com';
    const recipient = to || process.env.ADMIN_EMAIL || FALLBACK_EMAIL;

    if (!RESEND_API_KEY) {
        console.warn('RESEND_API_KEY is not set in environment variables. Email will not be sent.');
        return { success: false, error: 'MISSING_API_KEY' };
    }

    console.log(`[Mail] Sending email to: ${recipient} | Subject: ${subject}`);

    const data = JSON.stringify({
        from: 'Cam Site Retreats <onboarding@resend.dev>', // Use verified domain later if available
        to: recipient,
        subject: subject,
        html: html
    });

    const options = {
        hostname: 'api.resend.com',
        port: 443,
        path: '/emails',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Length': Buffer.byteLength(data)
        }
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(body);
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        console.log(`[Mail] Success! Message ID: ${parsed.id}`);
                        resolve({ success: true, ...parsed });
                    } else {
                        const errMsg = parsed.message || `Resend API error: ${res.statusCode}`;
                        console.error(`[Mail] Resend Error: ${errMsg}`);
                        resolve({ success: false, error: errMsg });
                    }
                } catch (e) {
                    console.error(`[Mail] Parse Error: ${body}`);
                    resolve({ success: false, error: 'PARSE_ERROR' });
                }
            });
        });

        req.on('error', (error) => {
            console.error(`[Mail] HTTPS Request Error: ${error.message}`);
            resolve({ success: false, error: error.message });
        });

        req.write(data);
        req.end();
    });
}

module.exports = { sendEmail };
