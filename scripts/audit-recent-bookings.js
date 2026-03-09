require('dotenv').config();
const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

async function check() {
    try {
        const rows = await sql`SELECT id, name, tour, date, status, deposit, total_price, deposit_required, created_at 
                             FROM bookings 
                             ORDER BY created_at DESC 
                             LIMIT 10`;
        console.table(rows.map(r => ({
            ...r,
            created_at: r.created_at ? r.created_at.toISOString() : 'N/A'
        })));
    } catch (e) {
        console.error('Error:', e);
    }
}
check();
