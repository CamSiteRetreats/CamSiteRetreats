const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

async function run() {
    try {
        await client.connect();
        console.log('--- Setting up Schedules Table ---');

        // Create schedules table
        await client.query(`
            CREATE TABLE IF NOT EXISTS schedules (
                id SERIAL PRIMARY KEY,
                tour_name TEXT NOT NULL,
                start_date DATE NOT NULL,
                end_date DATE NOT NULL,
                slots INTEGER NOT NULL DEFAULT 20,
                status VARCHAR(50) DEFAULT 'Đang mở',
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
        `);
        console.log('Table "schedules" created or already exists.');

        // Verify by selecting
        const res = await client.query('SELECT count(*) FROM schedules');
        console.log('Current schedules count:', res.rows[0].count);

        console.log('Success: Database setup complete.');
    } catch (err) {
        console.error('FAILED to setup DB:', err);
    } finally {
        await client.end();
    }
}

run();
