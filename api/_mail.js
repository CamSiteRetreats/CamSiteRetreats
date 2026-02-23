const https = require('https');

/**
 * Send an email using Resend API via HTTPS module to avoid external dependencies
 * @param {Object} options { to, subject, html }
 */
async function sendEmail({ to, subject, html }) {
    // Ưu tiên lấy từ biến môi trường, nếu không có thì dùng giá trị mặc định (hardcode)
    const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_UQp88MYb_KkYop8VSmCph8igMZxxwXcx4';
    const DEFAULT_ADMIN_EMAIL = 'chuyencaiom@gmail.com';

    if (!RESEND_API_KEY) {
        console.warn('RESEND_API_KEY is not set. Email will not be sent.');
        return;
    }

    // Nếu không truyền người nhận, dùng email admin mặc định
    const sendTo = to || process.env.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL;

    const data = JSON.stringify({
        from: 'Cam Site Retreats <onboarding@resend.dev>', // Use verified domain later if available
        to: sendTo,
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
