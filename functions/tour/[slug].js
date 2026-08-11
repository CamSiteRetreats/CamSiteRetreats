import { getDb } from '../api/_db';

export async function onRequest(context) {
    const { request, env, params } = context;
    const { slug } = params;
    const sql = getDb(env);

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    try {
        const rows = await sql`
            SELECT * FROM tours 
            WHERE slug = ${slug}
               OR custom_domain LIKE ${'%' + slug}
               OR LOWER(name) = ${slug.replace(/-/g, ' ')}
            LIMIT 1
        `;

        if (rows.length === 0) {
            // No matching tour found, call next() to let Cloudflare check static files or serve a 404
            return context.next();
        }

        const tour = rows[0];

        // Format values
        const levelColor = tour.level === 'Dễ' ? 'bg-green-500' : (tour.level === 'Khó' ? 'bg-red-500' : 'bg-orange-500');
        const regionLabel = tour.region || 'Miền Nam';
        
        // Parse JSONB structures or fallback to empty arrays
        const itinerary = Array.isArray(tour.itinerary) ? tour.itinerary : [];
        const inclusions = Array.isArray(tour.inclusions) ? tour.inclusions : [];
        const exclusions = Array.isArray(tour.exclusions) ? tour.exclusions : [];
        const preparing = Array.isArray(tour.preparing) ? tour.preparing : [];
        const faqs = Array.isArray(tour.faqs) ? tour.faqs : [];
        const specs = tour.specs && typeof tour.specs === 'object' ? tour.specs : {};

        // Build Itinerary HTML
        let itineraryHTML = '';
        if (itinerary.length === 0) {
            itineraryHTML = '<p class="text-gray-400 italic text-sm py-4">Lộ trình chi tiết đang được cập nhật.</p>';
        } else {
            itinerary.forEach((day, index) => {
                const isOpen = index === 0; // Starts open for Day 0 or first Day
                const dayStepsHTML = (day.steps || []).map(step => `
                    <div class="flex gap-3 text-base">
                        <span class="font-bold text-gray-800 shrink-0">${step.time}:</span>
                        <span class="font-light italic text-gray-600">${step.desc}</span>
                    </div>
                `).join('');

                itineraryHTML += `
                    <div class="relative pl-8 itinerary-step ${isOpen ? 'active' : ''}">
                        <div class="absolute left-[-5px] top-0 w-4 h-4 rounded-full ${isOpen ? 'bg-primary' : 'bg-gray-300'} border-4 border-white shadow-md transition-colors duration-300" id="dot-day-${index}"></div>
                        <button onclick="toggleDay(${index})" class="w-full text-left group">
                            <div class="flex justify-between items-center mb-4">
                                <h4 class="text-lg font-bold text-primary uppercase group-hover:text-primary transition-colors">${day.dayTitle}</h4>
                                <i data-lucide="chevron-down" class="w-5 h-5 text-gray-400 group-hover:text-primary transition-transform duration-300" id="icon-day-${index}" style="${isOpen ? 'transform: rotate(180deg);' : ''}"></i>
                            </div>
                        </button>
                        <div id="content-day-${index}" class="${isOpen ? 'space-y-4 overflow-hidden pb-6' : 'hidden space-y-4 overflow-hidden pb-6'}">
                            ${dayStepsHTML}
                        </div>
                    </div>
                `;
            });
        }

        // Build Gallery images HTML
        const allImages = [tour.image, tour.image2, tour.image3, tour.image4].filter(img => img);
        let galleryHTML = '';
        if (allImages.length > 0) {
            galleryHTML = allImages.map((img, idx) => `
                <div class="min-w-[70%] md:min-w-[32%] h-64 rounded-2xl overflow-hidden snap-start shadow-md bg-gray-200">
                    <img src="../${img}" loading="lazy" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="${tour.name} - ${idx + 1}">
                </div>
            `).join('');
        }

        // Build Inclusions HTML
        let inclusionsHTML = '';
        if (inclusions.length === 0) {
            inclusionsHTML = '<p class="text-gray-400 italic text-xs col-span-3">Đang cập nhật...</p>';
        } else {
            inclusionsHTML = inclusions.map(item => `
                <div class="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start text-center md:text-left">
                    <div class="w-14 h-14 md:w-24 md:h-24 rounded-xl md:rounded-2xl border border-primary/20 flex items-center justify-center shrink-0 bg-primary/5">
                        <img src="/tour/${item.image}?v=1.1" alt="${item.title}" class="w-8 h-8 md:w-20 md:h-20 object-contain" onerror="this.src='/Logo cam.png'">
                    </div>
                    <div>
                        <h4 class="text-xs md:text-base font-black text-primary uppercase mb-1 whitespace-normal md:whitespace-nowrap">${item.title}</h4>
                        <p class="text-[10px] md:text-[13.5px] text-gray-500 leading-relaxed font-medium">${item.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        // Build Exclusions HTML
        let exclusionsHTML = '';
        if (exclusions.length === 0) {
            exclusionsHTML = '<p class="text-gray-400 italic text-xs col-span-3">Đang cập nhật...</p>';
        } else {
            exclusionsHTML = exclusions.map(item => `
                <div class="flex gap-4">
                    <div class="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                        <i data-lucide="x-circle" class="w-6 h-6 text-red-500"></i>
                    </div>
                    <div>
                        <h5 class="text-sm font-black text-red-500 uppercase mb-1 tracking-wider">${item.title}</h5>
                        <p class="text-[12px] text-gray-400 font-medium italic leading-relaxed">${item.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        // Build Preparing HTML
        let preparingHTML = '';
        if (preparing.length === 0) {
            preparingHTML = '<p class="text-gray-400 italic text-sm text-center col-span-2">Đang cập nhật...</p>';
        } else {
            preparingHTML = preparing.map(item => `
                <div class="flex items-start gap-6 group">
                    <div class="shrink-0 w-48 h-48 object-contain">
                        <img src="/tour/${item.image}?v=1.1" loading="lazy" class="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500" alt="${item.title}" onerror="this.src='/Logo cam.png'">
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-gray-800 uppercase mb-2 group-hover:text-primary transition-colors">${item.title}</h3>
                        <p class="text-sm text-gray-500 leading-relaxed font-medium italic">${item.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        // Build FAQs HTML
        let faqsHTML = '';
        if (faqs.length > 0) {
            faqsHTML = `
                <div class="space-y-6 mt-16 pb-12 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                    <h2 class="text-3xl font-black uppercase text-primary tracking-tight text-center mb-8">HỎI ĐÁP NHANH</h2>
                    <div class="space-y-4 max-w-4xl mx-auto">
                        ${faqs.map((faq, idx) => `
                            <div class="border-b border-gray-100 pb-4">
                                <h4 class="text-base font-bold text-gray-800 mb-2 flex gap-2">❓ <span>${faq.q}</span></h4>
                                <p class="text-sm text-gray-500 pl-6 leading-relaxed font-medium">${faq.a}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        const formattedPrice = typeof tour.price === 'number' ? tour.price.toLocaleString('vi-VN') + 'đ' : 'Liên hệ';

        // Render full dynamic SSR template
        const html = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="../favicon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
        window.onerror = function (msg, url, lineNo, columnNo, error) {
            console.error('CRITICAL ERROR:', msg, url, lineNo);
            const errorDiv = document.createElement('div');
            errorDiv.style = "position:fixed;top:0;left:0;width:100%;background:#ef4444;color:white;padding:15px;text-align:center;z-index:9999;font-weight:bold;font-family:sans-serif;";
            errorDiv.innerHTML = "Có lỗi xảy ra khi tải trang. Vui lòng nhấn <b>Tải lại trang</b> hoặc liên hệ hỗ trợ. <br><small>" + msg + "</small>";
            errorDiv.onclick = function () { location.reload(); };
            document.documentElement.appendChild(errorDiv);
            return false;
        };
    </script>
    <title>${tour.name} | CAM SITE RETREATS</title>
    <meta name="description" content="${tour.short_desc || 'Khám phá cung đường trekking cùng CAM SITE RETREATS.'}">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${tour.name} | CAM SITE RETREATS">
    <meta property="og:description" content="${tour.short_desc || ''}">
    <meta property="og:image" content="https://camsiteretreats.com/${tour.image}">

    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <!-- Pass dynamic tour data to client scripts -->
    <script>
        window._currentTourData = ${JSON.stringify(tour)};
    </script>
    <script src="../js/tour-manager.js?v=2"></script>
    <script src="../js/ui-components.js?v=2"></script>

    <style>
        :root {
            --primary: #E85D04;
            --secondary: #FFF8F0;
            --text: #333333;
        }
        html { font-size: 18px; }
        body {
            font-family: 'Montserrat', sans-serif;
            background-color: var(--secondary);
            color: var(--text);
            scroll-behavior: smooth;
        }
        .glass-nav {
            background: rgba(255, 248, 240, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(232, 93, 4, 0.1);
        }
        .bg-primary { background-color: var(--primary); }
        .text-primary { color: var(--primary); }
        .border-primary { border-color: var(--primary); }
        .hero-title {
            letter-spacing: -0.02em;
            text-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }
        .content-card {
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
        }
        .sticky-sidebar {
            position: sticky;
            top: 100px;
            transition: all 0.3s ease;
        }
        .spec-item {
            border: 1px solid #E85D04;
            border-radius: 6px;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        .itinerary-step::before {
            content: '';
            position: absolute;
            left: 2px;
            top: 15px;
            bottom: -25px;
            width: 2px;
            background: #E5E7EB;
        }
        .itinerary-step:last-child::before { display: none; }
        .itinerary-step.active::before { background: #E85D04; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .date-option {
            border: 2px solid #E5E7EB;
            border-radius: 12px;
            padding: 10px;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .date-option:hover { border-color: #E85D04; background: #FFF8F0; }
        .date-option.selected { border-color: #E85D04; background: #E85D04; color: white; }
        @media (max-width: 768px) {
            html { font-size: 13.5px !important; }
            .sticky-sidebar { position: static; }
        }
    </style>
</head>
<body class="pt-24 overflow-x-hidden">
    <!-- Header Placeholder -->
    <div id="header-placeholder"></div>

    <!-- Hero Banner -->
    <section class="relative h-[400px] md:h-[500px] flex items-center justify-center text-white overflow-hidden">
        <img src="../${tour.image}" class="absolute inset-0 w-full h-full object-cover brightness-[0.7]" alt="${tour.name}">
        <div class="relative max-w-7xl mx-auto px-6 text-center z-10">
            <div class="flex justify-center gap-2 mb-4">
                <span class="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">${tour.type}</span>
                <span class="${levelColor} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">${tour.level}</span>
                ${tour.altitude ? `<span class="bg-gray-900/80 text-white text-[10px] font-bold px-3 py-1 rounded-full">${tour.altitude}</span>` : ''}
            </div>
            <h1 class="text-3xl md:text-6xl font-black mb-2 uppercase tracking-tight hero-title">${tour.name}</h1>
        </div>
    </section>

    <!-- Main Content Layout -->
    <section class="max-w-7xl mx-auto px-6 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- LEFT COLUMN (70%) -->
            <div class="lg:col-span-2 space-y-12">
                <!-- Overview / General Info Section -->
                ${tour.short_desc ? `
                <div class="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-4">
                    <h2 class="text-2xl font-black uppercase text-primary tracking-tight">Thông tin chung</h2>
                    <p class="text-gray-600 leading-relaxed text-justify text-base">${tour.short_desc}</p>
                </div>` : ''}

                <!-- SECTION 3: SPECS (8 Items Grid - User Requested) -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <!-- Spec 1: Location -->
                    <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:border-primary/50 transition-colors">
                        <div class="spec-item"><i data-lucide="map-pin" class="w-5 h-5 text-primary"></i></div>
                        <div>
                            <h4 class="text-[10px] font-bold uppercase text-gray-400">Địa điểm</h4>
                            <p class="text-sm font-bold text-gray-800 whitespace-nowrap">${specs.location || regionLabel}</p>
                        </div>
                    </div>
                    <!-- Spec 2: Duration -->
                    <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:border-primary/50 transition-colors">
                        <div class="spec-item"><i data-lucide="clock" class="w-5 h-5 text-primary"></i></div>
                        <div>
                            <h4 class="text-[10px] font-bold uppercase text-gray-400">Thời gian</h4>
                            <p class="text-sm font-bold text-gray-800 whitespace-nowrap">${tour.duration}</p>
                        </div>
                    </div>
                    <!-- Spec 3: Length -->
                    <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:border-primary/50 transition-colors">
                        <div class="spec-item"><i data-lucide="footprints" class="w-5 h-5 text-primary"></i></div>
                        <div>
                            <h4 class="text-[10px] font-bold uppercase text-gray-400">Độ dài</h4>
                            <p class="text-sm font-bold text-gray-800 whitespace-nowrap">${specs.distance || '-'}</p>
                        </div>
                    </div>
                    <!-- Spec 4: Elevation -->
                    <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:border-primary/50 transition-colors">
                        <div class="spec-item"><i data-lucide="mountain" class="w-5 h-5 text-primary"></i></div>
                        <div>
                            <h4 class="text-[10px] font-bold uppercase text-gray-400">Độ cao</h4>
                            <p class="text-sm font-bold text-gray-800 whitespace-nowrap">${tour.altitude || '-'}</p>
                        </div>
                    </div>
                    <!-- Spec 5: Level -->
                    <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:border-primary/50 transition-colors">
                        <div class="spec-item"><i data-lucide="dumbbell" class="w-5 h-5 text-primary"></i></div>
                        <div>
                            <h4 class="text-[10px] font-bold uppercase text-gray-400">Độ khó</h4>
                            <p class="text-sm font-bold text-gray-800 whitespace-nowrap">${tour.level}</p>
                        </div>
                    </div>
                    <!-- Spec 6: Transport -->
                    <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:border-primary/50 transition-colors">
                        <div class="spec-item"><i data-lucide="bus" class="w-5 h-5 text-primary"></i></div>
                        <div>
                            <h4 class="text-[10px] font-bold uppercase text-gray-400">Phương tiện</h4>
                            <p class="text-sm font-bold text-gray-800 whitespace-nowrap">${specs.transport || '-'}</p>
                        </div>
                    </div>
                    <!-- Spec 7: Quantity -->
                    <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:border-primary/50 transition-colors">
                        <div class="spec-item"><i data-lucide="users" class="w-5 h-5 text-primary"></i></div>
                        <div>
                            <h4 class="text-[10px] font-bold uppercase text-gray-400">Số lượng</h4>
                            <p class="text-sm font-bold text-gray-800 whitespace-nowrap">${specs.groupSize || '-'}</p>
                        </div>
                    </div>
                    <!-- Spec 8: Guide Ratio -->
                    <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:border-primary/50 transition-colors">
                        <div class="spec-item"><i data-lucide="user-check" class="w-5 h-5 text-primary"></i></div>
                        <div>
                            <h4 class="text-[10px] font-bold uppercase text-gray-400">HDV</h4>
                            <p class="text-sm font-bold text-gray-800 whitespace-nowrap">2 Người</p>
                        </div>
                    </div>
                </div>

                <!-- Lộ trình chi tiết -->
                <div class="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
                    <h2 class="text-2xl font-black uppercase text-primary tracking-tight">Lịch trình chi tiết</h2>
                    <div class="space-y-6">
                        ${itineraryHTML}
                    </div>
                </div>

                <!-- Gallery -->
                ${galleryHTML ? `
                <div class="space-y-6">
                    <div class="flex justify-between items-center">
                        <h2 class="text-2xl font-black uppercase text-primary tracking-tight">Cảm xúc hành trình</h2>
                        <div class="hidden md:flex gap-2">
                            <button onclick="scrollGallery('left')" class="p-2 border border-gray-200 rounded-full hover:bg-white hover:border-primary transition-all shadow-sm">
                                <i data-lucide="chevron-left" class="w-5 h-5 text-gray-400"></i>
                            </button>
                            <button onclick="scrollGallery('right')" class="p-2 border border-gray-200 rounded-full hover:bg-white hover:border-primary transition-all shadow-sm">
                                <i data-lucide="chevron-right" class="w-5 h-5 text-gray-400"></i>
                            </button>
                        </div>
                    </div>
                    <div class="relative group">
                        <div id="tour-gallery" class="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 scroll-smooth">
                            ${galleryHTML}
                        </div>
                    </div>
                </div>` : ''}

                <!-- Chi phí -->
                <div class="space-y-8 mt-12">
                    <div class="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                        <h3 class="text-3xl font-black text-primary uppercase text-center mb-12 tracking-tight">Chi phí bao gồm</h3>
                        <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-8 md:gap-x-12 md:gap-y-12">
                            ${inclusionsHTML}
                        </div>
                    </div>

                    ${exclusionsHTML ? `
                    <div class="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden">
                        <h3 class="text-3xl font-black text-red-500 uppercase text-center mb-12 tracking-tight">Chi phí không bao gồm</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                            ${exclusionsHTML}
                        </div>
                    </div>` : ''}
                </div>

                <!-- Chuẩn bị -->
                ${preparingHTML ? `
                <div class="space-y-12 mt-16 pb-12">
                    <h2 class="text-3xl font-black uppercase text-primary tracking-tight text-center">MANG GÌ KHI ĐI TREKKING</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 px-4">
                        ${preparingHTML}
                    </div>
                </div>` : ''}

                <!-- FAQs -->
                ${faqsHTML}
            </div>

            <!-- RIGHT COLUMN (Sticky Booking Sidebar) -->
            <div class="lg:col-span-1">
                <div class="sticky-sidebar space-y-6">
                    <div class="content-card py-5 px-8 text-center border-2 border-primary/10">
                        <p class="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">CHI PHÍ</p>
                        <p id="tour-price-display" class="text-4xl font-black text-primary mb-2">${formattedPrice}</p>
                        <p class="text-xs text-gray-500 font-medium">(Chi phí đã bao gồm trọn gói)</p>
                    </div>

                    <div id="booking-form" class="content-card p-6">
                        <h3 class="text-lg font-black uppercase text-primary mb-5 flex items-center gap-2">
                            <i data-lucide="calendar-check" class="w-5 h-5 text-primary"></i> Khởi hành
                        </h3>
                        <div class="space-y-4">
                            <div class="space-y-2">
                                <label class="text-[10px] font-bold text-gray-400 uppercase block mb-1">Chọn ngày đi</label>
                                <div class="grid grid-cols-2 gap-2" id="date-selector">
                                    <div class="col-span-2 text-center py-4 text-gray-400 text-xs italic">Đang tải lịch trình...</div>
                                </div>
                                <input type="hidden" name="selected_date" id="selected-date-input">
                            </div>
                            <button onclick="initiateBooking()" id="btn-book-now" class="w-full bg-primary text-white py-3 rounded-xl font-bold uppercase tracking-widest shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-95 transition-all mt-4 opacity-50 cursor-not-allowed">
                                Đặt ngay
                            </button>
                        </div>
                    </div>

                    <div class="text-center">
                        <p class="text-xs font-bold text-gray-400 uppercase mb-2">Cần hỗ trợ gấp?</p>
                        <a href="tel:0819685878" class="text-sm font-black text-gray-700 hover:text-primary transition-colors flex items-center justify-center gap-1">
                            📞 0819.685.878
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact / Booking Modal -->
    <div id="success-modal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] hidden flex items-center justify-center p-4" onclick="if(event.target === this) closeSuccessModal()">
        <div class="bg-white p-8 rounded-3xl max-w-md w-full text-center shadow-2xl relative space-y-6">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <i data-lucide="message-square" class="w-8 h-8 text-primary stroke-[2.5]"></i>
            </div>
            <div>
                <h4 class="text-2xl font-black text-primary mb-2">Đăng Ký Chuyến Đi</h4>
                <p class="text-gray-500 text-sm leading-relaxed">
                    Bạn đang quan tâm đến hành trình <span class="font-bold text-gray-800">${tour.name}</span>.<br>Hãy liên hệ trực tiếp với chúng mình qua Zalo hoặc Facebook để đăng ký và nhận tư vấn nhanh nhất nhé!
                </p>
            </div>
            <div class="flex flex-col gap-3">
                <a id="modal-zalo-btn" href="https://zalo.me/0819685878" target="_blank" class="w-full py-4 bg-[#0068ff] text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                    💬 Trò chuyện qua Zalo
                </a>
                <a id="modal-facebook-btn" href="https://facebook.com/camsiteretreats" target="_blank" class="w-full py-4 bg-[#1877f2] text-white font-bold rounded-2xl shadow-lg shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                    👥 Nhắn tin Fanpage
                </a>
            </div>
            <button onclick="closeSuccessModal()" class="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-500 font-bold rounded-2xl transition-all">
                Đóng
            </button>
        </div>
    </div>

    <!-- Recommendations Carousel -->
    <section class="py-20 border-t border-gray-100/50 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 mb-12">
            <div class="flex justify-between items-center">
                <h2 class="text-2xl md:text-3xl font-black uppercase text-primary tracking-tight">Có thể bạn cũng thích</h2>
                <div class="flex gap-2">
                    <button onclick="scrollRecc('left')" class="p-2 border border-gray-200 rounded-full hover:bg-gray-50 hover:border-primary transition-all">
                        <i data-lucide="chevron-left" class="w-5 h-5 text-gray-400"></i>
                    </button>
                    <button onclick="scrollRecc('right')" class="p-2 border border-gray-200 rounded-full hover:bg-gray-50 hover:border-primary transition-all">
                        <i data-lucide="chevron-right" class="w-5 h-5 text-gray-400"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="relative">
            <div id="recc-marquee" class="flex gap-6 overflow-x-auto scrollbar-hide px-6 scroll-smooth snap-x">
                <!-- Loaded dynamically by TourManager -->
            </div>
        </div>
    </section>

    <!-- Footer Placeholder -->
    <div id="footer-placeholder"></div>

    <script>
        lucide.createIcons();

        // Accordion Day toggler
        function toggleDay(dayNum) {
            const content = document.getElementById('content-day-' + dayNum);
            const icon = document.getElementById('icon-day-' + dayNum);
            const dot = document.getElementById('dot-day-' + dayNum);
            
            if (!content || !icon || !dot) return;

            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
                dot.classList.replace('bg-gray-300', 'bg-primary');
                dot.parentElement.classList.add('active');
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
                dot.classList.replace('bg-primary', 'bg-gray-300');
                dot.parentElement.classList.remove('active');
            }
        }

        // Gallery scroll buttons
        function scrollGallery(dir) {
            const gallery = document.getElementById('tour-gallery');
            if (!gallery) return;
            const scrollAmount = gallery.clientWidth * 0.7;
            gallery.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }

        // Recommendations scroll buttons
        function scrollRecc(dir) {
            const marquee = document.getElementById('recc-marquee');
            if (!marquee) return;
            const scrollAmount = marquee.clientWidth * 0.7;
            marquee.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }

        // Booking widget handlers
        function initiateBooking() {
            const dateStr = document.getElementById('selected-date-input').value;
            if (!dateStr) { alert('Vui lòng chọn ngày khởi hành'); return; }
            if (typeof window.openContactModal === 'function') {
                window.openContactModal();
            } else {
                // If contact modal UI components helper not loaded, fallback
                const modal = document.getElementById('success-modal');
                if (modal) modal.classList.remove('hidden');
            }
        }
        window.openBookingModal = initiateBooking;

        function selectDate(element, dateStr) {
            document.querySelectorAll('.date-option').forEach(opt => opt.classList.remove('selected'));
            element.classList.add('selected');
            const input = document.getElementById('selected-date-input');
            if (input) input.value = dateStr;
            const btn = document.getElementById('btn-book-now');
            if (btn) btn.classList.remove('opacity-50', 'cursor-not-allowed');
        }

        function closeSuccessModal() {
            const modal = document.getElementById('success-modal');
            if (modal) modal.classList.add('hidden');
        }

        function filterSchedules() {
            const ds = document.getElementById('date-selector');
            if (!ds) return;
            const tour = window._currentTourData;
            if (!tour || !tour.id) { ds.innerHTML = '<div class="col-span-2 text-center py-4 text-gray-400 text-xs italic">Chưa có lịch khởi hành.</div>'; return; }
            
            const full = TourManager.getTourById(tour.id);
            ds.innerHTML = '';
            if (full && full.schedules && full.schedules.length > 0) {
                full.schedules.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
                full.schedules.forEach(item => {
                    const rem = item.remaining; 
                    const st = item.calculatedStatus;
                    let sd='', sc='', oc='', ck=true;
                    if (st === 'Hết chỗ' || rem <= 0) { 
                        sd='Hết chỗ'; 
                        sc='text-red-500'; 
                        oc='opacity-50 cursor-not-allowed bg-gray-100'; 
                        ck=false; 
                    } else { 
                        sd='Còn '+rem+' chỗ'; 
                        sc=rem<=3 ? 'text-orange-500' : 'text-green-600'; 
                    }
                    
                    const ss = item.date;
                    const ca = ck ? 'onclick="selectDate(this, \\''+ss+'\\')"' : '';
                    ds.innerHTML += \`
                        <div class="date-option flex flex-col justify-center items-center \${oc}" \${ca}>
                            <p class="text-xs font-bold text-gray-600">\${ss}</p>
                            <p class="text-[9px] font-bold mt-0.5 \${sc}">\${sd}</p>
                        </div>
                    \`;
                });
            } else {
                ds.innerHTML = '<div class="col-span-2 text-center py-4 text-gray-400 text-xs italic">Chưa có lịch khởi hành.</div>';
            }
        }

        // Initialize dynamic widgets on load
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof TourManager !== 'undefined') {
                TourManager.renderRecommendations('recc-marquee', window._currentTourData?.id || 0);
                filterSchedules();
            }
        });

        // Listen for schedules update event
        window.addEventListener('schedules-updated', () => {
            filterSchedules();
        });
    </script>
</body>
</html>`;

        return new Response(html, {
            headers: {
                ...corsHeaders,
                'Content-Type': 'text/html; charset=utf-8'
            }
        });

    } catch (error) {
        console.error('SSR Page Error:', error);
        return new Response(`Error rendering page: ${error.message}`, {
            status: 500,
            headers: corsHeaders
        });
    }
}
