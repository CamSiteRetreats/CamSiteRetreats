const { neon } = require('@neondatabase/serverless');
require('dotenv').config();

async function run() {
    try {
        const sql = neon(process.env.DATABASE_URL);
        console.log("Creating table...");
        await sql`
            CREATE TABLE IF NOT EXISTS calendar_notes (
                id          SERIAL PRIMARY KEY,
                date        DATE NOT NULL,
                title       TEXT NOT NULL,
                note        TEXT,
                color       TEXT DEFAULT 'blue',
                created_by  TEXT,
                created_at  TIMESTAMPTZ DEFAULT NOW(),
                updated_at  TIMESTAMPTZ DEFAULT NOW()
            );
        `;
        console.log("Table created.");
        
        console.log("Creating index...");
        await sql`
            CREATE INDEX IF NOT EXISTS idx_calendar_notes_date ON calendar_notes(date);
        `;
        console.log("Index created. Done!");
    } catch (err) {
        console.error("Error:", err);
    }
}

run();
