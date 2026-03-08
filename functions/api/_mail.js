export async function sendEmail(options, env) {
    const { to, subject, html } = options;
    const RESEND_API_KEY = env.RESEND_API_KEY;
    const FALLBACK_EMAIL = 'chuyencaiom@gmail.com';
    const recipient = to || env.ADMIN_EMAIL || FALLBACK_EMAIL;

    if (!RESEND_API_KEY) {
        console.warn('RESEND_API_KEY is not set');
        return { success: false, error: 'MISSING_API_KEY' };
    }

    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from: 'Cam Site Retreats <onboarding@resend.dev>',
            to: recipient,
            subject: subject,
            html: html
        })
    });

    if (res.ok) {
        const data = await res.json();
        return { success: true, ...data };
    } else {
        const error = await res.text();
        return { success: false, error };
    }
}
