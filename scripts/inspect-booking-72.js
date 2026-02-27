require('dotenv').config();
const db = require('../api/_db');
async function checkBooking() {
    try {
        const { rows } = await db.query('SELECT id, status, deposit, total_price, deposit_required, customer_id FROM bookings WHERE id = 72');
        console.log('Booking 72 DB Status:', rows[0]);
    } catch (err) {
        console.error('Error:', err);
    } finally {
        process.exit(0);
    }
}
checkBooking();
