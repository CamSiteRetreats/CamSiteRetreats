require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function run() {
    try {
        console.log("---- ADMINS ----");
        const admins = await pool.query("SELECT * FROM admins");
        console.log(admins.rows);

        console.log("---- LAST 3 BOOKINGS ----");
        const bookings = await pool.query("SELECT id, name, sale_id, sale_name FROM bookings ORDER BY id DESC LIMIT 3");
        console.log(bookings.rows);
    } catch(e) {
        console.error(e);
    } finally {
        pool.end();
    }
}
run();
