const { Pool } = require('pg');
require('dotenv').config();

if (!process.env.DATABASE_URL) {
    console.error('CRITICAL: DATABASE_URL is missing from environment variables!');
}

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = {
    query: (text, params) => {
        if (!process.env.DATABASE_URL) {
            throw new Error('Hệ thống chưa cấu hình DATABASE_URL trên Vercel.');
        }
        return pool.query(text, params);
    },
};
