const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function migrate() {
    const client = await pool.connect();
    try {
        console.log('📦 Starting Migration: ADD discount to bookings...');
        await client.query(`ALTER TABLE bookings ADD COLUMN discount INTEGER DEFAULT 0;`);
        console.log('✅ Added column discount successfully!');
    } catch (err) {
        if (err.message.includes('already exists')) {
            console.log('✅ Column discount already exists!');
        } else {
            console.error('❌ Migration failed:', err);
        }
    } finally {
        client.release();
        await pool.end();
    }
}

migrate();
