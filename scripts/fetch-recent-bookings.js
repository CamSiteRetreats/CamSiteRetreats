require('dotenv').config();
const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

async function check() {
    try {
        const rows = await sql`SELECT id, name, status, deposit, total_price, deposit_required, created_at 
                             FROM bookings 
                             ORDER BY created_at DESC 
                             LIMIT 10`;
        console.log(JSON.stringify(rows, null, 2));
    } catch (e) {
        console.error('Error:', e);
    }
}
check();
