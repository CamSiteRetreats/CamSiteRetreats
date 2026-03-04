require('dotenv').config();
const db = require('../utils/db');

async function finalSync() {
    try {
        console.log('--- ðŸ”„ THá»°C HIá»†N Äá»’NG Bá»˜ TOÃ€N DIá»†N Há»† THá»NG ---');

        // 1. Láº¥y Data
        const { rows: bookings } = await db.query("SELECT * FROM bookings ORDER BY created_at DESC");
        const { rows: customers } = await db.query("SELECT * FROM crm_customers");

        console.log(`PhÃ¢n tÃ­ch ${bookings.length} Ä‘Æ¡n hÃ ng...`);

        let newCrmCount = 0;
        let updatedBookingCount = 0;

        for (const b of bookings) {
            let customerId = b.customer_id;
            let currentCustomer = customers.find(c => c.phone === b.phone);

            // A. Náº¿u chÆ°a cÃ³ trong CRM -> Táº¡o má»›i
            if (!currentCustomer) {
                const csrCode = '#CSR' + Math.floor(Math.random() * 900000 + 100000);
                const { rows: newC } = await db.query(`
                    INSERT INTO crm_customers (csr_code, full_name, phone, cccd, dob, gender, medical_notes, dietary, loyalty_tier)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                    RETURNING *
                `, [
                    csrCode, b.name, b.phone, b.id_card || '', b.dob || null,
                    b.gender || 'KhÃ¡c', b.allergy || '', b.diet || '', 'Member'
                ]);
                currentCustomer = newC[0];
                customers.push(currentCustomer); // ThÃªm vÃ o danh sÃ¡ch táº¡m Ä‘á»ƒ check cho cÃ¡c booking sau
                console.log(`âœ¨ ÄÃ£ táº¡o há»“ sÆ¡ CRM má»›i cho ${b.name} (${b.phone}) -> ${csrCode}`);
                newCrmCount++;
            }

            // B. Äáº£m báº£o Booking cÃ³ Ä‘Ãºng Customer ID
            if (b.customer_id !== currentCustomer.csr_code) {
                await db.query("UPDATE bookings SET customer_id = $1 WHERE id = $2", [currentCustomer.csr_code, b.id]);
                b.customer_id = currentCustomer.csr_code;
                updatedBookingCount++;
            }

            // C. Sync thÃ´ng tin chi tiáº¿t (Láº¥y tá»« Booking Ä‘áº¯p sang CRM náº¿u CRM rá»—ng, vÃ  ngÆ°á»£c láº¡i)
            if (currentCustomer) {
                let cUpdateNeeded = false;
                const cUpdates = {};

                // Book -> CRM
                if (!currentCustomer.cccd && b.id_card) { cUpdates.cccd = b.id_card; cUpdateNeeded = true; }
                if (!currentCustomer.dob && b.dob) { cUpdates.dob = b.dob; cUpdateNeeded = true; }
                if ((!currentCustomer.gender || currentCustomer.gender === 'KhÃ¡c') && b.gender && b.gender !== 'KhÃ¡c') { cUpdates.gender = b.gender; cUpdateNeeded = true; }

                if (cUpdateNeeded) {
                    const fields = Object.keys(cUpdates);
                    const values = Object.values(cUpdates);
                    const clause = fields.map((f, i) => `${f} = $${i + 1}`).join(', ');
                    values.push(currentCustomer.id);
                    await db.query(`UPDATE crm_customers SET ${clause}, updated_at = NOW() WHERE id = $${values.length}`, values);
                    // Cáº­p nháº­t láº¡i list táº¡m
                    Object.assign(currentCustomer, cUpdates);
                }

                // CRM -> Booking (Restore data requested)
                let bUpdateNeeded = false;
                const bUpdates = {};
                if (!b.id_card && currentCustomer.cccd) { bUpdates.id_card = currentCustomer.cccd; bUpdateNeeded = true; }
                if (!b.dob && currentCustomer.dob) { bUpdates.dob = currentCustomer.dob; bUpdateNeeded = true; }
                if ((!b.gender || b.gender === 'KhÃ¡c') && currentCustomer.gender && currentCustomer.gender !== 'KhÃ¡c') { bUpdates.gender = currentCustomer.gender; bUpdateNeeded = true; }

                if (bUpdateNeeded) {
                    const fields = Object.keys(bUpdates);
                    const values = Object.values(bUpdates);
                    const clause = fields.map((f, i) => `${f} = $${i + 1}`).join(', ');
                    values.push(b.id);
                    await db.query(`UPDATE bookings SET ${clause} WHERE id = $${values.length}`, values);
                    updatedBookingCount++;
                }
            }
        }

        console.log(`\nâœ… HOÃ€N THÃ€NH:`);
        console.log(`- ÄÃ£ táº¡o má»›i ${newCrmCount} há»“ sÆ¡ CRM.`);
        console.log(`- ÄÃ£ cáº­p nháº­t/khÃ´i phá»¥c ${updatedBookingCount} lÆ°á»£t dá»¯ liá»‡u Ä‘Æ¡n hÃ ng.`);

    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}
finalSync();
