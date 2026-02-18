const db = require('../api/db');

async function migrate() {
    try {
        console.log('Adding sort_order column to tours table...');
        await db.query('ALTER TABLE tours ADD COLUMN IF NOT EXISTS sort_order INTEGER DEFAULT 0');
        console.log('Success! sort_order column added.');
        process.exit(0);
    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
}

migrate();
