require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function run() {
    const client = await pool.connect();
    try {
        console.log("---- CREATING guides TABLE ----");
        await client.query(`
            CREATE TABLE IF NOT EXISTS guides (
                id SERIAL PRIMARY KEY,
                full_name TEXT NOT NULL,
                phone TEXT,
                cccd TEXT,
                dob TEXT,
                address TEXT,
                role TEXT DEFAULT 'Hướng Dẫn Viên',
                status TEXT DEFAULT 'active',
                notes TEXT,
                created_at TIMESTAMPTZ DEFAULT NOW()
            );
        `);
        console.log("✅ guides table created.");

        console.log("---- CREATING schedule_guides TABLE ----");
        await client.query(`
            CREATE TABLE IF NOT EXISTS schedule_guides (
                id SERIAL PRIMARY KEY,
                schedule_id INTEGER NOT NULL REFERENCES schedules(id) ON DELETE CASCADE,
                guide_id INTEGER NOT NULL REFERENCES guides(id) ON DELETE CASCADE,
                UNIQUE(schedule_id, guide_id)
            );
        `);
        console.log("✅ schedule_guides table created.");

    } catch(e) {
        console.error("Migration Error:", e.message);
    } finally {
        client.release();
        pool.end();
    }
}
run();
