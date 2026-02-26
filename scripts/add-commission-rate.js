const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const db = require('../api/_db');

(async () => {
    try {
        console.log('Adding commission_rate to tours table...');
        // Thêm cột commission_rate kiểu NUMERIC mặc định 5 (%)
        await db.query(`
            ALTER TABLE tours 
            ADD COLUMN IF NOT EXISTS commission_rate NUMERIC DEFAULT 5
        `);
        console.log('Success! commission_rate added.');
    } catch (err) {
        console.error('Error:', err);
    } finally {
        process.exit(0);
    }
})();
