/**
 * Script: Äá»“ng bá»™ khÃ¡ch hÃ ng tá»« báº£ng bookings sang báº£ng crm_customers
 * - Query táº¥t cáº£ bookings (DISTINCT theo phone)
 * - Upsert vÃ o crm_customers (dá»±a trÃªn phone)
 * - Táº¡o mÃ£ #CSR + 6 sá»‘ cho khÃ¡ch chÆ°a cÃ³ mÃ£
 * 
 * Cháº¡y: node scripts/sync-bookings-to-crm.js
 */

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const db = require('../utils/db');

async function syncBookingsToCRM() {
    console.log('ðŸ”„ Báº¯t Ä‘áº§u Ä‘á»“ng bá»™ khÃ¡ch hÃ ng tá»« Bookings â†’ CRM...\n');

    try {
        // Bookings schema: name, phone, dob, gender, id_card, address, diet, allergy, special
        // CRM schema: csr_code, full_name, phone, cccd, dob, gender, medical_notes, dietary, loyalty_tier
        const { rows: bookings } = await db.query(`
            SELECT DISTINCT ON (phone) 
                name, phone, dob, gender, id_card, diet, allergy, special, tour, date
            FROM bookings 
            WHERE phone IS NOT NULL AND phone != ''
            ORDER BY phone, created_at DESC
        `);

        console.log(`ðŸ“‹ TÃ¬m tháº¥y ${bookings.length} khÃ¡ch hÃ ng duy nháº¥t (theo SÄT) trong báº£ng bookings.\n`);

        let created = 0;
        let updated = 0;
        let skipped = 0;

        for (const b of bookings) {
            try {
                const check = await db.query('SELECT id, csr_code FROM crm_customers WHERE phone = $1', [b.phone]);

                // Map booking fields â†’ CRM fields
                const medicalNotes = [b.allergy, b.special].filter(Boolean).join('; ') || null;

                if (check.rows.length > 0) {
                    const existing = check.rows[0];
                    await db.query(`
                        UPDATE crm_customers 
                        SET full_name = COALESCE(NULLIF($1, ''), full_name),
                            cccd = COALESCE(NULLIF($2, ''), cccd),
                            dob = COALESCE(NULLIF($3, ''), dob),
                            gender = COALESCE(NULLIF($4, ''), gender),
                            medical_notes = COALESCE(NULLIF($5, ''), medical_notes),
                            dietary = COALESCE(NULLIF($6, ''), dietary),
                            updated_at = CURRENT_TIMESTAMP
                        WHERE id = $7
                    `, [
                        b.name,
                        b.id_card || null,
                        b.dob || null,
                        b.gender || null,
                        medicalNotes,
                        b.diet || null,
                        existing.id
                    ]);

                    console.log(`  âœï¸  Cáº­p nháº­t: ${b.name} (${b.phone}) â†’ MÃ£: ${existing.csr_code}`);
                    updated++;
                } else {
                    const randNum = Math.floor(100000 + Math.random() * 900000);
                    const csrCode = '#CSR' + randNum;

                    await db.query(`
                        INSERT INTO crm_customers (csr_code, full_name, phone, cccd, dob, gender, medical_notes, dietary, loyalty_tier)
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'New')
                    `, [
                        csrCode,
                        b.name,
                        b.phone,
                        b.id_card || null,
                        b.dob || null,
                        b.gender || null,
                        medicalNotes,
                        b.diet || null
                    ]);

                    console.log(`  âœ… Táº¡o má»›i: ${b.name} (${b.phone}) â†’ MÃ£: ${csrCode}`);
                    created++;
                }
            } catch (innerErr) {
                console.error(`  âŒ Lá»—i vá»›i ${b.name} (${b.phone}):`, innerErr.message);
                skipped++;
            }
        }

        console.log('\n' + '='.repeat(60));
        console.log(`ðŸŽ‰ HoÃ n táº¥t Ä‘á»“ng bá»™!`);
        console.log(`   âœ… Táº¡o má»›i: ${created} khÃ¡ch hÃ ng`);
        console.log(`   âœï¸  Cáº­p nháº­t: ${updated} khÃ¡ch hÃ ng`);
        console.log(`   âŒ Bá» qua: ${skipped} khÃ¡ch hÃ ng`);
        console.log('='.repeat(60));

        // In báº£ng tá»•ng káº¿t
        const { rows: allCustomers } = await db.query('SELECT csr_code, full_name, phone, loyalty_tier FROM crm_customers ORDER BY created_at DESC');
        console.log('\nðŸ“Š Danh sÃ¡ch CRM hiá»‡n táº¡i:');
        console.log('â”€'.repeat(70));
        console.log(`${'MÃ£ CSR'.padEnd(14)} | ${'Há» TÃªn'.padEnd(25)} | ${'SÄT'.padEnd(14)} | Tier`);
        console.log('â”€'.repeat(70));
        allCustomers.forEach(c => {
            console.log(`${(c.csr_code || '').padEnd(14)} | ${(c.full_name || '').padEnd(25)} | ${(c.phone || '').padEnd(14)} | ${c.loyalty_tier || 'New'}`);
        });
        console.log('â”€'.repeat(70));
        console.log(`Tá»•ng: ${allCustomers.length} khÃ¡ch hÃ ng trong CRM\n`);

    } catch (error) {
        console.error('âŒ Lá»—i nghiÃªm trá»ng:', error);
    } finally {
        process.exit(0);
    }
}

syncBookingsToCRM();
