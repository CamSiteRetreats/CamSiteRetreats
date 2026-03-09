const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

const updatedPrices = [
    { name: 'Tà Năng - Phan Dũng', price: 2690000 },
    { name: 'Bidoup - Tà Giang', price: 3550000 },
    { name: 'Thác Liêng Ài', price: 3750000 },
    { name: 'Núi Langbiang', price: 1100000 },
    { name: 'Mũi Kê Gà', price: 1550000 },
    { name: 'Yang Đoan', price: 1100000 },
    { name: 'Thác Mưa Bay', price: 2450000 },
    { name: 'Kỳ Quan San', price: 1000000 }
];

async function updatePrices() {
    try {
        await client.connect();
        console.log('Đang kết nối tới Neon Database...');

        for (const tour of updatedPrices) {
            const res = await client.query(
                'UPDATE tours SET price = $1 WHERE name = $2',
                [tour.price, tour.name]
            );
            console.log(`Cập nhật tour [${tour.name}]: ${tour.price.toLocaleString()}đ - ${res.rowCount} hàng bị ảnh hưởng`);
        }

        console.log('\n--- Hoàn tất cập nhật giá ---');

    } catch (err) {
        console.error('Lỗi khi cập nhật giá:', err);
    } finally {
        await client.end();
    }
}

updatePrices();
