const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function upgrade() {
    try {
        await client.connect();
        console.log('--- Database Upgrade: Dynamic Tour CMS ---');

        // 1. Add new columns to tours table
        // We use TEXT for JSON fields since PostgreSQL handles them well, 
        // or JSONB if we want deeper queries (Neon supports JSONB).
        // Let's use JSONB for itinerary, specs, inclusions, etc.

        await client.query(`
            ALTER TABLE tours 
            ADD COLUMN IF NOT EXISTS slug VARCHAR(100) UNIQUE,
            ADD COLUMN IF NOT EXISTS long_desc TEXT,
            ADD COLUMN IF NOT EXISTS hero_image TEXT,
            ADD COLUMN IF NOT EXISTS image2 TEXT,
            ADD COLUMN IF NOT EXISTS image3 TEXT,
            ADD COLUMN IF NOT EXISTS image4 TEXT,
            ADD COLUMN IF NOT EXISTS altitude VARCHAR(50),
            ADD COLUMN IF NOT EXISTS level VARCHAR(50),
            ADD COLUMN IF NOT EXISTS specs JSONB,
            ADD COLUMN IF NOT EXISTS itinerary JSONB,
            ADD COLUMN IF NOT EXISTS inclusions JSONB,
            ADD COLUMN IF NOT EXISTS exclusions JSONB,
            ADD COLUMN IF NOT EXISTS preparation JSONB,
            ADD COLUMN IF NOT EXISTS gallery JSONB;
        `);

        console.log('Successfully added new columns to "tours" table.');

        // 2. Update existing Tà Năng tour with a slug
        await client.query("UPDATE tours SET slug = 'ta-nang-phan-dung' WHERE id = 1;");
        console.log('Updated Tà Năng tour slug.');

        console.log('Upgrade completed!');
    } catch (err) {
        console.error('FAILED to upgrade DB:', err);
    } finally {
        await client.end();
    }
}

upgrade();
