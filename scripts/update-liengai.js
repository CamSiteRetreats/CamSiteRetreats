const path = require('path');
const { Pool } = require('pg');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function main() {
    try {
        console.log("Connecting to database...");
        const result = await pool.query(`
            UPDATE tours 
            SET image = 'tour/liengai/12.png',
                image2 = 'tour/liengai/3.png',
                image3 = 'tour/liengai/7.png',
                image4 = 'tour/liengai/4.png'
            WHERE name = 'Thác Liêng Ài'
            RETURNING *;
        `);
        console.log("Update successful. Updated row:", result.rows[0]);
    } catch (e) {
        console.error("Error updating database:", e);
    } finally {
        await pool.end();
        console.log("Database connection closed.");
    }
}

main();
