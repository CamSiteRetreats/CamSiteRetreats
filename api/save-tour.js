const db = require('./db');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )

    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
    }

    try {
        if (req.method === 'POST') {
            const data = req.body;
            const {
                id, name, slug, price, region, type, duration,
                short_desc, long_desc, hero_image, image, image2, image3, image4,
                altitude, level, specs, itinerary, inclusions,
                exclusions, preparation, gallery
            } = data;

            if (id) {
                // Update
                const query = `
                    UPDATE tours SET 
                        name=$1, slug=$2, price=$3, region=$4, type=$5, duration=$6, 
                        short_desc=$7, long_desc=$8, hero_image=$9, image=$10, 
                        image2=$11, image3=$12, image4=$13, altitude=$14, level=$15, 
                        specs=$16, itinerary=$17, inclusions=$18, exclusions=$19, 
                        preparation=$20, gallery=$21
                    WHERE id=$22 RETURNING *
                `;
                const values = [
                    name, slug, price, region, type, duration,
                    short_desc, long_desc, hero_image, image,
                    image2, image3, image4, altitude, level,
                    JSON.stringify(specs), JSON.stringify(itinerary),
                    JSON.stringify(inclusions), JSON.stringify(exclusions),
                    JSON.stringify(preparation), JSON.stringify(gallery),
                    id
                ];
                const { rows } = await db.query(query, values);
                return res.status(200).json(rows[0]);
            } else {
                // Insert
                const query = `
                    INSERT INTO tours (
                        name, slug, price, region, type, duration, 
                        short_desc, long_desc, hero_image, image, 
                        image2, image3, image4, altitude, level, 
                        specs, itinerary, inclusions, exclusions, 
                        preparation, gallery
                    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21) 
                    RETURNING *
                `;
                const values = [
                    name, slug, price, region, type, duration,
                    short_desc, long_desc, hero_image, image,
                    image2, image3, image4, altitude, level,
                    JSON.stringify(specs), JSON.stringify(itinerary),
                    JSON.stringify(inclusions), JSON.stringify(exclusions),
                    JSON.stringify(preparation), JSON.stringify(gallery)
                ];
                const { rows } = await db.query(query, values);
                return res.status(201).json(rows[0]);
            }
        }

        if (req.method === 'DELETE') {
            const { id } = req.query;
            await db.query('DELETE FROM tours WHERE id = $1', [id]);
            return res.status(200).json({ success: true });
        }

        return res.status(405).send('Method Not Allowed');

    } catch (error) {
        console.error('Error in Vercel save-tour function:', error);
        res.status(500).json({ error: error.message });
    }
}
