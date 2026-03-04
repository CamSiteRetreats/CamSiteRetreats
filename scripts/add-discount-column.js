// Migration: Add discount column to bookings table
const db = require('../utils/db');

async function migrate() {
    try {
        await db.query(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS discount INTEGER DEFAULT 0`);
        console.log('âœ… Added discount column to bookings table');

        // Verify
        const { rows } = await db.query(`SELECT column_name FROM information_schema.columns WHERE table_name = 'bookings' AND column_name = 'discount'`);
        if (rows.length > 0) {
            console.log('âœ… Verified: discount column exists');
        } else {
            console.error('âŒ Column not found after migration!');
        }
        process.exit(0);
    } catch (err) {
        console.error('âŒ Migration error:', err.message);
        process.exit(1);
    }
}

migrate();
