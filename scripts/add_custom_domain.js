const db = require('../api/_db');

async function run() {
    try {
        console.log('Adding custom_domain column to tours table...');
        await db.query('ALTER TABLE tours ADD COLUMN IF NOT EXISTS custom_domain TEXT;');
        console.log('Success!');
        process.exit(0);
    } catch (e) {
        console.error('Failed to add column:', e);
        process.exit(1);
    }
}

run();
