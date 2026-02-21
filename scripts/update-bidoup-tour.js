const db = require('../api/_db');

async function updateBidoupTour() {
    const tourId = 11;
    const updateData = {
        name: 'Bidoup - Tà Giang',
        image: 'tour/Bidoup/bdtg (5).jpg',
        image2: 'tour/Bidoup/bdtg (7).jpg',
        image3: 'tour/Bidoup/bdtg (2).jpg',
        image4: 'tour/Bidoup/bdtg (3).jpg'
    };

    try {
        const query = `
            UPDATE tours 
            SET name = $1, image = $2, image2 = $3, image3 = $4, image4 = $5
            WHERE id = $6
            RETURNING *;
        `;
        const values = [
            updateData.name,
            updateData.image,
            updateData.image2,
            updateData.image3,
            updateData.image4,
            tourId
        ];
        const { rows } = await db.query(query, values);

        if (rows.length > 0) {
            console.log('SUCCESS: Updated Bidoup Tà Giang (ID 11).');
            console.log('New data:', rows[0]);
        } else {
            console.log('ERROR: Tour ID 11 not found.');
        }
    } catch (error) {
        console.error('DATABASE ERROR:', error);
    } finally {
        process.exit(0);
    }
}

updateBidoupTour();
