const db = require('../api/_db');

async function updateTourImages() {
    const tourId = 9;
    const images = {
        image: 'tour/Yangdoan/yangdoan (6).jpg',
        image2: 'tour/Yangdoan/yangdoan (7).jpg',
        image3: 'tour/Yangdoan/yangdoan (12).jpg',
        image4: 'tour/Yangdoan/yangdoan (5).jpg'
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
            console.log('SUCCESS: Updated tour 9 images.');
            console.log('New image config:', {
                image: rows[0].image,
                image2: rows[0].image2,
                image3: rows[0].image3,
                image4: rows[0].image4
            });
        } else {
            console.log('ERROR: Tour 9 not found.');
        }
    } catch (error) {
        console.error('DATABASE ERROR:', error);
    } finally {
        process.exit(0);
    }
}

updateTourImages();
