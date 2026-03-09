require('dotenv').config();
const { Pool } = require('pg');
const fs = require('fs');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function check() {
    try {
        const { rows } = await pool.query("SELECT * FROM tours WHERE name ILIKE '%Tà Năng%'");
        fs.writeFileSync('./tours-results.json', JSON.stringify(rows, null, 2), 'utf-8');
    } catch (e) {
        console.error(e);
    } finally {
        pool.end();
    }
}
check();
