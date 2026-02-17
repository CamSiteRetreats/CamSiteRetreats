const { query } = require('./db');

exports.handler = async (event) => {
    // Handling CORS preflight
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: ''
        };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const data = JSON.parse(event.body);
        const {
            id, name, phone, tour, date, status, total_price, deposit, sale_id, sale_name,
            dob, gender, id_card, address, trekking_pole, diet, medal_name, allergy, special, commitments, customer_id
        } = data;

        // Ensure numeric fields are safe
        const safeTotal = total_price || 0;
        const safeDeposit = deposit || 0;

        if (id) {
            // Update existing booking
            const sql = `
                UPDATE bookings 
                SET name=$1, phone=$2, tour=$3, date=$4, status=$5, total_price=$6, deposit=$7, sale_id=$8, sale_name=$9,
                    dob=$10, gender=$11, id_card=$12, address=$13, trekking_pole=$14, diet=$15, medal_name=$16, allergy=$17, special=$18, commitments=$19, customer_id=$20
                WHERE id=$21
                RETURNING *;
            `;
            const values = [
                name, phone, tour, date, status, safeTotal, safeDeposit, sale_id, sale_name,
                dob, gender, id_card, address, trekking_pole, diet, medal_name, allergy, special, commitments, customer_id,
                id
            ];
            const result = await query(sql, values);
            return {
                statusCode: 200,
                headers: { 'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify(result.rows[0])
            };
        } else {
            // Create new booking
            const sql = `
                INSERT INTO bookings (
                    name, phone, tour, date, status, total_price, deposit, sale_id, sale_name,
                    dob, gender, id_card, address, trekking_pole, diet, medal_name, allergy, special, commitments, customer_id
                ) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
                RETURNING *;
            `;
            const values = [
                name, phone, tour, date, status, safeTotal, safeDeposit, sale_id, sale_name,
                dob, gender, id_card, address, trekking_pole, diet, medal_name, allergy, special, commitments, customer_id
            ];
            const result = await query(sql, values);
            return {
                statusCode: 200,
                headers: { 'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify(result.rows[0])
            };
        }

    } catch (error) {
        console.error('Error saving booking:', error);
        return {
            statusCode: 500,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ error: error.message })
        };
    }
};
