const db = require('./db');

exports.handler = async (event, context) => {
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    };

    if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers };

    try {
        if (event.httpMethod === 'POST') {
            const data = JSON.parse(event.body);
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
                return { statusCode: 200, headers, body: JSON.stringify(rows[0]) };
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
                return { statusCode: 201, headers, body: JSON.stringify(rows[0]) };
            }
        }

        if (event.httpMethod === 'DELETE') {
            const { id } = event.queryStringParameters;
            await db.query('DELETE FROM tours WHERE id = $1', [id]);
            return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
        }

        return { statusCode: 405, headers, body: 'Method Not Allowed' };

    } catch (error) {
        console.error('Error in save-tour function:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message })
        };
    }
};
