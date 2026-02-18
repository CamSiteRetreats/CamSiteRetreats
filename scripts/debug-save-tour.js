const db = require('../api/db');

async function testSave() {
    const tour = {
        id: 1, // Assuming Tà Năng is ID 1
        name: "Tà Năng - Phan Dũng",
        image: "thumb1.png",
        image2: "",
        image3: "",
        image4: "",
        shortDesc: "Cung đường trekking đẹp nhất Việt Nam...",
        altitude: "1168M",
        level: "Trung Bình",
        region: "Miền Nam",
        type: "TREKKING",
        duration: "2 Ngày 1 Đêm",
        price: "2690000",
        sort_order: 0
    };

    const { id, name, image, image2, image3, image4, shortDesc, altitude, level, region, type, duration, price, sort_order } = tour;

    try {
        console.log('Attempting UPDATE...');
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
        console.log('Success:', rows[0]);
    } catch (error) {
        console.error('Error detail:', error);
    } finally {
        process.exit(0);
    }
}

testSave();
