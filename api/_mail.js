const https = require('https');

/**
 * Send an email using Resend API via HTTPS module to avoid external dependencies
 * @param {Object} options { to, subject, html }
 */
async function sendEmail({ to, subject, html }) {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
        console.warn('RESEND_API_KEY is not set in environment variables. Email will not be sent.');
        return;
    }

    const data = JSON.stringify({
        from: 'Cam Site Retreats <onboarding@resend.dev>', // Use verified domain later if available
        to: to,
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
            'Content-Length': data.length
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
                        resolve(parsed);
                    } else {
                        reject(new Error(parsed.message || `Resend API error: ${res.statusCode}`));
                    }
                } catch (e) {
                    reject(new Error(`Failed to parse Resend response: ${body}`));
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.write(data);
        req.end();
    });
}

module.exports = { sendEmail };
