import { getDb } from './_db';

export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const sql = getDb(env);

    try {
        if (request.method === 'GET') {
            const tours = await sql('SELECT * FROM tours ORDER BY id ASC');
            return Response.json(tours, {
                headers: { 'Access-Control-Allow-Origin': '*' }
            });
        }
        return new Response('Method not allowed', { status: 405 });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}
