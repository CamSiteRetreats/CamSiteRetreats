require('dotenv').config();
const db = require('../api/_db');
async function checkBooking() {
    try {
        const { rows } = await db.query('SELECT status, deposit, total_price, deposit_required FROM bookings WHERE id = 81');
        console.log('Booking 81 DB Status:', rows[0]);
    } catch (err) {
        console.error('Error:', err);
    } finally {
        process.exit(0);
    }
}
checkBooking();
