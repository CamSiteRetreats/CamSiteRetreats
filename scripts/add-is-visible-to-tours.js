const db = require('../api/_db');

async function run() {
    try {
        console.log('Adding is_visible column to tours table...');
        await db.query(`
            ALTER TABLE tours 
            ADD COLUMN IF NOT EXISTS is_visible BOOLEAN DEFAULT TRUE;
        `);
        console.log('Column added successfully.');
        process.exit(0);
    } catch (e) {
        console.error('Error adding column:', e);
        process.exit(1);
    }
}

run();
