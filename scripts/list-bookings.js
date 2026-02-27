require('dotenv').config();
const db = require('../api/_db');

async function listAllBookings() {
    try {
        const { rows } = await db.query("SELECT id, name, tour, date, status FROM bookings ORDER BY created_at DESC");
        console.log('--- All Recent Bookings ---');
        rows.forEach(b => {
            console.log(`ID: ${b.id} | Name: ${b.name} | Tour: ${b.tour} | Date: ${b.date} | Status: ${b.status}`);
        });
    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}
listAllBookings();
