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
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL,
                full_name TEXT,
                role TEXT CHECK (role IN ('admin', 'sale')),
                phone TEXT,
                email TEXT,
                avatar TEXT,
                status TEXT DEFAULT 'active',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

        await client.query(createTableQuery);
        console.log('✅ Table "users" created successfully!');

        // Seed default users if empty
        const countRes = await client.query('SELECT COUNT(*) FROM users');
        if (parseInt(countRes.rows[0].count) === 0) {
            console.log('Seeding default users...');
            const seedQuery = `
                INSERT INTO users (username, password, full_name, role, phone, email, avatar, status)
                VALUES 
                ('admin', '123', 'Admin Manager', 'admin', '0909123456', 'admin@camsite.com', 'https://ui-avatars.com/api/?name=Admin+Manager&background=E85D04&color=fff', 'active'),
                ('sale', '123', 'Sale Staff', 'sale', '0909987654', 'sale@camsite.com', 'https://ui-avatars.com/api/?name=Sale+Staff&background=random', 'active');
            `;
            await client.query(seedQuery);
            console.log('✅ Default users seeded!');
        }

    } catch (err) {
        console.error('Error creating table:', err);
    } finally {
        await client.end();
    }
}

migrate();
