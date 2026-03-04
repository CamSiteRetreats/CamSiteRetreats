require('dotenv').config();
const db = require('../utils/db');

async function assignCsrCodes() {
    try {
        console.log('--- Báº¯t Ä‘áº§u quy trÃ¬nh cáº¥p MÃ£ KhÃ¡ch HÃ ng (CSR) cho cÃ¡c Ä‘Æ¡n hÃ ng cÅ© ---');

        // 1. Láº¥y táº¥t cáº£ cÃ¡c Ä‘Æ¡n hÃ ng chÆ°a cÃ³ customer_id
        const { rows: bookings } = await db.query(
            "SELECT id, name, phone, id_card, dob, gender, allergy, diet FROM bookings WHERE customer_id IS NULL OR customer_id = ''"
        );

        console.log(`TÃ¬m tháº¥y ${bookings.length} Ä‘Æ¡n hÃ ng chÆ°a cÃ³ mÃ£.`);

        let updatedCount = 0;
        let createdCrmCount = 0;

        for (const booking of bookings) {
            const { name, phone, id_card, dob, gender, allergy, diet, id } = booking;

            if (!phone) {
                console.warn(`âš ï¸ ÄÆ¡n hÃ ng ID ${id} khÃ´ng cÃ³ sá»‘ Ä‘iá»‡n thoáº¡i, bá» qua.`);
                continue;
            }

            // 2. Kiá»ƒm tra xem khÃ¡ch hÃ ng Ä‘Ã£ tá»“n táº¡i trong CRM chÆ°a
            const checkCrm = await db.query('SELECT csr_code FROM crm_customers WHERE phone = $1', [phone]);
            let csrCode = '';

            if (checkCrm.rows.length > 0) {
                // ÄÃ£ cÃ³ trong CRM
                csrCode = checkCrm.rows[0].csr_code;
                console.log(`âœ… KhÃ¡ch hÃ ng ${name} (${phone}) Ä‘Ã£ cÃ³ mÃ£: ${csrCode}`);
            } else {
                // ChÆ°a cÃ³ -> Táº¡o má»›i
                const randNum = Math.floor(100000 + Math.random() * 900000);
                csrCode = '#CSR' + randNum;

                await db.query(`
                    INSERT INTO crm_customers (csr_code, full_name, phone, cccd, dob, gender, medical_notes, dietary, loyalty_tier)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'New')
                `, [csrCode, name, phone, id_card || null, dob || null, gender || 'KhÃ¡c', allergy || '', diet || '']);

                createdCrmCount++;
                console.log(`âœ¨ Táº¡o má»›i khÃ¡ch hÃ ng ${name} (${phone}) vá»›i mÃ£: ${csrCode}`);
            }

            // 3. Cáº­p nháº­t mÃ£ vÃ o Ä‘Æ¡n hÃ ng
            await db.query('UPDATE bookings SET customer_id = $1 WHERE id = $2', [csrCode, id]);
            updatedCount++;
        }

        console.log('--- HoÃ n táº¥t ---');
        console.log(`Tá»•ng sá»‘ Ä‘Æ¡n hÃ ng Ä‘Ã£ cáº­p nháº­t: ${updatedCount}`);
        console.log(`Tá»•ng sá»‘ khÃ¡ch hÃ ng má»›i táº¡o trong CRM: ${createdCrmCount}`);

    } catch (err) {
        console.error('âŒ Lá»—i thá»±c thi:', err);
    } finally {
        process.exit(0);
    }
}

assignCsrCodes();
