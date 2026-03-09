require('dotenv').config();
const { neon } = require('@neondatabase/serverless');

async function checkDebug() {
    const sql = neon(process.env.DATABASE_URL);
    console.log("--- Latest Webhook Debug Logs ---");
    const logs = await sql`SELECT * FROM debug_webhook_logs ORDER BY created_at DESC LIMIT 10`;
    if (logs.length === 0) console.log("No logs found yet.");
    logs.forEach(log => {
        console.log(`[${log.created_at}] Matched: ${log.matched_booking_id}`);
        console.log(`Payload: ${JSON.stringify(log.payload)}`);
    });
}

checkDebug().catch(console.error);
