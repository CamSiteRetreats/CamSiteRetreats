const db = require('./_db');
const { sendEmail } = require('./_mail');

module.exports = async (req, res) => {
    const { method } = req;

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        if (method === 'GET') {
            const { rows } = await db.query('SELECT * FROM bookings ORDER BY created_at DESC');
            return res.status(200).json(rows);
        }

        if (method === 'POST') {
            const body = req.body;
            const { id } = body;

            if (id) {
                // Partial Update logic
                const fields = [];
                const values = [];
                let idx = 1;

                // List of possible fields to update
                const possibleFields = [
                    'name', 'phone', 'tour', 'date', 'status', 'total_price', 'deposit', 'discount',
                    'sale_id', 'sale_name', 'customer_id', 'dob', 'gender', 'address',
                    'id_card', 'diet', 'trekking_pole', 'allergy', 'special', 'medal_name', 'commitments', 'deposit_required',
                    'services_booked', 'coupon_code', 'pickup_point', 'schedule_id'
                ];

                for (const field of possibleFields) {
                    if (body.hasOwnProperty(field)) {
                        fields.push(`${field}=$${idx}`);
                        values.push(body[field]);
                        idx++;
                    }
                }

                if (fields.length === 0) return res.status(400).json({ error: 'No fields to update' });

                values.push(id);
                const query = `
                    UPDATE bookings 
                    SET ${fields.join(', ')}
                    WHERE id=$${idx}
                    RETURNING *;
                `;
                const { rows } = await db.query(query, values);
                if (rows.length === 0) return res.status(404).json({ error: 'Booking not found' });
                return res.status(200).json(rows[0]);
            } else {
                // Insert
                const {
                    name, phone, tour, date, status, total_price, deposit, discount,
                    sale_id, sale_name, customer_id, dob, gender, address,
                    id_card, diet, trekking_pole, allergy, special, medal_name, commitments, deposit_required,
                    services_booked, coupon_code, pickup_point
                } = body;

                const query = `
                    INSERT INTO bookings (
                        name, phone, tour, date, status, total_price, deposit, discount,
                        sale_id, sale_name, customer_id, dob, gender, address, 
                        id_card, diet, trekking_pole, allergy, special, medal_name, commitments, deposit_required,
                        services_booked, coupon_code, pickup_point
                    )
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25)
                    RETURNING *;
                `;
                const values = [
                    name ?? null, phone ?? null, tour ?? null, date ?? null, status ?? 'Chờ xác nhận cọc', total_price ?? null, deposit ?? null, discount ?? 0,
                    sale_id ?? null, sale_name ?? null, customer_id ?? null, dob ?? null, gender ?? null, address ?? null,
                    id_card ?? null, diet ?? null, trekking_pole ?? null, allergy ?? null, special ?? null, medal_name ?? null, commitments ?? null, deposit_required ?? 1000000,
                    services_booked ?? null, coupon_code ?? null, pickup_point ?? null
                ];
                const { rows } = await db.query(query, values);
                const newBooking = rows[0];

                // --- Send Email Notification ---
                let mailStatus = null;
                if (newBooking) {
                    const formattedPrice = (newBooking.total_price || 0).toLocaleString('vi-VN') + 'đ';
                    const formattedDeposit = (newBooking.deposit || 0).toLocaleString('vi-VN') + 'đ';

                    mailStatus = await sendEmail({
                        subject: `🔥 ĐƠN ĐẶT TOUR MỚI: ${newBooking.name}`,
                        html: `
                            <div style="font-family: sans-serif; padding: 25px; border: 2px solid #E85D04; border-radius: 15px; max-width: 600px;">
                                <h2 style="color: #E85D04; margin-top: 0;">🎉 Có đơn đặt tour mới từ Website!</h2>
                                <div style="background: #FFF8F0; padding: 15px; border-radius: 10px; margin-bottom: 20px;">
                                    <p style="margin: 5px 0;"><b>Tour:</b> ${newBooking.tour}</p>
                                    <p style="margin: 5px 0;"><b>Ngày khởi hành:</b> ${newBooking.date}</p>
                                    <p style="margin: 5px 0;"><b>Tổng tiền:</b> <span style="color: #E85D04; font-size: 18px;">${formattedPrice}</span></p>
                                    <p style="margin: 5px 0;"><b>Đã cọc:</b> ${formattedDeposit}</p>
                                </div>
                                
                                <h3 style="border-bottom: 1px solid #eee; padding-bottom: 5px;">Thông tin khách hàng</h3>
                                <p><b>Họ và tên:</b> ${newBooking.name}</p>
                                <p><b>Số điện thoại:</b> ${newBooking.phone}</p>
                                <p><b>Link Zalo:</b> <a href="https://zalo.me/${newBooking.phone}">https://zalo.me/${newBooking.phone}</a></p>
                                <p><b>CCCD:</b> ${newBooking.id_card || '(Chưa cung cấp)'}</p>
                                <p><b>Địa chỉ:</b> ${newBooking.address || '(Chưa cung cấp)'}</p>
                                
                                <h3 style="border-bottom: 1px solid #eee; padding-bottom: 5px;">Yêu cầu đặc biệt</h3>
                                <p><b>Ăn uống:</b> ${newBooking.diet || 'Bình thường'}</p>
                                <p><b>Gậy trekking:</b> ${newBooking.trekking_pole || 'Không'}</p>
                                <p><b>Dị ứng/Lưu ý:</b> ${newBooking.allergy || 'Không'}</p>
                                <p><b>Thông tin thêm:</b> ${newBooking.special || '(Không có)'}</p>
                                
                                <hr style="border: 0; border-top: 1px solid #eee; margin: 25px 0;">
                                <p style="font-size: 11px; color: #999; text-align: center;">Hệ thống CAM SITE RETREATS - Tự động thông báo</p>
                            </div>
                        `
                    });
                }

                return res.status(201).json({ ...newBooking, _mailStatus: mailStatus });
            }
        }

        if (method === 'DELETE') {
            const { id } = req.query;
            if (!id) return res.status(400).json({ error: 'ID is required' });

            // Lấy thông tin booking trước khi xóa (để biết phone)
            const { rows: bookingRows } = await db.query('SELECT phone, name FROM bookings WHERE id = $1', [id]);
            const deletedBooking = bookingRows[0];

            // Xóa booking
            await db.query('DELETE FROM bookings WHERE id = $1', [id]);

            // Kiểm tra CRM: nếu khách KHÔNG có booking "Hoàn thành" nào khác → xóa khỏi CRM
            if (deletedBooking && deletedBooking.phone) {
                const { rows: completedBookings } = await db.query(
                    `SELECT id FROM bookings WHERE phone = $1 AND status IN ('Hoàn thành', 'Đã hoàn thành')`,
                    [deletedBooking.phone]
                );

                if (completedBookings.length === 0) {
                    // Kiểm tra xem còn booking nào đã cọc không
                    const { rows: otherBookings } = await db.query(
                        `SELECT id FROM bookings WHERE phone = $1 AND status NOT IN ('Đã hủy')`,
                        [deletedBooking.phone]
                    );

                    if (otherBookings.length === 0) {
                        // Không còn booking nào → xóa khỏi CRM
                        await db.query('DELETE FROM crm_customers WHERE phone = $1', [deletedBooking.phone]);
                        console.log(`🗑️ Đã xóa khách ${deletedBooking.name} (${deletedBooking.phone}) khỏi CRM vì không còn booking nào.`);
                    }
                } else {
                    console.log(`🔒 Giữ khách ${deletedBooking.name} trong CRM vì đã hoàn thành tour trước đó.`);
                }
            }

            return res.status(200).json({ success: true });
        }

        return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (error) {
        console.error('Error in bookings API:', error);
        return res.status(500).json({ error: error.message });
    }
};
