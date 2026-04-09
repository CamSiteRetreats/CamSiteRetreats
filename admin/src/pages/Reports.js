import { Sidebar } from '../components/Sidebar.js';
import { Header } from '../components/Header.js';

export const render = () => {
    let user = { role: 'sale', fullName: 'Guest', id: null };
    try {
        const stored = localStorage.getItem('csr_user');
        if (stored) user = JSON.parse(stored);
    } catch (e) { }

    const isAdmin = user.role === 'admin';

    return `
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${Sidebar()}
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${Header()}
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-6">
            <div class="max-w-7xl mx-auto space-y-6">

              <!-- Header -->
              <div>
                  <h1 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-1">
                    ${isAdmin ? '💰 Hoa Hồng & Báo Cáo' : '📊 Báo Cáo Của Tôi'}
                  </h1>
                  <p class="text-gray-500 text-sm">${isAdmin ? 'Quản lý và thanh toán hoa hồng cho đội ngũ Sales.' : 'Theo dõi đơn hàng và hoa hồng của bạn.'}</p>
              </div>

              ${isAdmin ? `
              <!-- ADMIN: Cài đặt % hoa hồng theo Tour -->
              <div class="glass-panel overflow-hidden">
                  <div class="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-100/50 cursor-pointer" id="commissionSetupToggle">
                      <div>
                          <h2 class="text-base font-bold text-gray-900">⚙️ Cài đặt % Hoa Hồng Theo Tour</h2>
                          <p class="text-xs text-gray-400 mt-0.5">Click để mở/đóng</p>
                      </div>
                      <svg id="commissionSetupChevron" class="w-5 h-5 text-gray-400 transition-transform duration-200 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                  </div>
                  <div class="p-4 hidden" id="commissionSetupContainer">
                      <div class="text-center text-gray-400 py-4 text-sm">Đang tải danh sách Tour...</div>
                  </div>
              </div>

              <!-- ADMIN: Danh sách Sales -->
              <div class="glass-panel overflow-hidden">
                  <div class="p-4 border-b border-gray-200 bg-gray-100/50">
                      <h2 class="text-base font-bold text-gray-900">👥 Danh Sách Nhân Viên Sale</h2>
                      <p class="text-xs text-gray-400 mt-0.5">Bấm "Xem" để mở lịch sử đơn và thanh toán hoa hồng.</p>
                  </div>
                  <div class="overflow-x-auto">
                      <table class="w-full text-left border-collapse text-sm">
                          <thead>
                              <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-400 font-bold">
                                  <th class="p-4">#</th>
                                  <th class="p-4">Nhân Viên Sale</th>
                                  <th class="p-4 text-center">Đơn Đã Cọc</th>
                                  <th class="p-4 text-center">Đơn Hoàn Thành</th>
                                  <th class="p-4 text-right text-csr-orange">HH Chưa Thanh Toán</th>
                                  <th class="p-4 text-center">Thao Tác</th>
                              </tr>
                          </thead>
                          <tbody id="salesTableBody" class="divide-y divide-gray-100">
                              <tr><td colspan="6" class="p-8 text-center text-gray-400 text-sm">Đang tải dữ liệu...</td></tr>
                          </tbody>
                      </table>
                  </div>
              </div>
              ` : `
              <!-- SALE: 4 Stat Cards -->
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div class="glass-panel p-5 border-l-4 border-gray-400">
                      <h3 class="text-xs font-bold text-gray-500 uppercase tracking-wide leading-tight">Tổng Đơn Tiếp Nhận</h3>
                      <p class="text-3xl font-black text-gray-900 mt-2" id="sale-stat-total-pax">...</p>
                  </div>
                  <div class="glass-panel p-5 border-l-4 border-blue-500">
                      <h3 class="text-xs font-bold text-blue-500 uppercase tracking-wide leading-tight">Đã Hoàn Thành</h3>
                      <p class="text-3xl font-black text-blue-600 mt-2" id="sale-stat-success-pax">...</p>
                  </div>
                  <div class="glass-panel p-5 border-l-4 border-csr-orange">
                      <h3 class="text-xs font-bold text-csr-orange uppercase tracking-wide leading-tight">Tổng Doanh Số</h3>
                      <p class="text-2xl font-black text-csr-orange mt-2" id="sale-stat-revenue">...</p>
                  </div>
                  <div class="glass-panel p-5 border-l-4 border-green-500">
                      <h3 class="text-xs font-bold text-green-600 uppercase tracking-wide leading-tight">HH Thực Nhận</h3>
                      <p class="text-2xl font-black text-green-600 mt-2" id="sale-stat-real-comm">...</p>
                  </div>
              </div>

              <!-- SALE: Lịch sử đơn của mình -->
              <div class="glass-panel overflow-hidden">
                  <div class="p-4 border-b border-gray-200 bg-gray-100/50">
                      <h2 class="text-base font-bold text-gray-900">📋 Lịch Sử Đơn Của Tôi</h2>
                  </div>
                  <div id="saleOrdersContainer">
                      <div class="p-8 text-center text-gray-400 text-sm">Đang tải...</div>
                  </div>
              </div>

              <!-- SALE: Lịch sử thanh toán HH từ Admin -->
              <div class="glass-panel overflow-hidden">
                  <div class="p-4 border-b border-gray-200 bg-gray-100/50">
                      <h2 class="text-base font-bold text-gray-900">💸 Lịch Sử Admin Thanh Toán Hoa Hồng</h2>
                  </div>
                  <div id="salePaymentHistoryContainer">
                      <div class="p-8 text-center text-gray-400 text-sm">Đang tải...</div>
                  </div>
              </div>
              `}

            </div>
          </main>
        </div>
      </div>

      <!-- ADMIN SALE DETAIL PANEL (SLIDE-IN) -->
      <div id="saleDetailPanel" class="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm hidden opacity-0 transition-opacity duration-200 flex items-stretch justify-end">
          <div class="bg-white w-full max-w-4xl h-full flex flex-col shadow-2xl translate-x-full transition-transform duration-300" id="saleDetailPanelInner">

              <!-- Panel Header -->
              <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-white shrink-0">
                  <div>
                      <h2 class="text-lg font-bold text-gray-900" id="panelSaleName">Chi Tiết Sale</h2>
                      <p class="text-xs text-gray-400 mt-0.5" id="panelSaleStats"></p>
                  </div>
                  <button onclick="window.closeSalePanel()" class="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                  </button>
              </div>

              <!-- Payment Toolbar -->
              <div class="px-6 py-3 border-b border-gray-100 bg-orange-50/50 flex items-center justify-between gap-4 shrink-0" id="payToolbar">
                  <div class="text-sm text-gray-600" id="paySelectionInfo">Chọn đơn để thanh toán hoa hồng</div>
                  <button id="payCommissionBtn" onclick="window.openPayConfirmModal()"
                      class="bg-csr-orange text-white text-sm font-bold px-5 py-2 rounded-xl hover:bg-[#d65503] transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed" disabled>
                      💰 Thanh Toán Hoa Hồng
                  </button>
              </div>

              <!-- Tabs: Lịch sử đơn / Lịch sử thanh toán -->
              <div class="flex border-b border-gray-200 px-6 bg-white shrink-0">
                  <button id="tabOrders" onclick="window.switchPanelTab('orders')" class="py-3 px-1 mr-6 text-sm font-bold border-b-2 border-csr-orange text-csr-orange transition-colors">Lịch Sử Đơn</button>
                  <button id="tabPayHistory" onclick="window.switchPanelTab('pay-history')" class="py-3 px-1 mr-6 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 transition-colors">Lịch Sử Thanh Toán</button>
              </div>

              <!-- Tab Content -->
              <div class="flex-1 overflow-y-auto">
                  <!-- Orders Tab -->
                  <div id="tabContentOrders" class="p-4">
                      <div class="text-center text-gray-400 py-8 text-sm">Đang tải...</div>
                  </div>
                  <!-- Payment History Tab -->
                  <div id="tabContentPayHistory" class="p-4 hidden">
                      <div class="text-center text-gray-400 py-8 text-sm">Đang tải lịch sử...</div>
                  </div>
              </div>
          </div>
      </div>

      <!-- CONFIRM PAYMENT MODAL -->
      <div id="payConfirmModal" class="fixed inset-0 z-[60] bg-gray-900/70 backdrop-blur-sm hidden opacity-0 transition-opacity duration-200 flex items-center justify-center p-4">
          <div class="bg-white rounded-2xl w-full max-w-md shadow-2xl p-6 scale-95 transition-transform duration-300" id="payConfirmModalInner">
              <h3 class="text-lg font-bold text-gray-900 mb-1">Xác Nhận Thanh Toán Hoa Hồng</h3>
              <p class="text-sm text-gray-500 mb-5">Vui lòng kiểm tra lại trước khi xác nhận.</p>

              <div class="bg-orange-50 border border-orange-100 rounded-xl p-4 space-y-2 mb-5">
                  <div class="flex justify-between text-sm"><span class="text-gray-500">Nhân viên:</span> <span class="font-bold text-gray-900" id="confirmSaleName">—</span></div>
                  <div class="flex justify-between text-sm"><span class="text-gray-500">Số đơn:</span> <span class="font-bold text-gray-900" id="confirmOrderCount">—</span></div>
                  <div class="flex justify-between text-sm border-t border-orange-100 pt-2 mt-2"><span class="text-gray-500 font-bold">Tổng hoa hồng:</span> <span class="font-black text-csr-orange text-lg" id="confirmTotalComm">—</span></div>
              </div>

              <!-- Payment Info Display -->
              <div id="paymentInfoBox" class="mb-5 p-4 border border-gray-200 rounded-xl bg-gray-50/50 hidden">
                  <h4 class="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <svg class="w-4 h-4 text-csr-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                      Thông tin chuyển khoản
                  </h4>
                  <div class="space-y-1 text-sm bg-white p-3 rounded border border-gray-100 shadow-sm">
                      <div class="flex justify-between"><span class="text-gray-500">Ngân hàng:</span> <span class="font-medium text-gray-900" id="payBankName">—</span></div>
                      <div class="flex justify-between"><span class="text-gray-500">Số tài khoản:</span> <span class="font-bold font-mono text-gray-900" id="payBankAccount">—</span></div>
                      <div class="flex justify-between"><span class="text-gray-500">Chủ tài khoản:</span> <span class="font-bold text-csr-orange uppercase" id="payBankOwner">—</span></div>
                  </div>
                  <div id="payQrBox" class="mt-4 flex flex-col items-center">
                     <!-- QR inject here -->
                  </div>
              </div>
              <div id="noPaymentInfoBox" class="mb-5 p-4 bg-red-50 border border-red-100 rounded-xl text-center hidden">
                  <p class="text-xs text-red-600 font-bold uppercase mb-1">Thiếu thông tin thanh toán</p>
                  <p class="text-xs text-red-500">Nhân viên này chưa cài đặt Thông tin Ngân hàng trên Hồ Sơ Cá Nhân.</p>
              </div>

              <div class="mb-5">
                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ghi Chú (tuỳ chọn)</label>
                  <input type="text" id="payNote" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-csr-orange focus:outline-none" placeholder="VD: Thanh toán tháng 4/2026...">
              </div>

              <div class="flex gap-3">
                  <button onclick="window.closePayConfirmModal()" class="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors text-sm">Hủy</button>
                  <button onclick="window.confirmPayCommission()" id="confirmPayBtn" class="flex-1 px-4 py-3 bg-csr-orange text-white rounded-xl font-bold hover:bg-[#d65503] transition-colors shadow-lg shadow-csr-orange/30 text-sm">✅ Xác Nhận Thanh Toán</button>
              </div>
          </div>
      </div>
    `;
};

export const afterRender = () => {
    let user = { role: 'sale', fullName: 'Guest', id: null };
    try {
        const stored = localStorage.getItem('csr_user');
        if (stored) user = JSON.parse(stored);
    } catch (e) { }
    const isAdmin = user.role === 'admin';

    let allTours = [];
    let allBookings = [];
    let allUsers = [];

    // State cho panel Admin
    let currentPanelSale = null; // { key, name, bookings[], filteredBookings[] }
    let currentPanelTab = 'orders';
    let selectedBookingIds = new Set();
    let panelPayHistory = []; // lịch sử thanh toán của sale đang mở

    const formatVND = (num) => new Intl.NumberFormat('vi-VN').format(Math.round(num || 0)) + 'đ';

    // ── Helper: Tính tổng tiền dịch vụ (robust) ──────────────────────────────
    const calcServicesTotal = (services_booked) => {
        if (!services_booked) return 0;
        try {
            const svs = Array.isArray(services_booked)
                ? services_booked
                : JSON.parse(services_booked);
            if (Array.isArray(svs)) {
                return svs.reduce((sum, s) => sum + (parseInt(s.price) || 0), 0);
            }
        } catch (e) {
            const matches = String(services_booked).match(/price:\s*(\d+)/g) || [];
            return matches.reduce((sum, m) => sum + Number(m.replace(/price:\s*/, '')), 0);
        }
        return 0;
    };

    // ── Helper: Tính hoa hồng 1 booking ──────────────────────────────────────
    const calcCommission = (b, tours) => {
        const tourConf = tours.find(t => t.name &&  b.tour && t.name.toLowerCase().trim() === b.tour.toLowerCase().trim());
        const rate = parseFloat(b.commission_rate ?? tourConf?.commission_rate ?? 5);
        const servicesTotal = calcServicesTotal(b.services_booked);
        const basePrice = Math.max(0, (parseInt(b.total_price) || 0) - servicesTotal);
        const commission = basePrice * (rate / 100);
        return { rate, servicesTotal, basePrice, commission };
    };

    // ── Helper: Parse ngày booking ────────────────────────────────────────────
    const parseBookingDate = (dateStr) => {
        if (!dateStr) return null;
        const cleaned = dateStr.split('-')[0].trim();
        if (cleaned.includes('/')) {
            const parts = cleaned.split('/');
            if (parts.length === 3) return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
            if (parts.length === 2) return new Date(new Date().getFullYear(), parseInt(parts[1]) - 1, parseInt(parts[0]));
        }
        if (cleaned.match(/^\d{4}-/)) return new Date(cleaned);
        return null;
    };

    const today = new Date(); today.setHours(0, 0, 0, 0);

    const isSuccessStatus = (b) => b.status && (b.status.includes('Đã cọc') || b.status.includes('Hoàn tất') || b.status.includes('Hoàn thành'));
    const isCompletedTrip = (b) => {
        const isFullyPaid = b.status && (b.status.includes('Hoàn tất') || b.status.includes('Hoàn thành'));
        if (!isFullyPaid) return false;
        const d = parseBookingDate(b.date); return d && d < today;
    };

    // ── Load Data ─────────────────────────────────────────────────────────────
    const loadData = async () => {
        try {
            const [toursRes, bookingsRes, usersRes] = await Promise.all([
                fetch('/api/admin_tours'),
                fetch('/api/bookings'),
                fetch('/api/users'),
            ]);
            const toursData = toursRes.ok ? await toursRes.json() : {};
            allTours = Array.isArray(toursData) ? toursData : (toursData.data || []);
            allBookings = bookingsRes.ok ? await bookingsRes.json() : [];
            allUsers = usersRes.ok ? await usersRes.json() : [];

            if (isAdmin) {
                renderCommissionSetup();
                renderAdminSalesList();
            } else {
                renderSaleView();
            }
        } catch (err) {
            console.error('Lỗi tải dữ liệu báo cáo:', err);
        }
    };

    // ── Commission Setup (Admin) ──────────────────────────────────────────────
    const renderCommissionSetup = () => {
        const container = document.getElementById('commissionSetupContainer');
        if (!container) return;
        if (allTours.length === 0) {
            container.innerHTML = '<div class="text-sm text-gray-500 text-center py-4">Không có Tour nào.</div>';
            return;
        }
        const gridHtml = allTours.map(t => {
            const rate = t.commission_rate ?? 5;
            return `
                <div class="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg hover:border-csr-orange/30 transition-colors">
                    <div class="font-medium text-sm text-gray-900 flex-1 truncate pr-4">${t.name}</div>
                    <div class="flex items-center gap-2">
                        <div class="relative w-24">
                            <input type="number" min="0" max="100" step="0.5"
                                class="w-full bg-gray-50 border border-gray-200 rounded-lg py-1.5 pl-3 pr-8 text-sm font-bold focus:border-csr-orange focus:outline-none"
                                value="${rate}" id="comm_input_${t.id}">
                            <span class="absolute right-3 top-1.5 text-gray-400 font-bold">%</span>
                        </div>
                        <button class="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-csr-orange transition-colors"
                            onclick="window.saveCommission(${t.id})">Lưu</button>
                    </div>
                </div>`;
        }).join('');
        container.innerHTML = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">${gridHtml}</div>`;

        // Toggle
        document.getElementById('commissionSetupToggle')?.addEventListener('click', () => {
            container.classList.toggle('hidden');
            document.getElementById('commissionSetupChevron')?.classList.toggle('rotate-180');
        });
    };

    window.saveCommission = async (tourId) => {
        const input = document.getElementById(`comm_input_${tourId}`);
        if (!input) return;
        const rate = parseFloat(input.value);
        if (isNaN(rate) || rate < 0 || rate > 100) { alert('Tỉ lệ hoa hồng không hợp lệ (0–100)'); return; }
        const btn = input.nextElementSibling;
        btn.textContent = '...'; btn.disabled = true;
        try {
            const res = await fetch(`/api/admin_tours?id=${tourId}`, {
                method: 'PUT', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ commission_rate: rate })
            });
            if (res.ok) {
                const t = allTours.find(x => x.id === tourId);
                if (t) t.commission_rate = rate;
                btn.classList.add('bg-green-500'); btn.textContent = '✓ Đã lưu!';
                setTimeout(() => { btn.classList.remove('bg-green-500'); btn.textContent = 'Lưu'; btn.disabled = false; }, 1500);
                renderAdminSalesList();
            } else throw new Error();
        } catch { alert('Lỗi khi lưu!'); btn.textContent = 'Lưu'; btn.disabled = false; }
    };

    // ── Admin: Render bảng danh sách Sales ───────────────────────────────────
    const renderAdminSalesList = () => {
        const tbody = document.getElementById('salesTableBody');
        if (!tbody) return;

        // Lọc tất cả booking hợp lệ (đã thành công)
        const validBookings = allBookings.filter(b => isSuccessStatus(b));

        // Build user map: id → currentName
        const userMap = {};
        const nameToId = {};
        allUsers.forEach(u => {
            const uid = String(u.id);
            const name = u.full_name || u.fullName || u.username || `User #${u.id}`;
            userMap[uid] = name;
            nameToId[name.trim().toLowerCase()] = uid;
        });

        // Group by sale id
        const salesMap = {};
        validBookings.forEach(b => {
            const saleIdStr = String(b.sale_id || '').trim();
            let key = saleIdStr;
            let displayName = b.sale_name || 'Admin / Tự Đặt';
            if (saleIdStr && userMap[saleIdStr]) { displayName = userMap[saleIdStr]; }
            else {
                const byName = nameToId[(b.sale_name || '').trim().toLowerCase()];
                if (byName) { key = byName; displayName = userMap[byName]; }
                else key = b.sale_name || 'no-id';
            }
            if (!salesMap[key]) salesMap[key] = { key, saleId: saleIdStr || key, name: displayName, bookings: [] };
            salesMap[key].bookings.push(b);
        });

        const salesArr = Object.values(salesMap).sort((a, b) => a.name.localeCompare(b.name));

        if (salesArr.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" class="p-8 text-center text-gray-400 text-sm">Chưa có dữ liệu nào trong kỳ này.</td></tr>';
            return;
        }

        tbody.innerHTML = salesArr.map((s, idx) => {
            const deposited = s.bookings.filter(b => !isCompletedTrip(b) && !b.commission_paid).length;
            const completed = s.bookings.filter(b => isCompletedTrip(b) && !b.commission_paid).length;
            const unpaidComm = s.bookings
                .filter(b => !b.commission_paid)
                .reduce((sum, b) => sum + calcCommission(b, allTours).commission, 0);
            return `
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="p-4 border-b border-gray-100 text-gray-400 text-sm font-medium">${idx + 1}</td>
                    <td class="p-4 border-b border-gray-100">
                        <div class="flex items-center gap-3">
                            <div class="w-9 h-9 rounded-full bg-csr-orange/10 text-csr-orange flex items-center justify-center font-bold text-sm shrink-0">${(s.name || 'S').charAt(0).toUpperCase()}</div>
                            <div class="font-bold text-gray-900">${s.name}</div>
                        </div>
                    </td>
                    <td class="p-4 border-b border-gray-100 text-center">
                        <span class="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">${deposited} đơn</span>
                    </td>
                    <td class="p-4 border-b border-gray-100 text-center">
                        <span class="inline-block bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">${completed} đơn</span>
                    </td>
                    <td class="p-4 border-b border-gray-100 text-right font-black text-csr-orange text-base">${formatVND(unpaidComm)}</td>
                    <td class="p-4 border-b border-gray-100 text-center">
                        <button class="text-xs bg-csr-orange text-white px-4 py-1.5 rounded-lg hover:bg-[#d65503] transition-colors font-bold shadow-sm"
                            onclick="window.openSalePanel('${s.key}')">Xem &rsaquo;</button>
                    </td>
                </tr>`;
        }).join('');

        // Store for openSalePanel
        window._salesMap = salesMap;
        window._allToursRef = allTours;
    };

    // ── Admin: Mở panel chi tiết 1 sale ──────────────────────────────────────
    window.openSalePanel = async (key) => {
        const s = window._salesMap?.[key];
        if (!s) return;

        currentPanelSale = s;
        selectedBookingIds.clear();
        currentPanelTab = 'orders';

        document.getElementById('panelSaleName').textContent = s.name;
        updatePayToolbar();
        renderPanelOrders();

        // Load payment history
        try {
            const res = await fetch(`/api/commission_payments?sale_id=${encodeURIComponent(s.saleId)}`);
            panelPayHistory = res.ok ? await res.json() : [];
        } catch { panelPayHistory = []; }
        renderPanelPayHistory();

        // Show panel
        const panel = document.getElementById('saleDetailPanel');
        const panelInner = document.getElementById('saleDetailPanelInner');
        panel.classList.remove('hidden');
        requestAnimationFrame(() => {
            panel.classList.remove('opacity-0');
            panelInner.classList.remove('translate-x-full');
        });
        switchPanelTab('orders');
    };

    window.closeSalePanel = () => {
        const panel = document.getElementById('saleDetailPanel');
        const panelInner = document.getElementById('saleDetailPanelInner');
        panel.classList.add('opacity-0');
        panelInner.classList.add('translate-x-full');
        setTimeout(() => panel.classList.add('hidden'), 300);
    };

    window.switchPanelTab = (tab) => {
        currentPanelTab = tab;
        const ordersContent = document.getElementById('tabContentOrders');
        const payHistContent = document.getElementById('tabContentPayHistory');
        const tabOrders = document.getElementById('tabOrders');
        const tabPay = document.getElementById('tabPayHistory');
        const toolbar = document.getElementById('payToolbar');

        if (tab === 'orders') {
            ordersContent?.classList.remove('hidden');
            payHistContent?.classList.add('hidden');
            tabOrders?.classList.add('border-csr-orange', 'text-csr-orange');
            tabOrders?.classList.remove('border-transparent', 'text-gray-500');
            tabPay?.classList.remove('border-csr-orange', 'text-csr-orange');
            tabPay?.classList.add('border-transparent', 'text-gray-500');
            toolbar?.classList.remove('hidden');
        } else {
            payHistContent?.classList.remove('hidden');
            ordersContent?.classList.add('hidden');
            tabPay?.classList.add('border-csr-orange', 'text-csr-orange');
            tabPay?.classList.remove('border-transparent', 'text-gray-500');
            tabOrders?.classList.remove('border-csr-orange', 'text-csr-orange');
            tabOrders?.classList.add('border-transparent', 'text-gray-500');
            toolbar?.classList.add('hidden');
        }
    };

    const renderPanelOrders = () => {
        const container = document.getElementById('tabContentOrders');
        if (!container || !currentPanelSale) return;

        const bs = currentPanelSale.bookings;

        // Sắp xếp: Hoàn thành → Đã cọc → Đã TT HH
        const completed = bs.filter(b => isCompletedTrip(b) && !b.commission_paid);
        const deposited = bs.filter(b => !isCompletedTrip(b) && !b.commission_paid);
        const paidComm  = bs.filter(b => b.commission_paid);
        const sorted = [...completed, ...deposited, ...paidComm];

        if (sorted.length === 0) {
            container.innerHTML = '<div class="p-8 text-center text-gray-400 text-sm">Không có đơn nào trong kỳ này.</div>';
            return;
        }

        const buildSection = (title, color, items) => {
            if (items.length === 0) return '';
            return `
                <div class="mb-1">
                    <div class="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-${color}-600 bg-${color}-50 border-b border-${color}-100">── ${title} (${items.length}) ──</div>
                    ${items.map((b, idx) => buildOrderRow(b, idx)).join('')}
                </div>`;
        };

        const sttBase = { completedIdx: 0, depositedIdx: completed.length, paidIdx: completed.length + deposited.length };

        const buildOrderRow = (b, idx) => {
            const { rate, servicesTotal, basePrice, commission } = calcCommission(b, allTours);
            const isPaid = b.commission_paid;
            const canSelect = !isPaid;
            const isChecked = selectedBookingIds.has(b.id);
            return `
                <div class="flex items-center gap-3 px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors ${isPaid ? 'opacity-60' : ''}">
                    <input type="checkbox" class="order-checkbox w-4 h-4 accent-csr-orange shrink-0 ${canSelect ? '' : 'cursor-not-allowed'}"
                        data-id="${b.id}" data-commission="${commission}" ${isChecked ? 'checked' : ''} ${!canSelect ? 'disabled' : ''}
                        onchange="window.onOrderCheck(this)">
                    <div class="text-xs text-gray-400 font-mono w-12 shrink-0 text-center">#${b.id}</div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="font-bold text-gray-900 text-sm truncate">${b.name}</span>
                            <span class="text-xs text-gray-400 shrink-0">${b.phone || ''}</span>
                        </div>
                        <div class="text-xs text-gray-500 truncate mt-0.5">${b.tour} · ${b.date}</div>
                    </div>
                    <div class="text-right shrink-0">
                        <div class="text-sm font-bold text-gray-900">${formatVND(b.total_price)}</div>
                        ${servicesTotal > 0 ? `<div class="text-[10px] text-gray-400">DV: -${formatVND(servicesTotal)}</div>` : ''}
                        <div class="text-sm font-black text-csr-orange">HH: ${formatVND(commission)} <span class="text-gray-400 font-normal text-[10px]">(${rate}%)</span></div>
                    </div>
                    <div class="shrink-0 w-24 text-right">
                        ${isPaid
                            ? `<span class="inline-block bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">✅ Đã TT HH</span>`
                            : isCompletedTrip(b)
                                ? `<span class="inline-block bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded border border-green-200">Hoàn thành</span>`
                                : `<span class="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded border border-blue-200">Đã cọc</span>`
                        }
                    </div>
                </div>`;
        };

        container.innerHTML = `
            <div class="flex items-center gap-3 px-4 py-2.5 bg-gray-50 border-b border-gray-200 text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                <div class="w-4 shrink-0">
                    <input type="checkbox" id="selectAllOrders" class="w-4 h-4 accent-csr-orange" onchange="window.toggleSelectAll(this)">
                </div>
                <div class="w-12 text-center shrink-0">Mã ĐH</div>
                <div class="flex-1">Thông Tin Khách · Tour</div>
                <div class="w-40 text-right">Giá Đơn · Hoa Hồng</div>
                <div class="w-24 text-right">Trạng Thái</div>
            </div>
            ${buildSection('ĐÃ HOÀN THÀNH', 'green', completed)}
            ${buildSection('ĐÃ CỌC', 'blue', deposited)}
            ${buildSection('ĐÃ THANH TOÁN HOA HỒNG', 'gray', paidComm)}
        `;
    };

    const renderPanelPayHistory = () => {
        const container = document.getElementById('tabContentPayHistory');
        if (!container) return;

        if (panelPayHistory.length === 0) {
            container.innerHTML = '<div class="p-8 text-center text-gray-400 text-sm">Chưa có lần thanh toán nào cho nhân viên này.</div>';
            return;
        }

        container.innerHTML = `
            <table class="w-full text-sm text-left border-collapse">
                <thead><tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-400 font-bold">
                    <th class="p-3">Mã Batch</th>
                    <th class="p-3">Ngày TT</th>
                    <th class="p-3 text-center">Số Đơn</th>
                    <th class="p-3 text-right text-csr-orange">Tổng HH</th>
                    <th class="p-3">Admin TT</th>
                    <th class="p-3">Ghi Chú</th>
                </tr></thead>
                <tbody class="divide-y divide-gray-100">
                    ${panelPayHistory.map(p => {
                        const d = new Date(p.created_at);
                        const dateStr = `${d.getDate().toString().padStart(2,'0')}/${(d.getMonth()+1).toString().padStart(2,'0')}/${d.getFullYear()}`;
                        return `<tr class="hover:bg-gray-50 transition-colors">
                            <td class="p-3 font-mono text-gray-500 text-xs">#BATCH${p.id}</td>
                            <td class="p-3 text-gray-700 font-medium">${dateStr}</td>
                            <td class="p-3 text-center"><span class="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-bold">${p.total_orders} đơn</span></td>
                            <td class="p-3 text-right font-black text-csr-orange">${formatVND(p.total_amount)}</td>
                            <td class="p-3 text-gray-600">${p.paid_by || '—'}</td>
                            <td class="p-3 text-gray-400 text-xs">${p.note || '—'}</td>
                        </tr>`;
                    }).join('')}
                </tbody>
            </table>`;
    };

    // ── Checkbox logic ────────────────────────────────────────────────────────
    window.onOrderCheck = (checkbox) => {
        const id = parseInt(checkbox.dataset.id);
        if (checkbox.checked) selectedBookingIds.add(id);
        else selectedBookingIds.delete(id);
        updatePayToolbar();
    };

    window.toggleSelectAll = (masterCheckbox) => {
        const checkboxes = document.querySelectorAll('.order-checkbox:not(:disabled)');
        checkboxes.forEach(cb => {
            cb.checked = masterCheckbox.checked;
            const id = parseInt(cb.dataset.id);
            if (masterCheckbox.checked) selectedBookingIds.add(id);
            else selectedBookingIds.delete(id);
        });
        updatePayToolbar();
    };

    const updatePayToolbar = () => {
        const count = selectedBookingIds.size;
        const totalComm = currentPanelSale?.bookings
            .filter(b => selectedBookingIds.has(b.id))
            .reduce((sum, b) => sum + calcCommission(b, allTours).commission, 0) || 0;

        const info = document.getElementById('paySelectionInfo');
        const btn = document.getElementById('payCommissionBtn');
        if (info) info.textContent = count > 0 ? `Đã chọn ${count} đơn · Tổng HH: ${formatVND(totalComm)}` : 'Chọn đơn để thanh toán hoa hồng';
        if (btn) btn.disabled = count === 0;
    };

    // ── Confirm Payment Modal ─────────────────────────────────────────────────
    window.openPayConfirmModal = () => {
        const count = selectedBookingIds.size;
        if (count === 0) return;
        const totalComm = currentPanelSale?.bookings
            .filter(b => selectedBookingIds.has(b.id))
            .reduce((sum, b) => sum + calcCommission(b, allTours).commission, 0) || 0;

        document.getElementById('confirmSaleName').textContent = currentPanelSale?.name || '—';
        document.getElementById('confirmOrderCount').textContent = `${count} đơn`;
        document.getElementById('confirmTotalComm').textContent = formatVND(totalComm);
        document.getElementById('payNote').value = '';

        // Hiển thị thông tin thanh toán của Sale
        const pInfoBox = document.getElementById('paymentInfoBox');
        const noPInfoBox = document.getElementById('noPaymentInfoBox');
        
        let foundSale = allUsers.find(u => String(u.id) === String(currentPanelSale.saleId));
        if (!foundSale && currentPanelSale.saleId === 'unassigned') {
            foundSale = null;
        }

        const pInfo = foundSale?.payment_info;
        if (pInfo && (pInfo.bank_name || pInfo.account_number || pInfo.qr_code)) {
            document.getElementById('payBankName').textContent = pInfo.bank_name || '—';
            document.getElementById('payBankAccount').textContent = pInfo.account_number || '—';
            document.getElementById('payBankOwner').textContent = pInfo.account_name || '—';
            
            const qrBox = document.getElementById('payQrBox');
            if (pInfo.qr_code) {
                qrBox.innerHTML = `<p class="text-xs text-gray-500 mb-2 font-medium">Mã QR Quét Nhanh:</p><img src="${pInfo.qr_code}" class="w-32 h-32 object-contain rounded-xl border-2 border-gray-200 p-1 shadow-sm mix-blend-multiply">`;
                qrBox.classList.remove('hidden');
            } else {
                qrBox.innerHTML = '';
                qrBox.classList.add('hidden');
            }

            pInfoBox.classList.remove('hidden');
            noPInfoBox.classList.add('hidden');
        } else {
            pInfoBox.classList.add('hidden');
            noPInfoBox.classList.remove('hidden');
            if (currentPanelSale.saleId === 'unassigned') noPInfoBox.classList.add('hidden'); // Ẩn luôn nếu ko có sale phụ trách
        }

        const modal = document.getElementById('payConfirmModal');
        const inner = document.getElementById('payConfirmModalInner');
        modal.classList.remove('hidden');
        requestAnimationFrame(() => {
            modal.classList.remove('opacity-0');
            inner.classList.remove('scale-95');
        });
    };

    window.closePayConfirmModal = () => {
        const modal = document.getElementById('payConfirmModal');
        const inner = document.getElementById('payConfirmModalInner');
        modal.classList.add('opacity-0');
        inner.classList.add('scale-95');
        setTimeout(() => modal.classList.add('hidden'), 200);
    };

    window.confirmPayCommission = async () => {
        const btn = document.getElementById('confirmPayBtn');
        btn.textContent = 'Đang xử lý...'; btn.disabled = true;

        const note = document.getElementById('payNote').value.trim();
        const adminName = user.fullName || user.full_name || 'Admin';

        try {
            const res = await fetch('/api/commission_payments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sale_id: currentPanelSale.saleId,
                    sale_name: currentPanelSale.name,
                    booking_ids: [...selectedBookingIds],
                    paid_by: adminName,
                    note,
                })
            });

            if (!res.ok) throw new Error(await res.text());

            window.closePayConfirmModal();
            selectedBookingIds.clear();

            // Refresh data
            await loadData();

            // Reload panel nếu vẫn đang mở
            if (currentPanelSale && window._salesMap) {
                const updatedSale = window._salesMap[currentPanelSale.key];
                if (updatedSale) {
                    currentPanelSale = updatedSale;
                    // Reload payment history
                    try {
                        const histRes = await fetch(`/api/commission_payments?sale_id=${encodeURIComponent(currentPanelSale.saleId)}`);
                        panelPayHistory = histRes.ok ? await histRes.json() : [];
                    } catch { panelPayHistory = []; }
                    renderPanelOrders();
                    renderPanelPayHistory();
                    updatePayToolbar();
                    document.getElementById('panelSaleName').textContent = currentPanelSale.name;
                }
            }

            alert('✅ Đã thanh toán hoa hồng thành công!');

        } catch (err) {
            console.error('Lỗi thanh toán hoa hồng:', err);
            alert('❌ Lỗi: ' + err.message);
        } finally {
            btn.textContent = '✅ Xác Nhận Thanh Toán'; btn.disabled = false;
        }
    };

    // ── Sale View ─────────────────────────────────────────────────────────────
    const renderSaleView = async () => {
        const myId = String(user.id || user.userId || '');
        const myName = (user.fullName || user.full_name || '').toLowerCase();

        // Lọc tất cả đơn của sale hiện tại
        const myBookings = allBookings.filter(b => {
            const bSaleId = String(b.sale_id || '').trim();
            const nameMatch = (b.sale_name || '').toLowerCase() === myName;
            const idMatch = myId && bSaleId === myId;
            if (!idMatch && !nameMatch) return false;
            return isSuccessStatus(b);
        });

        const myCompleted = myBookings.filter(b => isCompletedTrip(b));
        const totalRev = myBookings.reduce((s, b) => s + (parseInt(b.total_price) || 0), 0);
        const totalComm = myCompleted.reduce((s, b) => s + calcCommission(b, allTours).commission, 0);

        // All bookings (mọi status)
        const myAllInRange = allBookings.filter(b => {
            const bSaleId = String(b.sale_id || '').trim();
            const nameMatch = (b.sale_name || '').toLowerCase() === myName;
            const idMatch = myId && bSaleId === myId;
            return (idMatch || nameMatch);
        });

        const totalPax = myAllInRange.length;

        // Update stat cards
        const el = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
        el('sale-stat-total-pax', totalPax);
        el('sale-stat-success-pax', myCompleted.length);
        el('sale-stat-revenue', formatVND(totalRev));
        el('sale-stat-real-comm', formatVND(totalComm));

        // Render lịch sử đơn
        const ordersContainer = document.getElementById('saleOrdersContainer');
        if (ordersContainer) {
            if (myBookings.length === 0) {
                ordersContainer.innerHTML = '<div class="p-8 text-center text-gray-400 text-sm">Chưa có đơn nào trong kỳ này.</div>';
            } else {
                const completedList = myBookings.filter(b => isCompletedTrip(b) && !b.commission_paid);
                const depositedList = myBookings.filter(b => !isCompletedTrip(b) && !b.commission_paid);
                const paidList      = myBookings.filter(b => b.commission_paid);
                const sorted        = [...completedList, ...depositedList, ...paidList];

                ordersContainer.innerHTML = `
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left border-collapse">
                            <thead><tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-400 font-bold">
                                <th class="p-3 text-center w-12">STT</th>
                                <th class="p-3 w-20">Mã ĐH</th>
                                <th class="p-3">Tên KH</th>
                                <th class="p-3">Tour · Ngày</th>
                                <th class="p-3 text-right">Giá Đơn</th>
                                <th class="p-3 text-right text-csr-orange">Hoa Hồng</th>
                                <th class="p-3 text-center">Trạng Thái HH</th>
                            </tr></thead>
                            <tbody class="divide-y divide-gray-100">
                                ${sorted.map((b, idx) => {
                                    const { rate, servicesTotal, commission } = calcCommission(b, allTours);
                                    return `<tr class="hover:bg-gray-50 transition-colors ${b.commission_paid ? 'opacity-70' : ''}">
                                        <td class="p-3 text-center text-gray-400 font-medium">${idx + 1}</td>
                                        <td class="p-3 font-mono text-gray-600 text-xs">#CSR${b.id}</td>
                                        <td class="p-3">
                                            <div class="font-bold text-gray-900">${b.name}</div>
                                            <div class="text-[11px] text-gray-400">${b.phone || ''}</div>
                                        </td>
                                        <td class="p-3">
                                            <div class="font-medium text-gray-700">${b.tour}</div>
                                            <div class="text-[11px] text-gray-400">${b.date}</div>
                                        </td>
                                        <td class="p-3 text-right font-bold text-gray-900">${formatVND(b.total_price)}</td>
                                        <td class="p-3 text-right font-black text-csr-orange">${formatVND(commission)}</td>
                                        <td class="p-3 text-center">
                                            ${b.commission_paid
                                                ? `<span class="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">✅ Đã nhận</span>`
                                                : isCompletedTrip(b)
                                                    ? `<span class="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded-full">⏳ Chờ TT</span>`
                                                    : `<span class="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full">Đang cọc</span>`
                                            }
                                        </td>
                                    </tr>`;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>`;
            }
        }

        // Render lịch sử thanh toán từ Admin
        const payHistContainer = document.getElementById('salePaymentHistoryContainer');
        if (payHistContainer && myId) {
            try {
                const res = await fetch(`/api/commission_payments?sale_id=${encodeURIComponent(myId)}`);
                const history = res.ok ? await res.json() : [];
                if (history.length === 0) {
                    payHistContainer.innerHTML = '<div class="p-6 text-center text-gray-400 text-sm">Chưa có lần thanh toán nào.</div>';
                } else {
                    payHistContainer.innerHTML = `
                        <table class="w-full text-sm text-left border-collapse">
                            <thead><tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-400 font-bold">
                                <th class="p-3">Batch</th>
                                <th class="p-3">Ngày Nhận</th>
                                <th class="p-3 text-center">Số Đơn</th>
                                <th class="p-3 text-right text-green-600">Số Tiền Nhận</th>
                                <th class="p-3">Ghi Chú</th>
                            </tr></thead>
                            <tbody class="divide-y divide-gray-100">
                                ${history.map(p => {
                                    const d = new Date(p.created_at);
                                    const dateStr = `${d.getDate().toString().padStart(2,'0')}/${(d.getMonth()+1).toString().padStart(2,'0')}/${d.getFullYear()}`;
                                    return `<tr class="hover:bg-gray-50">
                                        <td class="p-3 font-mono text-gray-400 text-xs">#BATCH${p.id}</td>
                                        <td class="p-3 font-medium text-gray-700">${dateStr}</td>
                                        <td class="p-3 text-center"><span class="bg-gray-100 text-xs font-bold px-2 py-0.5 rounded">${p.total_orders} đơn</span></td>
                                        <td class="p-3 text-right font-black text-green-600">${formatVND(p.total_amount)}</td>
                                        <td class="p-3 text-gray-400 text-xs">${p.note || '—'}</td>
                                    </tr>`;
                                }).join('')}
                            </tbody>
                        </table>`;
                }
            } catch { payHistContainer.innerHTML = '<div class="p-6 text-center text-gray-400 text-sm">Lỗi tải lịch sử.</div>'; }
        }
    };

    // ── Events ────────────────────────────────────────────────────────────────
    // Close panel on overlay click
    document.getElementById('saleDetailPanel')?.addEventListener('click', (e) => {
        if (e.target.id === 'saleDetailPanel') window.closeSalePanel();
    });

    // Init
    loadData();
};
