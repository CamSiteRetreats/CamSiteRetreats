require('dotenv').config();
const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

// Tour info
const TOUR_NAME = 'Ky Quan San';
const TOUR_DATE = '2026-10-16'; // 16/10/2026
const STATUS = 'Chờ xác nhận cọc';
const DEPOSIT_REQUIRED = 1000000;

// Customers from DB lookup
const customers = [
    { name: 'Lê Nguyễn Tuyết Anh', phone: '0366490703', dob: '2002-10-03', id_card: '079302009888', address: '55B, đường Phú Thuận, xã An Nhơn Tây, huyện Củ Chi, TP.HCM', gender: 'Nữ' },
    { name: 'Đỗ Duy Khải', phone: '0399474846', dob: '1998-11-07', id_card: '082098010999', address: '502/11/44E Huỳnh Tấn Phát, phường Bình Thuận, quận 7, Hồ Chí Minh', gender: 'Nam' },
    { name: 'Nguyễn Hoàng Huy', phone: '0968129812', dob: '1994-08-10', id_card: '072094001785', address: 'Số 37 hẻm 22 nguyễn chí thanh, long thành nam, hòa thành, tây ninh', gender: 'Nam' },
    { name: 'Nguyễn Phúc Gia Hưng', phone: '0382456752', dob: '2026-02-15', id_card: '060204008611', address: 'Xóm 2, thôn 4, xã Sơn Mỹ, tỉnh Lâm Đồng', gender: 'Nam' },
    { name: '(Chưa có thông tin)', phone: '0352323409', dob: null, id_card: '', address: '', gender: 'Khác' },
    { name: '(Chưa có thông tin)', phone: '0352238182', dob: null, id_card: '', address: '', gender: 'Khác' },
];

async function run() {
    for (const c of customers) {
        const result = await sql`
            INSERT INTO bookings (name, phone, tour, date, status, deposit_required, total_price, dob, id_card, address, gender, created_at)
            VALUES (
                ${c.name}, ${c.phone}, ${TOUR_NAME}, ${TOUR_DATE}, ${STATUS},
                ${DEPOSIT_REQUIRED}, 0,
                ${c.dob || null}, ${c.id_card || ''}, ${c.address || ''}, ${c.gender || 'Khác'},
                NOW()
            )
            RETURNING id, name, phone
        `;
        console.log('CREATED:', JSON.stringify(result[0]));
    }
    console.log('\nDone! Total:', customers.length, 'bookings created.');
}
run().catch(console.error);
