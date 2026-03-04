// Migration: Add discount column to bookings table
const db = require('../api/_db');

async function migrate() {
    try {
        await db.query(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS discount INTEGER DEFAULT 0`);
        console.log('✅ Added discount column to bookings table');

        // Verify
        const { rows } = await db.query(`SELECT column_name FROM information_schema.columns WHERE table_name = 'bookings' AND column_name = 'discount'`);
        if (rows.length > 0) {
            console.log('✅ Verified: discount column exists');
        } else {
            console.error('❌ Column not found after migration!');
        }
        process.exit(0);
    } catch (err) {
        console.error('❌ Migration error:', err.message);
        process.exit(1);
    }
}

migrate();
