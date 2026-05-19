import { Sidebar } from '../components/Sidebar.js';
import { Header } from '../components/Header.js';

export const render = () => `
  <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
    ${Sidebar()}
    <div class="flex flex-col flex-1 w-full overflow-hidden">
      ${Header()}
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-6">
        <div class="max-w-7xl mx-auto space-y-5">
          <!-- Header -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 class="text-2xl md:text-3xl font-black text-gray-800">📅 Lịch Tổng Quan</h1>
              <p class="text-gray-500 text-sm mt-1">Xem toàn bộ lịch tour và lịch làm việc của nhân sự trong tháng.</p>
            </div>
            <div class="flex items-center gap-2 flex-wrap">
              <select id="calFilterTour" class="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-csr-orange bg-white">
                <option value="">🗺️ Tất cả Tour</option>
              </select>
              <select id="calFilterGuide" class="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-csr-orange bg-white">
                <option value="">👥 Tất cả Nhân Sự</option>
              </select>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-3" id="calStats">
            <div class="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <div class="text-2xl font-black text-csr-orange" id="statTours">—</div>
              <div class="text-xs text-gray-500 mt-1">Lịch trong tháng</div>
            </div>
            <div class="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <div class="text-2xl font-black text-green-600" id="statGuests">—</div>
              <div class="text-xs text-gray-500 mt-1">Khách đã đặt</div>
            </div>
            <div class="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <div class="text-2xl font-black text-indigo-600" id="statGuides">—</div>
              <div class="text-xs text-gray-500 mt-1">Nhân sự hoạt động</div>
            </div>
          </div>

          <!-- Calendar Nav -->
          <div class="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <button id="calPrev" class="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <div class="flex items-center gap-3">
                <h2 id="calTitle" class="text-lg font-black text-gray-800">Tháng</h2>
                <button id="calToday" class="px-3 py-1 text-xs font-bold bg-csr-orange/10 text-csr-orange rounded-lg hover:bg-csr-orange/20 transition-colors">Hôm nay</button>
              </div>
              <button id="calNext" class="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
            <!-- Day labels -->
            <div class="grid grid-cols-7 border-b border-gray-100">
              ${['CN','T2','T3','T4','T5','T6','T7'].map(d=>`<div class="py-2 text-center text-[11px] font-bold text-gray-400 uppercase">${d}</div>`).join('')}
            </div>
            <!-- Grid -->
            <div id="calGrid" class="grid grid-cols-7 min-h-[480px]"></div>
          </div>
        </div>
      </main>
    </div>
  </div>

  <!-- Quick View Modal -->
  <div id="calModal" class="fixed inset-0 z-[60] bg-gray-900/60 backdrop-blur-sm hidden items-center justify-center p-4">
    <div id="calModalContent" class="bg-white rounded-2xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between p-5 border-b border-gray-100">
        <div>
          <h3 id="calModalTitle" class="text-lg font-black text-gray-800"></h3>
          <p id="calModalSub" class="text-xs text-gray-400 mt-0.5"></p>
        </div>
        <button id="calModalClose" class="p-2 rounded-lg hover:bg-gray-100 text-gray-400">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div id="calModalBody" class="p-5 space-y-4"></div>
      <div class="p-5 border-t border-gray-100 flex gap-3" id="calModalFooter"></div>
    </div>
  </div>

  <!-- Note Modal -->
  <div id="noteModal" class="fixed inset-0 z-[70] bg-gray-900/60 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white rounded-2xl w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between p-5 border-b border-gray-100">
        <h3 id="noteModalTitle" class="text-base font-black text-gray-800"></h3>
        <button id="noteModalClose" class="p-2 rounded-lg hover:bg-gray-100 text-gray-400">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="p-5 space-y-3">
        <div id="noteExistingList" class="space-y-2 mb-3"></div>
        <div class="border-t border-gray-100 pt-3">
          <p class="text-xs font-bold text-gray-500 uppercase mb-2" id="noteFormLabel">➕ Thêm ghi chú mới</p>
          <input id="noteTitle" type="text" placeholder="Tên công việc / tiêu đề *" class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-csr-orange mb-2">
          <textarea id="noteContent" rows="2" placeholder="Nội dung ghi chú (tùy chọn)" class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-csr-orange resize-none mb-2"></textarea>
          <div class="flex gap-2 mb-3" id="noteColorPicker">
            <button class="note-color-btn w-6 h-6 rounded-full bg-blue-500 ring-2 ring-offset-1 ring-blue-500" data-color="blue"></button>
            <button class="note-color-btn w-6 h-6 rounded-full bg-green-500" data-color="green"></button>
            <button class="note-color-btn w-6 h-6 rounded-full bg-red-500" data-color="red"></button>
            <button class="note-color-btn w-6 h-6 rounded-full bg-yellow-400" data-color="yellow"></button>
            <button class="note-color-btn w-6 h-6 rounded-full bg-purple-500" data-color="purple"></button>
            <button class="note-color-btn w-6 h-6 rounded-full bg-gray-400" data-color="gray"></button>
          </div>
          <div class="flex gap-2">
            <button id="noteSaveBtn" class="flex-1 py-2.5 bg-csr-orange text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all">Lưu Ghi Chú</button>
            <button id="noteModalCloseFt" class="px-4 py-2.5 border border-gray-200 text-gray-500 text-sm font-bold rounded-xl hover:bg-gray-50">Hủy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const afterRender = () => {
    let allSchedules = [];
    let allGuides = [];
    let allNotes = [];
    let viewDate = new Date();
    let filterTour = '';
    let filterGuide = '';
    let noteSelectedColor = 'blue';
    let noteEditingId = null;

    const NOTE_COLOR_MAP = {
        blue:   'bg-blue-100 text-blue-700 border-blue-200',
        green:  'bg-green-100 text-green-700 border-green-200',
        red:    'bg-red-100 text-red-700 border-red-200',
        yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200',
        purple: 'bg-purple-100 text-purple-700 border-purple-200',
        gray:   'bg-gray-100 text-gray-600 border-gray-200',
    };
    const NOTE_DOT_MAP = {
        blue:'bg-blue-500', green:'bg-green-500', red:'bg-red-500',
        yellow:'bg-yellow-400', purple:'bg-purple-500', gray:'bg-gray-400'
    };

    const ROLE_COLORS = {
        'Leader': 'bg-purple-100 text-purple-700',
        'Hướng Dẫn Viên': 'bg-blue-100 text-blue-700',
        'Photo': 'bg-pink-100 text-pink-700',
        'Guider': 'bg-cyan-100 text-cyan-700',
        'Hậu Cần': 'bg-amber-100 text-amber-700',
        'Học Việc': 'bg-gray-100 text-gray-600',
    };

    let userRole = 'sale';
    try { userRole = JSON.parse(localStorage.getItem('csr_user') || '{}').role || 'sale'; } catch(e) {}

    // ── Load Data ──
    const getMonthStr = () => {
        const y = viewDate.getFullYear(), m = viewDate.getMonth();
        return `${y}-${String(m+1).padStart(2,'0')}`;
    };

    const loadNotes = async () => {
        try {
            const res = await fetch(`/api/calendar-notes?month=${getMonthStr()}`);
            allNotes = await res.json();
        } catch(e) { allNotes = []; }
    };

    const loadData = async () => {
        renderCalendar();

        const [schRes, guideRes, tourRes] = await Promise.all([
            fetch('/api/schedules'),
            fetch('/api/guides'),
            fetch('/api/tours'),
        ]);
        allSchedules = await schRes.json();
        allGuides = await guideRes.json();
        const tours = await tourRes.json();

        const tourSel = document.getElementById('calFilterTour');
        tours.forEach(t => {
            const op = document.createElement('option');
            op.value = t.name; op.textContent = t.name;
            tourSel.appendChild(op);
        });
        const guideSel = document.getElementById('calFilterGuide');
        allGuides.forEach(g => {
            const op = document.createElement('option');
            op.value = g.id; op.textContent = g.full_name;
            guideSel.appendChild(op);
        });

        await loadNotes();
        renderCalendar();
    };

    // ── Filter Schedules ──
    const getFiltered = () => {
        const y = viewDate.getFullYear(), m = viewDate.getMonth();
        return allSchedules.filter(s => {
            const d = new Date(s.start_date);
            if (d.getFullYear() !== y || d.getMonth() !== m) return false;
            if (filterTour && s.tour_name !== filterTour) return false;
            if (filterGuide) {
                const guides = s.assigned_guides || [];
                if (!guides.some(g => String(g.id) === String(filterGuide))) return false;
            }
            return true;
        });
    };

    // ── Render Calendar ──
    const renderCalendar = () => {
        const y = viewDate.getFullYear(), m = viewDate.getMonth();
        const months = ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'];
        document.getElementById('calTitle').textContent = `${months[m]} / ${y}`;

        const filtered = getFiltered();

        // Stats
        const totalGuests = filtered.reduce((s, x) => s + (parseInt(x.booked_count)||0), 0);
        const guideIds = new Set(filtered.flatMap(s => (s.assigned_guides||[]).map(g=>g.id)));
        document.getElementById('statTours').textContent = filtered.length;
        document.getElementById('statGuests').textContent = totalGuests;
        document.getElementById('statGuides').textContent = guideIds.size;

        // Build schedule map
        const dayMap = {};
        filtered.forEach(s => {
            const key = new Date(s.start_date).toISOString().split('T')[0];
            if (!dayMap[key]) dayMap[key] = [];
            dayMap[key].push(s);
        });

        // Build notes map
        const noteMap = {};
        allNotes.forEach(n => {
            const key = n.date.split('T')[0];
            if (!noteMap[key]) noteMap[key] = [];
            noteMap[key].push(n);
        });

        const firstDay = new Date(y, m, 1).getDay();
        const daysInMonth = new Date(y, m+1, 0).getDate();
        const today = new Date(); today.setHours(0,0,0,0);

        let cells = '';
        // Leading empty cells
        for (let i = 0; i < firstDay; i++) {
            cells += `<div class="min-h-[80px] border-r border-b border-gray-100 bg-gray-50/50 p-1"></div>`;
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dateObj = new Date(y, m, day);
            const key = `${y}-${String(m+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
            const isToday = dateObj.getTime() === today.getTime();
            const daySchedules = dayMap[key] || [];

            const scheduleBadges = daySchedules.slice(0,3).map(s => {
                const booked = parseInt(s.booked_count)||0;
                const slots = parseInt(s.slots)||0;
                const rem = Math.max(0, slots - booked);
                const dot = rem <= 0 ? 'bg-red-500' : rem <= 3 ? 'bg-orange-500' : 'bg-green-500';
                const guides = (s.assigned_guides||[]);
                const guideChips = guides.slice(0,2).map(g => {
                    const init = (g.full_name||'X').split(' ').slice(-1)[0][0].toUpperCase();
                    const col = ROLE_COLORS[g.role] || 'bg-gray-100 text-gray-600';
                    return `<span class="inline-flex items-center justify-center w-5 h-5 rounded-full text-[9px] font-black ${col}" title="${g.full_name} (${g.role})">${init}</span>`;
                }).join('');
                const tourShort = s.tour_name.split(' ').slice(0,2).join(' ');
                return `<div class="cal-sch-badge rounded-md px-1.5 py-1 bg-csr-orange/8 border border-csr-orange/20 cursor-pointer hover:bg-csr-orange/15 transition-colors mb-0.5" data-id="${s.id}">
                    <div class="flex items-center gap-1">
                        <span class="w-2 h-2 rounded-full ${dot} shrink-0"></span>
                        <span class="text-[10px] font-bold text-gray-700 truncate flex-1">${tourShort}</span>
                    </div>
                    <div class="flex items-center gap-0.5 mt-0.5">
                        <span class="text-[9px] text-gray-400">${booked}/${slots}</span>
                        <div class="flex gap-0.5 ml-1">${guideChips}</div>
                    </div>
                </div>`;
            }).join('');

            const moreCount = daySchedules.length > 3 ? `<div class="text-[9px] text-csr-orange font-bold text-center">+${daySchedules.length-3} tour</div>` : '';

            // Note badges
            const dayNotes = noteMap[key] || [];
            const noteBadges = dayNotes.map(n => {
                const cls = NOTE_COLOR_MAP[n.color] || NOTE_COLOR_MAP.blue;
                const dot = NOTE_DOT_MAP[n.color] || NOTE_DOT_MAP.blue;
                return `<div class="cal-note-badge rounded-md px-1.5 py-0.5 border cursor-pointer ${cls} mb-0.5 flex items-center gap-1" data-note-id="${n.id}" title="${n.note||n.title}">
                    <span class="w-1.5 h-1.5 rounded-full ${dot} shrink-0"></span>
                    <span class="text-[10px] font-bold truncate">📝 ${n.title}</span>
                </div>`;
            }).join('');

            cells += `
            <div class="cal-day-cell min-h-[80px] border-r border-b border-gray-100 p-1 ${isToday ? 'bg-csr-orange/5 ring-2 ring-inset ring-csr-orange/30' : 'hover:bg-gray-50'} transition-colors cursor-pointer" data-date="${key}">
                <div class="text-right mb-1">
                    <span class="text-xs font-bold ${isToday ? 'bg-csr-orange text-white rounded-full w-6 h-6 inline-flex items-center justify-center' : 'text-gray-500'}">${day}</span>
                </div>
                ${scheduleBadges}${moreCount}${noteBadges}
            </div>`;
        }

        // Trailing cells
        const totalCells = firstDay + daysInMonth;
        const trailing = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
        for (let i = 0; i < trailing; i++) {
            cells += `<div class="min-h-[80px] border-r border-b border-gray-100 bg-gray-50/50 p-1"></div>`;
        }

        document.getElementById('calGrid').innerHTML = cells;

        // Tour badge clicks
        document.querySelectorAll('.cal-sch-badge').forEach(el => {
            el.addEventListener('click', (e) => { e.stopPropagation(); openModal(el.getAttribute('data-id')); });
        });
        // Note badge clicks
        document.querySelectorAll('.cal-note-badge').forEach(el => {
            el.addEventListener('click', (e) => { e.stopPropagation(); const n = allNotes.find(x=>String(x.id)===el.dataset.noteId); if(n) openNoteModal(n.date.split('T')[0], n); });
        });
        // Day cell click → open note modal
        document.querySelectorAll('.cal-day-cell').forEach(el => {
            el.addEventListener('click', () => openNoteModal(el.dataset.date));
        });
    };

    // ── Modal ──
    const openModal = async (scheduleId) => {
        const s = allSchedules.find(x => String(x.id) === String(scheduleId));
        if (!s) return;

        const modal = document.getElementById('calModal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');

        const startStr = new Date(s.start_date).toLocaleDateString('vi-VN');
        const endStr = new Date(s.end_date).toLocaleDateString('vi-VN');
        const booked = parseInt(s.booked_count)||0;
        const slots = parseInt(s.slots)||0;
        const guides = s.assigned_guides || [];

        document.getElementById('calModalTitle').textContent = s.tour_name;
        document.getElementById('calModalSub').textContent = `${startStr} → ${endStr} • ${booked}/${slots} chỗ${s.group_label ? ' • '+s.group_label : ''}`;

        // Guide list
        const guideHtml = guides.length === 0
            ? `<p class="text-gray-400 text-sm italic">Chưa có nhân sự được phân công.</p>`
            : guides.map(g => {
                const col = ROLE_COLORS[g.role] || 'bg-gray-100 text-gray-600';
                const init = (g.full_name||'X').split(' ').slice(-2).map(w=>w[0]).join('').toUpperCase();
                const removeBtn = userRole === 'admin'
                    ? `<button class="modal-unassign-btn px-2 py-1 rounded-lg text-xs bg-red-50 text-red-500 hover:bg-red-100 transition-colors" data-guide-id="${g.id}" data-sch-id="${s.id}">✕</button>`
                    : '';
                return `<div class="flex items-center gap-3 p-2.5 rounded-xl border border-gray-100 hover:bg-gray-50">
                    <div class="w-9 h-9 rounded-full bg-gradient-to-br from-csr-orange/20 to-orange-100 flex items-center justify-center text-csr-orange font-black text-xs shrink-0">${init}</div>
                    <div class="flex-1">
                        <div class="font-bold text-sm text-gray-900">${g.full_name}</div>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${col}">${g.role}</span>
                        ${g.phone ? `<span class="text-xs text-gray-400 ml-2">${g.phone}</span>` : ''}
                    </div>
                    ${removeBtn}
                </div>`;
            }).join('');

        // Assign section (admin only)
        let assignSection = '';
        if (userRole === 'admin') {
            const unassignedGuides = allGuides.filter(g => !guides.some(ag => ag.id === g.id));
            if (unassignedGuides.length > 0) {
                const opts = unassignedGuides.map(g => `<option value="${g.id}">${g.full_name} (${g.role})</option>`).join('');
                assignSection = `
                <div class="border-t border-gray-100 pt-3">
                    <p class="text-xs font-bold text-gray-500 uppercase mb-2">Thêm Nhân Sự</p>
                    <div class="flex gap-2">
                        <select id="modalAssignSelect" class="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-csr-orange">
                            <option value="">-- Chọn nhân sự --</option>${opts}
                        </select>
                        <button id="modalAssignBtn" data-sch-id="${s.id}" class="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors">+ Thêm</button>
                    </div>
                </div>`;
            }
        }

        document.getElementById('calModalBody').innerHTML = `
            <div class="space-y-2">
                <div class="flex items-center gap-4 text-sm text-gray-600 flex-wrap">
                    ${s.zalo_link ? `<a href="${s.zalo_link}" target="_blank" class="flex items-center gap-1 text-blue-600 hover:underline text-xs font-medium">🔗 Link Zalo Nhóm</a>` : ''}
                    <span class="text-xs">🚗 ${s.vehicle_type === 'limo_34' ? 'Limousine 34 chỗ' : s.vehicle_type === 'sleeper_45' ? 'Giường nằm 45' : 'Solati 16 chỗ'}</span>
                    <span class="text-xs font-bold ${booked >= slots ? 'text-red-500' : booked >= slots*0.8 ? 'text-orange-500' : 'text-green-600'}">${booked >= slots ? 'Hết chỗ' : slots - booked <= 3 ? `Còn ${slots-booked} chỗ` : `Còn ${slots-booked} chỗ trống`}</span>
                </div>
            </div>
            <div>
                <p class="text-xs font-bold text-gray-500 uppercase mb-2">👥 Nhân Sự (${guides.length} người)</p>
                <div class="space-y-1.5">${guideHtml}</div>
            </div>
            ${assignSection}`;

        document.getElementById('calModalFooter').innerHTML = `
            <a href="/admin/roster?tour=${encodeURIComponent(s.tour_name)}&date=${s.start_date?.split('T')[0]}&scheduleId=${s.id}&groupLabel=${encodeURIComponent(s.group_label||'')}&vehicleType=${encodeURIComponent(s.vehicle_type||'solati_16')}" data-link
               class="flex-1 py-2.5 bg-csr-orange text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all text-center">
               📋 Xem Danh Sách Đoàn
            </a>
            <button id="calModalCloseFt" class="px-4 py-2.5 border border-gray-200 text-gray-500 text-sm font-bold rounded-xl hover:bg-gray-50 transition-all">Đóng</button>`;

        // Attach events
        document.querySelectorAll('.modal-unassign-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                btn.textContent = '...'; btn.disabled = true;
                await fetch('/api/guides?action=unassign', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ schedule_id: parseInt(btn.dataset.schId), guide_id: parseInt(btn.dataset.guideId) }) });
                await refreshSchedules();
                openModal(scheduleId);
            });
        });

        const assignBtn = document.getElementById('modalAssignBtn');
        if (assignBtn) {
            assignBtn.addEventListener('click', async () => {
                const sel = document.getElementById('modalAssignSelect');
                if (!sel.value) return;
                assignBtn.textContent = '...'; assignBtn.disabled = true;
                await fetch('/api/guides?action=assign', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ schedule_id: parseInt(assignBtn.dataset.schId), guide_id: parseInt(sel.value) }) });
                await refreshSchedules();
                openModal(scheduleId);
            });
        }

        document.getElementById('calModalCloseFt')?.addEventListener('click', closeModal);
    };

    const closeModal = () => {
        const modal = document.getElementById('calModal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    };

    const refreshSchedules = async () => {
        const res = await fetch('/api/schedules');
        allSchedules = await res.json();
        renderCalendar();
    };

    // ── Note Modal ──
    const openNoteModal = (dateStr, editNote = null) => {
        noteEditingId = editNote ? editNote.id : null;
        const d = new Date(dateStr + 'T00:00:00');
        const label = d.toLocaleDateString('vi-VN', { weekday:'long', day:'2-digit', month:'2-digit', year:'numeric' });
        document.getElementById('noteModalTitle').textContent = `📝 Ghi chú — ${label}`;
        document.getElementById('noteTitle').value = editNote ? editNote.title : '';
        document.getElementById('noteContent').value = editNote ? (editNote.note||'') : '';
        noteSelectedColor = editNote ? (editNote.color||'blue') : 'blue';
        document.querySelectorAll('.note-color-btn').forEach(btn => {
            btn.className = btn.className.replace(/ring-2 ring-offset-1 ring-\S+/,'').trim();
            if (btn.dataset.color === noteSelectedColor) btn.classList.add('ring-2','ring-offset-1',`ring-${noteSelectedColor}-500`);
        });

        // Show existing notes for this day
        const dayNotes = allNotes.filter(n => n.date.split('T')[0] === dateStr && (!editNote || n.id !== editNote.id));
        const existingHtml = dayNotes.map(n => {
            const cls = NOTE_COLOR_MAP[n.color] || NOTE_COLOR_MAP.blue;
            return `<div class="flex items-center gap-2 p-2 rounded-lg border ${cls}">
                <span class="flex-1 text-xs font-bold truncate">${n.title}</span>
                <span class="text-[10px] opacity-70 truncate max-w-[80px]">${n.note||''}</span>
                <button class="note-quick-edit text-[10px] underline opacity-70 hover:opacity-100" data-nid="${n.id}">Sửa</button>
            </div>`;
        }).join('');
        document.getElementById('noteExistingList').innerHTML = existingHtml || '';
        document.querySelectorAll('.note-quick-edit').forEach(btn => {
            btn.addEventListener('click', (e) => { e.stopPropagation(); const n = allNotes.find(x=>String(x.id)===btn.dataset.nid); if(n) openNoteModal(dateStr, n); });
        });
        document.getElementById('noteFormLabel').textContent = editNote ? '✏️ Chỉnh sửa ghi chú' : '➕ Thêm ghi chú mới';

        // Save handler
        const saveBtn = document.getElementById('noteSaveBtn');
        const newSaveBtn = saveBtn.cloneNode(true);
        saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
        newSaveBtn.textContent = editNote ? 'Cập Nhật' : 'Lưu Ghi Chú';
        newSaveBtn.addEventListener('click', async () => {
            const title = document.getElementById('noteTitle').value.trim();
            if (!title) { alert('Vui lòng nhập tên công việc!'); return; }
            newSaveBtn.disabled = true; newSaveBtn.textContent = 'Đang lưu...';
            let user = {}; try { user = JSON.parse(localStorage.getItem('csr_user')||'{}'); } catch(e){}
            const payload = noteEditingId
                ? { id: noteEditingId, title, note: document.getElementById('noteContent').value.trim(), color: noteSelectedColor }
                : { date: dateStr, title, note: document.getElementById('noteContent').value.trim(), color: noteSelectedColor, created_by: user.name||user.username||'' };
            try {
                await fetch('/api/calendar-notes', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
                await loadNotes();
                renderCalendar();
                closeNoteModal();
            } catch(err) { alert('Lỗi: '+err.message); }
            finally { newSaveBtn.disabled = false; newSaveBtn.textContent = editNote ? 'Cập Nhật' : 'Lưu Ghi Chú'; }
        });

        // Delete handler (edit mode)
        if (editNote) {
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '🗑 Xóa';
            deleteBtn.className = 'w-full mt-2 py-2 text-sm font-bold text-red-500 border border-red-200 rounded-xl hover:bg-red-50 transition-all';
            deleteBtn.addEventListener('click', async () => {
                if (!confirm('Xóa ghi chú này?')) return;
                await fetch(`/api/calendar-notes?id=${editNote.id}`, { method:'DELETE' });
                await loadNotes(); renderCalendar(); closeNoteModal();
            });
            document.getElementById('noteContent').parentNode.appendChild(deleteBtn);
        }

        const nm = document.getElementById('noteModal');
        nm.classList.remove('hidden'); nm.classList.add('flex');
    };

    const closeNoteModal = () => {
        const nm = document.getElementById('noteModal');
        nm.classList.add('hidden'); nm.classList.remove('flex');
        // Remove any delete btn added dynamically
        const dBtn = document.querySelector('#noteModal button.text-red-500');
        if (dBtn) dBtn.remove();
    };

    // Note color picker
    document.getElementById('noteColorPicker').addEventListener('click', e => {
        const btn = e.target.closest('.note-color-btn');
        if (!btn) return;
        noteSelectedColor = btn.dataset.color;
        document.querySelectorAll('.note-color-btn').forEach(b => {
            b.className = b.className.replace(/\sring-2 ring-offset-1 ring-\S+/g,'').trim();
        });
        btn.classList.add('ring-2','ring-offset-1',`ring-${noteSelectedColor}-500`);
    });
    document.getElementById('noteModalClose').addEventListener('click', closeNoteModal);
    document.getElementById('noteModalCloseFt').addEventListener('click', closeNoteModal);
    document.getElementById('noteModal').addEventListener('click', e => { if(e.target===document.getElementById('noteModal')) closeNoteModal(); });

    // ── Nav Events ──
    const changeMonth = async (delta) => {
        viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth()+delta, 1);
        await loadNotes();
        renderCalendar();
    };
    document.getElementById('calPrev').addEventListener('click', () => changeMonth(-1));
    document.getElementById('calNext').addEventListener('click', () => changeMonth(1));
    document.getElementById('calToday').addEventListener('click', async () => { viewDate = new Date(); await loadNotes(); renderCalendar(); });
    document.getElementById('calFilterTour').addEventListener('change', e => { filterTour = e.target.value; renderCalendar(); });
    document.getElementById('calFilterGuide').addEventListener('change', e => { filterGuide = e.target.value; renderCalendar(); });
    document.getElementById('calModal').addEventListener('click', e => { if (e.target === document.getElementById('calModal')) closeModal(); });
    document.getElementById('calModalClose').addEventListener('click', closeModal);

    loadData();
};
