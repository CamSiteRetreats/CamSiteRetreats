require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function run() {
    try {
        console.log("---- ALTER TABLE schedules ADD zalo_link ----");
        await pool.query("ALTER TABLE schedules ADD COLUMN IF NOT EXISTS zalo_link TEXT");
        console.log("Success!");
    } catch(e) {
        console.error(e);
    } finally {
        pool.end();
    }
}
run();
