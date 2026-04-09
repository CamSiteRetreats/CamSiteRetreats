import { getDb } from './_db';

export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const method = request.method;
    const sql = getDb(env);

    // CORS
    if (method === 'OPTIONS') {
        return new Response(null, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });
    }

    if (method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

    try {
        const body = await request.json();
        const { username, password } = body;
        const isAdminSession = url.searchParams.get('role') === 'admin';

        if (!username || !password) {
            return Response.json({ error: 'Missing username or password' }, { status: 400 });
        }

        let query, values;
        if (isAdminSession) {
            query = 'SELECT * FROM admins WHERE LOWER(username) = LOWER($1) AND password = $2 AND status = $3';
            values = [username, password, 'active'];
        } else {
            query = 'SELECT * FROM users WHERE LOWER(username) = LOWER($1) AND password = $2 AND status = $3';
            values = [username, password, 'active'];
        }

        const rows = await sql.query(query, values);

        if (rows.length > 0) {
            const user = rows[0];
            delete user.password;

            // Generate simple token
            const token = crypto.randomUUID();

            const frontendUser = {
                id: user.id,
                username: user.username,
                fullName: user.full_name,
                role: user.role,
                phone: user.phone,
                email: user.email,
                avatar: user.avatar,
                bank_info: user.bank_info,
                payment_info: user.payment_info,
                status: user.status
            };

            const response = Response.json({ success: true, token, user: frontendUser });
            response.headers.set('Access-Control-Allow-Origin', '*');
            return response;
        } else {
            return Response.json({ success: false, message: 'Sai tên đăng nhập hoặc mật khẩu!' }, { status: 401 });
        }

    } catch (error) {
        console.error('Login error:', error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
