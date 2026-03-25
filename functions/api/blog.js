import { getDb } from './_db.js';

// Tạo bảng blog_posts nếu chưa có
async function ensureTable(sql) {
    await sql`
        CREATE TABLE IF NOT EXISTS blog_posts (
            id          SERIAL PRIMARY KEY,
            title       TEXT NOT NULL,
            slug        TEXT NOT NULL UNIQUE,
            excerpt     TEXT,
            content     TEXT,
            thumbnail   TEXT,
            category    TEXT DEFAULT 'Kinh nghiệm',
            status      TEXT DEFAULT 'draft',
            created_at  TIMESTAMPTZ DEFAULT NOW(),
            updated_at  TIMESTAMPTZ DEFAULT NOW(),
            published_at TIMESTAMPTZ
        )
    `;
}

function slugify(text) {
    return text
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/gi, 'd')
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

function corsHeaders() {
    return {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };
}

function json(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { 'Content-Type': 'application/json', ...corsHeaders() },
    });
}

export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders() });
    }

    const sql = getDb(env);
    await ensureTable(sql);

    const isAdmin = () => {
        const auth = request.headers.get('Authorization') || '';
        return auth.startsWith('Bearer ') && auth.length > 10;
    };

    // ── GET: Lấy danh sách hoặc bài viết theo slug ──────────────────────
    if (request.method === 'GET') {
        const slug = url.searchParams.get('slug');
        const id = url.searchParams.get('id');
        const page = parseInt(url.searchParams.get('page') || '1');
        const limit = parseInt(url.searchParams.get('limit') || '6');
        const category = url.searchParams.get('category');
        const withDrafts = url.searchParams.get('all') === '1' && isAdmin();

        // Chi tiết bài viết theo slug
        if (slug) {
            const rows = await sql`
                SELECT * FROM blog_posts WHERE slug = ${slug}
                ${withDrafts ? sql`` : sql`AND status = 'published'`}
                LIMIT 1
            `;
            if (rows.length === 0) return json({ error: 'Không tìm thấy bài viết' }, 404);

            // Lấy bài liên quan (cùng category)
            const related = await sql`
                SELECT id, title, slug, excerpt, thumbnail, category, published_at
                FROM blog_posts
                WHERE status = 'published' AND category = ${rows[0].category} AND slug != ${slug}
                ORDER BY published_at DESC LIMIT 3
            `;
            return json({ post: rows[0], related });
        }

        // Chi tiết theo id (cho admin)
        if (id) {
            const rows = await sql`SELECT * FROM blog_posts WHERE id = ${id} LIMIT 1`;
            if (rows.length === 0) return json({ error: 'Không tìm thấy' }, 404);
            return json(rows[0]);
        }

        // Danh sách (phân trang)
        const offset = (page - 1) * limit;
        const statusFilter = withDrafts ? sql`` : sql`WHERE status = 'published'`;
        const catFilter = category ? sql`AND category = ${category}` : sql``;

        const [{ count }] = await sql`
            SELECT COUNT(*) as count FROM blog_posts
            ${withDrafts
                ? (category ? sql`WHERE category = ${category}` : sql``)
                : (category ? sql`WHERE status = 'published' AND category = ${category}` : sql`WHERE status = 'published'`)}
        `;

        const posts = await sql`
            SELECT id, title, slug, excerpt, thumbnail, category, status, published_at, created_at
            FROM blog_posts
            ${withDrafts
                ? (category ? sql`WHERE category = ${category}` : sql``)
                : (category ? sql`WHERE status = 'published' AND category = ${category}` : sql`WHERE status = 'published'`)}
            ORDER BY COALESCE(published_at, created_at) DESC
            LIMIT ${limit} OFFSET ${offset}
        `;

        return json({ posts, total: parseInt(count), page, limit });
    }

    // ── POST: Tạo bài viết mới ───────────────────────────────────────────
    if (request.method === 'POST') {
        if (!isAdmin()) return json({ error: 'Unauthorized' }, 401);

        const body = await request.json();
        const { title, excerpt = '', content = '', thumbnail = '', category = 'Kinh nghiệm', status = 'draft' } = body;

        if (!title) return json({ error: 'Thiếu tiêu đề' }, 400);

        // Tạo slug độc nhất
        let baseSlug = slugify(title);
        let slug = baseSlug;
        const existing = await sql`SELECT id FROM blog_posts WHERE slug LIKE ${baseSlug + '%'}`;
        if (existing.length > 0) slug = `${baseSlug}-${Date.now()}`;

        const publishedAt = status === 'published' ? new Date().toISOString() : null;
        const [post] = await sql`
            INSERT INTO blog_posts (title, slug, excerpt, content, thumbnail, category, status, published_at)
            VALUES (${title}, ${slug}, ${excerpt}, ${content}, ${thumbnail}, ${category}, ${status}, ${publishedAt})
            RETURNING *
        `;
        return json({ success: true, post });
    }

    // ── PUT: Cập nhật bài viết ───────────────────────────────────────────
    if (request.method === 'PUT') {
        if (!isAdmin()) return json({ error: 'Unauthorized' }, 401);

        const id = url.searchParams.get('id');
        if (!id) return json({ error: 'Thiếu id' }, 400);

        const body = await request.json();
        const { title, excerpt, content, thumbnail, category, status } = body;

        const current = await sql`SELECT * FROM blog_posts WHERE id = ${id} LIMIT 1`;
        if (current.length === 0) return json({ error: 'Không tìm thấy' }, 404);

        const publishedAt = status === 'published' && !current[0].published_at
            ? new Date().toISOString()
            : current[0].published_at;

        const [updated] = await sql`
            UPDATE blog_posts SET
                title       = COALESCE(${title ?? null}, title),
                excerpt     = COALESCE(${excerpt ?? null}, excerpt),
                content     = COALESCE(${content ?? null}, content),
                thumbnail   = COALESCE(${thumbnail ?? null}, thumbnail),
                category    = COALESCE(${category ?? null}, category),
                status      = COALESCE(${status ?? null}, status),
                published_at = ${publishedAt},
                updated_at  = NOW()
            WHERE id = ${id}
            RETURNING *
        `;
        return json({ success: true, post: updated });
    }

    // ── DELETE: Xóa bài viết ─────────────────────────────────────────────
    if (request.method === 'DELETE') {
        if (!isAdmin()) return json({ error: 'Unauthorized' }, 401);

        const id = url.searchParams.get('id');
        if (!id) return json({ error: 'Thiếu id' }, 400);

        await sql`DELETE FROM blog_posts WHERE id = ${id}`;
        return json({ success: true });
    }

    return json({ error: 'Method not allowed' }, 405);
}
