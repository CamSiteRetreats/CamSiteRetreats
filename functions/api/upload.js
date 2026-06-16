import { getDb } from './_db';

export async function onRequest(context) {
    const { request, env } = context;
    const method = request.method;

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    if (method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
            status: 405,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }

    try {
        const body = await request.json();
        const { image, filename } = body;

        if (!image) {
            return new Response(JSON.stringify({ success: false, error: 'Thiếu dữ liệu ảnh (image).' }), {
                status: 400,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
        }

        // Tách MIME type từ chuỗi Base64
        let mimeType = 'image/jpeg';
        let base64Data = image;

        if (image.startsWith('data:')) {
            const parts = image.split(',');
            const match = parts[0].match(/:(.*?);/);
            if (match) {
                mimeType = match[1];
            }
            base64Data = parts[1];
        }

        // Tính toán kích thước (tối đa 10MB)
        const approxSize = base64Data.length * 0.75;
        const sizeMB = approxSize / (1024 * 1024);
        if (sizeMB > 10) {
            return new Response(JSON.stringify({ success: false, error: 'Ảnh quá lớn. Tối đa 10MB.' }), {
                status: 413,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
        }

        // Tạo tên file an toàn
        const safeName = (filename || 'service')
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9\-]/g, '')
            .slice(0, 50);
        const uniqueSuffix = Date.now();
        const ext = mimeType.split('/')[1] || 'jpg';
        const outputFilename = `${safeName}-${uniqueSuffix}.${ext}`;

        // Lưu vào Neon DB
        const sql = getDb(env);
        await sql`
            INSERT INTO uploaded_images (filename, mime_type, data)
            VALUES (${outputFilename}, ${mimeType}, ${base64Data})
        `;

        const url = `/api/uploads/services/${outputFilename}`;
        const inputKB = Math.round(approxSize / 1024);

        return new Response(JSON.stringify({
            success: true,
            url,
            filename: outputFilename,
            stats: {
                inputKB,
                outputKB: inputKB,
                savePct: 0
            }
        }), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (err) {
        console.error('[upload] Error:', err);
        return new Response(JSON.stringify({ success: false, error: 'Lỗi xử lý ảnh: ' + err.message }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
}
