require('dotenv').config();
const { Pool } = require('pg');

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
    console.error("DATABASE_URL is not set");
    process.exit(1);
}

const pool = new Pool({
    connectionString: dbUrl,
    ssl: { rejectUnauthorized: false }
});

async function run() {
    try {
        console.log("Checking if 'Thác Liêng Ài' exists in tours table...");
        const checkRes = await pool.query("SELECT id, name, is_visible FROM tours WHERE name = 'Thác Liêng Ài' OR name = 'Thác Liêng Ài '");
        console.log("Rows found:", checkRes.rows);

        if (checkRes.rows.length > 0) {
            console.log("Updating is_visible to false...");
            const updateRes = await pool.query("UPDATE tours SET is_visible = false WHERE name = 'Thác Liêng Ài' OR name = 'Thác Liêng Ài ' RETURNING *");
            console.log("Updated rows:", updateRes.rows);
        } else {
            console.log("No matching tours found in DB.");
        }
    } catch (e) {
        console.error("Error updating DB:", e);
    } finally {
        pool.end();
    }
}

run();
