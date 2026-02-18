const db = require('./db');

module.exports = async (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { id, name, image, image2, image3, image4, shortDesc, altitude, level, region, type, duration, price, sort_order } = req.body;

    if (!name || !price) {
        return res.status(400).json({ error: 'Name and Price are required' });
    }

    try {
        if (id) {
            // Update
            const query = `
                UPDATE tours 
                SET name = $1, image = $2, image2 = $3, image3 = $4, image4 = $5, 
                    short_desc = $6, altitude = $7, level = $8, region = $9, 
                    type = $10, duration = $11, price = $12, sort_order = $13
                WHERE id = $14
                RETURNING *;
            `;
            const values = [name, image, image2, image3, image4, shortDesc, altitude, level, region, type, duration, price, sort_order || 0, id];
            const { rows } = await db.query(query, values);
            return res.status(200).json(rows[0]);
        } else {
            // Insert
            const query = `
                INSERT INTO tours (name, image, image2, image3, image4, short_desc, altitude, level, region, type, duration, price, sort_order)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
                RETURNING *;
            `;
            const values = [name, image, image2, image3, image4, shortDesc, altitude, level, region, type, duration, price, sort_order || 0];
            const { rows } = await db.query(query, values);
            return res.status(201).json(rows[0]);
        }
    } catch (error) {
        console.error('Error saving tour:', error);
        return res.status(500).json({ error: 'Failed to save tour' });
    }
};
