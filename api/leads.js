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
            const { rows } = await db.query('SELECT * FROM leads ORDER BY created_at DESC');
            return res.status(200).json(rows);
        }

        if (method === 'POST') {
            const { id, name, phone, tour, date, message, status, sale_id, sale_name, sale_avatar } = req.body;

            if (id) {
                // Update
                const query = `
                    UPDATE leads 
                    SET name=$1, phone=$2, tour=$3, date=$4, message=$5, status=$6, sale_id=$7, sale_name=$8, sale_avatar=$9
                    WHERE id=$10
                    RETURNING *;
                `;
                const values = [
                    name ?? null, phone ?? null, tour ?? null, date ?? null, message ?? null,
                    status ?? null, sale_id ?? null, sale_name ?? null, sale_avatar ?? null, id
                ];
                const { rows } = await db.query(query, values);
                return res.status(200).json(rows[0]);
            } else {
                // Insert
                const query = `
                    INSERT INTO leads (name, phone, tour, date, message, status, sale_id, sale_name, sale_avatar)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                    RETURNING *;
                `;
                const values = [name ?? null, phone ?? null, tour ?? null, date ?? null, message ?? null, status ?? 'Mới', sale_id ?? null, sale_name ?? null, sale_avatar ?? null];
                const { rows } = await db.query(query, values);
                const newLead = rows[0];

                // --- Tạo booking tương ứng để hiện trong trang Đơn Hàng (Sale) ---
                let newBooking = null;
                if (newLead) {
                    try {
                        const bookingQuery = `
                            INSERT INTO bookings (name, phone, tour, date, status, total_price, deposit, sale_id, sale_name, special)
                            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
                            RETURNING *;
                        `;
                        const bookingValues = [
                            newLead.name, newLead.phone, newLead.tour ?? null, newLead.date ?? null,
                            'Chờ tư vấn', 0, 0, null, null, newLead.message ?? null
                        ];
                        const bookingResult = await db.query(bookingQuery, bookingValues);
                        newBooking = bookingResult.rows[0];
                    } catch (bookingErr) {
                        console.error('Lỗi tạo booking từ lead:', bookingErr);
                    }
                }

                // --- Send Email Notification ---
                let mailStatus = null;
                if (newLead) {
                    mailStatus = await sendEmail({
                        subject: `🍀 Khách hàng mới: ${newLead.name}`,
                        html: `
                            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                                <h2 style="color: #E85D04;">Có khách hàng mới đăng kỹ tư vấn!</h2>
                                <p><b>Họ và tên:</b> ${newLead.name}</p>
                                <p><b>Số điện thoại:</b> ${newLead.phone}</p>
                                <p><b>Link Zalo:</b> <a href="https://zalo.me/${newLead.phone}">https://zalo.me/${newLead.phone}</a></p>
                                <p><b>Tour quan tâm:</b> ${newLead.tour}</p>
                                <p><b>Ngày dự kiến:</b> ${newLead.date}</p>
                                <p><b>Lời nhắn:</b> ${newLead.message || '(Không có)'}</p>
                                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                                <p style="font-size: 12px; color: #999;">Email được gửi tự động từ hệ thống CAM SITE RETREATS.</p>
                            </div>
                        `
                    });
                }

                return res.status(201).json({ ...newLead, _mailStatus: mailStatus, _bookingId: newBooking?.id });
            }
        }

        if (method === 'DELETE') {
            const { id } = req.query;
            if (!id) return res.status(400).json({ error: 'ID is required' });
            await db.query('DELETE FROM leads WHERE id = $1', [id]);
            return res.status(200).json({ success: true });
        }

        return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (error) {
        console.error('Error in leads API:', error);
        return res.status(500).json({ error: error.message });
    }
};
