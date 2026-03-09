require('dotenv').config();
const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

async function check() {
    try {
        const logs = await sql`SELECT id, payload, headers, created_at FROM debug_webhook_logs ORDER BY created_at DESC LIMIT 20`;
        console.log('--- Last 20 Webhook Logs ---');
        logs.forEach(log => {
            console.log(`\n--- WEBHOOK LOG ID: ${log.id} ---`);
            const p = typeof log.payload === 'string' ? JSON.parse(log.payload) : log.payload;
            const h = typeof log.headers === 'string' ? JSON.parse(log.headers) : log.headers;
            console.log(`Time: ${log.created_at}`);
            console.log(`Headers: ${JSON.stringify(h, null, 2)}`);
            console.log(`Payload: ${JSON.stringify(p, null, 2)}`);
        });
    } catch (e) {
        console.error('Error:', e);
    }
}
check();
