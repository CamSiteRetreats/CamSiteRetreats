require('dotenv').config();
const db = require('../utils/db');

async function check() {
    try {
        const { rows } = await db.query(`
            SELECT id, name, phone, id_card, address, dob, gender, customer_id, status 
            FROM bookings 
            WHERE id_card IS NULL OR id_card = '' 
               OR address IS NULL OR address = ''
               OR dob IS NULL 
               OR customer_id IS NULL OR customer_id = ''
        `);
        console.log(`TÃ¬m tháº¥y ${rows.length} Ä‘Æ¡n hÃ ng bá»‹ thiáº¿u trÆ°á»ng dá»¯ liá»‡u:`);
        rows.forEach(r => {
            const missing = [];
            if (!r.id_card) missing.push('CCCD');
            if (!r.address) missing.push('Äá»‹a chá»‰');
            if (!r.dob) missing.push('NgÃ y sinh');
            if (!r.customer_id) missing.push('MÃ£ CSR');
            console.log(`- ID: ${r.id} | KhÃ¡ch: ${r.name} | SÄT: ${r.phone} | Thiáº¿u: ${missing.join(', ')}`);
        });
    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}
check();
