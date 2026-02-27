require('dotenv').config();
const db = require('../api/_db');

async function debugRosterData() {
    try {
        console.log('--- Debugging Bidoup Tà Giang Bookings ---');

        // 1. Check all bookings for Bidoup Tà Giang
        const { rows: allBidoup } = await db.query(
            "SELECT id, name, tour, date, status FROM bookings WHERE tour ILIKE '%Bidoup%' ORDER BY date DESC"
        );

        console.log('Found Bidoup related bookings:');
        allBidoup.forEach(b => {
            console.log(`ID: ${b.id} | Name: ${b.name} | Tour: ${b.tour} | Date: ${b.date} | Status: ${b.status}`);
        });

        // 2. specifically check for the 14-15/3 date
        console.log('\n--- Checking specific 14-03-2026 or 14/03/2026 ---');
        const { rows: marchBookings } = await db.query(
            "SELECT id, name, tour, date FROM bookings WHERE date LIKE '%03/2026%' OR date LIKE '%03-2026%'"
        );
        marchBookings.forEach(b => {
            console.log(`ID: ${b.id} | Name: ${b.name} | Tour: ${b.tour} | Date: ${b.date}`);
        });

    } catch (err) {
        console.error('Error:', err);
    } finally {
        process.exit(0);
    }
}

debugRosterData();
