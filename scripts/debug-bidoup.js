require('dotenv').config();
const db = require('../api/_db');

async function debugSpecific() {
    try {
        console.log('--- Inspecting Bidoup Bookings on 14/03/2026 ---');
        // We use ILIKE and partial date match to catch everything
        const { rows } = await db.query(
            "SELECT id, name, tour, date, status FROM bookings WHERE tour ILIKE '%Bidoup%' AND date LIKE '%03/2026%'"
        );

        console.log(`Found ${rows.length} bookings.`);
        rows.forEach(b => {
            console.log(JSON.stringify(b));
        });
    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}
debugSpecific();
