require('dotenv').config();
const db = require('../api/_db');

async function searchWider() {
    try {
        console.log('--- Wider Search for Bidoup/Tà Giang ---');
        // Search for anything containing "Bidoup" or "Giang"
        const { rows } = await db.query(
            "SELECT id, name, tour, date, status FROM bookings WHERE (tour ILIKE '%Bidoup%' OR tour ILIKE '%Giang%') AND (date LIKE '%03/2026%') ORDER BY created_at DESC"
        );

        console.log(`Found ${rows.length} matches in March 2026:`);
        rows.forEach(b => {
            console.log(JSON.stringify(b));
        });
    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}
searchWider();
