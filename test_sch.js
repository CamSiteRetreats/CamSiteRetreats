const { getDb } = require('./functions/api/_db.js');
require('dotenv').config();

// Create mock env
const env = process.env;

async function testApi() {
    const sql = getDb(env);

    try {
        console.log("1. Insert mock schedule...");
        const insertRes = await sql`
            INSERT INTO schedules (tour_name, start_date, end_date, slots, status)
            VALUES ('Bidoup - Tà Giang (TEST)', '2026-03-21', '2026-03-22', 17, 'Đang mở')
            RETURNING *;
        `;
        console.log("Insert Result:", insertRes[0]);

        const newId = insertRes[0].id;

        console.log("\n2. Update mock schedule...");
        const updateRes = await sql`
            UPDATE schedules 
            SET slots = 20, status = 'Sắp hết'
            WHERE id = ${newId}
            RETURNING *;
        `;
        console.log("Update Result:", updateRes[0]);

        console.log("\n3. Delete mock schedule...");
        await sql`DELETE FROM schedules WHERE id = ${newId}`;
        console.log("Deleted successfully.");

    } catch (err) {
        console.error("Test failed:", err);
    }

    process.exit(0);
}

testApi();
