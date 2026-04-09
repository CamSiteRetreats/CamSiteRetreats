import { getDb } from './_db';

export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const method = request.method;
    const sql = getDb(env);

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    try {
        let response;

        if (method === 'GET') {
            const rows = await sql`SELECT id, username, full_name, role, phone, email, avatar, bank_info, payment_info, status, created_at FROM admins ORDER BY id ASC`;
            const users = rows.map(u => ({ ...u, fullName: u.full_name }));
            response = Response.json(users);

        } else if (method === 'POST') {
            const body = await request.json();
            let { id, username, password, fullName, role, phone, email, avatar, bank_info, payment_info, status } = body;
            
            // Fix undefined and JSON stringify
            bank_info = bank_info || null;
            if (payment_info && typeof payment_info === 'object') {
                payment_info = JSON.stringify(payment_info);
            } else if (!payment_info) {
                payment_info = null;
            }

            if (!username) return Response.json({ error: 'Missing username' }, { status: 400, headers: corsHeaders });
            if (!fullName) return Response.json({ error: 'Missing full name' }, { status: 400, headers: corsHeaders });
            if (!role) return Response.json({ error: 'Missing role' }, { status: 400, headers: corsHeaders });

            if (id) {
                // Update
                let rows;
                if (password && password.trim() !== '') {
                    rows = await sql.query(
                        `UPDATE admins SET username=$1, password=$2, full_name=$3, role=$4, phone=$5, email=$6, avatar=$7, bank_info=$8, payment_info=$9, status=$10 WHERE id=$11 RETURNING *`,
                        [username, password, fullName, role, phone, email, avatar, bank_info, payment_info, status, id]
                    );
                } else {
                    rows = await sql.query(
                        `UPDATE admins SET username=$1, full_name=$2, role=$3, phone=$4, email=$5, avatar=$6, bank_info=$7, payment_info=$8, status=$9 WHERE id=$10 RETURNING *`,
                        [username, fullName, role, phone, email, avatar, bank_info, payment_info, status, id]
                    );
                }
                const user = rows[0];
                delete user.password;
                response = Response.json({ ...user, fullName: user.full_name });

            } else {
                // Insert
                if (!password) return Response.json({ error: 'Missing password for new user' }, { status: 400, headers: corsHeaders });

                const existing = await sql.query('SELECT id FROM admins WHERE username = $1', [username]);
                if (existing.length > 0) return Response.json({ error: 'Tên đăng nhập đã tồn tại' }, { status: 400, headers: corsHeaders });

                const rows = await sql.query(
                    `INSERT INTO admins (username, password, full_name, role, phone, email, avatar, bank_info, payment_info, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
                    [username, password, fullName, role, phone, email, avatar, bank_info, payment_info, status || 'active']
                );
                const user = rows[0];
                delete user.password;
                response = Response.json({ ...user, fullName: user.full_name }, { status: 201 });
            }

        } else if (method === 'DELETE') {
            const id = url.searchParams.get('id');
            if (!id) return Response.json({ error: 'ID is required' }, { status: 400, headers: corsHeaders });

            const checkAdmin = await sql.query('SELECT username FROM admins WHERE id = $1', [id]);
            if (checkAdmin.length > 0 && checkAdmin[0].username === 'admin') {
                return Response.json({ error: 'Không thể xóa tài khoản Super Admin' }, { status: 400, headers: corsHeaders });
            }

            await sql.query('DELETE FROM admins WHERE id = $1', [id]);
            response = Response.json({ success: true });

        } else {
            return new Response('Method Not Allowed', { status: 405 });
        }

        const final = new Response(response.body, response);
        Object.entries(corsHeaders).forEach(([k, v]) => final.headers.set(k, v));
        return final;

    } catch (error) {
        console.error('Error in users API:', error);
        return Response.json({ error: error.message }, {
            status: 500,
            headers: corsHeaders
        });
    }
}
