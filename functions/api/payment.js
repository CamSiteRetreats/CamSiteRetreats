import { getDb } from './_db';

// Helper: remove Vietnamese diacritics → lowercase ASCII
function normalizeVN(str) {
    if (!str) return '';
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/gi, 'd')
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '')
        .trim();
}

export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const action = url.searchParams.get('action') || '';

    // Handle CORS
    if (request.method === 'OPTIONS') {
        return new Response(null, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });
    }

    try {
        let response;
        switch (action) {
            case 'link':
                response = await handlePaymentLink(context);
                break;
            case 'webhook':
                response = await handleSepayWebhook(context);
                break;
            case 'status':
                response = await handlePaymentStatus(context);
                break;
            default:
                return Response.json({ error: 'Missing or invalid action.' }, { status: 400 });
        }

        // Add CORS to response
        const newResponse = new Response(response.body, response);
        newResponse.headers.set('Access-Control-Allow-Origin', '*');
        return newResponse;

    } catch (error) {
        console.error('Payment API Error:', error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}

async function handlePaymentLink({ request, env }) {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    if (!id) return Response.json({ error: 'Booking ID is required' }, { status: 400 });

    const sql = getDb(env);
    const rows = await sql`SELECT * FROM bookings WHERE id = ${id}`;

    if (rows.length === 0) return Response.json({ error: 'Booking not found' }, { status: 404 });

    const booking = rows[0];
    const totalPrice = parseInt(booking.total_price) || 0;
    const deposit = parseInt(booking.deposit) || 0;
    const remaining = totalPrice - deposit;
    const depositRequired = parseInt(booking.deposit_required) || 1000000;

    const needsDeposit = deposit === 0 || booking.status === 'Chờ cọc' || booking.status === 'Chờ xác nhận cọc';
    const paymentType = needsDeposit ? 'deposit' : 'remaining';
    const amountDue = needsDeposit ? depositRequired : remaining;

    // Build transfer content: CSR[ID] [Tour] [Date] [Name] [Type]
    const cleanTour = normalizeVN((booking.tour || 'Tour').split('-')[0].trim());
    const cleanDate = (booking.date || '').replace(/\//g, '');
    const cleanName = normalizeVN(booking.name || 'khach');
    const payLabel = needsDeposit ? 'coc' : 'full';
    const transferContent = `CSR${booking.id} ${cleanTour} ${cleanDate} ${cleanName} ${payLabel}`;

    const isPaid = booking.status && (booking.status.includes('Đã cọc') || booking.status === 'Hoàn tất' || booking.status === 'Hoàn thành' || booking.status === 'Đã thanh toán');
    const isFullyPaid = booking.status === 'Hoàn tất' || booking.status === 'Hoàn thành' || (totalPrice > 0 && deposit >= totalPrice);

    return Response.json({
        id: booking.id,
        name: booking.name,
        tour: booking.tour,
        date: booking.date,
        status: booking.status,
        totalPrice,
        deposit,
        remaining,
        amountDue,
        transferContent,
        isPaid,
        isFullyPaid
    });
}

async function handleSepayWebhook({ request, env }) {
    if (request.method !== 'POST') return Response.json({ error: 'POST only' }, { status: 405 });

    const sql = getDb(env);
    const payload = await request.clone().json().catch(() => ({}));
    const headers = Object.fromEntries(request.headers.entries());

    // Log to debug table (Log EVERYTHING even before auth)
    try {
        await sql`INSERT INTO debug_webhook_logs (payload, headers) VALUES (${payload}, ${headers})`;
    } catch (e) {
        console.error('Debug log fail:', e);
    }

    const authHeader = request.headers.get('authorization') || '';
    const expectedKey = env.SEPAY_API_KEY;
    const providedKey = authHeader.replace('Apikey ', '').replace('Bearer ', '').trim();

    if (expectedKey && providedKey !== expectedKey) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const {
        id: sepayTransactionId,
        content: transferContent,
        transferType,
        transferAmount,
        description
    } = payload;

    if (transferType && transferType !== 'in') {
        return Response.json({ success: true, message: 'Skipped: not incoming' });
    }

    const amount = parseInt(transferAmount) || 0;

    // Check duplicate
    const existingTx = await sql`SELECT id FROM payment_transactions WHERE sepay_transaction_id = ${String(sepayTransactionId)}`;
    if (existingTx.length > 0) return Response.json({ success: true, message: 'Duplicate' });

    // Robust matching logic
    const bookings = await sql`SELECT * FROM bookings WHERE status IN ('Chờ cọc', 'Chờ xác nhận cọc', 'Đã cọc', 'Đã cọc (Chờ đi)') OR status IS NULL OR status = '' ORDER BY created_at DESC`;

    let matchedBooking = null;
    let paymentType = 'deposit';
    const rawSearch = (transferContent || description || '').toLowerCase();
    const cleanSearch = normalizeVN(rawSearch);

    // Strategy 1: Match by ID (CSR154, ID154, or just 154 if unique enough)
    for (const booking of bookings) {
        const idStr = String(booking.id);
        const searchTerms = [
            'csr' + idStr,
            'id' + idStr,
            'thanh toan ' + idStr,
            'tt' + idStr
        ];

        if (searchTerms.some(term => cleanSearch.includes(term))) {
            matchedBooking = booking;
            break;
        }
    }

    // Strategy 2: Match by Customer Name + Tour Name (fallback)
    if (!matchedBooking) {
        for (const booking of bookings) {
            const bName = normalizeVN(booking.name);
            const bTour = normalizeVN((booking.tour || '').split('-')[0]);

            if (bName.length >= 3 && cleanSearch.includes(bName) &&
                bTour.length >= 2 && cleanSearch.includes(bTour)) {
                matchedBooking = booking;
                break;
            }
        }
    }

    if (matchedBooking) {
        paymentType = rawSearch.includes('full') ? 'full' : 'deposit';
        const currentDeposit = parseInt(matchedBooking.deposit) || 0;
        const newDeposit = currentDeposit + amount;
        const totalPrice = parseInt(matchedBooking.total_price) || 0;
        const depositReq = parseInt(matchedBooking.deposit_required) || 1000000;

        let newStatus = matchedBooking.status;
        if (totalPrice > 0 && newDeposit >= totalPrice) newStatus = 'Hoàn tất';
        else if (newDeposit >= depositReq) newStatus = 'Đã cọc (Chờ đi)';

        // Get or Generate Customer ID
        let customerId = matchedBooking.customer_id;
        if (newStatus === 'Đã cọc' && (!customerId || customerId.trim() === '')) {
            const check = await sql`SELECT csr_code FROM crm_customers WHERE phone = ${matchedBooking.phone}`;
            if (check.length > 0) {
                customerId = check[0].csr_code;
            } else {
                const randNum = Math.floor(100000 + Math.random() * 900000);
                customerId = '#CSR' + randNum;
                await sql`INSERT INTO crm_customers (csr_code, full_name, phone, loyalty_tier) VALUES (${customerId}, ${matchedBooking.name}, ${matchedBooking.phone}, 'New')`;
            }
        }

        await sql`UPDATE bookings SET status = ${newStatus}, deposit = ${newDeposit}, customer_id = ${customerId} WHERE id = ${matchedBooking.id}`;
    }

    // Insert transaction
    await sql`INSERT INTO payment_transactions (booking_id, sepay_transaction_id, amount, transfer_content, payment_type) VALUES (${matchedBooking ? matchedBooking.id : null}, ${String(sepayTransactionId)}, ${amount}, ${transferContent || description || ''}, ${paymentType})`;

    return Response.json({ success: true, matched: matchedBooking ? matchedBooking.id : null });
}

async function handlePaymentStatus({ request, env }) {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    const sql = getDb(env);
    const rows = await sql`SELECT status, deposit, total_price FROM bookings WHERE id = ${id}`;

    if (rows.length === 0) return Response.json({ error: 'Not found' }, { status: 404 });
    const booking = rows[0];
    const totalPrice = parseInt(booking.total_price) || 0;
    const currentDeposit = parseInt(booking.deposit) || 0;

    const isPaid = booking.status &&
        (
            booking.status.includes('Đã cọc') ||
            booking.status === 'Hoàn tất' ||
            booking.status === 'Hoàn thành' ||
            booking.status === 'Đã thanh toán' ||
            (totalPrice > 0 && currentDeposit >= (parseInt(booking.deposit_required) || 1000000))
        );

    const isFullyPaid = booking.status === 'Hoàn tất' ||
        booking.status === 'Hoàn thành' ||
        (totalPrice > 0 && currentDeposit >= totalPrice);

    return Response.json({
        status: booking.status,
        isPaid: !!isPaid,
        isFullyPaid: !!isFullyPaid,
        deposit: currentDeposit,
        totalPrice: totalPrice
    });
}
