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
                      <div class="glass-panel p-5 h-fit lg:col-span-1">
                          <h3 class="font-medium text-gray-900 mb-4">Lọc Tuyến Đi</h3>
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
      <div id="scheduleModal" class="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300">
          <div class="bg-white border border-gray-200 rounded-2xl w-full max-w-lg shadow-2xl scale-95 transition-transform duration-300 transform relative" id="scheduleModalContent">
              <button id="closeScheduleModalBtn" class="absolute top-5 right-5 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full p-2 transition-colors z-20">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <div class="p-8">
                  <h2 id="scheduleModalTitle" class="text-2xl font-bold text-gray-800 mb-6">Thêm Lịch Khởi Hành</h2>
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
    `;
};

export const afterRender = () => {
    let currentSchedules = [];
    let currentFilter = '';

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
        } else {
            title.textContent = 'Thêm Lịch Khởi Hành';
            scheduleForm.reset();
            document.getElementById('sch-edit-id').value = '';
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

        if (data.length === 0) {
            scheduleList.innerHTML = '<div class="text-center py-12 text-gray-400 italic">Chưa có lịch trình nào' + (currentFilter ? ' cho tuyến này' : '') + '.</div>';
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
                <div class="glass-panel p-5 border-l-4 border-csr-orange hover:shadow-md transition-all duration-200" data-schedule-id="${item.id}">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div class="flex items-center gap-4 flex-1 min-w-0">
                            <div class="bg-csr-orange/10 text-csr-orange font-bold rounded-xl p-3 text-center min-w-[72px] shrink-0">
                                <div class="text-[10px] uppercase tracking-wider font-medium">Khởi Hành</div>
                                <div class="text-xl font-black">${dayMonth}</div>
                            </div>
                            <div class="flex-1 min-w-0">
                                <h3 class="text-lg font-bold text-gray-900 mb-1 tracking-wide truncate">${item.tour_name}</h3>
                                <div class="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
                                    <span class="flex items-center gap-1.5">
                                        <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        ${startStr} — ${endStr}
                                    </span>
                                    <span class="flex items-center gap-1.5">
                                        <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        <strong class="text-csr-orange">${booked}</strong> / ${slots} chỗ
                                    </span>
                                    <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md border ${statusColor}">${status}</span>
                                </div>
                                <!-- Progress Bar -->
                                <div class="mt-2 w-full bg-gray-100 rounded-full h-2 overflow-hidden max-w-xs">
                                    <div class="${progressColor} h-2 rounded-full transition-all duration-500" style="width: ${percent}%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-2 shrink-0">
                            <button class="sch-edit-btn bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg p-2.5 transition-colors" data-id="${item.id}" title="Sửa">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                            </button>
                            <button class="sch-delete-btn bg-gray-100 hover:bg-red-100 text-gray-400 hover:text-red-500 rounded-lg p-2.5 transition-colors" data-id="${item.id}" title="Xóa">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                            <button class="sch-details-btn bg-csr-orange hover:opacity-90 text-white rounded-lg px-4 py-2.5 text-sm font-medium transition-all flex items-center gap-2" data-tour="${item.tour_name}" data-date="${item.start_date}" title="In Danh Sách Đoàn">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                                In DS Đoàn
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Attach card button events via delegation
        scheduleList.addEventListener('click', handleCardAction);
    };

    // --- CARD ACTION HANDLER ---
    const handleCardAction = async (e) => {
        const editBtn = e.target.closest('.sch-edit-btn');
        const deleteBtn = e.target.closest('.sch-delete-btn');
        const detailsBtn = e.target.closest('.sch-details-btn');

        if (editBtn) {
            const id = editBtn.getAttribute('data-id');
            const item = currentSchedules.find(s => s.id == id);
            if (item) openModal(item);
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

        if (detailsBtn) {
            const tourName = detailsBtn.getAttribute('data-tour');
            const dateStr = detailsBtn.getAttribute('data-date');
            const safeDate = dateStr && dateStr.includes('T') ? dateStr.split('T')[0] : dateStr;
            // Open schedule details in new tab (reusing Admin V1 page)
            const baseUrl = window.location.origin;
            const url = `${baseUrl}/ADMIN/schedule-details?tour=${encodeURIComponent(tourName)}&date=${encodeURIComponent(safeDate)}`;
            window.open(url, '_blank');
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
            status: document.getElementById('sch-status').value
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
    loadTourOptions();
    loadSchedules();
};
