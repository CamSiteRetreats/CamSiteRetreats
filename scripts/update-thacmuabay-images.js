const db = require('../api/_db');

async function updateTourImages() {
    const tourId = 14;
    const images = {
        image: 'tour/thacmuabay/muabay (3).png',
        image2: 'tour/thacmuabay/muabay (10).png',
        image3: 'tour/thacmuabay/muabay (8).png',
        image4: 'tour/thacmuabay/muabay (2).png'
    };

    try {
        const query = `
            UPDATE tours 
            SET image = $1, image2 = $2, image3 = $3, image4 = $4
            WHERE id = $5
            RETURNING *;
        `;
        const values = [images.image, images.image2, images.image3, images.image4, tourId];
        const { rows } = await db.query(query, values);

        if (rows.length > 0) {
            console.log('SUCCESS: Updated tour 14 images.');
            console.log('New image config:', {
                image: rows[0].image,
                image2: rows[0].image2,
                image3: rows[0].image3,
                image4: rows[0].image4
            });
        } else {
            console.log('ERROR: Tour 14 not found.');
        }
    } catch (error) {
        console.error('DATABASE ERROR:', error);
    } finally {
        process.exit(0);
    }
}

updateTourImages();
