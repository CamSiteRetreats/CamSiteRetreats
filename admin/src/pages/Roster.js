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
                                <h1 class="text-3xl font-black uppercase tracking-widest text-[#1A202C] mb-1">DANH SÁCH ĐOÀN</h1>
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

                  <!-- Data Table -->
                  <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden print:border-none print:shadow-none print:rounded-none">
                      <div class="overflow-x-auto print:overflow-visible">
                          <table class="w-full text-left border-collapse" id="rosterTable">
                              <thead class="bg-gray-50 text-xs uppercase text-gray-500 font-semibold border-b border-gray-200 print:bg-white print:text-black print:border-b-2 print:border-gray-800">
                                  <tr id="table-header-row">
                                      <!-- Headers driven by JS config -->
                                  </tr>
                              </thead>
                              <tbody id="rosterList" class="divide-y divide-gray-100 text-sm print:text-[12px] print:divide-gray-300">
                                  <tr><td colspan="12" class="p-8 text-center text-gray-400">Đang tải dữ liệu...</td></tr>
                              </tbody>
                          </table>
                      </div>
                  </div>

               </div>
          </main>
        </div>
      </div>

      <style>
          /* CSS classes dynamically toggled to hide/show columns */
          .col-hidden { display: none !important; }
          .nowrap { white-space: nowrap; }

          @media print {
              @page { size: landscape; margin: 0; }
              body { 
                  font-family: 'Times New Roman', serif; 
                  background: white; 
                  margin: 1.5cm; /* Re-add margin to content to avoid browser headers/footers */
              }
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

    const COLUMNS = [
        { id: 'col-stt', label: 'STT', always: true, render: (b, index) => `<span class="text-gray-400 font-mono text-xs">${index + 1}</span>` },
        {
            id: 'col-name', label: 'Họ và Tên', default: true,
            render: (b) => `<div class="font-bold text-gray-900 text-sm">${b.name || '-'}</div>`
        },
        {
            id: 'col-order-id', label: 'Mã Đơn Hàng', default: true,
            render: (b) => `<span class="font-mono text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-200">#${b.id || '—'}</span>`
        },
        {
            id: 'col-dob', label: 'Ngày Sinh', default: true,
            render: (b) => {
                if (!b.dob) return '<span class="text-gray-300">—</span>';
                const parts = b.dob.split('-');
                const formatted = parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : b.dob;
                return `<span class="text-gray-700 text-sm tabular-nums">${formatted}</span>`;
            }
        },
        {
            id: 'col-phone', label: 'Số Điện Thoại', default: true,
            render: (b) => `<a href="tel:${b.phone || ''}" class="font-medium text-blue-600 hover:text-blue-800 hover:underline tabular-nums text-sm">${b.phone || '—'}</a>`
        },
        {
            id: 'col-status', label: 'Trạng Thái', default: true,
            render: (b) => renderStatus(b.status)
        },
        {
            id: 'col-extra', label: 'Dịch Vụ Phát Sinh', default: true,
            render: (b) => renderExtraServices(b)
        },
        // --- Ẩn mặc định, tick để hiện ---
        { id: 'col-gender', label: 'Giới Tính', default: false, render: (b) => b.gender || '-' },
        { id: 'col-cccd', label: 'CCCD / Passport', default: false, render: (b) => b.id_card || b.cccd || '-' },
        { id: 'col-address', label: 'Địa Chỉ', default: false, render: (b) => `<div class="max-w-[200px] truncate print:max-w-none print:whitespace-normal" title="${b.address || ''}">${b.address || '-'}</div>` },
        { id: 'col-diet', label: 'Ăn Chay', default: false, render: (b) => (b.diet === 'Ăn chay' || b.diet === 'Chay' || b.diet === 'Có') ? '<span class="text-green-600 font-bold">Có</span>' : 'Không' },
        { id: 'col-pole', label: 'Gậy Trekking', default: false, render: (b) => (b.trekking_pole === 'Có') ? '<span class="text-orange-600 font-bold">Có</span>' : 'Không' },
        { id: 'col-allergy', label: 'Dị Ứng / Bệnh', default: false, render: (b) => b.medical_notes || b.allergy || '-' },
        { id: 'col-special', label: 'Yêu Cầu ĐB', default: false, render: (b) => b.special || b.special_notes || '-' },
        { id: 'col-medal', label: 'Tên Huy Chương', default: false, render: (b) => b.medal_name || b.name || '-' }
    ];

    const params = new URLSearchParams(window.location.search);
    const targetTour = params.get('tour') || '';
    const targetDateStr = params.get('date') || ''; // Ex: 2025-03-01
    const targetScheduleId = params.get('scheduleId') || '';
    const hasGroupLabel = !!params.get('groupLabel');
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
            return `<tr class="${isEven ? 'bg-white' : 'bg-gray-50/40'} hover:bg-amber-50/40 transition-colors border-b border-gray-100 group">` +
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

    // Events
    filterStatus.addEventListener('change', renderTable);
    filterGender.addEventListener('change', renderTable);
    document.getElementById('filterSearch')?.addEventListener('input', renderTable);
    document.getElementById('filterSort')?.addEventListener('change', loadData);

    document.getElementById('btnExportPDF').addEventListener('click', () => {
        window.print();
    });

    document.getElementById('btnExportExcel').addEventListener('click', () => {
        exportExcel();
    });

    // Run
    buildColumnToggles();
    buildTableHeader();
    loadData();
};
