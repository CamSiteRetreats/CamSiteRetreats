import { Sidebar } from '../components/Sidebar.js';
import { Header } from '../components/Header.js';

export const render = () => {
    return `
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${Sidebar()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${Header()}
          
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
               <div class="max-w-7xl mx-auto space-y-6">
                  
                  <div class="flex justify-between items-end">
                      <div>
                          <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Quản Lý Lịch Trình</h1>
                          <p class="text-gray-500 text-sm">Cập nhật ngày khởi hành, số chỗ — đồng bộ trực tiếp với form đặt chỗ trên website.</p>
                      </div>
                      <button id="addScheduleBtn" class="btn-primary flex items-center gap-2">
                          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                          Tạo Lịch Trình
                      </button>
                  </div>

                  <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      <!-- Left filter pane -->
                      <div class="glass-panel p-5 h-fit lg:col-span-1 mb-6 lg:mb-0">
                          <h3 class="font-medium text-gray-900 mb-4 border-b pb-2">Thời Gian</h3>
                          <div class="flex flex-col gap-2 mb-6" id="timeFilterOptions">
                              <label class="flex items-center gap-3 cursor-pointer group">
                                  <input type="radio" name="timeFilter" value="upcoming" class="text-csr-orange focus:ring-csr-orange border-gray-200 bg-gray-100" checked>
                                  <span class="text-gray-700 font-medium group-hover:text-gray-900 transition-colors text-sm">Sắp diễn ra</span>
                              </label>
                              <label class="flex items-center gap-3 cursor-pointer group">
                                  <input type="radio" name="timeFilter" value="past" class="text-csr-orange focus:ring-csr-orange border-gray-200 bg-gray-100">
                                  <span class="text-gray-500 group-hover:text-gray-900 transition-colors text-sm">Đã khởi hành</span>
                              </label>
                          </div>

                          <h3 class="font-medium text-gray-900 mb-4 border-b pb-2">Lọc Tuyến Đi</h3>
                          <div id="tourFilterList" class="space-y-3">
                              <label class="flex items-center gap-3 cursor-pointer group">
                                  <input type="radio" name="tourFilter" value="" class="text-csr-orange focus:ring-csr-orange border-gray-200 bg-gray-100" checked>
                                  <span class="text-gray-500 group-hover:text-gray-900 transition-colors text-sm">Tất cả Tuyến</span>
                              </label>
                              <!-- Tour options will be loaded dynamically -->
                          </div>
                      </div>

                      <!-- Right Content List -->
                      <div class="lg:col-span-3 space-y-4" id="scheduleList">
                          <div class="text-center py-12 text-gray-400">Đang tải lịch trình...</div>
                      </div>
                  </div>
               </div>
          </main>
        </div>
      </div>

      <!-- Add/Edit Schedule Modal -->
      <div id="scheduleModal" class="fixed inset-0 z-[60] bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-2 md:p-4 opacity-0 transition-opacity duration-300">
          <div class="bg-white border border-gray-200 rounded-2xl w-full max-w-lg shadow-2xl scale-95 transition-transform duration-300 transform relative max-h-[95vh] overflow-y-auto" id="scheduleModalContent">
              <button id="closeScheduleModalBtn" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full p-2 transition-colors z-20">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <div class="p-5 md:p-8">
                  <h2 id="scheduleModalTitle" class="text-xl md:text-2xl font-bold text-gray-800 mb-6">Thêm Lịch Khởi Hành</h2>
                  <form id="scheduleForm" class="space-y-5">
                      <input type="hidden" id="sch-edit-id">
                      <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Chọn Tour *</label>
                          <select id="sch-tour-name" class="input-field bg-gray-50 font-medium" required>
                              <option value="">-- Chọn Tour --</option>
                          </select>
                      </div>
                      <div class="grid grid-cols-2 gap-5">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ngày bắt đầu *</label>
                              <input type="date" id="sch-start-date" class="input-field bg-gray-50" required>
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ngày kết thúc *</label>
                              <input type="date" id="sch-end-date" class="input-field bg-gray-50" required>
                          </div>
                      </div>
                      <div class="grid grid-cols-2 gap-5">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Số chỗ *</label>
                              <input type="number" id="sch-slots" class="input-field bg-gray-50 font-bold text-lg" placeholder="VD: 13" required>
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Trạng thái</label>
                              <select id="sch-status" class="input-field bg-gray-50 font-medium">
                                  <option value="Đang mở">Đang mở</option>
                                  <option value="Sắp hết">Sắp hết</option>
                                  <option value="Hết chỗ">Hết chỗ</option>
                              </select>
                          </div>
                      </div>
                       <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Link Nhóm Zalo <span class="text-gray-400 normal-case font-normal">(Sẽ hiện cho khách sau khi thanh toán)</span></label>
                          <div class="relative">
                              <span class="absolute left-3 top-3 text-blue-500">
                                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.14 1c-6.15 0-11.14 4.58-11.14 10.21 0 3.2 1.6 6.05 4.12 7.91-.12.44-.43 1.6-.43 1.6s-.1.38.16.53c.26.15.54-.04.54-.04l1.88-1.29c.6.16 1.23.25 1.88.25 6.15 0 11.14-4.58 11.14-10.21S18.29 1 12.14 1z"/></svg>
                              </span>
                              <input type="url" id="sch-zalo-link" class="input-field bg-gray-50 pl-10" placeholder="https://zalo.me/g/xxxxxx">
                          </div>
                      </div>
                      <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Nhãn Nhóm <span class="text-gray-400 normal-case font-normal">(tùy chọn, dùng khi có 2+ nhóm cùng ngày)</span></label>
                          <input type="text" id="sch-group-label" class="input-field bg-blue-50/50 font-bold text-blue-700 border-blue-200" placeholder="VD: Nhóm 1, VIP, Budget...">
                          <p class="text-[10px] text-gray-400 mt-1 italic">Nhập nhãn nếu mở nhiều đoàn cùng ngày để phân biệt trong form đặt chỗ.</p>
                      </div>
                      <div class="pt-3 flex gap-3">
                          <button type="button" id="cancelScheduleBtn" class="flex-1 px-6 py-3 border border-gray-200 text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition-all">
                              Hủy
                          </button>
                          <button type="submit" class="flex-1 px-6 py-3 bg-csr-orange text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all">
                              Lưu Lịch Trình
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>

      <!-- Guide Picker Modal -->
      <div id="guidePickerModal" class="fixed inset-0 z-[70] bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
          <div class="bg-white rounded-2xl w-full max-w-lg shadow-2xl max-h-[90vh] flex flex-col">
              <div class="flex items-center justify-between p-5 border-b border-gray-100">
                  <div>
                      <h2 class="text-lg font-black text-gray-800">👥 Phân Công Nhân Sự</h2>
                      <p class="text-xs text-gray-400 mt-0.5" id="guidePickerSubtitle">Chọn nhân sự cho lịch tour</p>
                  </div>
                  <div class="flex items-center gap-2">
                      <a href="/admin/guides" data-link class="text-xs text-indigo-600 hover:underline font-medium">Thêm nhân sự mới →</a>
                      <button id="closeGuidePickerBtn" class="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                          <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                      </button>
                  </div>
              </div>
              <div class="p-5 overflow-y-auto flex-1">
                  <div id="guidePickerList" class="space-y-2">
                      <div class="text-center py-8 text-gray-400">Đang tải...</div>
                  </div>
              </div>
          </div>
      </div>
    `;
};


export const afterRender = () => {
    let currentSchedules = [];
    let currentFilter = '';
    let currentTimeFilter = 'upcoming';

    // API endpoints
    const API_SCHEDULES = '/api/schedules';
    const API_TOURS = '/api/tours';

    // DOM References
    const scheduleList = document.getElementById('scheduleList');
    const scheduleModal = document.getElementById('scheduleModal');
    const scheduleModalContent = document.getElementById('scheduleModalContent');
    const scheduleForm = document.getElementById('scheduleForm');

    // --- MODAL LOGIC ---
    const openModal = (editData = null) => {
        const title = document.getElementById('scheduleModalTitle');
        if (editData) {
            title.textContent = 'Chỉnh Sửa Lịch Trình';
            document.getElementById('sch-edit-id').value = editData.id;
            document.getElementById('sch-tour-name').value = editData.tour_name;
            const safeDate = (d) => d && d.includes('T') ? d.split('T')[0] : d;
            document.getElementById('sch-start-date').value = safeDate(editData.start_date);
            document.getElementById('sch-end-date').value = safeDate(editData.end_date);
            document.getElementById('sch-slots').value = editData.slots;
            document.getElementById('sch-status').value = editData.status || 'Đang mở';
            document.getElementById('sch-group-label').value = editData.group_label || '';
            document.getElementById('sch-zalo-link').value = editData.zalo_link || '';
        } else {
            title.textContent = 'Thêm Lịch Khởi Hành';
            scheduleForm.reset();
            document.getElementById('sch-edit-id').value = '';
            document.getElementById('sch-zalo-link').value = '';
        }

        scheduleModal.classList.remove('hidden');
        setTimeout(() => {
            scheduleModal.classList.add('opacity-100');
            scheduleModalContent.classList.remove('scale-95');
            scheduleModalContent.classList.add('scale-100');
        }, 10);
    };

    const closeModal = () => {
        scheduleModal.classList.remove('opacity-100');
        scheduleModalContent.classList.remove('scale-100');
        scheduleModalContent.classList.add('scale-95');
        setTimeout(() => { scheduleModal.classList.add('hidden'); }, 200);
    };

    document.getElementById('addScheduleBtn').addEventListener('click', () => openModal());
    document.getElementById('closeScheduleModalBtn').addEventListener('click', closeModal);
    document.getElementById('cancelScheduleBtn').addEventListener('click', closeModal);
    scheduleModal.addEventListener('click', (e) => { if (e.target === scheduleModal) closeModal(); });

    // --- LOAD TOUR OPTIONS (for Filter + Modal) ---
    const loadTourOptions = async () => {
        try {
            const res = await fetch(API_TOURS);
            if (!res.ok) throw new Error('Failed to load tours');
            const tours = await res.json();

            // Fill Modal Select
            const tourSelect = document.getElementById('sch-tour-name');
            tourSelect.innerHTML = '<option value="">-- Chọn Tour --</option>';
            tours.forEach(t => {
                tourSelect.innerHTML += `<option value="${t.name}">${t.name}</option>`;
            });

            // Fill Filter Radios
            const filterList = document.getElementById('tourFilterList');
            // Keep "All" radio
            let filtersHTML = `
                <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="tourFilter" value="" class="text-csr-orange focus:ring-csr-orange border-gray-200 bg-gray-100" checked>
                    <span class="text-gray-500 group-hover:text-gray-900 transition-colors text-sm">Tất cả Tuyến</span>
                </label>
            `;
            tours.forEach(t => {
                filtersHTML += `
                    <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="tourFilter" value="${t.name}" class="text-csr-orange focus:ring-csr-orange border-gray-200 bg-gray-100">
                        <span class="text-gray-500 group-hover:text-gray-900 transition-colors text-sm">${t.name}</span>
                    </label>
                `;
            });
            filterList.innerHTML = filtersHTML;

            // Attach filter listeners
            filterList.querySelectorAll('input[name="tourFilter"]').forEach(radio => {
                radio.addEventListener('change', (e) => {
                    currentFilter = e.target.value;
                    renderCards();
                });
            });

            // Attach time filter listener
            document.querySelectorAll('input[name="timeFilter"]').forEach(radio => {
                radio.addEventListener('change', (e) => {
                    currentTimeFilter = e.target.value;
                    // Styling updates
                    document.querySelectorAll('input[name="timeFilter"]').forEach(r => {
                        const span = r.nextElementSibling;
                        if (r.checked) {
                            span.classList.add('text-gray-700', 'font-medium');
                            span.classList.remove('text-gray-500');
                        } else {
                            span.classList.remove('text-gray-700', 'font-medium');
                            span.classList.add('text-gray-500');
                        }
                    });
                    renderCards();
                });
            });
        } catch (err) {
            console.error('Error loading tours:', err);
        }
    };

    // --- LOAD SCHEDULES FROM API ---
    const loadSchedules = async () => {
        scheduleList.innerHTML = '<div class="text-center py-12 text-gray-400">Đang tải lịch trình...</div>';
        try {
            const res = await fetch(API_SCHEDULES);
            if (!res.ok) throw new Error('Failed to fetch schedules');
            currentSchedules = await res.json();
            renderCards();
        } catch (err) {
            console.error('Error loading schedules:', err);
            scheduleList.innerHTML = '<div class="text-center py-12 text-red-400 font-medium">Lỗi kết nối server.</div>';
        }
    };

    // --- RENDER SCHEDULE CARDS ---
    const renderCards = () => {
        let data = currentSchedules;
        if (currentFilter) {
            data = data.filter(s => s.tour_name === currentFilter);
        }

        // Lọc thời gian dựa vào start_date (không tính giờ)
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        data = data.filter(s => {
            const startDate = new Date(s.start_date);
            startDate.setHours(0, 0, 0, 0);
            const isPast = startDate < today;

            if (currentTimeFilter === 'upcoming') {
                return !isPast; // Các tour tương lai hoặc hôm nay
            } else if (currentTimeFilter === 'past') {
                return isPast; // Các tour đã qua
            }
            return true;
        });

        // Sắp xếp: sắp tới thì tăng dần (sắp đi xếp trước), đã qua thì giảm dần (gần nhất xếp trước)
        data.sort((a, b) => {
            const dateA = new Date(a.start_date);
            const dateB = new Date(b.start_date);
            return currentTimeFilter === 'upcoming' ? dateA - dateB : dateB - dateA;
        });

        if (data.length === 0) {
            scheduleList.innerHTML = '<div class="text-center py-12 text-gray-400 italic">Chưa có lịch trình nào' + (currentFilter ? ' cho tuyến này' : '') + (currentTimeFilter === 'past' ? ' trong quá khứ' : ' sắp tới') + '.</div>';
            return;
        }

        scheduleList.innerHTML = data.map(item => {
            const startDate = new Date(item.start_date);
            const endDate = new Date(item.end_date);
            const startStr = startDate.toLocaleDateString('vi-VN');
            const endStr = endDate.toLocaleDateString('vi-VN');
            const dayMonth = `${startDate.getDate().toString().padStart(2, '0')}/${(startDate.getMonth() + 1).toString().padStart(2, '0')}`;

            const booked = parseInt(item.booked_count) || 0;
            const slots = parseInt(item.slots) || 0;
            const remaining = Math.max(0, slots - booked);
            const percent = slots > 0 ? Math.min(100, Math.round((booked / slots) * 100)) : 0;

            // Group label badge
            const groupBadge = item.group_label
                ? `<span class="ml-2 text-[10px] font-bold uppercase px-2 py-0.5 rounded-md border bg-blue-50 text-blue-600 border-blue-200">${item.group_label}</span>`
                : '';
            
            const zaloBadge = item.zalo_link
                ? `<span class="ml-1 text-[10px] font-bold uppercase px-2 py-0.5 rounded-md border bg-blue-600 text-white border-blue-700 flex items-center gap-1"><svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.14 1c-6.15 0-11.14 4.58-11.14 10.21 0 3.2 1.6 6.05 4.12 7.91-.12.44-.43 1.6-.43 1.6s-.1.38.16.53c.26.15.54-.04.54-.04l1.88-1.29c.6.16 1.23.25 1.88.25 6.15 0 11.14-4.58 11.14-10.21S18.29 1 12.14 1z"/></svg> ZALO</span>`
                : '';

            // Auto-detect status
            let status = item.status || 'Đang mở';
            if (remaining <= 0) status = 'Hết chỗ';
            else if (remaining <= 3) status = 'Sắp hết';
            if (item.status === 'Hết chỗ') status = 'Hết chỗ';

            const statusColor = status === 'Đang mở' ? 'text-green-600 bg-green-50 border-green-200'
                : status === 'Sắp hết' ? 'text-orange-600 bg-orange-50 border-orange-200'
                    : 'text-red-500 bg-red-50 border-red-200';

            const progressColor = status === 'Đang mở' ? 'bg-green-500'
                : status === 'Sắp hết' ? 'bg-orange-500'
                    : 'bg-red-500';

            return `
                <div class="glass-panel p-4 md:p-5 border-l-4 border-csr-orange hover:shadow-md transition-all duration-200" data-schedule-id="${item.id}">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div class="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                            <div class="bg-csr-orange/10 text-csr-orange font-bold rounded-xl p-2 md:p-3 text-center min-w-[64px] md:min-w-[72px] shrink-0">
                                <div class="text-[9px] md:text-[10px] uppercase tracking-wider font-medium">Khởi Hành</div>
                                <div class="text-lg md:text-xl font-black">${dayMonth}</div>
                            </div>
                            <div class="flex-1 min-w-0">
                                <h3 class="text-base md:text-lg font-bold text-gray-900 mb-0.5 md:mb-1 tracking-wide truncate flex items-center gap-1">
                                    ${item.tour_name}${groupBadge}${zaloBadge}
                                </h3>
                                <div class="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500 flex-wrap">
                                    <span class="flex items-center gap-1">
                                        <svg class="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        ${startStr}
                                    </span>
                                    <span class="flex items-center gap-1">
                                        <svg class="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        <strong class="text-csr-orange">${booked}</strong> / ${slots}
                                    </span>
                                    <span class="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-md border ${statusColor}">${status}</span>
                                </div>
                                <!-- Progress Bar (Hidden on small mobile) -->
                                <div class="mt-2 w-full bg-gray-100 rounded-full h-1.5 overflow-hidden max-w-xs hidden md:block">
                                    <div class="${progressColor} h-1.5 rounded-full transition-all duration-500" style="width: ${percent}%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row md:flex-row gap-2 shrink-0 border-t md:border-none pt-3 md:pt-0">
                            <button class="sch-edit-btn bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg p-2 md:p-2.5 transition-colors flex-1 md:flex-none flex justify-center" data-id="${item.id}" title="Sửa">
                                <svg class="w-5 h-5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                            </button>
                            <button class="sch-delete-btn bg-gray-100 hover:bg-red-100 text-gray-400 hover:text-red-500 rounded-lg p-2 md:p-2.5 transition-colors flex-1 md:flex-none flex justify-center" data-id="${item.id}" title="Xóa">
                                <svg class="w-5 h-5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                            <button class="sch-guides-btn bg-indigo-50 hover:bg-indigo-100 text-indigo-600 border border-indigo-200 rounded-lg px-2.5 py-2 md:py-2.5 text-xs font-bold transition-all flex items-center justify-center gap-1.5 flex-[1.5] md:flex-none" data-id="${item.id}" data-tour="${item.tour_name}" title="Phân công Nhân Sự">
                                👥 Nhân Sự
                            </button>
                            <button class="sch-review-btn bg-yellow-50 hover:bg-yellow-100 text-yellow-600 border border-yellow-200 rounded-lg px-3 py-2 md:py-2.5 text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-1.5 flex-[1.5] md:flex-none" data-id="${item.id}" title="Copy Link Đánh Giá">
                                ⭐ Link ĐG
                            </button>
                            <button class="sch-details-btn bg-csr-orange hover:opacity-90 text-white rounded-lg px-3 py-2 md:py-2.5 text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-2 flex-[2] md:flex-none" data-id="${item.id}" data-tour="${item.tour_name}" data-date="${item.start_date}" data-group-label="${item.group_label || ''}" title="Xem Danh Sách Đoàn">
                                <svg class="w-4 h-4 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                                📋 DS Đoàn
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    };

    // --- GUIDE PICKER LOGIC ---
    const guidePickerModal = document.getElementById('guidePickerModal');
    const guidePickerList = document.getElementById('guidePickerList');
    let pickerScheduleId = null;

    const openGuidePicker = async (scheduleId, tourName) => {
        pickerScheduleId = scheduleId;
        document.getElementById('guidePickerSubtitle').textContent = `Tour: ${tourName}`;
        guidePickerModal.classList.remove('hidden');
        guidePickerList.innerHTML = '<div class="text-center py-8 text-gray-400">Đang tải...</div>';

        try {
            const [allRes, assignedRes] = await Promise.all([
                fetch('/api/guides'),
                fetch(`/api/guides?schedule_id=${scheduleId}`)
            ]);
            const allGuides = await allRes.json();
            const assignedGuides = await assignedRes.json();
            const assignedIds = new Set(assignedGuides.map(g => g.id));

            const ROLE_COLORS = {
                'Hướng Dẫn Viên': 'bg-blue-100 text-blue-700',
                'Leader': 'bg-purple-100 text-purple-700',
                'Photo': 'bg-pink-100 text-pink-700',
                'Guider': 'bg-cyan-100 text-cyan-700',
                'Hậu Cần': 'bg-amber-100 text-amber-700',
                'Học Việc': 'bg-gray-100 text-gray-600',
            };

            if (allGuides.length === 0) {
                guidePickerList.innerHTML = '<div class="text-center py-8 text-gray-400"><div class="text-3xl mb-2">👥</div><p>Chưa có nhân sự nào.</p><a href="/admin/guides" data-link class="text-indigo-600 text-sm font-medium hover:underline">+ Thêm nhân sự mới</a></div>';
                return;
            }

            guidePickerList.innerHTML = allGuides.map(g => {
                const isAssigned = assignedIds.has(g.id);
                const badgeColor = ROLE_COLORS[g.role] || 'bg-gray-100 text-gray-600';
                const initials = (g.full_name || 'X').split(' ').slice(-2).map(w => w[0]).join('').toUpperCase();
                return `
                <div class="flex items-center gap-3 p-3 rounded-xl border transition-all ${ isAssigned ? 'border-indigo-200 bg-indigo-50' : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'}">
                    <div class="w-9 h-9 rounded-full bg-gradient-to-br from-csr-orange/20 to-orange-100 flex items-center justify-center text-csr-orange font-black text-xs shrink-0">${initials}</div>
                    <div class="flex-1 min-w-0">
                        <div class="font-bold text-sm text-gray-900 truncate">${g.full_name}</div>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeColor}">${g.role}</span>
                    </div>
                    <button class="guide-toggle-btn px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${ isAssigned ? 'bg-red-100 text-red-600 hover:bg-red-200' : 'bg-indigo-600 text-white hover:bg-indigo-700'}"
                        data-guide-id="${g.id}" data-assigned="${isAssigned}">
                        ${ isAssigned ? '✕ Bỏ' : '+ Thêm'}
                    </button>
                </div>`;
            }).join('');

            // Attach toggle events
            guidePickerList.querySelectorAll('.guide-toggle-btn').forEach(btn => {
                btn.addEventListener('click', async () => {
                    const guideId = parseInt(btn.getAttribute('data-guide-id'));
                    const isAssigned = btn.getAttribute('data-assigned') === 'true';
                    btn.disabled = true;
                    btn.textContent = '...';

                    await fetch('/api/guides', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            action: isAssigned ? 'unassign' : 'assign',
                            schedule_id: pickerScheduleId,
                            guide_id: guideId
                        })
                    });
                    // Refresh picker
                    openGuidePicker(pickerScheduleId, document.getElementById('guidePickerSubtitle').textContent.replace('Tour: ', ''));
                });
            });

        } catch (e) {
            guidePickerList.innerHTML = `<div class="text-center py-8 text-red-400">Lỗi tải dữ liệu: ${e.message}</div>`;
        }
    };

    document.getElementById('closeGuidePickerBtn').addEventListener('click', () => guidePickerModal.classList.add('hidden'));
    guidePickerModal.addEventListener('click', (e) => { if (e.target === guidePickerModal) guidePickerModal.classList.add('hidden'); });

    // --- CARD ACTION HANDLER ---
    const handleCardAction = async (e) => {
        const editBtn = e.target.closest('.sch-edit-btn');
        const deleteBtn = e.target.closest('.sch-delete-btn');
        const reviewBtn = e.target.closest('.sch-review-btn');
        const detailsBtn = e.target.closest('.sch-details-btn');
        const guidesBtn = e.target.closest('.sch-guides-btn');

        if (editBtn) {
            const id = editBtn.getAttribute('data-id');
            const item = currentSchedules.find(s => s.id == id);
            if (item) openModal(item);
        }

        if (guidesBtn) {
            const id = guidesBtn.getAttribute('data-id');
            const tourName = guidesBtn.getAttribute('data-tour');
            openGuidePicker(parseInt(id), tourName);
        }

        if (deleteBtn) {
            const id = deleteBtn.getAttribute('data-id');
            if (confirm('Bạn có chắc chắn muốn xóa lịch trình này?')) {
                try {
                    const res = await fetch(`${API_SCHEDULES}?id=${id}`, { method: 'DELETE' });
                    if (res.ok) {
                        loadSchedules();
                    } else {
                        throw new Error('Delete failed');
                    }
                } catch (err) {
                    alert('Lỗi khi xóa: ' + err.message);
                }
            }
        }

        if (reviewBtn) {
            const schId = reviewBtn.getAttribute('data-id');
            const link = `${window.location.origin}/review?schedule_id=${schId}`;
            navigator.clipboard.writeText(link).then(() => {
                const orig = reviewBtn.innerHTML;
                reviewBtn.innerHTML = '✅ Đã copy!';
                setTimeout(() => reviewBtn.innerHTML = orig, 2000);
            }).catch(() => {
                alert('Không thể copy. Link:\n' + link);
            });
        }

        if (detailsBtn) {
            const schId = detailsBtn.getAttribute('data-id');
            const tourName = detailsBtn.getAttribute('data-tour');
            const dateStr = detailsBtn.getAttribute('data-date');
            const safeDate = dateStr && dateStr.includes('T') ? dateStr.split('T')[0] : dateStr;
            const groupLabel = detailsBtn.getAttribute('data-group-label') || '';
            // Open schedule details using the new V2 router
            const url = `/admin/roster?tour=${encodeURIComponent(tourName)}&date=${encodeURIComponent(safeDate)}&scheduleId=${schId}&groupLabel=${encodeURIComponent(groupLabel)}`;

            // Navigate cleanly using History API
            history.pushState(null, null, url);
            window.dispatchEvent(new Event('popstate'));
        }
    };

    // --- SAVE SCHEDULE ---
    scheduleForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Đang lưu...';
        btn.disabled = true;

        const id = document.getElementById('sch-edit-id').value;
        const payload = {
            id: id ? parseInt(id) : null,
            tour_name: document.getElementById('sch-tour-name').value,
            start_date: document.getElementById('sch-start-date').value,
            end_date: document.getElementById('sch-end-date').value,
            slots: parseInt(document.getElementById('sch-slots').value),
            status: document.getElementById('sch-status').value,
            group_label: document.getElementById('sch-group-label').value.trim() || null,
            zalo_link: document.getElementById('sch-zalo-link').value.trim() || null
        };

        try {
            const res = await fetch(API_SCHEDULES, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error('Failed to save schedule');

            closeModal();
            loadSchedules();
            alert(id ? '✅ Cập nhật lịch trình thành công!' : '✅ Thêm lịch trình mới thành công! Form đặt chỗ trên website sẽ tự cập nhật trong 30 giây.');
        } catch (err) {
            alert('❌ Lỗi: ' + err.message);
        } finally {
            btn.textContent = originalText;
            btn.disabled = false;
        }
    });

    // --- INIT ---
    scheduleList.addEventListener('click', handleCardAction); // gắn 1 lần duy nhất
    loadTourOptions();
    loadSchedules();
};
