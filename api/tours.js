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
            const { rows } = await db.query('SELECT * FROM tours ORDER BY sort_order ASC, id ASC');
            return res.status(200).json(rows);
        }

        if (method === 'POST') {
            const { id, name, image, image2, image3, image4, shortDesc, altitude, level, region, type, duration, price, sort_order, custom_domain } = req.body;
            if (!name || !price) {
                return res.status(400).json({ error: 'Name and Price are required' });
            }

            if (id) {
                // Update
                const query = `
                    UPDATE tours 
                    SET name = $1, image = $2, image2 = $3, image3 = $4, image4 = $5, 
                        short_desc = $6, altitude = $7, level = $8, region = $9, 
                        type = $10, duration = $11, price = $12, sort_order = $13,
                        custom_domain = $14
                    WHERE id = $15
                    RETURNING *;
                `;
                const values = [name, image, image2, image3, image4, shortDesc, altitude, level, region, type, duration, price, sort_order || 0, custom_domain || null, id];
                const { rows } = await db.query(query, values);
                return res.status(200).json(rows[0]);
            } else {
                // Insert
                const query = `
                    INSERT INTO tours (name, image, image2, image3, image4, short_desc, altitude, level, region, type, duration, price, sort_order, custom_domain)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
                    RETURNING *;
                `;
                const values = [name, image, image2, image3, image4, shortDesc, altitude, level, region, type, duration, price, sort_order || 0, custom_domain || null];
                const { rows } = await db.query(query, values);
                return res.status(201).json(rows[0]);
            }
        }

        if (method === 'DELETE') {
            const { id } = req.query; // Expecting ?id=X for DELETE
            if (!id) return res.status(400).json({ error: 'ID is required' });
            await db.query('DELETE FROM tours WHERE id = $1', [id]);
            return res.status(200).json({ success: true });
        }

        return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (error) {
        console.error('Error in tours API:', error);
        return res.status(500).json({ error: error.message });
    }
};
