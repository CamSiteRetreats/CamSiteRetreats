import { Sidebar } from '../components/Sidebar.js';
import { Header } from '../components/Header.js';

export const render = () => {
    return `
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800 font-sans">
        <!-- Sidebar is hidden when printing -->
        <div class="print:hidden">
            ${Sidebar()}
        </div>
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          <div class="print:hidden">
              ${Header()}
          </div>
          
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6 print:p-0 print:bg-white print:overflow-visible">
               <div class="max-w-[1400px] mx-auto space-y-6 print:space-y-4">
                  
                  <!-- Top Bar (Hidden on Print) -->
                  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 print:hidden">
                      <div>
                          <div class="flex items-center gap-2 mb-4">
                              <a href="/admin/schedules" data-link class="text-sm font-medium text-gray-400 hover:text-csr-orange transition-colors flex items-center gap-1">
                                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                                  Quay lại Lịch Trình
                              </a>
                          </div>
                          
                          <div class="flex items-center gap-4 mb-2">
                              <img src="/logo-camsite-01.png" alt="CAM SITE RETREATS" class="h-14 md:h-16 object-contain">
                              <div class="h-10 border-l border-gray-300"></div>
                              <span class="text-sm font-bold text-gray-400 uppercase tracking-widest">DANH SÁCH ĐOÀN</span>
                          </div>

                          <h1 class="text-3xl font-black tracking-tight text-gray-800 mb-1" id="roster-title">Đang tải tên tour...</h1>
                          <p class="text-gray-500 text-sm" id="roster-subtitle">Đang tải ngày khởi hành...</p>
                      </div>
                      
                      <div class="flex items-center gap-3">
                          <button id="btnExportExcel" class="btn-secondary flex items-center gap-2 bg-white text-green-600 border border-green-200 hover:bg-green-50 shadow-sm">
                              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                              Xuất Excel
                          </button>
                          <button id="btnExportPDF" class="btn-primary flex items-center gap-2 bg-csr-orange hover:opacity-90 shadow-sm text-white">
                              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                              In PDF / Xuất PDF
                          </button>
                      </div>
                  </div>

                  <!-- Print Header (Only visible on Print) -->
                  <div class="hidden print:flex text-left border-b-4 border-csr-orange pb-4 mb-6 items-center justify-between">
                      <div class="flex items-center gap-6">
                            <img src="/logo-camsite-01.png" alt="CAM SITE RETREATS" class="h-20 object-contain">
                            <div>
                                <h1 class="text-3xl font-black uppercase tracking-widest text-[#1A202C] mb-1">VẬN HÀNH TOUR</h1>
                                <div class="text-[16px] text-gray-800 font-bold flex items-center gap-4">
                                    <span class="text-csr-orange text-xl" id="print-tour-name">Tuyến: ...</span>
                                    <span class="text-gray-300">|</span>
                                    <span id="print-tour-date">Ngày: ...</span>
                                </div>
                            </div>
                      </div>
                      <div class="text-right">
                          <span class="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-1">Tổng Số Khách</span>
                          <span class="text-4xl font-black text-csr-orange" id="print-total">0</span>
                      </div>
                  </div>

                  <!-- Filters & Column Selection (Hidden on Print) -->
                  <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-5 print:hidden">
                      <div class="flex flex-col md:flex-row gap-5 items-start md:items-center justify-between border-b border-gray-100 pb-5">
                          <div class="flex flex-wrap items-center gap-4">
                              <h3 class="font-bold text-gray-800 flex items-center gap-2">
                                  <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                                  Bộ lọc & Tìm kiếm
                              </h3>
                              <!-- Tìm kiếm text -->
                              <div class="relative min-w-[200px]">
                                  <input type="text" id="filterSearch" placeholder="Tìm tên, SĐT..." class="input-field pl-9 py-2 text-sm w-full">
                                  <svg class="w-4 h-4 absolute left-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                              </div>

                              <select id="filterStatus" class="input-field py-2 text-sm max-w-[180px]">
                                  <option value="">-- Tất cả Trạng thái --</option>
                                  <option value="Đã cọc">Đã cọc / Hoàn tất</option>
                                  <option value="Chờ cọc">Chờ cọc</option>
                                  <option value="Đã hủy">Đã hủy</option>
                              </select>
                              <select id="filterGender" class="input-field py-2 text-sm max-w-[150px]">
                                  <option value="">-- Giới tính --</option>
                                  <option value="Nam">Nam</option>
                                  <option value="Nữ">Nữ</option>
                              </select>

                              <!-- Sắp xếp -->
                              <select id="filterSort" class="input-field py-2 text-sm max-w-[180px] font-bold text-csr-orange border-csr-orange/20">
                                  <option value="newest">🆕 Mới nhất lên đầu</option>
                                  <option value="oldest">⏳ Cũ nhất lên đầu</option>
                              </select>
                          </div>
                          
                          <div class="text-sm text-gray-500 font-medium">
                              Hiển thị <span id="text-visible-count" class="text-gray-900 font-bold">0</span> danh mục
                          </div>
                      </div>

                      <div>
                          <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <svg class="w-4 h-4 text-csr-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                              Hiển Thị Thêm Cột <span class="ml-2 text-xs font-normal text-gray-400 normal-case tracking-normal">(Tick để bổ sung thông tin bên dưới)</span>
                          </h3>
                          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2" id="column-toggles">
                              <!-- Checkboxes generated by JS -->
                          </div>
                          <p class="text-xs text-gray-400 mt-3 italic">* 6 trường mặc định luôn hiển thị. Tick để thêm cột mở rộng.</p>
                      </div>
                  </div>

                  <!-- Assigned Guides Section -->
                  <div id="rosterGuidesSection" class="bg-indigo-50/50 rounded-2xl border border-indigo-100 p-5 hidden print:block print:border-none print:p-0 print:mb-6">
                      <h3 class="font-bold text-indigo-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider print:text-black print:mb-2">
                          <svg class="w-4 h-4 text-indigo-500 print:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                          Nhân Sự Phụ Trách
                      </h3>
                      <div id="rosterGuidesList" class="flex flex-wrap gap-2">
                          <!-- Guides will be loaded here -->
                      </div>
                  </div>

                  <!-- Main Content: Table + Seat Map -->
                  <div class="flex flex-col xl:flex-row gap-4 items-start">

                      <!-- LEFT: Data Table -->
                      <div class="flex-1 min-w-0 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden print:border-none print:shadow-none print:rounded-none">
                          <div class="overflow-x-auto print:overflow-visible">
                              <table class="w-full text-left border-collapse" id="rosterTable">
                                  <thead class="bg-gray-50 text-xs uppercase text-gray-500 font-semibold border-b border-gray-200 print:bg-white print:text-black print:border-b-2 print:border-gray-800">
                                      <tr id="table-header-row">
                                          <!-- Headers driven by JS config -->
                                      </tr>
                                  </thead>
                                  <tbody id="rosterList" class="divide-y divide-gray-100 text-sm print:text-[12px] print:divide-gray-300">
                                      <tr><td colspan="14" class="p-8 text-center text-gray-400">Đang tải dữ liệu...</td></tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>

                      <!-- RIGHT: Seat Map (hidden on print) -->
                      <div class="xl:sticky xl:top-4 w-full xl:w-72 flex-shrink-0 print:hidden">
                          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
                              <!-- Header -->
                              <div class="flex items-center justify-between mb-1">
                                  <h3 class="font-black text-gray-800 text-sm flex items-center gap-2">
                                      <span class="text-xl">🚌</span> Sơ Đồ Xe
                                  </h3>
                                  <span id="seat-map-count" class="text-xs bg-orange-50 text-csr-orange border border-orange-100 px-2 py-0.5 rounded-full font-bold">0/15</span>
                              </div>
                              <div id="vehicle-label" class="text-[10px] text-gray-500 font-bold mb-3 text-center">🚐 Solati 16 chỗ</div>
                              <!-- Bus Direction -->
                              <div class="text-[10px] text-gray-400 text-center mb-2 uppercase tracking-widest">← Đầu Xe</div>
                              <!-- Seat Grid -->
                              <div id="seatMapGrid" class="space-y-1">
                                  <!-- Generated by JS -->
                              </div>
                              <div class="text-[10px] text-gray-400 text-center mt-2 uppercase tracking-widest">Đuôi Xe →</div>
                              <!-- Legend -->
                              <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-center gap-4 text-[11px] text-gray-500">
                                  <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-gray-200 inline-block"></span> Trống</span>
                                  <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-csr-orange inline-block"></span> Đã xếp</span>
                                  <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-gray-700 inline-block"></span> Lái xe</span>
                              </div>
                          </div>
                      </div>

                  </div>

               </div>
          </main>
        </div>
      </div>

      <!-- Seat Assignment Modal -->
      <div id="seatModal" class="fixed inset-0 bg-black/60 z-[100] hidden items-center justify-center p-4" style="display:none">
          <div id="seatModalContent" class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
              <div class="bg-csr-orange px-5 py-4 flex items-center justify-between">
                  <h3 class="font-black text-white text-base" id="seatModalTitle">Ghế #1</h3>
                  <button id="seatModalClose" class="text-white/80 hover:text-white">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                  </button>
              </div>
              <div class="p-4 max-h-80 overflow-y-auto" id="seatModalBody">
                  <!-- List of passengers -->
              </div>
          </div>
      </div>

      <style>
          .col-hidden { display: none !important; }
          .nowrap { white-space: nowrap; }
          .seat-btn { transition: all 0.15s ease; cursor: pointer; }
          .seat-btn:hover:not(.seat-driver) { transform: scale(1.05); box-shadow: 0 0 0 2px #E85D04; }
          .seat-empty { background: #f3f4f6; border: 2px dashed #d1d5db; color: #9ca3af; }
          .seat-assigned { background: #E85D04; border: 2px solid #c44c03; color: white; }
          .seat-driver { background: #1f2937; border: 2px solid #111827; color: #6b7280; cursor: default !important; }
          .seat-highlighted { box-shadow: 0 0 0 3px #E85D04, 0 0 0 5px rgba(232,93,4,0.3) !important; }
          .row-highlighted td { background-color: #fff7ed !important; }
          @media print {
              @page { size: landscape; margin: 0; }
              body { font-family: 'Times New Roman', serif; background: white; margin: 1.5cm; }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #ccc; padding: 6px 8px !important; color: black !important; }
              th { background-color: #f3f4f6 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          }
      </style>
    `;
};

export const afterRender = async () => {
    // 1. Column Definition
    const renderStatus = (status) => {
        const s = (status || '').toLowerCase();
        if (s.includes('hoàn tất') || s.includes('hoàn thành') || s.includes('đã thanh toán') || s.includes('thanh toán')) {
            return `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                        Đã Thanh Toán</span>`;
        }
        if (s.includes('đã cọc') || s.includes('da coc')) {
            return `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2H6z"/></svg>
                        Đã Cọc</span>`;
        }
        if (s.includes('hủy') || s.includes('cancelled')) {
            return `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-600 border border-red-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                        Đã Hủy</span>`;
        }
        return `<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">${status || 'Chờ cọc'}</span>`;
    };

    const renderExtraServices = (b) => {
        let items = [];

        const raw = b.services_booked;

        if (raw && raw !== '[]' && raw !== 'null' && raw !== '') {

            // Case 1: DB (Cloudflare JSONB) trả về array trực tiếp, không cần parse
            if (Array.isArray(raw)) {
                items = raw.map(sv => {
                    const label = sv.label || sv.name || sv.title || '';
                    const price = sv.price && Number(sv.price) > 0
                        ? ` (+${Number(sv.price).toLocaleString('vi-VN')}đ)` : '';
                    return (label + price).trim();
                }).filter(Boolean);
            }
            // Case 2 & 3: Dạng string (JSON hoặc JS literal)
            else if (typeof raw === 'string' && raw.trim().startsWith('[')) {
                try {
                    // Case 2: Valid JSON string
                    const parsed = JSON.parse(raw);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        items = parsed.map(sv => {
                            const label = sv.label || sv.name || sv.title || '';
                            const price = sv.price && Number(sv.price) > 0
                                ? ` (+${Number(sv.price).toLocaleString('vi-VN')}đ)` : '';
                            return (label + price).trim();
                        }).filter(Boolean);
                    }
                } catch(e) {
                    // Case 3: JS object literal → dùng regex extract
                    const labelMatches = raw.match(/label:\s*['"]([^'"]+)['"]/g) || [];
                    const priceMatches = raw.match(/price:\s*(\d+)/g) || [];
                    if (labelMatches.length > 0) {
                        items = labelMatches.map((m, i) => {
                            const label = m.replace(/label:\s*['"]/, '').replace(/['"]$/, '').trim();
                            const priceStr = priceMatches[i] || '';
                            const price = priceStr ? Number(priceStr.replace(/price:\s*/, '')) : 0;
                            return (label + (price > 0 ? ` (+${price.toLocaleString('vi-VN')}đ)` : '')).trim();
                        }).filter(Boolean);
                    }
                }
            }
        }

        // Fallback: các field cũ (plain text)
        if (items.length === 0) {
            const oldRaw = b.extra_services || b.extraServices || b.extra || b.notes_extra || '';
            if (oldRaw && oldRaw !== '-' && oldRaw.trim() !== '') {
                items = oldRaw.split(/[\n,;]+/).map(s => s.trim()).filter(Boolean);
            }
        }

        if (items.length === 0) {
            return `<span class="text-gray-300 text-xs italic">Không có</span>`;
        }

        const palette = [
            'bg-violet-100 text-violet-700 border-violet-200',
            'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200',
            'bg-sky-100 text-sky-700 border-sky-200',
            'bg-teal-100 text-teal-700 border-teal-200',
            'bg-orange-100 text-orange-700 border-orange-200',
            'bg-rose-100 text-rose-700 border-rose-200',
        ];
        return `<div class="flex flex-wrap gap-1.5">${items.map((item, i) => {
            const cls = palette[i % palette.length];
            return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${cls}">
                        <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                        ${item}</span>`;
        }).join('')}</div>`;
    };

    // Helper: Check birthday in current month
    const isBirthdayMonth = (dob) => {
        if (!dob) return false;
        const m = new Date().getMonth() + 1;
        const parts = dob.split('-');
        if (parts.length === 3) return parseInt(parts[1]) === m;
        return false;
    };

    const COLUMNS = [
        { id: 'col-stt', label: 'STT', always: true, render: (b, index) => `<span class="text-gray-400 font-mono text-xs">${index + 1}</span>` },
        {
            id: 'col-name', label: 'Họ và Tên', default: true,
            render: (b) => {
                const bday = isBirthdayMonth(b.dob) ? ' <span title="Sinh nhật tháng này!" class="text-pink-500">🎂</span>' : '';
                return `<div class="font-bold text-gray-900 text-sm">${b.name || '-'}${bday}</div>`;
            }
        },
        {
            id: 'col-dob', label: 'Ngày Sinh', default: true,
            render: (b) => {
                if (!b.dob) return '<span class="text-gray-300">—</span>';
                const parts = b.dob.split('-');
                const formatted = parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : b.dob;
                const bday = isBirthdayMonth(b.dob) ? ' 🎂' : '';
                return `<span class="text-gray-700 text-sm tabular-nums">${formatted}${bday}</span>`;
            }
        },
        { id: 'col-gender', label: 'Giới Tính', default: true, render: (b) => {
            const g = b.gender || '';
            if (g === 'Nam') return '<span class="text-blue-600 font-bold text-xs">👨 Nam</span>';
            if (g === 'Nữ') return '<span class="text-pink-600 font-bold text-xs">👩 Nữ</span>';
            return '<span class="text-gray-400 text-xs">—</span>';
        }},
        {
            id: 'col-phone', label: 'Số Điện Thoại', default: true,
            render: (b) => `<a href="tel:${b.phone || ''}" class="font-medium text-blue-600 hover:text-blue-800 hover:underline tabular-nums text-sm">${b.phone || '—'}</a>`
        },
        {
            id: 'col-pickup', label: 'Điểm Đón', default: true,
            render: (b) => b.pickup_point ? `<span class="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full font-medium">${b.pickup_point}</span>` : '<span class="text-gray-300 text-xs">—</span>'
        },
        {
            id: 'col-seat', label: '💺 Ghế', default: true,
            render: (b) => {
                const seat = b.seat_number || '';
                return `<div class="flex items-center gap-1">
                    ${seat ? `<span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-csr-orange text-white font-black text-sm seat-badge" data-id="${b.id}">${seat}</span>` : `<span class="inline-flex items-center justify-center w-8 h-8 rounded-lg border-2 border-dashed border-gray-300 text-gray-400 text-xs seat-badge cursor-pointer hover:border-csr-orange hover:text-csr-orange transition-colors" data-id="${b.id}">+</span>`}
                </div>`;
            }
        },
        {
            id: 'col-note', label: 'Ghi Chú', default: true,
            render: (b) => b.special ? `<span class="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">${b.special}</span>` : '<span class="text-gray-300 text-xs">—</span>'
        },
        {
            id: 'col-status', label: 'Trạng Thái', default: true,
            render: (b) => renderStatus(b.status)
        },
        // --- Ẩn mặc định, tick để hiện ---
        {
            id: 'col-order-id', label: 'Mã Đơn', default: false,
            render: (b) => `<span class="font-mono text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-200">#${b.id || '—'}</span>`
        },
        { id: 'col-extra', label: 'Dịch Vụ Phát Sinh', default: false, render: (b) => renderExtraServices(b) },
        { id: 'col-sale', label: 'Sale Phụ Trách', default: false, render: (b) => `<div class="font-bold text-indigo-700 text-sm whitespace-nowrap">${b.sale_name && b.sale_name !== 'null' && b.sale_name !== 'Website' ? b.sale_name : '<span class="text-gray-400 font-normal">Website</span>'}</div>` },
        { id: 'col-cccd', label: 'CCCD / Passport', default: false, render: (b) => b.id_card || b.cccd || '-' },
        { id: 'col-address', label: 'Địa Chỉ', default: false, render: (b) => `<div class="max-w-[200px] truncate print:max-w-none print:whitespace-normal" title="${b.address || ''}">${b.address || '-'}</div>` },
        { id: 'col-diet', label: 'Ăn Chay', default: false, render: (b) => (b.diet === 'Ăn chay' || b.diet === 'Chay' || b.diet === 'Có') ? '<span class="text-green-600 font-bold">Có</span>' : 'Không' },
        { id: 'col-pole', label: 'Gậy Trekking', default: false, render: (b) => (b.trekking_pole === 'Có') ? '<span class="text-orange-600 font-bold">Có</span>' : 'Không' },
        { id: 'col-allergy', label: 'Dị Ứng / Bệnh', default: false, render: (b) => b.medical_notes || b.allergy || '-' },
        { id: 'col-medal', label: 'Tên Huy Chương', default: false, render: (b) => b.medal_name || b.name || '-' },
    ];


    const params = new URLSearchParams(window.location.search);
    const targetTour = params.get('tour') || '';
    const targetDateStr = params.get('date') || ''; // Ex: 2025-03-01
    const targetScheduleId = params.get('scheduleId') || '';
    const hasGroupLabel = !!params.get('groupLabel');
    const vehicleType = params.get('vehicleType') || 'solati_16';
    let targetDateFormated = targetDateStr;

    // Convert to DD/MM/YYYY for title and robust comparison
    const normalizeDate = (d) => {
        if (!d) return '';
        const parts = d.split(/[-/.]/); // Support dots too
        if (parts.length !== 3) return d;
        let day, month, year;
        if (parts[0].length === 4) { // YYYY-MM-DD
            [year, month, day] = parts;
        } else { // DD/MM/YYYY
            [day, month, year] = parts;
        }
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    };

    const normalizeText = (text) => {
        return (text || '').toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
            .replace(/[-_]/g, ' ') // Replace dashes with spaces
            .replace(/\s+/g, ' ') // Collapse spaces
            .trim();
    };

    if (targetDateStr) {
        targetDateFormated = normalizeDate(targetDateStr);
    }

    // UI Elements
    const titleEl = document.getElementById('roster-title');
    const subtitleEl = document.getElementById('roster-subtitle');
    const pTourEl = document.getElementById('print-tour-name');
    const pDateEl = document.getElementById('print-tour-date');
    const pTotalEl = document.getElementById('print-total');

    const filterStatus = document.getElementById('filterStatus');
    const filterGender = document.getElementById('filterGender');
    const tbody = document.getElementById('rosterList');

    let allBookings = [];
    let visibleCols = new Set(COLUMNS.filter(c => c.default || c.always).map(c => c.id));

    // Update Titles
    if (targetTour) {
        titleEl.textContent = targetTour;
        pTourEl.textContent = targetTour;
    }
    if (targetDateFormated) {
        subtitleEl.innerHTML = `Ngày khởi hành: <span class="font-bold text-csr-orange">${targetDateFormated}</span>`;
        pDateEl.textContent = targetDateFormated;
    }

    // --- 2. Build Toggles & Header ---
    const buildColumnToggles = () => {
        const container = document.getElementById('column-toggles');
        // Chỉ hiện toggle cho các cột không phải always và không phải default (default luôn hiện sẵn)
        container.innerHTML = COLUMNS.filter(c => !c.always && !c.default).map(c => `
            <label class="flex items-center gap-2 cursor-pointer group bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 hover:border-csr-orange/50 transition-colors">
                <input type="checkbox" value="${c.id}" class="col-toggle-cb text-csr-orange focus:ring-csr-orange rounded" ${visibleCols.has(c.id) ? 'checked' : ''}>
                <span class="text-sm font-medium text-gray-600 group-hover:text-gray-900 select-none">${c.label}</span>
            </label>
        `).join('');

        // Attach events
        document.querySelectorAll('.col-toggle-cb').forEach(cb => {
            cb.addEventListener('change', (e) => {
                if (e.target.checked) visibleCols.add(e.target.value);
                else visibleCols.delete(e.target.value);

                // Toggle classes on table columns
                toggleTableColumns();
            });
        });
    };

    const buildTableHeader = () => {
        const tr = document.getElementById('table-header-row');
        tr.innerHTML = COLUMNS.map(c => `
            <th class="p-4 whitespace-nowrap ${c.id}" data-col="${c.id}">${c.label}</th>
        `).join('');
    };

    const toggleTableColumns = () => {
        COLUMNS.forEach(c => {
            const isVisible = visibleCols.has(c.id);
            // Toggle header
            const th = document.querySelector(`th[data-col="${c.id}"]`);
            if (th) {
                if (isVisible) th.classList.remove('col-hidden');
                else th.classList.add('col-hidden');
            }
            // Toggle cells
            document.querySelectorAll(`td[data-col="${c.id}"]`).forEach(td => {
                if (isVisible) td.classList.remove('col-hidden');
                else td.classList.add('col-hidden');
            });
        });
    };

    // --- 3. Data Fetching & Rendering ---
    // Robust date parser: handles "5/4 - 5/4", "05/04/2026", "2026-04-05", "5/4", etc.
    const extractDayMonth = (d) => {
        if (!d) return null;
        // Nếu là range "D/M - D/M" hoặc "DD/MM - DD/MM", lấy phần đầu
        if (d.includes(' - ')) d = d.split(' - ')[0].trim();
        // Strip ISO timestamp
        if (d.includes('T')) d = d.split('T')[0];
        const parts = d.split(/[-/.]/);
        if (parts.length === 2) {
            // Format "D/M" — không có năm
            return { day: parseInt(parts[0]), month: parseInt(parts[1]), year: null };
        }
        if (parts.length === 3) {
            if (parts[0].length === 4) {
                // YYYY-MM-DD
                return { day: parseInt(parts[2]), month: parseInt(parts[1]), year: parseInt(parts[0]) };
            } else {
                // DD/MM/YYYY
                return { day: parseInt(parts[0]), month: parseInt(parts[1]), year: parseInt(parts[2]) };
            }
        }
        return null;
    };

    // Parse targetDate (luôn có năm, format YYYY-MM-DD từ Schedules)
    const targetParsed = extractDayMonth(targetDateStr);

    const dateMatches = (bookingDate) => {
        if (!targetParsed) return true; // Không filter nếu target không hợp lệ
        const bp = extractDayMonth(bookingDate);
        if (!bp) return false;
        // So sánh ngày + tháng
        if (bp.day !== targetParsed.day || bp.month !== targetParsed.month) return false;
        // Nếu booking có năm, so sánh năm; nếu không có năm thì chấp nhận (match D/M)
        if (bp.year && targetParsed.year && bp.year !== targetParsed.year) return false;
        return true;
    };

    const loadData = async () => {
        try {
            // Load Guides if scheduleId is present
            if (targetScheduleId) {
                try {
                    const guidesRes = await fetch(`/api/guides?schedule_id=${targetScheduleId}`);
                    const guides = await guidesRes.json();
                    if (guides && guides.length > 0) {
                        const guidesSection = document.getElementById('rosterGuidesSection');
                        const guidesList = document.getElementById('rosterGuidesList');
                        
                        const ROLE_COLORS = {
                            'Hướng Dẫn Viên': 'bg-blue-100 text-blue-700 border-blue-200',
                            'Leader': 'bg-purple-100 text-purple-700 border-purple-200',
                            'Photo': 'bg-pink-100 text-pink-700 border-pink-200',
                            'Guider': 'bg-cyan-100 text-cyan-700 border-cyan-200',
                            'Hậu Cần': 'bg-amber-100 text-amber-700 border-amber-200',
                            'Học Việc': 'bg-gray-100 text-gray-600 border-gray-200',
                        };

                        guidesSection.classList.remove('hidden');
                        guidesList.innerHTML = guides.map(g => {
                            const badgeColor = ROLE_COLORS[g.role] || 'bg-gray-100 text-gray-600 border-gray-200';
                            return `
                                <div class="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-gray-200 shadow-sm print:shadow-none print:border-gray-400">
                                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${badgeColor} uppercase tracking-wide print:border-black print:text-black">${g.role}</span>
                                    <span class="font-bold text-gray-900 text-sm print:text-black">${g.full_name}</span>
                                    ${g.phone ? `<a href="tel:${g.phone}" class="text-xs text-gray-500 hover:text-indigo-600 font-medium ml-1 print:text-black print:no-underline">(${g.phone})</a>` : ''}
                                </div>
                            `;
                        }).join('');
                    }
                } catch (err) {
                    console.error('Error loading guides:', err);
                }
            }

            const res = await fetch('/api/bookings');
            const data = await res.json();

            // Debug log
            console.log('[Roster] targetTour:', targetTour, 'targetDateStr:', targetDateStr, 'targetParsed:', targetParsed);
            console.log('[Roster] Total bookings:', data.length);
            if (data.length > 0) {
                const samples = data.filter(b => b.tour && b.tour.includes('Liêng')).slice(0, 3);
                samples.forEach(s => console.log('[Roster] Sample Liêng:', { tour: s.tour, date: s.date, parsed: extractDayMonth(s.date) }));
            }

            // Lọc theo Tour và Ngày (so sánh linh hoạt: range, no-year, chuẩn)
            allBookings = data.filter(b => {
                // Priority: Nếu đã request ID lịch trình (từ nút Xem Danh Sách Đoàn ở Lịch trình)
                if (targetScheduleId) {
                    // Ưu tiên 1: booking được gán trực tiếp
                    if (String(b.schedule_id) === String(targetScheduleId)) return true;
                    // Fallback: Nếu lịch trình NÀY KIỂU DOANH NGHIỆP CŨ (không có label ĐỘI A, ĐỘI B...)
                    if (!hasGroupLabel && !b.schedule_id) {
                        // Tiếp tục rơi xuống logic check Tên & Ngày
                    } else {
                        return false;
                    }
                }

                // Fallback / legacy matching for general URLs (without scheduleId or for older group-less schedules):
                let mTour = true, mDate = true;
                if (targetTour) {
                    const normB = normalizeText(b.tour);
                    const normT = normalizeText(targetTour);
                    mTour = (normB === normT || normB.includes(normT) || normT.includes(normB));
                }
                if (targetDateStr) {
                    mDate = dateMatches(b.date);
                }
                return mTour && mDate;
            });

            console.log('[Roster] Matched bookings:', allBookings.length);

            // Sắp xếp: Luôn ưu tiên những người ĐĂNG KÝ ĐẦU TIÊN hiện lên TRÊN ĐẦU (Sắp xếp theo ID tăng dần)
            // Apply sorting (Now respects the filterSort select)
            const sortOrder = document.getElementById('filterSort')?.value || 'newest';
            if (sortOrder === 'newest') {
                allBookings.sort((a, b) => parseInt(b.id) - parseInt(a.id));
            } else {
                allBookings.sort((a, b) => parseInt(a.id) - parseInt(b.id));
            }

            console.log(`[Roster] Sorted bookings (${sortOrder}):`, allBookings.map(b => b.id));

            renderTable();

        } catch (err) {
            console.error('Lỗi khi tải dữ liệu đoàn:', err);
            tbody.innerHTML = '<tr><td colspan="12" class="p-8 text-center text-red-500 font-bold">Lỗi khi tải dữ liệu. Vui lòng tải lại trang.</td></tr>';
        }
    };

    const renderTable = () => {
        const sStatus = filterStatus.value.toLowerCase();
        const sGender = filterGender.value.toLowerCase();
        const sSearch = document.getElementById('filterSearch')?.value?.toLowerCase() || '';

        const filtered = allBookings.filter(b => {
            // 1. Search term (Name, Phone, ID, Address, CRM ID)
            if (sSearch) {
                const searchStr = `${b.name} ${b.phone} ${b.address} ${b.medal_name} ${b.customer_id}`.toLowerCase();
                if (!searchStr.includes(sSearch)) return false;
            }

            // 2. Status filter
            const bStatus = (b.status || '').toLowerCase();
            const statusMatch = sStatus === '' ||
                (sStatus === 'chờ cọc' && (bStatus.includes('chờ cọc') || bStatus.includes('chờ xác nhận'))) ||
                (sStatus === 'đã cọc' && (bStatus.includes('đã cọc') || bStatus.includes('hoàn tất') || bStatus.includes('hoàn thành'))) ||
                (sStatus === 'đã hủy' && bStatus.includes('hủy'));

            if (!statusMatch) return false;

            // 3. Gender filter
            const bGender = (b.gender || '').toLowerCase();
            return sGender === '' || bGender === sGender;
        });

        document.getElementById('text-visible-count').textContent = filtered.length;
        pTotalEl.textContent = filtered.length;

        if (filtered.length === 0) {
            tbody.innerHTML = '<tr><td colspan="12" class="p-12 text-center text-gray-500 bg-gray-50">Không tìm thấy khách hàng nào khớp với điều kiện lọc.</td></tr>';
            return;
        }

        tbody.innerHTML = filtered.map((b, index) => {
            const isEven = index % 2 === 0;
            return `<tr class="${isEven ? 'bg-white' : 'bg-gray-50/40'} hover:bg-amber-50/40 transition-colors border-b border-gray-100 group" data-booking-id="${b.id}">` +
                COLUMNS.map(c => `
                    <td class="px-4 py-3 align-middle ${c.id === 'col-extra' ? 'min-w-[220px]' : ''} ${visibleCols.has(c.id) ? '' : 'col-hidden'}" data-col="${c.id}">
                        ${c.render(b, index)}
                    </td>
                `).join('') +
                '</tr>';
        }).join('');
    };

    // --- 4. Export Functions ---
    const exportExcel = () => {
        const visibleColumnsArr = COLUMNS.filter(c => visibleCols.has(c.id));

        const sStatus = filterStatus.value.toLowerCase();
        const sGender = filterGender.value.toLowerCase();
        const sSearch = document.getElementById('filterSearch')?.value?.toLowerCase() || '';

        const activeData = allBookings.filter(b => {
            // Multi-criteria filter (same logic as renderTable)
            if (sSearch) {
                const searchStr = `${b.name} ${b.phone} ${b.address} ${b.medal_name} ${b.customer_id}`.toLowerCase();
                if (!searchStr.includes(sSearch)) return false;
            }

            const bStatus = (b.status || '').toLowerCase();
            const statusMatch = sStatus === '' ||
                (sStatus === 'chờ cọc' && (bStatus.includes('chờ cọc') || bStatus.includes('chờ xác nhận'))) ||
                (sStatus === 'đã cọc' && (bStatus.includes('đã cọc') || bStatus.includes('hoàn tất') || bStatus.includes('hoàn thành'))) ||
                (sStatus === 'đã hủy' && bStatus.includes('hủy'));

            if (!statusMatch) return false;

            const bGender = (b.gender || '').toLowerCase();
            const genderMatch = sGender === '' || bGender === sGender;

            return genderMatch;
        });

        // Tạo nội dung file Excel bằng định dạng HTML table (hỗ trợ stylesheet cho Excel)
        let htmlTable = `
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
            <head>
                <meta charset="utf-8" />
                <style>
                    table { border-collapse: collapse; width: 100%; font-family: 'Calibri', sans-serif; font-size: 11pt; }
                    th, td { border: 1px solid #000000; padding: 6px 8px; text-align: left; vertical-align: middle; }
                    th { background-color: #f2f2f2; font-weight: bold; }
                    /* Class ngăn Excel tự động format số điện thoại / cccd thành số khoa học / mất số 0 */
                    .num { mso-number-format: "\\@"; }
                </style>
            </head>
            <body>
                <table>
                    <thead>
                        <tr>
                            ${visibleColumnsArr.map(c => `<th>${c.label}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
        `;

        activeData.forEach((b, index) => {
            htmlTable += '<tr>';
            visibleColumnsArr.forEach(c => {
                let cellData = '';
                if (c.id === 'col-stt') cellData = index + 1;
                else if (c.id === 'col-name') cellData = b.name || '';
                else if (c.id === 'col-order-id') cellData = b.id || '';
                else if (c.id === 'col-address') cellData = b.address || '';
                else if (c.id === 'col-phone') cellData = b.phone ? String(b.phone) : '';
                else if (c.id === 'col-diet') cellData = (b.diet === 'Ăn chay' || b.diet === 'Chay' || b.diet === 'Có') ? 'Có' : 'Không';
                else if (c.id === 'col-pole') cellData = (b.trekking_pole === 'Có') ? 'Có' : 'Không';
                else if (c.id === 'col-status') cellData = b.status || '';
                else if (c.id === 'col-extra') {
                    const raw = b.services_booked;
                    if (raw && raw !== '[]' && raw !== 'null' && raw !== '') {
                        const extractItems = (arr) => arr.map(sv => {
                            const label = sv.label || sv.name || sv.title || '';
                            const price = sv.price && Number(sv.price) > 0 ? ` (+${Number(sv.price).toLocaleString('vi-VN')}đ)` : '';
                            return (label + price).trim();
                        }).filter(Boolean).join(', ');

                        if (Array.isArray(raw)) {
                            cellData = extractItems(raw);
                        } else if (typeof raw === 'string' && raw.trim().startsWith('[')) {
                            try {
                                cellData = extractItems(JSON.parse(raw));
                            } catch(e) {
                                const labelMatches = raw.match(/label:\s*['"]([^'"]+)['"]/g) || [];
                                const priceMatches = raw.match(/price:\s*(\d+)/g) || [];
                                if (labelMatches.length > 0) {
                                    cellData = labelMatches.map((m, i) => {
                                        const label = m.replace(/label:\s*['"]/, '').replace(/['"]$/, '').trim();
                                        const price = priceMatches[i] ? Number(priceMatches[i].replace(/price:\s*/, '')) : 0;
                                        return (label + (price > 0 ? ` (+${price.toLocaleString('vi-VN')}đ)` : '')).trim();
                                    }).filter(Boolean).join(', ');
                                }
                            }
                        }
                    }
                    if (!cellData) cellData = b.extra_services || '';
                }
                else {
                    // Loại bỏ mã HTML ra khỏi cell data
                    const rawStr = String(c.render(b, index));
                    const tmp = document.createElement("DIV");
                    tmp.innerHTML = rawStr;
                    cellData = tmp.textContent || tmp.innerText || "";
                }
                
                // Ép kiểu text cho phone hoặc cccd để Excel không làm mất số
                const isNumForce = (c.id === 'col-phone' || c.id === 'col-cccd');
                htmlTable += `<td ${isNumForce ? 'class="num"' : ''}>${cellData}</td>`;
            });
            htmlTable += '</tr>';
        });

        htmlTable += `
                    </tbody>
                </table>
            </body>
            </html>
        `;

        // Thêm ký tự BOM (Byte Order Mark) để đảm bảo các bản Excel cũ nhận chuẩn UTF-8
        const blob = new Blob(['\ufeff', htmlTable], { type: 'application/vnd.ms-excel;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const fileName = `DS_Doan_${targetTour || 'Tour'}_${targetDateFormated || 'Date'}.xls`.replace(/[/\\?%*:|"<>]/g, '-');

        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // ═══════════════════════════════════════════
    // SEAT MAP — Đa loại xe
    // ═══════════════════════════════════════════
    const VEHICLE_CONFIG = {
        solati_16: { label: '🚐 Solati 16 chỗ', totalSeats: 15 },
        limo_34:   { label: '🚌 Limousine 34 chỗ', totalSeats: 34 },
        sleeper_45:{ label: '🛏️ Giường Nằm 45 chỗ', totalSeats: 46 },
    };

    const getSeatLayout = (type) => {
        if (type === 'limo_34') {
            // Dãy A (cạnh tài xế): A1-A12 | Dãy B (giữa): B1-B10 | Dãy C (cửa lên): C1-C12
            // Layout: [C,C | B,B | A,A] mỗi hàng, layout doc xe
            return {
                type: 'limo',
                floors: [{
                    label: null,
                    rows: [
                        // [cột trái (dãy C), cột giữa (dãy B), cột phải (dãy A)]
                        [{ n:'C1' }, { n:'C2' }, null, { n:'B1' }, { n:'B2' }, null, { n:'A1' }, { n:'A2' }, { n:'LÁI', driver:true }],
                        [{ n:'C3' }, { n:'C4' }, null, { n:'B3' }, { n:'B4' }, null, { n:'A3' }, { n:'A4' }],
                        [{ n:'C5' }, { n:'C6' }, null, { n:'B5' }, { n:'B6' }, null, { n:'A5' }, { n:'A6' }],
                        [{ n:'C7' }, { n:'C8' }, null, { n:'B7' }, { n:'B8' }, null, { n:'A7' }, { n:'A8' }],
                        [{ n:'C9' }, { n:'C10' },null, { n:'B9' }, { n:'B10' },null, { n:'A9' }, { n:'A10' }],
                        [{ n:'C11'},{ n:'C12' },null, null, null,              null, { n:'A11'}, { n:'A12' }],
                    ]
                }],
                legend: [
                    '<span class="font-bold text-gray-600">Dãy C</span> (cửa lên)',
                    '<span class="font-bold text-gray-600">Dãy B</span> (giữa)',
                    '<span class="font-bold text-gray-600">Dãy A</span> (tài xế)',
                ]
            };
        }
        if (type === 'sleeper_45') {
            // Tầng dưới A1-A23, Tầng trên B1-B23
            const makeFloor = (prefix, from, to) => {
                // Giường nằm: 5 cột, 5-6 hàng, 2 ghế/cột
                // Layout theo ảnh: cột mỗi 3-4 ghế doc
                const seats = Array.from({length: to - from + 1}, (_, i) => `${prefix}${from + i}`);
                // Group thành rows: mỗi row có [left, right] pairs
                const rows = [];
                // Tầng dưới layout: 4 cột chạy doc, mỗi cột 5-6 ghế
                // A1,A4,A7,A10,A13,A16,A19 (cột 1)
                // A2,A5,A8,A11,A14,A17,A20 (cột 2)
                // A3,A6,A9,A12,A15,A18,A21,A22,A23 (cột 3)
                // Simplify: render theo hàng ngang, mỗi hàng 4 ghế với khoảng cách giữa
                for (let i = 0; i < seats.length; i += 4) {
                    const row = [];
                    for (let j = 0; j < 4; j++) {
                        if (j === 2) row.push(null); // đường đi
                        row.push(seats[i + j] ? { n: seats[i + j] } : null);
                    }
                    rows.push(row);
                }
                return rows;
            };
            return {
                type: 'sleeper',
                floors: [
                    { label: '🏠 Tầng Dưới', floorKey: 'down', rows: makeFloor('A', 1, 23) },
                    { label: '🏥 Tầng Trên', floorKey: 'up',   rows: makeFloor('B', 1, 23) },
                ],
                legend: null
            };
        }
        // Default: Solati 16
        return {
            type: 'solati',
            floors: [{
                label: null,
                rows: [
                    [{ n: 'LÁI', driver: true }, { n: 1 }],
                    [{ n: 2 }, { n: 3 }, null, { n: 4 }, { n: 5 }],
                    [{ n: 6 }, { n: 7 }, null, { n: 8 }, { n: 9 }],
                    [{ n: 10 }, { n: 11 }, null, { n: 12 }, { n: 13 }],
                    [null, { n: 14 }, { n: 15 }, null],
                ]
            }],
            legend: null
        };
    };

    const currentVehicle = VEHICLE_CONFIG[vehicleType] || VEHICLE_CONFIG['solati_16'];
    let activeFloor = 0; // tab index cho xe giường nằm

    const renderSeatMap = () => {
        const grid = document.getElementById('seatMapGrid');
        if (!grid) return;

        // Build seatMap: { seatNumber: booking }
        const seatMap = {};
        allBookings.forEach(b => {
            if (b.seat_number) seatMap[String(b.seat_number)] = b;
        });

        const assignedCount = Object.keys(seatMap).length;
        const total = currentVehicle.totalSeats;
        const countEl = document.getElementById('seat-map-count');
        const badgeEl = document.getElementById('seat-count-badge');
        const vehicleLabelEl = document.getElementById('vehicle-label');
        if (countEl) countEl.textContent = `${assignedCount}/${total}`;
        if (badgeEl) badgeEl.textContent = `💺 ${assignedCount}/${total} ghế đã xếp`;
        if (vehicleLabelEl) vehicleLabelEl.textContent = currentVehicle.label;

        const layout = getSeatLayout(vehicleType);

        const renderSeatCell = (seat, seatMap) => {
            if (!seat) return `<div class="w-12 h-10 flex-shrink-0"></div>`;
            if (seat.driver) return `<div class="seat-btn seat-driver w-10 h-9 rounded-lg flex flex-col items-center justify-center text-[8px] font-bold flex-shrink-0"><span>🚗</span><span>LÁI</span></div>`;
            const sn = String(seat.n);
            const b = seatMap[sn];
            const nameAbbr = b ? (b.name || '').split(' ').pop().slice(0, 4) : '';
            const isAlpha = /[A-Z]/.test(sn); // Limousine/Sleeper dùng chữ
            const w = isAlpha ? 'w-11 h-9' : 'w-12 h-10';
            return `<button
                class="seat-btn ${b ? 'seat-assigned' : 'seat-empty'} ${w} rounded-lg flex flex-col items-center justify-center flex-shrink-0 group relative"
                data-seat="${sn}"
                data-booking-id="${b ? b.id : ''}"
                title="${b ? b.name + ' — Ghế ' + sn : 'Ghế ' + sn + ' (trống)'}">
                <span class="text-[9px] font-bold leading-none">${sn}</span>
                ${b ? `<span class="text-[8px] leading-none mt-0.5 truncate max-w-[42px] px-0.5">${nameAbbr}</span>` : ''}
            </button>`;
        };

        // Tab render cho xe giường nằm
        if (layout.type === 'sleeper') {
            grid.innerHTML = `
                <div class="flex gap-2 mb-3">
                    ${layout.floors.map((f, i) => `
                        <button class="floor-tab flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${activeFloor === i ? 'bg-csr-orange text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}" data-floor="${i}">
                            ${f.label}
                        </button>
                    `).join('')}
                </div>
                <div class="floor-content">
                    ${layout.floors.map((floor, fi) => `
                        <div class="floor-rows ${activeFloor === fi ? '' : 'hidden'}" data-floor="${fi}">
                            ${floor.rows.map(row => `
                                <div class="flex items-center justify-center gap-1 mb-1">
                                    ${row.map(seat => renderSeatCell(seat, seatMap)).join('')}
                                </div>
                            `).join('')}
                        </div>
                    `).join('')}
                </div>`;
            // Tab click
            grid.querySelectorAll('.floor-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    activeFloor = parseInt(tab.dataset.floor);
                    renderSeatMap();
                });
            });
        } else {
            // Render bình thường (solati / limo)
            let content = '';
            if (layout.legend) {
                content += `<div class="flex justify-around text-[9px] text-gray-400 mb-2 px-1">${layout.legend.map(l => `<span>${l}</span>`).join('')}</div>`;
            }
            layout.floors[0].rows.forEach(row => {
                const cells = row.map(seat => renderSeatCell(seat, seatMap)).join('');
                content += `<div class="flex items-center justify-center gap-1 mb-1">${cells}</div>`;
            });
            grid.innerHTML = content;
        }

        // Attach seat click events
        grid.querySelectorAll('.seat-btn[data-seat]').forEach(btn => {
            btn.addEventListener('click', () => openSeatModal(btn.dataset.seat, btn.dataset.bookingId));
        });
    };


    const openSeatModal = (seatNum, currentBookingId) => {
        const modal = document.getElementById('seatModal');
        const title = document.getElementById('seatModalTitle');
        const body = document.getElementById('seatModalBody');
        if (!modal || !title || !body) return;

        title.textContent = currentBookingId
            ? `Ghế ${seatNum} — ${(allBookings.find(b => String(b.id) === String(currentBookingId))?.name || '?')}`
            : `Ghế ${seatNum} — Chưa có khách`;

        const assigned = allBookings.find(b => String(b.id) === String(currentBookingId));

        let html = '';
        if (assigned) {
            html += `<div class="mb-3 p-3 bg-orange-50 border border-orange-200 rounded-xl text-sm">
                <div class="font-bold text-gray-800">${assigned.name}</div>
                <div class="text-gray-500 text-xs">${assigned.phone || ''} ${assigned.gender ? '· ' + assigned.gender : ''}</div>
                ${assigned.pickup_point ? `<div class="text-xs text-blue-600 mt-1">📍 ${assigned.pickup_point}</div>` : ''}
            </div>
            <button class="w-full py-2 text-sm font-bold text-red-600 border border-red-200 rounded-xl hover:bg-red-50 transition-colors mb-3" id="btnRemoveSeat">
                ✖ Bỏ gán ghế này
            </button>
            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Chọn khách khác:</div>`;
        }

        // List unassigned passengers (+ allow re-assign)
        const unassigned = allBookings.filter(b => !b.seat_number || String(b.id) === String(currentBookingId));
        if (unassigned.length === 0) {
            html += `<p class="text-gray-400 text-sm text-center py-4">Tất cả khách đã được xếp ghế.</p>`;
        } else {
            html += unassigned.map(b => `
                <button class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-orange-50 border border-transparent hover:border-orange-200 transition-colors mb-1 btn-assign-passenger" data-booking-id="${b.id}" data-seat="${seatNum}">
                    <div class="font-bold text-gray-800 text-sm">${b.name}</div>
                    <div class="text-xs text-gray-500">${b.phone || ''} ${b.gender ? '· ' + b.gender : ''} ${b.pickup_point ? '📍 ' + b.pickup_point : ''}</div>
                </button>`).join('');
        }

        body.innerHTML = html;
        modal.style.display = 'flex';

        // Remove seat handler
        body.querySelector('#btnRemoveSeat')?.addEventListener('click', async () => {
            await saveSeat(currentBookingId, null);
            modal.style.display = 'none';
        });

        // Assign passenger handlers
        body.querySelectorAll('.btn-assign-passenger').forEach(btn => {
            btn.addEventListener('click', async () => {
                const bId = btn.dataset.bookingId;
                const sn = btn.dataset.seat;
                // Clear anyone already in that seat
                const current = allBookings.find(b => String(b.seat_number) === String(sn) && String(b.id) !== String(bId));
                if (current) await saveSeat(current.id, null);
                await saveSeat(bId, sn);
                modal.style.display = 'none';
            });
        });
    };

    const saveSeat = async (bookingId, seatNumber) => {
        try {
            await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: bookingId, seat_number: seatNumber || null })
            });
            // Update local state
            const b = allBookings.find(x => String(x.id) === String(bookingId));
            if (b) b.seat_number = seatNumber || null;
            renderTable();
            renderSeatMap();
        } catch (err) {
            console.error('Lỗi lưu ghế:', err);
            alert('Lỗi lưu số ghế. Vui lòng thử lại.');
        }
    };

    // Events
    filterStatus.addEventListener('change', renderTable);
    filterGender.addEventListener('change', renderTable);
    document.getElementById('filterSearch')?.addEventListener('input', renderTable);
    document.getElementById('filterSort')?.addEventListener('change', loadData);

    document.getElementById('btnExportPDF').addEventListener('click', () => window.print());
    document.getElementById('btnExportExcel').addEventListener('click', () => exportExcel());

    // Close modal
    document.getElementById('seatModalClose')?.addEventListener('click', () => {
        document.getElementById('seatModal').style.display = 'none';
    });
    document.getElementById('seatModal')?.addEventListener('click', (e) => {
        if (e.target === document.getElementById('seatModal')) {
            document.getElementById('seatModal').style.display = 'none';
        }
    });

    // Row hover → highlight seat on map
    document.getElementById('rosterList')?.addEventListener('mouseover', (e) => {
        const row = e.target.closest('tr[data-booking-id]');
        if (!row) return;
        document.querySelectorAll('.seat-btn').forEach(b => b.classList.remove('seat-highlighted'));
        const bid = row.dataset.bookingId;
        const booking = allBookings.find(b => String(b.id) === String(bid));
        if (booking?.seat_number) {
            const seatBtn = document.querySelector(`.seat-btn[data-seat="${booking.seat_number}"]`);
            seatBtn?.classList.add('seat-highlighted');
        }
    });

    // Seat badge click in table
    document.getElementById('rosterList')?.addEventListener('click', (e) => {
        const badge = e.target.closest('.seat-badge');
        if (!badge) return;
        const bid = badge.dataset.id;
        const b = allBookings.find(x => String(x.id) === String(bid));
        openSeatModal(b?.seat_number || '?', bid);
    });

    // Patch loadData to call renderSeatMap after loading
    const origLoadData = loadData;

    // Run
    buildColumnToggles();
    buildTableHeader();
    loadData().then(() => renderSeatMap()).catch(() => renderSeatMap());
};
