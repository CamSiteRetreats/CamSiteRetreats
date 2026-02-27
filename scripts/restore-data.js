require('dotenv').config();
const db = require('../api/_db');

async function restoreData() {
    try {
        console.log('--- 🚀 Bắt đầu khôi phục dữ liệu từ Database & CRM ---');

        // 1. Lấy toàn bộ Bookings và CRM
        const { rows: bookings } = await db.query("SELECT * FROM bookings ORDER BY created_at DESC");
        const { rows: customers } = await db.query("SELECT * FROM crm_customers");

        console.log(`Đang phân tích ${bookings.length} đơn hàng và ${customers.length} hồ sơ CRM...`);

        let updatedCount = 0;

        for (const b of bookings) {
            let needsUpdate = false;
            const updates = {};

            // Tìm thông tin từ CRM dựa trên SĐT
            const customer = customers.find(c => c.phone === b.phone);

            // Tìm thông tin từ các Booking khác của cùng SĐT (để lấy Address chẳng hạn)
            const otherBookings = bookings.filter(ob => ob.phone === b.phone && ob.id !== b.id);
            const bookingWithAddress = otherBookings.find(ob => ob.address && ob.address.trim().length > 0);
            const bookingWithID = otherBookings.find(ob => ob.id_card && ob.id_card.trim().length > 0);
            const bookingWithDOB = otherBookings.find(ob => ob.dob);

            // --- Khôi phục Customer ID ---
            if (!b.customer_id && customer) {
                updates.customer_id = customer.csr_code;
                needsUpdate = true;
            }

            // --- Khôi phục CCCD ---
            if (!b.id_card || b.id_card.trim() === '') {
                const sourceCCCD = (customer && customer.cccd) || (bookingWithID && bookingWithID.id_card);
                if (sourceCCCD) {
                    updates.id_card = sourceCCCD;
                    needsUpdate = true;
                }
            }

            // --- Khôi phục Địa chỉ (CRM ko có nên lấy từ Booking khác) ---
            if (!b.address || b.address.trim() === '') {
                if (bookingWithAddress) {
                    updates.address = bookingWithAddress.address;
                    needsUpdate = true;
                }
            }

            // --- Khôi phục Ngày sinh ---
            if (!b.dob) {
                const sourceDOB = (customer && customer.dob) || (bookingWithDOB && bookingWithDOB.dob);
                if (sourceDOB) {
                    updates.dob = sourceDOB;
                    needsUpdate = true;
                }
            }

            // --- Khôi phục Giới tính ---
            if (!b.gender || b.gender === 'Khác') {
                const sourceGender = (customer && customer.gender && customer.gender !== 'Khác') ? customer.gender : null;
                if (sourceGender) {
                    updates.gender = sourceGender;
                    needsUpdate = true;
                }
            }

            // --- Khôi phục Ăn uống / Dị ứng ---
            if (!b.diet || b.diet === 'Không' || b.diet === 'Bình Thường') {
                if (customer && customer.dietary && customer.dietary !== 'Bình Thường' && customer.dietary !== 'Không') {
                    updates.diet = customer.dietary;
                    needsUpdate = true;
                }
            }
            if (!b.allergy || b.allergy.trim() === '') {
                if (customer && customer.medical_notes && customer.medical_notes.trim() !== '') {
                    updates.allergy = customer.medical_notes;
                    needsUpdate = true;
                }
            }

            if (needsUpdate) {
                const fields = Object.keys(updates);
                const values = Object.values(updates);
                const setClause = fields.map((f, i) => `${f} = $${i + 1}`).join(', ');
                values.push(b.id);

                await db.query(`UPDATE bookings SET ${setClause} WHERE id = $${values.length}`, values);
                console.log(`✅ Đã cập nhật ID:${b.id} (${b.name}) -> ${fields.join(', ')}`);
                updatedCount++;
            }
        }

        console.log(`\n🎉 Xong! Đã khôi phục thông tin cho ${updatedCount} đơn hàng.`);

    } catch (err) {
        console.error('❌ Lỗi:', err);
    } finally {
        process.exit(0);
    }
}

restoreData();
