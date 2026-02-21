const db = require('../api/_db');

async function checkAllImages() {
    try {
        const { rows } = await db.query('SELECT id, name, image, image2, image3, image4 FROM tours');
        console.log('--- ALL TOURS IMAGES CHECK ---');
        rows.forEach(tour => {
            console.log(`Tour [${tour.id}]: ${tour.name}`);
            console.log(`  Img1: ${tour.image}`);
            console.log(`  Img2: ${tour.image2}`);
            console.log(`  Img3: ${tour.image3}`);
            console.log(`  Img4: ${tour.image4}`);
        });
        console.log('------------------------------');
    } catch (error) {
        console.error('Error fetching tours:', error);
    } finally {
        process.exit(0);
    }
}

checkAllImages();
