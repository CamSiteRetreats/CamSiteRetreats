import { Sidebar } from '../components/Sidebar.js';
import { Header } from '../components/Header.js';

export const render = () => {
    return `
    <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${Sidebar()}
        <div class="flex flex-col flex-1 w-full overflow-hidden">
            ${Header()}
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
                <div class="max-w-7xl mx-auto">

                    <div class="flex justify-between items-end mb-6">
                        <div>
                            <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Thiết lập Đăng ký Tour</h1>
                            <p class="text-gray-500 text-sm">Cấu hình form đăng ký, điểm đón và dịch vụ bổ sung cho từng tour.</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-6">
                        <!-- Danh sách Tour -->
                        <div class="col-span-4">
                            <div class="glass-panel overflow-hidden">
                                <div class="p-4 border-b border-csr-border">
                                    <h3 class="font-bold text-gray-700 text-sm uppercase tracking-wider">Chọn Tour</h3>
                                </div>
                                <div id="ts-tour-list" class="divide-y divide-csr-border max-h-[70vh] overflow-y-auto">
                                    <div class="p-4 text-gray-400 text-sm text-center">Đang tải...</div>
                                </div>
                            </div>
                        </div>

                        <!-- Cấu hình -->
                        <div class="col-span-8">
                            <div class="glass-panel" id="ts-config-panel">
                                <div class="p-16 text-center text-gray-400">
                                    <svg class="w-12 h-12 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>
                                    <p class="font-medium">Chọn một tour để bắt đầu cấu hình</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    </div>
    `;
};

export const afterRender = () => {
    let tours = [];
    let activeTour = null;

    const API = '/api/admin_tours';

    // ── Load Tours ─────────────────────────────────────────────────────────
    const loadTours = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            tours = data.data || data;
            renderTourList();

            // Auto-select tour từ URL param ?id=
            const urlId = new URLSearchParams(window.location.search).get('id');
            if (urlId) {
                const found = tours.find(t => String(t.id) === String(urlId));
                if (found) renderConfig(found);
            }
        } catch (e) {
            document.getElementById('ts-tour-list').innerHTML = `<div class="p-4 text-red-500 text-sm">Lỗi kết nối server.</div>`;
        }
    };

    const renderTourList = () => {
        const list = document.getElementById('ts-tour-list');
        if (!list) return;
        if (tours.length === 0) { list.innerHTML = `<div class="p-4 text-gray-400 text-sm text-center">Chưa có tour nào.</div>`; return; }
        list.innerHTML = tours.map(t => `
            <div class="ts-tour-item flex items-center gap-3 p-3 cursor-pointer hover:bg-orange-50 transition-colors ${activeTour?.id === t.id ? 'bg-orange-50 border-l-2 border-csr-orange' : ''}"
                 data-id="${t.id}">
                <div class="w-10 h-10 rounded-xl bg-gray-100 overflow-hidden shrink-0">
                    <img src="${t.image || ''}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/80x80/f3f4f6/9ca3af?text=?'" loading="lazy">
                </div>
                <div class="min-w-0">
                    <div class="font-bold text-sm text-gray-800 truncate">${t.name}</div>
                    <div class="text-xs text-gray-400">${t.type || ''} · ${t.duration || ''}</div>
                </div>
            </div>
        `).join('');
    };

    // ── Render Config Panel ────────────────────────────────────────────────
    const renderConfig = (tour) => {
        activeTour = tour;
        renderTourList(); // highlight active
        const panel = document.getElementById('ts-config-panel');
        if (!panel) return;

        const cfg = tour.form_config || {};
        const step2 = cfg.step2 || {};
        const step3 = cfg.step3 || {};
        const pickups = tour.pickup_points || [];
        const services = tour.services || [];

        panel.innerHTML = `
        <div class="p-6 border-b border-csr-border flex items-center gap-3">
            <img src="${tour.image}" class="w-12 h-12 rounded-xl object-cover" onerror="this.src='https://placehold.co/80x80/f3f4f6/9ca3af?text=?'">
            <div>
                <div class="font-bold text-lg text-gray-900">${tour.name}</div>
                <div class="text-sm text-gray-400">${tour.type || ''} · ${tour.duration || ''} · ${parseInt(tour.price || 0).toLocaleString('vi-VN')}đ</div>
            </div>
            <div class="ml-auto">
                <button id="ts-save-btn" class="btn-primary text-sm px-5 py-2">Lưu cấu hình</button>
            </div>
        </div>

        <div class="p-6 space-y-8 overflow-y-auto max-h-[calc(70vh-80px)]">

            <!-- Bước 2: Hậu cần -->
            <section>
                <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">📦 Bước 2 — Thông tin hậu cần</h4>
                <div class="space-y-2">
                    ${[
                        { key: 'show_pickup', label: 'Điểm đón' },
                        { key: 'show_medal_name', label: 'Tên in huy chương' },
                        { key: 'show_vegetarian', label: 'Ăn chay' },
                        { key: 'show_trekking_pole', label: 'Mượn gậy trekking' },
                        { key: 'show_special_request', label: 'Yêu cầu đặc biệt' },
                    ].map(f => `
                        <label class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:border-orange-200 transition-colors">
                            <input type="checkbox" class="ts-step2-check w-4 h-4 rounded accent-csr-orange" data-key="${f.key}" ${step2[f.key] !== false ? 'checked' : ''}>
                            <span class="text-sm font-medium text-gray-700">${f.label}</span>
                        </label>
                    `).join('')}
                </div>

                <!-- Điểm đón manager -->
                <div class="mt-4" id="ts-pickup-section" ${step2.show_pickup === false ? 'style="display:none;"' : ''}>
                    <div class="flex justify-between items-center mb-2">
                        <h5 class="text-xs font-bold text-gray-500 uppercase tracking-wider">Danh sách điểm đón</h5>
                        <button id="ts-add-pickup" class="text-xs font-bold text-csr-orange hover:underline">+ Thêm điểm đón</button>
                    </div>
                    <div id="ts-pickups-list" class="space-y-2">
                        ${pickups.map((p, i) => renderPickupRow(p, i)).join('')}
                    </div>
                </div>
            </section>

            <!-- Bước 3: Dịch vụ -->
            <section>
                <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">✨ Bước 3 — Dịch vụ & Mã giảm giá</h4>
                <label class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:border-orange-200 transition-colors mb-4">
                    <input type="checkbox" class="w-4 h-4 rounded accent-csr-orange" id="ts-show-coupon" ${step3.show_coupon !== false ? 'checked' : ''}>
                    <span class="text-sm font-medium text-gray-700">Cho phép nhập mã giảm giá</span>
                </label>

                <div class="flex justify-between items-center mb-2">
                    <h5 class="text-xs font-bold text-gray-500 uppercase tracking-wider">Các gói dịch vụ bổ sung</h5>
                    <button id="ts-add-service" class="text-xs font-bold text-csr-orange hover:underline">+ Thêm dịch vụ</button>
                </div>
                <div id="ts-services-list" class="space-y-2">
                    ${services.map((s, i) => renderServiceRow(s, i)).join('')}
                </div>
                ${services.length === 0 ? `<p class="text-xs text-gray-400 italic p-3">Chưa có dịch vụ nào. Nhấn "+ Thêm dịch vụ" để cấu hình.</p>` : ''}
            </section>

        </div>`;

        bindConfigEvents(tour);
    };

    const renderPickupRow = (p, i) => {
        const label = typeof p === 'string' ? p : (p.label || '');
        const time = typeof p === 'string' ? '' : (p.time || '');
        return `
        <div class="ts-pickup-row flex gap-2 items-center" data-index="${i}">
            <input type="text" class="ts-pickup-label input-field bg-gray-50 text-sm flex-1" value="${label}" placeholder="Tên điểm đón (VD: Quán 26)">
            <input type="text" class="ts-pickup-time input-field bg-gray-50 text-sm w-32" value="${time}" placeholder="Giờ (VD: 04:00)">
            <button class="ts-remove-pickup p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" data-index="${i}" title="Xóa">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>`;
    };

    const renderServiceRow = (s, i) => `
        <div class="ts-service-row flex gap-2 items-start" data-index="${i}">
            <div class="flex-1 space-y-1">
                <input type="text" class="ts-srv-label input-field bg-gray-50 text-sm w-full" value="${s.label || ''}" placeholder="Tên dịch vụ (VD: Thuê lều riêng)">
                <input type="text" class="ts-srv-desc input-field bg-gray-50 text-xs w-full" value="${s.description || ''}" placeholder="Mô tả ngắn (tùy chọn)">
            </div>
            <div style="width:130px;">
                <input type="number" class="ts-srv-price input-field bg-gray-50 text-sm w-full" value="${s.price || 0}" placeholder="Giá (VNĐ)">
            </div>
            <button class="ts-remove-service p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors mt-1" data-index="${i}" title="Xóa">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>`;

    const bindConfigEvents = (tour) => {
        // Toggle pickup section visibility
        document.querySelectorAll('.ts-step2-check').forEach(cb => {
            cb.addEventListener('change', () => {
                if (cb.dataset.key === 'show_pickup') {
                    const sec = document.getElementById('ts-pickup-section');
                    if (sec) sec.style.display = cb.checked ? '' : 'none';
                }
            });
        });

        // Add pickup
        document.getElementById('ts-add-pickup')?.addEventListener('click', () => {
            const list = document.getElementById('ts-pickups-list');
            const newIdx = list.children.length;
            const row = document.createElement('div');
            row.innerHTML = renderPickupRow({ label: '', time: '' }, newIdx);
            list.appendChild(row.firstElementChild);
            bindRemoveButtons();
        });

        // Add service
        document.getElementById('ts-add-service')?.addEventListener('click', () => {
            const list = document.getElementById('ts-services-list');
            const newIdx = list.children.length;
            const emptyP = list.parentElement.querySelector('p');
            if (emptyP) emptyP.remove();
            const row = document.createElement('div');
            row.innerHTML = renderServiceRow({ label: '', description: '', price: 0, id: `srv_${Date.now()}` }, newIdx);
            list.appendChild(row.firstElementChild);
            bindRemoveButtons();
        });

        bindRemoveButtons();

        // Save
        document.getElementById('ts-save-btn')?.addEventListener('click', () => saveConfig(tour));
    };

    const bindRemoveButtons = () => {
        document.querySelectorAll('.ts-remove-pickup').forEach(btn => {
            btn.onclick = () => btn.closest('.ts-pickup-row').remove();
        });
        document.querySelectorAll('.ts-remove-service').forEach(btn => {
            btn.onclick = () => btn.closest('.ts-service-row').remove();
        });
    };

    const saveConfig = async (tour) => {
        const btn = document.getElementById('ts-save-btn');
        if (btn) { btn.textContent = 'Đang lưu...'; btn.disabled = true; }

        // Collect step2 checkboxes
        const step2 = {};
        document.querySelectorAll('.ts-step2-check').forEach(cb => {
            step2[cb.dataset.key] = cb.checked;
        });

        // Collect pickup points
        const pickupRows = document.querySelectorAll('.ts-pickup-row');
        const pickup_points = [];
        pickupRows.forEach(row => {
            const label = row.querySelector('.ts-pickup-label')?.value.trim();
            const time = row.querySelector('.ts-pickup-time')?.value.trim();
            if (label) pickup_points.push({ label, time });
        });

        // Collect services
        const serviceRows = document.querySelectorAll('.ts-service-row');
        const services = [];
        serviceRows.forEach((row, i) => {
            const label = row.querySelector('.ts-srv-label')?.value.trim();
            const desc = row.querySelector('.ts-srv-desc')?.value.trim();
            const price = parseInt(row.querySelector('.ts-srv-price')?.value || '0');
            if (label) services.push({ id: `srv_${i}_${Date.now()}`, label, description: desc || '', price });
        });

        const step3 = { show_coupon: document.getElementById('ts-show-coupon')?.checked !== false };

        const form_config = { step2, step3 };

        try {
            const res = await fetch(`/api/admin_tours?id=${tour.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ form_config, pickup_points, services })
            });
            const data = await res.json();
            if (data.success) {
                // Update local tour data
                const idx = tours.findIndex(t => t.id === tour.id);
                if (idx !== -1) {
                    tours[idx] = data.data || { ...tours[idx], form_config, pickup_points, services };
                    activeTour = tours[idx];
                }
                if (btn) { btn.textContent = '✅ Đã lưu!'; btn.disabled = false; }
                setTimeout(() => { if (btn) btn.textContent = 'Lưu cấu hình'; }, 2000);
            } else {
                throw new Error(data.message || 'Save failed');
            }
        } catch (e) {
            alert('Lỗi khi lưu: ' + e.message);
            if (btn) { btn.textContent = 'Lưu cấu hình'; btn.disabled = false; }
        }
    };

    // ── Event: chọn tour ──────────────────────────────────────────────────
    document.getElementById('ts-tour-list')?.addEventListener('click', (e) => {
        const item = e.target.closest('.ts-tour-item');
        if (!item) return;
        const id = parseInt(item.dataset.id);
        const tour = tours.find(t => t.id === id);
        if (tour) renderConfig(tour);
    });

    loadTours();
};
