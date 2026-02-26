import { Sidebar } from '../components/Sidebar.js';
import { Header } from '../components/Header.js';

export const render = () => {
    let user = { role: 'sale', fullName: 'Guest' };
    try {
        const stored = localStorage.getItem('csr_user');
        if (stored) user = JSON.parse(stored);
    } catch (e) { }

    const isAdmin = user.role === 'admin';
    const currentDate = new Date();
    const currentMonthVal = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}`;

    return `
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${Sidebar()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${Header()}
          
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
               <div class="max-w-7xl mx-auto space-y-8">
                  
                  <div class="flex justify-between items-end">
                      <div>
                          <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Báo Cáo & Hiệu Suất</h1>
                          <p class="text-gray-500 text-sm">
                            ${isAdmin ? 'Quản lý hoa hồng, doanh thu tổng và xếp hạng Sales.' : 'Bảng xếp hạng doanh số và theo dõi hoa hồng.'}
                          </p>
                      </div>
                      <div class="flex items-center gap-3">
                          <label class="text-sm font-bold text-gray-500 uppercase">Kỳ Báo Cáo:</label>
                          <input type="month" id="reportMonth" class="input-field text-sm w-48 font-bold" value="${currentMonthVal}">
                      </div>
                  </div>

                  ${isAdmin ? `
                  <!-- PHẦN 1: QUẢN LÝ HOA HỒNG TOUR (ADMIN ONLY) -->
                  <div class="glass-panel overflow-hidden">
                      <div class="p-5 border-b border-gray-200 flex justify-between items-center bg-gray-100/50">
                          <div>
                              <h2 class="text-lg font-bold text-gray-900">1. Cài Đặt Mức Hoa Hồng Tour</h2>
                              <p class="text-xs text-gray-500 mt-1">Lưu ý: Mức hoa hồng này sẽ được tính ngay lập tức cho các đơn hàng của tour tương ứng.</p>
                          </div>
                      </div>
                      <div class="p-4" id="commissionSetupContainer">
                          <!-- Tour list rendered here -->
                          <div class="text-center text-gray-400 py-4 text-sm">Đang tải danh sách Tour...</div>
                      </div>
                  </div>

                  <!-- PHẦN 2: DOANH THU TỔNG (ADMIN ONLY) -->
                  <div>
                      <h2 class="text-lg font-bold text-gray-900 mb-4">2. Thống Kê Doanh Thu Tổng (Tháng Chọn)</h2>
                      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div class="glass-panel p-6 border-l-4 border-csr-orange">
                              <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wide">Số Khởi Hành (Chuyến)</h3>
                              <p class="text-4xl font-black text-gray-900 mt-2" id="stat-departures">...</p>
                          </div>
                          <div class="glass-panel p-6 border-l-4 border-blue-500">
                              <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wide">Số Khách Tham Gia</h3>
                              <p class="text-4xl font-black text-gray-900 mt-2" id="stat-pax">...</p>
                          </div>
                          <div class="glass-panel p-6 border-l-4 border-green-500">
                              <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wide">Tổng Doanh Thu</h3>
                              <p class="text-4xl font-black text-green-600 mt-2" id="stat-revenue">...</p>
                          </div>
                      </div>
                  </div>

                  <!-- PHẦN 3: BẢNG XẾP HẠNG SALES (ADMIN ONLY) -->
                  <div class="glass-panel overflow-hidden mt-8">
                      <div class="p-5 border-b border-gray-200 flex justify-between items-center bg-gray-100/50">
                          <div>
                              <h2 class="text-lg font-bold text-gray-900">3. Bảng Xếp Hạng Đội Ngũ Sales</h2>
                              <p class="text-xs text-gray-500 mt-1">Tính theo các đơn hàng "Đã cọc" hoặc "Hoàn tất" khởi hành trong tháng.</p>
                          </div>
                      </div>
                      <div class="overflow-x-auto">
                          <table class="w-full text-left border-collapse">
                              <thead>
                                  <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-400 font-bold">
                                      <th class="p-4 text-center w-16">TOP</th>
                                      <th class="p-4">Nhân Viên Sale</th>
                                      <th class="p-4 text-center">Đơn Chốt</th>
                                      <th class="p-4 text-right">Doanh Số Kéo Về</th>
                                      <th class="p-4 text-right text-csr-orange">Hoa Hồng Kênh</th>
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
                  <!-- MÀN HÌNH RIÊNG DÀNH CHO ROLE SALE -->
                  
                  <!-- PHẦN 1: THỐNG KÊ CÁ NHÂN (SALE ONLY) -->
                  <div>
                      <h2 class="text-lg font-bold text-gray-900 mb-4">1. Thống Kê Doanh Thu Đơn Của Tôi</h2>
                      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div class="glass-panel p-6 border-l-4 border-gray-400">
                              <h3 class="text-xs font-bold text-gray-500 uppercase tracking-wide">Số Khách Tiếp Nhận</h3>
                              <p class="text-4xl font-black text-gray-900 mt-2" id="sale-stat-total-pax">...</p>
                          </div>
                          <div class="glass-panel p-6 border-l-4 border-blue-500">
                              <h3 class="text-xs font-bold text-blue-500 uppercase tracking-wide">Số Khách Đã Hoàn Thành</h3>
                              <p class="text-4xl font-black text-blue-600 mt-2" id="sale-stat-success-pax">...</p>
                          </div>
                          <div class="glass-panel p-6 border-l-4 border-csr-orange">
                              <h3 class="text-xs font-bold text-csr-orange uppercase tracking-wide">Tổng Doanh Thu Của Tôi</h3>
                              <p class="text-4xl font-black text-csr-orange mt-2" id="sale-stat-revenue">...</p>
                          </div>
                      </div>
                  </div>

                  <!-- PHẦN 2: BẢNG BÁO CÁO CÁ NHÂN THEO TOUR (SALE ONLY) -->
                  <div class="glass-panel overflow-hidden mt-8">
                      <div class="p-5 border-b border-gray-200 flex justify-between items-center bg-gray-100/50">
                          <div>
                              <h2 class="text-lg font-bold text-gray-900">2. Báo Cáo Doanh Thu Tháng Theo Tuyến Tour</h2>
                              <p class="text-xs text-gray-500 mt-1">Gom nhóm dựa trên tour đã chốt thành công trong tháng.</p>
                          </div>
                      </div>
                      <div class="overflow-x-auto">
                          <table class="w-full text-left border-collapse">
                              <thead>
                                  <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-400 font-bold">
                                      <th class="p-4 text-center w-16">STT</th>
                                      <th class="p-4">Tên Tour</th>
                                      <th class="p-4 text-center">Đơn Chốt</th>
                                      <th class="p-4 text-right">Doanh Số Kéo Về</th>
                                      <th class="p-4 text-right text-csr-orange">Hoa Hồng Kênh</th>
                                      <th class="p-4 text-center">Thao Tác</th>
                                  </tr>
                              </thead>
                              <tbody id="saleTourTableBody" class="divide-y divide-gray-100">
                                  <tr><td colspan="6" class="p-8 text-center text-gray-400 text-sm">Đang tải dữ liệu...</td></tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  `}

               </div>
          </main>
        </div>
      </div>

      <!-- SALE / ADMIN DETAIL MODAL -->
      <div id="saleDetailModal" class="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-200">
          <div class="bg-white border border-gray-200 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl scale-95 transition-transform duration-300 flex flex-col" id="saleDetailContent">
              <div class="sticky top-0 bg-white/95 backdrop-blur z-10 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <div>
                      <h2 class="text-lg font-bold text-gray-900 flex items-center gap-2" id="modalSaleName">Chi Tiết</h2>
                      <p class="text-xs text-gray-500 mt-0.5" id="modalMonthText"></p>
                  </div>
                  <button type="button" class="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors" onclick="window.closeSaleDetailModal()">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
              </div>
              
              <div class="p-6 flex-1 bg-gray-50/50">
                ${isAdmin ? `
                <!-- Admin Modal Stats -->
                <div class="grid grid-cols-3 gap-4 mb-6" id="adminModalStats">
                    <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                        <div class="text-xs text-gray-500 font-bold uppercase mb-1">Tổng Đơn</div>
                        <div class="text-xl font-black text-gray-900" id="modalTotalBookings">0</div>
                    </div>
                    <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                        <div class="text-xs text-gray-500 font-bold uppercase mb-1">Doanh Số</div>
                        <div class="text-xl font-black text-gray-900" id="modalTotalRevenue">0đ</div>
                    </div>
                    <div class="bg-orange-50 p-4 rounded-xl border border-orange-200 shadow-sm">
                        <div class="text-xs text-csr-orange font-bold uppercase mb-1">Tiền Hoa Hồng</div>
                        <div class="text-xl font-black text-csr-orange" id="modalTotalCommission">0đ</div>
                    </div>
                </div>
                ` : ''}

                <!-- Bookings Table (2 Columns layout for Sales, standard for Admin) -->
                <div class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                    <table class="w-full text-left text-sm">
                        <thead class="bg-gray-100 border-b border-gray-200 text-xs text-gray-600 uppercase font-bold">
                            <!-- Layout 2 cột rõ ràng cho Sale View, Admin xem chung bảng cũ -->
                            <tr>
                                <th class="p-4 w-1/2 border-r border-gray-200">
                                    <div class="flex items-center gap-2"><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> Thông Khách Hàng</div>
                                </th>
                                <th class="p-4 w-1/2">
                                    <div class="flex items-center gap-2"><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> Chi Tiết Đơn Hàng & Hoa Hồng</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="modalBookingsBody" class="divide-y divide-gray-100">
                        </tbody>
                    </table>
                </div>
              </div>
          </div>
      </div>
    `;
};

export const afterRender = () => {
    let user = { role: 'sale', fullName: 'Guest' };
    try {
        const stored = localStorage.getItem('csr_user');
        if (stored) user = JSON.parse(stored);
    } catch (e) { }
    const isAdmin = user.role === 'admin';

    let allTours = [];
    let allBookings = [];
    let filteredBookings = []; // Bookings in selected month

    const monthInput = document.getElementById('reportMonth');

    // Number formatter
    const formatVND = (num) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num || 0);

    // Load Data
    const loadData = async () => {
        try {
            const [toursRes, bookingsRes] = await Promise.all([
                fetch('/api/tours'),
                fetch('/api/bookings')
            ]);

            allTours = toursRes.ok ? await toursRes.json() : [];
            allBookings = bookingsRes.ok ? await bookingsRes.json() : [];

            if (isAdmin) renderCommissionSetup();
            processReports();
        } catch (err) {
            console.error('Lỗi tải data báo cáo:', err);
            alert('Có lỗi xảy ra khi lấy dữ liệu báo cáo!');
        }
    };

    // Render Commission Setup (Admin)
    const renderCommissionSetup = () => {
        const container = document.getElementById('commissionSetupContainer');
        if (!container) return;

        if (allTours.length === 0) {
            container.innerHTML = '<div class="text-sm text-gray-500 text-center py-4">Không có Tour nào trong hệ thống.</div>';
            return;
        }

        const gridHtml = allTours.map(t => {
            const rate = t.commission_rate ?? 5; // Default 5%
            return `
                <div class="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg hover:border-csr-orange/30 transition-colors">
                    <div class="font-medium text-sm text-gray-900 flex-1 truncate pr-4">${t.name}</div>
                    <div class="flex items-center gap-2">
                        <div class="relative w-24">
                            <input type="number" min="0" max="100" step="0.5" class="w-full bg-gray-50 border border-gray-200 rounded-lg py-1.5 pl-3 pr-8 text-sm font-bold focus:border-csr-orange focus:outline-none" value="${rate}" id="comm_input_${t.id}">
                            <span class="absolute right-3 top-1.5 text-gray-400 font-bold">%</span>
                        </div>
                        <button class="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-csr-orange transition-colors" onclick="window.saveCommission(${t.id})">Lưu</button>
                    </div>
                </div>
            `;
        }).join('');

        container.innerHTML = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">${gridHtml}</div>`;
    };

    // Save Commission Rate
    window.saveCommission = async (tourId) => {
        const input = document.getElementById(`comm_input_${tourId}`);
        if (!input) return;
        const rate = parseFloat(input.value);
        if (isNaN(rate) || rate < 0 || rate > 100) {
            alert('Tỉ lệ hoa hồng không hợp lệ (0-100)');
            return;
        }

        const btn = input.nextElementSibling;
        const oldText = btn.textContent;
        btn.textContent = '...';
        btn.disabled = true;

        try {
            const res = await fetch(`/api/tours?id=${tourId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ commission_rate: rate })
            });

            if (res.ok) {
                // Update local array
                const t = allTours.find(x => x.id === tourId);
                if (t) t.commission_rate = rate;
                btn.classList.add('bg-green-500');
                btn.textContent = 'Đã lưu!';
                setTimeout(() => {
                    btn.classList.remove('bg-green-500');
                    btn.textContent = oldText;
                    btn.disabled = false;
                }, 1500);

                // Recalculate reports since rate changed
                processReports();
            } else {
                throw new Error('Lỗi cập nhật');
            }
        } catch (err) {
            alert('Lỗi khi lưu tỉ lệ hoa hồng!');
            btn.textContent = oldText;
            btn.disabled = false;
        }
    };

    // --- PROCESS DATA ---
    const processReports = () => {
        const monthVal = monthInput.value; // "YYYY-MM"
        if (!monthVal) return;

        let myRawBookingsInMonth = []; // Dành cho Sale đếm số khách vãng lai/tiếp nhận

        // Filter bookings by selected month AND valid status
        filteredBookings = allBookings.filter(b => {
            // Xử lý convert ngày của Booking sang format YYYY-MM
            if (!b.date) return false;
            let bYear, bMonth;
            if (b.date.includes('/')) {
                const firstDatePart = b.date.split('-')[0].trim();
                const parts = firstDatePart.split('/');
                if (parts.length === 3) {
                    bYear = parts[2];
                    bMonth = parts[1].padStart(2, '0');
                }
            } else if (b.date.includes('-')) {
                const parts = b.date.split('-');
                bYear = parts[0];
                bMonth = parts[1];
            }
            if (!bYear || !bMonth) return false;
            const bMonthStr = `${bYear}-${bMonth}`;

            if (bMonthStr !== monthVal) return false;

            // Nếu là Sale, lưu lại những đơn (mọi status) của chính nó trong tháng để đếm "Tiếp nhận"
            if (!isAdmin && b.sale_name && b.sale_name.toLowerCase() === user.fullName.toLowerCase()) {
                myRawBookingsInMonth.push(b);
            }

            // Chỉ lấy các đơn đã thành công ("Đã cọc", "Hoàn tất") để tính Doanh thu báo cáo
            if (!b.status || (!b.status.includes('Đã cọc') && !b.status.includes('Hoàn tất'))) return false;
            return true;
        });

        // Map commission rate to each booking
        filteredBookings.forEach(b => {
            const tourConf = allTours.find(t => t.name === b.tour);
            b._rate = tourConf && tourConf.commission_rate !== undefined ? tourConf.commission_rate : 5;
            b._commission = (b.total_price || 0) * (b._rate / 100);
            b._saleName = b.sale_name || 'Admin / Tự Đặt';
        });

        if (isAdmin) {
            renderAdminStats();
            renderAdminLeaderboard();
        } else {
            renderSaleView(myRawBookingsInMonth);
        }
    };

    // --- ADMIN SPECIFIC RENDERS ---
    const renderAdminStats = () => {
        const statDepartures = document.getElementById('stat-departures');
        const statPax = document.getElementById('stat-pax');
        const statRevenue = document.getElementById('stat-revenue');

        if (!statDepartures) return;
        const trips = new Set();
        filteredBookings.forEach(b => trips.add(b.tour + '|' + b.date));
        const totalPax = filteredBookings.length;
        const totalRev = filteredBookings.reduce((sum, b) => sum + (Number(b.total_price) || 0), 0);

        statDepartures.textContent = trips.size;
        statPax.textContent = totalPax;
        statRevenue.textContent = formatVND(totalRev);
    };

    const renderAdminLeaderboard = () => {
        const tbody = document.getElementById('salesTableBody');
        if (!tbody) return;

        const salesMap = {};
        filteredBookings.forEach(b => {
            const sName = b._saleName;
            if (!salesMap[sName]) salesMap[sName] = { name: sName, bookings: [], totalRev: 0, totalComm: 0 };
            salesMap[sName].bookings.push(b);
            salesMap[sName].totalRev += (Number(b.total_price) || 0);
            salesMap[sName].totalComm += b._commission;
        });

        let salesArr = Object.values(salesMap).sort((a, b) => b.totalRev - a.totalRev);
        window._currentDetailMode = 'admin';
        window._currentDetailList = salesArr;

        if (salesArr.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" class="p-8 text-center text-gray-400 text-sm">Chưa có dữ liệu nào trong tháng này.</td></tr>';
            return;
        }

        tbody.innerHTML = salesArr.map((s, idx) => {
            const rank = idx + 1;
            let rankHtml = `<div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold mx-auto text-xs">${rank}</div>`;
            if (rank === 1) rankHtml = `<div class="w-8 h-8 rounded-full bg-yellow-100 border border-yellow-300 flex items-center justify-center text-yellow-600 font-bold mx-auto text-xs">🥇1</div>`;
            else if (rank === 2) rankHtml = `<div class="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-600 font-bold mx-auto text-xs">🥈2</div>`;
            else if (rank === 3) rankHtml = `<div class="w-8 h-8 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold mx-auto text-xs">🥉3</div>`;

            return `
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="p-4 border-b border-gray-100">${rankHtml}</td>
                    <td class="p-4 border-b border-gray-100 font-bold text-gray-900">${s.name}</td>
                    <td class="p-4 border-b border-gray-100 text-center font-medium">${s.bookings.length}</td>
                    <td class="p-4 border-b border-gray-100 text-right font-black text-gray-900">${formatVND(s.totalRev)}</td>
                    <td class="p-4 border-b border-gray-100 text-right font-black text-csr-orange">${formatVND(s.totalComm)}</td>
                    <td class="p-4 border-b border-gray-100 text-center">
                        <button class="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-md hover:border-csr-orange hover:text-csr-orange transition-colors font-medium" onclick="window.openSaleDetail(${idx})">Xem Lịch Sử Đơn</button>
                    </td>
                </tr>
            `;
        }).join('');
    };


    // --- SALE SPECIFIC RENDERS ---
    const renderSaleView = (myRawBookingsInMonth) => {
        // 1. Chỉ số cá nhân
        // Tính tổng khách tiếp nhận (bao gồm cả đơn nháp/chờ, v.v)
        const totalPaxReceived = myRawBookingsInMonth.length;

        // Lấy riêng list đơn Hợp lệ ("Hoàn tất", "Đã cọc") của mình
        const myValidBookings = filteredBookings.filter(b => b.sale_name && b.sale_name.toLowerCase() === user.fullName.toLowerCase());
        const totalPaxSuccess = myValidBookings.length;
        const totalRev = myValidBookings.reduce((sum, b) => sum + (Number(b.total_price) || 0), 0);

        document.getElementById('sale-stat-total-pax').textContent = totalPaxReceived;
        document.getElementById('sale-stat-success-pax').textContent = totalPaxSuccess;
        document.getElementById('sale-stat-revenue').textContent = formatVND(totalRev);

        // 2. Bảng gom theo Tour
        const tbody = document.getElementById('saleTourTableBody');
        if (!tbody) return;

        const tourMap = {};
        myValidBookings.forEach(b => {
            const tName = b.tour || 'Khác';
            if (!tourMap[tName]) tourMap[tName] = { tourName: tName, bookings: [], totalRev: 0, totalComm: 0 };
            tourMap[tName].bookings.push(b);
            tourMap[tName].totalRev += (Number(b.total_price) || 0);
            tourMap[tName].totalComm += b._commission;
        });

        let tourArr = Object.values(tourMap).sort((a, b) => b.totalRev - a.totalRev);
        window._currentDetailMode = 'sale';
        window._currentDetailList = tourArr;

        if (tourArr.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" class="p-8 text-center text-gray-400 text-sm">Bạn chưa có đơn hàng nào chốt thành công trong tháng này.</td></tr>';
            return;
        }

        tbody.innerHTML = tourArr.map((t, idx) => `
            <tr class="hover:bg-gray-50 transition-colors bg-white">
                <td class="p-4 border-b border-gray-100 text-center text-gray-500 font-bold text-sm">${idx + 1}</td>
                <td class="p-4 border-b border-gray-100 font-bold text-gray-900">${t.tourName}</td>
                <td class="p-4 border-b border-gray-100 text-center font-medium">${t.bookings.length}</td>
                <td class="p-4 border-b border-gray-100 text-right font-black text-gray-900">${formatVND(t.totalRev)}</td>
                <td class="p-4 border-b border-gray-100 text-right font-black text-csr-orange">${formatVND(t.totalComm)}</td>
                <td class="p-4 border-b border-gray-100 text-center">
                    <button class="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-md hover:border-csr-orange hover:text-csr-orange transition-colors font-medium shadow-sm" onclick="window.openSaleDetail(${idx})">Xem Chi Tiết Khách</button>
                </td>
            </tr>
        `).join('');
    };


    // --- MODAL HANDLE ---
    const modal = document.getElementById('saleDetailModal');
    const modalContent = document.getElementById('saleDetailContent');

    window.closeSaleDetailModal = () => {
        modal.classList.add('opacity-0');
        modalContent.classList.add('scale-95');
        setTimeout(() => modal.classList.add('hidden'), 200);
    };

    window.openSaleDetail = (idx) => {
        const item = window._currentDetailList[idx];
        if (!item) return;

        if (window._currentDetailMode === 'admin') {
            // ADMIN MODE: Xem lịch sử của Sales
            document.getElementById('modalSaleName').innerHTML = `Lịch sử đơn của Sale: <span class="text-csr-orange">${item.name}</span>`;
            document.getElementById('modalMonthText').textContent = `Thống kê Tháng ${monthInput.value}`;
            document.getElementById('modalTotalBookings').textContent = item.bookings.length;
            document.getElementById('modalTotalRevenue').textContent = formatVND(item.totalRev);
            document.getElementById('modalTotalCommission').textContent = formatVND(item.totalComm);
        } else {
            // SALE MODE: Xem danh sách Khách của Tour
            document.getElementById('modalSaleName').innerHTML = `Trích xuất đơn chốt - Tuyến Tour: <span class="text-csr-orange">${item.tourName}</span>`;
            document.getElementById('modalMonthText').textContent = `Kỳ Báo Cáo ${monthInput.value}`;
        }

        const tbody = document.getElementById('modalBookingsBody');
        tbody.innerHTML = item.bookings.map(b => {
            // Design mới 2 cột cho danh sách (Phần Trái là Khách, Phần Phải là Tiền)
            return `
                <tr class="hover:bg-blue-50/20 transition-colors">
                    <td class="p-4 border-r border-gray-100 border-b align-top">
                        <div class="font-bold text-gray-900 text-base mb-1">${b.name}</div>
                        <div class="text-xs text-gray-500 flex items-center gap-1">
                            Mã số: <span class="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 font-mono tracking-wider">${b.phone || 'N/A'}</span>
                        </div>
                    </td>
                    <td class="p-4 border-b border-gray-100 align-top">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-sm font-bold text-gray-700 bg-gray-100 px-2 py-1 rounded">${b.tour}</span>
                            <span class="text-xs text-gray-400">Khởi hành: ${b.date}</span>
                        </div>
                        <div class="flex items-center justify-between text-sm mt-3 border-t border-gray-100 border-dashed pt-3">
                            <div class="text-gray-500">Giá trị đơn: <span class="font-bold text-gray-900">${formatVND(b.total_price)}</span></div>
                            <div class="flex gap-4">
                                <div class="text-gray-500">Tỉ lệ HH: <span class="font-bold text-gray-900">${b._rate}%</span></div>
                                <div class="text-csr-orange bg-orange-50 px-2 py-0.5 rounded font-black border border-orange-100">+ ${formatVND(b._commission)}</div>
                            </div>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');

        modal.classList.remove('hidden');
        requestAnimationFrame(() => {
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
        });
    };

    // Events
    monthInput.addEventListener('change', () => {
        processReports();
    });

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) window.closeSaleDetailModal();
        });
    }

    // Init
    loadData();
};
