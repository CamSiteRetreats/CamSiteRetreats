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
            const {
                id, name, phone, tour, date, status, total_price, deposit,
                sale_id, sale_name, customer_id, dob, gender, address,
                id_card, diet, trekking_pole, allergy, special, medal_name, commitments
            } = req.body;

            if (id) {
                // Update
                const query = `
                    UPDATE bookings 
                    SET name=$1, phone=$2, tour=$3, date=$4, status=$5, total_price=$6, deposit=$7, 
                        sale_id=$8, sale_name=$9, customer_id=$10, dob=$11, gender=$12, address=$13, 
                        id_card=$14, diet=$15, trekking_pole=$16, allergy=$17, special=$18, 
                        medal_name=$19, commitments=$20
                    WHERE id=$21
                    RETURNING *;
                `;
                const values = [
                    name, phone, tour, date, status, total_price, deposit,
                    sale_id, sale_name, customer_id, dob, gender, address,
                    id_card, diet, trekking_pole, allergy, special, medal_name, commitments, id
                ];
                const { rows } = await db.query(query, values);
                return res.status(200).json(rows[0]);
            } else {
                // Insert
                const query = `
                    INSERT INTO bookings (
                        name, phone, tour, date, status, total_price, deposit, 
                        sale_id, sale_name, customer_id, dob, gender, address, 
                        id_card, diet, trekking_pole, allergy, special, medal_name, commitments
                    )
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
                    RETURNING *;
                `;
                const values = [
                    name, phone, tour, date, status || 'Chờ xác nhận cọc', total_price, deposit,
                    sale_id, sale_name, customer_id, dob, gender, address,
                    id_card, diet, trekking_pole, allergy, special, medal_name, commitments
                ];
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
