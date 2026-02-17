const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

const uploadImage = (path) => path; // Placeholder if we need real upload, currently specific paths

const tours = [
    {
        name: 'Tà Năng - Phan Dũng',
        image: 'TOUR/Tanang/thumb1.png',
        region: 'Miền Nam',
        type: 'TREKKING',
        duration: '2 Ngày 1 Đêm',
        price: 3200000,
        short_desc: 'Cung đường trekking đẹp nhất Việt Nam, đi qua 3 tỉnh Lâm Đồng, Ninh Thuận, Bình Thuận. Trải nghiệm đồi cỏ cháy ngút ngàn.',
        schedules: [
            { start_date: '2026-03-20', slots: 12, status: 'Đang mở' },
            { start_date: '2026-03-27', slots: 8, status: 'Đang mở' },
            { start_date: '2026-04-03', slots: 0, status: 'Hết chỗ' }
        ]
    },
    {
        name: 'Bidoup - Tà Giang',
        image: 'TOUR/Tanang/thumb1.png',
        region: 'Miền Trung',
        type: 'TREKKING',
        duration: '2 Ngày 1 Đêm',
        price: 3550000,
        short_desc: 'Chinh phục nóc nhà tỉnh Lâm Đồng và băng qua những cánh rừng thông nguyên sinh tuyệt đẹp.',
        schedules: [
            { start_date: '2026-03-15', slots: 10, status: 'Đang mở' },
            { start_date: '2026-03-22', slots: 5, status: 'Đang mở' }
        ]
    },
    {
        name: 'Thác Liêng Ài',
        image: 'TOUR/Tanang/thumb1.png',
        region: 'Miền Nam',
        type: 'CANYONING',
        duration: '2 Ngày 1 Đêm',
        price: 3750000,
        short_desc: 'Trải nghiệm đu dây vượt thác đầy phấn khích tại một trong những con thác hoang sơ nhất.',
        schedules: [
            { start_date: '2026-03-10', slots: 6, status: 'Đang mở' }
        ]
    },
    {
        name: 'Núi Langbiang',
        image: 'TOUR/Tanang/thumb1.png',
        region: 'Miền Trung',
        type: 'HIKING',
        duration: 'Trong ngày',
        price: 1100000,
        short_desc: 'Hành trình nhẹ nhàng ngắm nhìn toàn cảnh thành phố Đà Lạt mộng mơ từ trên cao.',
        schedules: [
            { start_date: '2026-03-01', slots: 20, status: 'Đang mở' } // Mock daily
        ]
    },
    {
        name: 'Mũi Kê Gà',
        image: 'TOUR/Tanang/thumb1.png',
        region: 'Miền Nam',
        type: 'CAMPING',
        duration: '2 Ngày 1 Đêm',
        price: 1550000,
        short_desc: 'Cắm trại bên bờ biển, ngắm hoàng hôn và bình minh tại ngọn hải đăng cổ nhất Việt Nam.',
        schedules: [
            { start_date: '2026-03-12', slots: 15, status: 'Đang mở' }
        ]
    }
];

async function seed() {
    try {
        await client.connect();
        console.log('Connected to Neon!');

        // 1. Create Tables (Safety check)
        await client.query(`
            CREATE TABLE IF NOT EXISTS tours (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                image TEXT,
                price INTEGER,
                region VARCHAR(50),
                type VARCHAR(50),
                duration VARCHAR(50),
                short_desc TEXT
            );
        `);
        console.log('Verified table "tours".');

        await client.query(`
             CREATE TABLE IF NOT EXISTS schedules (
                id SERIAL PRIMARY KEY,
                tour_name VARCHAR(255),
                start_date DATE,
                slots INTEGER,
                status VARCHAR(50)
            );
        `);
        console.log('Verified table "schedules".');

        // 2. Clear old data (Optional: for testing)
        // await client.query('TRUNCATE TABLE tours, schedules RESTART IDENTITY;');

        // Check if data exists
        const check = await client.query('SELECT count(*) FROM tours');
        if (parseInt(check.rows[0].count) > 0) {
            console.log('Data already exists. Skipping seed.');
            return;
        }

        // 3. Insert Data
        for (const tour of tours) {
            const res = await client.query(
                'INSERT INTO tours (name, image, region, type, duration, price, short_desc) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id',
                [tour.name, tour.image, tour.region, tour.type, tour.duration, tour.price, tour.short_desc]
            );
            console.log(`Inserted tour: ${tour.name}`);

            if (tour.schedules) {
                for (const sch of tour.schedules) {
                    await client.query(
                        'INSERT INTO schedules (tour_name, start_date, slots, status) VALUES ($1, $2, $3, $4)',
                        [tour.name, sch.start_date, sch.slots, sch.status]
                    );
                }
            }
        }
        console.log('Seeding completed successfully!');

    } catch (err) {
        console.error('Error seeding data:', err);
    } finally {
        await client.end();
    }
}

seed();
