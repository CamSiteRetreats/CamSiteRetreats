const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const db = require('../utils/db');

(async () => {
    try {
        console.log('Adding commission_rate to tours table...');
        // ThÃªm cá»™t commission_rate kiá»ƒu NUMERIC máº·c Ä‘á»‹nh 5 (%)
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
