const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

async function migrate() {
    const client = await pool.connect();
    try {
        console.log('📦 Starting Migration: Bookings Table...');

        // Create Bookings Table
        await client.query(`
            CREATE TABLE IF NOT EXISTS bookings (
                id SERIAL PRIMARY KEY,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                name TEXT NOT NULL,
                phone TEXT,
                tour TEXT,
                date TEXT,
                status TEXT,
                total_price NUMERIC,
                deposit NUMERIC,
                sale_id TEXT,
                sale_name TEXT,
                
                -- Extended Info
                dob TEXT,
                gender TEXT,
                id_card TEXT,
                address TEXT,
                trekking_pole TEXT,
                diet TEXT,
                medal_name TEXT,
                allergy TEXT,
                special TEXT,
                commitments BOOLEAN DEFAULT FALSE,
                
                -- Customer Link
                customer_id TEXT
            );
        `);

        console.log('✅ Bookings table created successfully!');

    } catch (err) {
        console.error('❌ Migration failed:', err);
    } finally {
        client.release();
        await pool.end();
    }
}

migrate();
