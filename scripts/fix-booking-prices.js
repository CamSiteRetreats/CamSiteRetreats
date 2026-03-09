require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function fixTotalPrices() {
    try {
        console.log('Fixing old bookings with total_price = 0 or null...');

        // Find existing tours and map their prices
        const toursResult = await pool.query('SELECT name, price FROM tours');
        const toursMap = {};
        for (const t of toursResult.rows) {
            if (t.price && t.price !== 0 && t.price !== 'Update') {
                toursMap[t.name] = t.price;
            }
        }

        let updated = 0;
        const bookingsResult = await pool.query("SELECT id, tour, total_price FROM bookings WHERE (total_price IS NULL OR total_price = 0) AND status != 'Đã hủy'");

        for (const b of bookingsResult.rows) {
            const correctPrice = toursMap[b.tour];
            if (correctPrice) {
                await pool.query('UPDATE bookings SET total_price = $1 WHERE id = $2', [correctPrice, b.id]);
                console.log(`Updated booking ID ${b.id} (${b.tour}) to total_price: ${correctPrice}`);
                updated++;
            }
        }

        console.log(`Done! Fixed ${updated} bookings.`);
    } catch (e) {
        console.error(e);
    } finally {
        pool.end();
    }
}
fixTotalPrices();
