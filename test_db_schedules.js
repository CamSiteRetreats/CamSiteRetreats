require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function run() {
    try {
        console.log("---- BOOKINGS COLUMNS ----");
        const res = await pool.query("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'bookings' AND column_name = 'services_booked'");
        console.log("Found services_booked:", res.rows.length > 0 ? res.rows[0].data_type : "No");
    } catch(e) {
        console.error(e);
    } finally {
        pool.end();
    }
}
run();
