require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function check() {
    try {
        const { rows } = await pool.query("SELECT id, name, tour, total_price, deposit, customer_id, created_at, sale_id, sale_name FROM bookings WHERE name ILIKE '%Sang%' ORDER BY created_at DESC");
        console.dir(rows, { depth: null });
    } catch (e) {
        console.error(e);
    } finally {
        pool.end();
    }
}
check();
