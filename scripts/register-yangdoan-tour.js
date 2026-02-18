const db = require('../api/db');

async function registerTour() {
    const tour = {
        name: "Yang Đoan - Chinh Phục Đỉnh Cao",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000", // Placeholder
        image2: "",
        image3: "",
        image4: "",
        shortDesc: "Chinh phục đỉnh Yang Đoan (1812m), hiking Linh Quy Pháp Ấn đón bình minh và khám phá hồ Kala Di Linh.",
        altitude: "1.812m",
        level: "Khó",
        region: "Miền Nam",
        type: "TREKKING",
        duration: "1 Ngày 1 Đêm",
        price: 1100000,
        sort_order: 10
    };

    try {
        console.log('Registering Yang Đoan tour...');

        // Check if exists
        const checkRes = await db.query('SELECT id FROM tours WHERE name = $1', [tour.name]);

        let result;
        if (checkRes.rows.length > 0) {
            console.log('Tour exists, updating...');
            const query = `
                UPDATE tours 
                SET short_desc = $1, altitude = $2, level = $3, duration = $4, price = $5, sort_order = $6
                WHERE name = $7
                RETURNING *;
            `;
            const values = [tour.shortDesc, tour.altitude, tour.level, tour.duration, tour.price, tour.sort_order, tour.name];
            result = await db.query(query, values);
        } else {
            console.log('Tour does not exist, inserting...');
            const query = `
                INSERT INTO tours (name, image, image2, image3, image4, short_desc, altitude, level, region, type, duration, price, sort_order)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
                RETURNING *;
            `;
            const values = [tour.name, tour.image, tour.image2, tour.image3, tour.image4, tour.shortDesc, tour.altitude, tour.level, tour.region, tour.type, tour.duration, tour.price, tour.sort_order];
            result = await db.query(query, values);
        }

        console.log('Success! Tour registered/updated:', result.rows[0].name);
        process.exit(0);
    } catch (error) {
        console.error('Registration failed:', error);
        process.exit(1);
    }
}

registerTour();
