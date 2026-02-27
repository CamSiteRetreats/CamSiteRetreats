require('dotenv').config();
const db = require('../api/_db');

async function finalCheck() {
    try {
        console.log('--- Deep Dive Bidoup Bookings ---');
        // Get everything related to Bidoup
        const { rows } = await db.query(
            "SELECT id, name, tour, date, status FROM bookings WHERE tour ILIKE '%Bidoup%'"
        );

        console.log(`Total Bidoup bookings: ${rows.length}`);
        rows.forEach(b => {
            const isTargetDate = b.date && (b.date.includes('14/03') || b.date.includes('14-03') || b.date.includes('2026-03-14'));
            console.log(`${isTargetDate ? 'MATCH' : 'SKIP '} | ID: ${b.id} | Name: ${b.name} | Tour: [${b.tour}] | Date: [${b.date}] | Status: [${b.status}]`);
        });
    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}
finalCheck();
