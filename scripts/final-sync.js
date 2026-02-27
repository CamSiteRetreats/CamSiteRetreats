require('dotenv').config();
const db = require('../api/_db');

async function finalSync() {
    try {
        console.log('--- 🔄 THỰC HIỆN ĐỒNG BỘ TOÀN DIỆN HỆ THỐNG ---');

        // 1. Lấy Data
        const { rows: bookings } = await db.query("SELECT * FROM bookings ORDER BY created_at DESC");
        const { rows: customers } = await db.query("SELECT * FROM crm_customers");

        console.log(`Phân tích ${bookings.length} đơn hàng...`);

        let newCrmCount = 0;
        let updatedBookingCount = 0;

        for (const b of bookings) {
            let customerId = b.customer_id;
            let currentCustomer = customers.find(c => c.phone === b.phone);

            // A. Nếu chưa có trong CRM -> Tạo mới
            if (!currentCustomer) {
                const csrCode = '#CSR' + Math.floor(Math.random() * 900000 + 100000);
                const { rows: newC } = await db.query(`
                    INSERT INTO crm_customers (csr_code, full_name, phone, cccd, dob, gender, medical_notes, dietary, loyalty_tier)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                    RETURNING *
                `, [
                    csrCode, b.name, b.phone, b.id_card || '', b.dob || null,
                    b.gender || 'Khác', b.allergy || '', b.diet || '', 'Member'
                ]);
                currentCustomer = newC[0];
                customers.push(currentCustomer); // Thêm vào danh sách tạm để check cho các booking sau
                console.log(`✨ Đã tạo hồ sơ CRM mới cho ${b.name} (${b.phone}) -> ${csrCode}`);
                newCrmCount++;
            }

            // B. Đảm bảo Booking có đúng Customer ID
            if (b.customer_id !== currentCustomer.csr_code) {
                await db.query("UPDATE bookings SET customer_id = $1 WHERE id = $2", [currentCustomer.csr_code, b.id]);
                b.customer_id = currentCustomer.csr_code;
                updatedBookingCount++;
            }

            // C. Sync thông tin chi tiết (Lấy từ Booking đắp sang CRM nếu CRM rỗng, và ngược lại)
            if (currentCustomer) {
                let cUpdateNeeded = false;
                const cUpdates = {};

                // Book -> CRM
                if (!currentCustomer.cccd && b.id_card) { cUpdates.cccd = b.id_card; cUpdateNeeded = true; }
                if (!currentCustomer.dob && b.dob) { cUpdates.dob = b.dob; cUpdateNeeded = true; }
                if ((!currentCustomer.gender || currentCustomer.gender === 'Khác') && b.gender && b.gender !== 'Khác') { cUpdates.gender = b.gender; cUpdateNeeded = true; }

                if (cUpdateNeeded) {
                    const fields = Object.keys(cUpdates);
                    const values = Object.values(cUpdates);
                    const clause = fields.map((f, i) => `${f} = $${i + 1}`).join(', ');
                    values.push(currentCustomer.id);
                    await db.query(`UPDATE crm_customers SET ${clause}, updated_at = NOW() WHERE id = $${values.length}`, values);
                    // Cập nhật lại list tạm
                    Object.assign(currentCustomer, cUpdates);
                }

                // CRM -> Booking (Restore data requested)
                let bUpdateNeeded = false;
                const bUpdates = {};
                if (!b.id_card && currentCustomer.cccd) { bUpdates.id_card = currentCustomer.cccd; bUpdateNeeded = true; }
                if (!b.dob && currentCustomer.dob) { bUpdates.dob = currentCustomer.dob; bUpdateNeeded = true; }
                if ((!b.gender || b.gender === 'Khác') && currentCustomer.gender && currentCustomer.gender !== 'Khác') { bUpdates.gender = currentCustomer.gender; bUpdateNeeded = true; }

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

        console.log(`\n✅ HOÀN THÀNH:`);
        console.log(`- Đã tạo mới ${newCrmCount} hồ sơ CRM.`);
        console.log(`- Đã cập nhật/khôi phục ${updatedBookingCount} lượt dữ liệu đơn hàng.`);

    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}
finalSync();
