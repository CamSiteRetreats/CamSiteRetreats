const { getDb } = require('./functions/api/_db.js');
require('dotenv').config();

// Create mock env
const env = process.env;

async function testApi() {
    const sql = getDb(env);

    try {
        console.log("Testing sql query issue...");
        // Bắt chước phần code trong bookings.js (dùng .query)
        const name = "Test booking";
        const query = `INSERT INTO bookings (name, tour, total_price) VALUES ($1, $2, $3) RETURNING *`;
        const values = [name, "Ky Quan San", 1000000];

        const rows = await sql.query(query, values);
        console.log("Result:", rows);

    } catch (err) {
        console.error("Test failed:", err);
    }

    process.exit(0);
}

testApi();
