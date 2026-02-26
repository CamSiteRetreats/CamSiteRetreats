/**
 * Script: Đồng bộ khách hàng từ bảng bookings sang bảng crm_customers
 * - Query tất cả bookings (DISTINCT theo phone)
 * - Upsert vào crm_customers (dựa trên phone)
 * - Tạo mã #CSR + 6 số cho khách chưa có mã
 * 
 * Chạy: node scripts/sync-bookings-to-crm.js
 */

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const db = require('../api/_db');

async function syncBookingsToCRM() {
    console.log('🔄 Bắt đầu đồng bộ khách hàng từ Bookings → CRM...\n');

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

        console.log(`📋 Tìm thấy ${bookings.length} khách hàng duy nhất (theo SĐT) trong bảng bookings.\n`);

        let created = 0;
        let updated = 0;
        let skipped = 0;

        for (const b of bookings) {
            try {
                const check = await db.query('SELECT id, csr_code FROM crm_customers WHERE phone = $1', [b.phone]);

                // Map booking fields → CRM fields
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

                    console.log(`  ✏️  Cập nhật: ${b.name} (${b.phone}) → Mã: ${existing.csr_code}`);
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

                    console.log(`  ✅ Tạo mới: ${b.name} (${b.phone}) → Mã: ${csrCode}`);
                    created++;
                }
            } catch (innerErr) {
                console.error(`  ❌ Lỗi với ${b.name} (${b.phone}):`, innerErr.message);
                skipped++;
            }
        }

        console.log('\n' + '='.repeat(60));
        console.log(`🎉 Hoàn tất đồng bộ!`);
        console.log(`   ✅ Tạo mới: ${created} khách hàng`);
        console.log(`   ✏️  Cập nhật: ${updated} khách hàng`);
        console.log(`   ❌ Bỏ qua: ${skipped} khách hàng`);
        console.log('='.repeat(60));

        // In bảng tổng kết
        const { rows: allCustomers } = await db.query('SELECT csr_code, full_name, phone, loyalty_tier FROM crm_customers ORDER BY created_at DESC');
        console.log('\n📊 Danh sách CRM hiện tại:');
        console.log('─'.repeat(70));
        console.log(`${'Mã CSR'.padEnd(14)} | ${'Họ Tên'.padEnd(25)} | ${'SĐT'.padEnd(14)} | Tier`);
        console.log('─'.repeat(70));
        allCustomers.forEach(c => {
            console.log(`${(c.csr_code || '').padEnd(14)} | ${(c.full_name || '').padEnd(25)} | ${(c.phone || '').padEnd(14)} | ${c.loyalty_tier || 'New'}`);
        });
        console.log('─'.repeat(70));
        console.log(`Tổng: ${allCustomers.length} khách hàng trong CRM\n`);

    } catch (error) {
        console.error('❌ Lỗi nghiêm trọng:', error);
    } finally {
        process.exit(0);
    }
}

syncBookingsToCRM();
