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
                              Tùy Chỉnh Cột Hiển Thị (Dùng cho In/Xuất File)
                          </h3>
                          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3" id="column-toggles">
                              <!-- Checkboxes generated by JS -->
                          </div>
                          <p class="text-xs text-gray-400 mt-3 italic">* Các thông tin về giá tiền/công nợ đã được loại bỏ để bảo mật bảng kê chung.</p>
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
    const COLUMNS = [
        { id: 'col-stt', label: 'STT', always: true, render: (b, index) => index + 1 },
        { id: 'col-name', label: 'Họ và Tên', default: true, render: (b) => `<div class="font-bold text-gray-900">${b.name}</div>` },
        {
            id: 'col-dob', label: 'Ngày Sinh', default: true, render: (b) => {
                if (!b.dob) return '-';
                const parts = b.dob.split('-');
                return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : b.dob;
            }
        },
        { id: 'col-phone', label: 'SĐT', default: true, render: (b) => `<div class="font-medium text-gray-700">${b.phone || '-'}</div>` },
        { id: 'col-gender', label: 'Giới tính', default: true, render: (b) => b.gender || '-' },
        { id: 'col-cccd', label: 'CCCD / Passport', default: true, render: (b) => b.id_card || b.cccd || '-' },
        { id: 'col-address', label: 'Địa chỉ', default: true, render: (b) => `<div class="max-w-[200px] truncate print:max-w-none print:whitespace-normal" title="${b.address || ''}">${b.address || '-'}</div>` },
        { id: 'col-diet', label: 'Ăn chay', default: false, render: (b) => (b.diet === 'Chay' || b.diet === 'Có') ? '<span class="text-green-600 font-bold">Có</span>' : 'Không' },
        { id: 'col-pole', label: 'Gậy Trekking', default: false, render: (b) => (b.trekking_pole === 'Có') ? '<span class="text-orange-600 font-bold">Có</span>' : 'Không' },
        { id: 'col-allergy', label: 'Dị ứng', default: false, render: (b) => b.medical_notes || b.allergy || '-' },
        { id: 'col-special', label: 'Yêu cầu ĐB', default: false, render: (b) => b.special_notes || b.special || '-' },
        { id: 'col-medal', label: 'Tên Huy Chương', default: false, render: (b) => b.medal_name || b.name || '-' }
    ];

    // Read URL params
    const params = new URLSearchParams(window.location.search);
    const targetTour = params.get('tour') || '';
    const targetDateStr = params.get('date') || ''; // Ex: 2025-03-01
    const targetScheduleId = params.get('scheduleId') || '';
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
        container.innerHTML = COLUMNS.filter(c => !c.always).map(c => `
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
                // Priority: If we have a targetScheduleId, and the booking has a schedule_id, they must match
                if (targetScheduleId && b.schedule_id) {
                    return String(b.schedule_id) === String(targetScheduleId);
                }

                // Fallback / legacy matching:
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
            return '<tr class="hover:bg-gray-50/50 transition-colors">' +
                COLUMNS.map(c => `
                    <td class="p-4 align-top ${visibleCols.has(c.id) ? '' : 'col-hidden'}" data-col="${c.id}">
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
                else if (c.id === 'col-address') cellData = b.address || '';
                else if (c.id === 'col-phone') cellData = b.phone ? String(b.phone) : '';
                else if (c.id === 'col-diet') cellData = (b.diet === 'Chay' || b.diet === 'Có') ? 'Có' : 'Không';
                else if (c.id === 'col-pole') cellData = (b.trekking_pole === 'Có') ? 'Có' : 'Không';
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
