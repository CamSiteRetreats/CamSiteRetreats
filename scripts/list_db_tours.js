require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function run() {
    try {
        const res = await pool.query("SELECT id, name, price, level, duration, is_visible FROM tours");
        console.log("=== TOURS IN DB ===");
        console.log(res.rows);
    } catch(e) {
        console.error(e);
    } finally {
        pool.end();
    }
}
run();
