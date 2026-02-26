const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const db = require('../api/_db');

(async () => {
    // Test: search for a customer and check if address comes from booking
    const phone = '0972927281'; // Huỳnh Sơn Tùng

    console.log('=== CRM DATA ===');
    const crm = await db.query('SELECT * FROM crm_customers WHERE phone = $1', [phone]);
    if (crm.rows[0]) {
        console.log('CRM found:', crm.rows[0].full_name, '| csr:', crm.rows[0].csr_code);
    }

    console.log('\n=== BOOKING DATA ===');
    const bookings = await db.query(
        'SELECT id, name, phone, address, trekking_pole, diet, allergy, id_card FROM bookings WHERE phone = $1 ORDER BY created_at DESC LIMIT 3',
        [phone]
    );
    bookings.rows.forEach(b => {
        console.log('Booking ID:', b.id, '| address:', JSON.stringify(b.address), '| id_card:', b.id_card, '| diet:', b.diet);
    });

    process.exit(0);
})();
