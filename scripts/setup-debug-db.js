require('dotenv').config();
const { neon } = require('@neondatabase/serverless');

async function setup() {
    const sql = neon(process.env.DATABASE_URL);
    console.log("Creating debug_webhook_logs table...");
    await sql`
        CREATE TABLE IF NOT EXISTS debug_webhook_logs (
            id SERIAL PRIMARY KEY,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            payload JSONB,
            headers JSONB,
            matched_booking_id INT
        )
    `;
    console.log("Table created.");
}

setup().catch(console.error);
