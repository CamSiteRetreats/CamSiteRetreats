require('dotenv').config();
const db = require('../utils/db');

async function crossAudit() {
    try {
        console.log('--- ðŸ” Kiá»ƒm tra khá»›p ná»‘i dá»¯ liá»‡u Booking & CRM ---');

        // Láº¥y cÃ¡c Ä‘Æ¡n hÃ ng cÃ³ mÃ£ khÃ¡ch hÃ ng nhÆ°ng thiáº¿u thÃ´ng tin chi tiáº¿t
        const { rows: bookings } = await db.query(`
            SELECT b.id, b.name, b.phone, b.customer_id, b.id_card, b.address, b.dob, b.gender,
                   c.cccd as crm_cccd, c.address as crm_address, c.dob as crm_dob, c.gender as crm_gender
            FROM bookings b
            JOIN crm_customers c ON b.customer_id = c.csr_code
            WHERE (b.id_card IS NULL OR b.id_card = '') 
               OR (b.address IS NULL OR b.address = '')
               OR (b.dob IS NULL)
        `);

        console.log(`TÃ¬m tháº¥y ${bookings.length} Ä‘Æ¡n hÃ ng cÃ³ thá»ƒ khÃ´i phá»¥c dá»¯ liá»‡u tá»« CRM.`);

        bookings.forEach(b => {
            console.log(`ID: ${b.id} | KhÃ¡ch: ${b.name} | MÃ£: ${b.customer_id}`);
            if (!b.id_card && b.crm_cccd) console.log(`   -> Sáº½ khÃ´i phá»¥c CCCD: ${b.crm_cccd}`);
            if (!b.address && b.crm_address) console.log(`   -> Sáº½ khÃ´i phá»¥c Äá»‹a chá»‰: ${b.crm_address}`);
            if (!b.dob && b.crm_dob) console.log(`   -> Sáº½ khÃ´i phá»¥c NgÃ y sinh: ${b.crm_dob}`);
        });

    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}

crossAudit();
