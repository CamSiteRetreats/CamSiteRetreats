require('dotenv').config({ path: __dirname + '/../.env' });
const { Pool } = require('pg');
const fs = require('fs');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function run() {
    try {
        const resTx = await pool.query('SELECT * FROM payment_transactions ORDER BY created_at DESC LIMIT 5');
        const resB = await pool.query('SELECT id, name, phone, tour, date, status, deposit, created_at FROM bookings ORDER BY created_at DESC LIMIT 5');

        fs.writeFileSync('db-dump.json', JSON.stringify({
            transactions: resTx.rows,
            bookings: resB.rows
        }, null, 2));

    } catch (e) {
        console.error(e);
    } finally {
        pool.end();
    }
}
run();
