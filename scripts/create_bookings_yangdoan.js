require('dotenv').config();
const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

// 5 khách hàng cần tạo
const inputCustomers = [
    { name: 'Đỗ Phạm Tạo', phone: '0335302265' },
    { name: 'Võ Ngọc Thanh Quỳnh', phone: '0352948398' },
    { name: 'Lê Nguyễn Vĩnh Khang', phone: '0375575582' },
    { name: 'Vũ Tiến Hoạt', phone: '0869857781' },
    { name: 'Tạ Ngô Anh Huy', phone: '0973715801' },
];

const TOUR_DATE = '2026-09-20';
const STATUS = 'Chờ xác nhận cọc';
const DEPOSIT_REQUIRED = 1000000;

async function run() {
    // 1. Tìm thông tin tour Yang Đoan
    let tourName = 'Yang Đoan';
    let tourPrice = 2890000;
    try {
        const tours = await sql`SELECT id, name, price FROM tours WHERE name ILIKE '%yang%' LIMIT 1`;
        console.log('Tour in DB:', tours);
        if (tours.length > 0) {
            tourName = tours[0].name;
            tourPrice = tours[0].price || 2890000;
        }
    } catch (e) {
        console.log('Error querying tours table:', e.message);
    }

    console.log(`\n=== TẠO 5 ĐƠN HÀNG CHO TOUR: ${tourName} (${TOUR_DATE}) ===`);

    const createdList = [];

    for (const c of inputCustomers) {
        // Tra cứu xem khách này đã từng đi chưa để lấy thêm thông tin nếu có
        const old = await sql`
            SELECT dob, id_card, address, gender
            FROM bookings
            WHERE phone = ${c.phone} AND name ILIKE ${c.name}
            ORDER BY id DESC LIMIT 1
        `;

        let dob = null;
        let idCard = '';
        let address = '';
        let gender = 'Khác';

        if (old.length > 0) {
            console.log(`Tìm thấy thông tin cũ của khách: ${c.name} (${c.phone})`);
            dob = old[0].dob || null;
            idCard = old[0].id_card || '';
            address = old[0].address || '';
            gender = old[0].gender || 'Khác';
        }

        const result = await sql`
            INSERT INTO bookings (
                name, phone, tour, date, status,
                deposit_required, total_price,
                dob, id_card, address, gender,
                created_at
            )
            VALUES (
                ${c.name}, ${c.phone}, ${tourName}, ${TOUR_DATE}, ${STATUS},
                ${DEPOSIT_REQUIRED}, ${tourPrice},
                ${dob}, ${idCard}, ${address}, ${gender},
                NOW()
            )
            RETURNING id, name, phone, tour, date, status, total_price, deposit_required
        `;

        const newBooking = result[0];
        createdList.push(newBooking);
        console.log(`[ĐÃ TẠO] ID: ${newBooking.id} | ${newBooking.name} (${newBooking.phone}) | ${newBooking.tour} | ${newBooking.date} | Link: https://camsiteretreats.com/booking/process.html?id=${newBooking.id}`);
    }

    console.log(`\nĐã tạo thành công ${createdList.length} đơn hàng.`);
}

run().catch(console.error);
