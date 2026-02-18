const db = require('./_db');

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
            const { rows } = await db.query('SELECT * FROM bookings ORDER BY booking_date DESC');
            return res.status(200).json(rows);
        }

        if (method === 'POST') {
            const { id, tour_id, schedule_id, customer_name, customer_email, customer_phone, num_people, total_price, deposit_paid, payment_status, status, member_list, note } = req.body;

            if (id) {
                // Update
                const query = `
                    UPDATE bookings 
                    SET tour_id=$1, schedule_id=$2, customer_name=$3, customer_email=$4, customer_phone=$5, 
                        num_people=$6, total_price=$7, deposit_paid=$8, payment_status=$9, status=$10, 
                        member_list=$11, note=$12
                    WHERE id=$13
                    RETURNING *;
                `;
                const values = [tour_id, schedule_id, customer_name, customer_email, customer_phone, num_people, total_price, deposit_paid, payment_status, status, JSON.stringify(member_list), note, id];
                const { rows } = await db.query(query, values);
                return res.status(200).json(rows[0]);
            } else {
                // Insert
                const query = `
                    INSERT INTO bookings (tour_id, schedule_id, customer_name, customer_email, customer_phone, num_people, total_price, deposit_paid, payment_status, status, member_list, note)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
                    RETURNING *;
                `;
                const values = [tour_id, schedule_id, customer_name, customer_email, customer_phone, num_people, total_price, deposit_paid, payment_status, status || 'confirmed', JSON.stringify(member_list), note];
                const { rows } = await db.query(query, values);
                return res.status(201).json(rows[0]);
            }
        }

        if (method === 'DELETE') {
            const { id } = req.query;
            if (!id) return res.status(400).json({ error: 'ID is required' });
            await db.query('DELETE FROM bookings WHERE id = $1', [id]);
            return res.status(200).json({ success: true });
        }

        return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (error) {
        console.error('Error in bookings API:', error);
        return res.status(500).json({ error: error.message });
    }
};
