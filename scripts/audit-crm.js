require('dotenv').config();
const db = require('../utils/db');

async function auditCRM() {
    try {
        console.log('--- ðŸ” Kiá»ƒm tra há»“ sÆ¡ CRM ---');

        // 1. TÃ¬m cÃ¡c khÃ¡ch hÃ ng trong CRM bá»‹ thiáº¿u CCCD, NgÃ y sinh, hoáº·c Giá»›i tÃ­nh
        const { rows: customers } = await db.query(`
            SELECT id, csr_code, full_name, phone, cccd, dob, gender
            FROM crm_customers
            WHERE cccd IS NULL OR cccd = ''
               OR dob IS NULL
               OR gender IS NULL OR gender = 'KhÃ¡c'
        `);

        console.log(`TÃ¬m tháº¥y ${customers.length} há»“ sÆ¡ CRM bá»‹ thiáº¿u thÃ´ng tin.`);

        // 2. Vá»›i má»—i khÃ¡ch hÃ ng há»“ sÆ¡ rá»—ng, thá»­ tÃ¬m xem trong báº£ng Bookings cÃ³ "Ä‘áº¯p" vÃ o Ä‘Æ°á»£c khÃ´ng
        for (const c of customers) {
            const { rows: bData } = await db.query(`
                SELECT id_card, dob, gender, address FROM bookings 
                WHERE phone = $1 
                AND (id_card IS NOT NULL AND id_card != '')
                ORDER BY created_at DESC LIMIT 1
            `, [c.phone]);

            if (bData.length > 0) {
                const b = bData[0];
                const updates = {};
                if (!c.cccd && b.id_card) updates.cccd = b.id_card;
                if (!c.dob && b.dob) updates.dob = b.dob;
                if ((!c.gender || c.gender === 'KhÃ¡c') && b.gender && b.gender !== 'KhÃ¡c') updates.gender = b.gender;

                if (Object.keys(updates).length > 0) {
                    const fields = Object.keys(updates);
                    const values = Object.values(updates);
                    const setClause = fields.map((f, i) => `${f} = $${i + 1}`).join(', ');
                    values.push(c.id);
                    await db.query(`UPDATE crm_customers SET ${setClause}, updated_at = NOW() WHERE id = $${values.length}`, values);
                    console.log(`âœ… ÄÃ£ khÃ´i phá»¥c CRM ID:${c.id} (${c.full_name}) tá»« Booking -> ${fields.join(', ')}`);
                }
            } else {
                console.log(`âš ï¸ CRM ID:${c.id} (${c.full_name}) khÃ´ng tÃ¬m tháº¥y dá»¯ liá»‡u bá»• sung trong Bookings.`);
            }
        }
    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}
auditCRM();
