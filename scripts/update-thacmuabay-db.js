const db = require('../api/_db');

async function updateThacMuaBayTour() {
    const tourData = {
        id: 6, // Từ js/tour-manager.js
        name: 'Thác Mưa Bay',
        price: '1100000',
        is_visible: true,
        custom_domain: 'tour/thacmuabay'
    };

    try {
        // Kiểm tra xem tour có chưa
        const checkQuery = `SELECT id FROM tours WHERE id = $1`;
        const { rows } = await db.query(checkQuery, [tourData.id]);

        if (rows.length > 0) {
            // Cập nhật
            const updateQuery = `
                UPDATE tours 
                SET name = $1, price = $2, is_visible = $3, custom_domain = $4
                WHERE id = $5
                RETURNING *;
            `;
            const updated = await db.query(updateQuery, [
                tourData.name, tourData.price, tourData.is_visible, tourData.custom_domain, tourData.id
            ]);
            console.log('SUCCESS: Cập nhật thành công Thác Mưa Bay (ID 6).', updated.rows[0]);
        } else {
            // Thêm mới
            const insertQuery = `
                INSERT INTO tours (id, name, price, is_visible, custom_domain)
                VALUES ($1, $2, $3, $4, $5)
                RETURNING *;
            `;
            const inserted = await db.query(insertQuery, [
                tourData.id, tourData.name, tourData.price, tourData.is_visible, tourData.custom_domain
            ]);
            console.log('SUCCESS: Thêm mới thành công Thác Mưa Bay (ID 6).', inserted.rows[0]);
        }
    } catch (error) {
        console.error('DATABASE ERROR:', error);
    } finally {
        process.exit(0);
    }
}

updateThacMuaBayTour();
