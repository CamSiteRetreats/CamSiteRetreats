/**
 * Debug: Check payment_transactions table and test matching logic
 */
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function debug() {
    const client = await pool.connect();
    try {
        // 1. Check if any transactions were recorded
        console.log('=== PAYMENT TRANSACTIONS ===');
        const { rows: txs } = await client.query('SELECT * FROM payment_transactions ORDER BY created_at DESC LIMIT 10');
        if (txs.length === 0) {
            console.log('❌ NO transactions found! SePay webhook was NEVER called successfully.');
        } else {
            txs.forEach(tx => {
                console.log(`TX #${tx.id}: booking_id=${tx.booking_id}, amount=${tx.amount}, content="${tx.transfer_content}", type=${tx.payment_type}`);
            });
        }

        // 2. Check booking #72
        console.log('\n=== BOOKING #72 ===');
        const { rows: bookings } = await client.query('SELECT id, name, tour, date, status, deposit, total_price FROM bookings WHERE id = 72');
        if (bookings.length > 0) {
            const b = bookings[0];
            console.log(`Name: "${b.name}", Tour: "${b.tour}", Date: "${b.date}"`);
            console.log(`Status: "${b.status}", Deposit: ${b.deposit}, Total: ${b.total_price}`);
        }

        // 3. Test matching logic with actual transfer content  
        console.log('\n=== MATCHING TEST ===');
        const testContent = 'tanang 07032026 khongralink coc';
        const searchText = testContent.toLowerCase().replace(/[^a-z0-9\s]/gi, '');
        console.log('Original:', testContent);
        console.log('After regex:', `"${searchText}"`);
        console.log('After removing spaces:', `"${searchText.replace(/\s/g, '')}"`);

        const { rows: activeBookings } = await client.query(
            `SELECT id, name, tour, status FROM bookings WHERE status IN ('Chờ cọc', 'Chờ xác nhận cọc', 'Đã cọc') ORDER BY created_at DESC`
        );
        console.log(`\nActive bookings: ${activeBookings.length}`);

        for (const booking of activeBookings) {
            const bookingName = (booking.name || '').toLowerCase().replace(/\s+/g, '');
            const bookingTour = (booking.tour || '').split('-')[0].trim().toLowerCase().replace(/\s+/g, '');

            console.log(`\n  Booking #${booking.id}: name="${booking.name}" → cleaned="${bookingName}"`);
            console.log(`    tour="${booking.tour}" → cleaned="${bookingTour}"`);

            const nameMatch = bookingName.length >= 3 && searchText.replace(/\s/g, '').includes(bookingName);
            const tourMatch = bookingTour.length >= 2 && searchText.replace(/\s/g, '').includes(bookingTour);
            console.log(`    nameMatch=${nameMatch}, tourMatch=${tourMatch}`);
            console.log(`    Would match: ${nameMatch || (tourMatch && bookingName.length >= 2)}`);
        }

    } catch (err) {
        console.error('Error:', err.message);
    } finally {
        client.release();
        await pool.end();
    }
}

debug();
