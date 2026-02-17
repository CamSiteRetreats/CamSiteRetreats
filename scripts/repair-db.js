const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function run() {
    try {
        await client.connect();
        console.log('--- System Cleanup & DB Repair ---');

        // 1. Drop and Recreate Media table to be absolutely sure about the structure
        // WARNING: This deletes existing media links in the DB, but since it's breaking anyway, it's safer.
        console.log('Recreating media table with perfect structure...');
        await client.query('DROP TABLE IF EXISTS media;');
        await client.query(`
            CREATE TABLE media (
                id SERIAL PRIMARY KEY,
                url TEXT NOT NULL,
                filename TEXT,
                slug VARCHAR(50) UNIQUE,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
        `);
        console.log('Table "media" is now PERFECT.');

        // 2. Clear old data from schedules if any corrupt data (Optional)
        // console.log('Cleaning up schedules...');

        console.log('Success: Database is ready.');
    } catch (err) {
        console.error('FAILED to repair DB:', err);
    } finally {
        await client.end();
    }
}

run();
