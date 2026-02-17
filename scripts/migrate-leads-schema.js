require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function migrate() {
    try {
        await client.connect();
        console.log('Connected to Neon DB');

        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS leads (
                id SERIAL PRIMARY KEY,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                name TEXT NOT NULL,
                phone TEXT NOT NULL,
                tour TEXT,
                date TEXT,
                status TEXT DEFAULT 'Chờ tư vấn',
                message TEXT,
                sale_id TEXT,
                sale_name TEXT,
                sale_avatar TEXT
            );
        `;

        await client.query(createTableQuery);
        console.log('✅ Table "leads" created successfully!');

    } catch (err) {
        console.error('Error creating table:', err);
    } finally {
        await client.end();
    }
}

migrate();
