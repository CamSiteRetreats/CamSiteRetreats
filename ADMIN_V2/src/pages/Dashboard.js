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
                <!-- Page Title -->
                <div>
                    <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Tổng Quan Hệ Thống</h1>
                    <p class="text-gray-500 text-sm" id="dashboardSubtitle">Đang kiểm tra công việc cần xử lý...</p>
                </div>

                <!-- CÔNG VIỆC CẦN XỬ LÝ -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="glass-panel p-5 border-l-4 border-yellow-500 hover:-translate-y-0.5 transition-transform cursor-pointer" onclick="window.location.href='/admin_v2/bookings'">
                        <div class="flex items-center justify-between">
                            <div>
                                <div class="text-xs font-bold text-gray-400 uppercase tracking-wide">Đơn Chờ Cọc</div>
                                <div class="text-3xl font-bold text-yellow-600 mt-1" id="stat-pending-deposit">--</div>
                            </div>
                            <div class="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                                <svg class="w-5 h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                        </div>
                        <div class="text-[10px] text-yellow-500 mt-2 font-medium">Khách đã đăng ký, chưa cọc</div>
                    </div>
                    <div class="glass-panel p-5 border-l-4 border-blue-500 hover:-translate-y-0.5 transition-transform cursor-pointer" onclick="window.location.href='/admin_v2/bookings'">
                        <div class="flex items-center justify-between">
                            <div>
                                <div class="text-xs font-bold text-gray-400 uppercase tracking-wide">Đơn Chờ Thanh Toán</div>
                                <div class="text-3xl font-bold text-blue-600 mt-1" id="stat-pending-payment">--</div>
                            </div>
                            <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                        </div>
                        <div class="text-[10px] text-blue-500 mt-2 font-medium">Đã cọc, chưa thanh toán đủ</div>
                    </div>
                    <div class="glass-panel p-5 border-l-4 border-orange-500 hover:-translate-y-0.5 transition-transform cursor-pointer" onclick="window.location.href='/admin_v2/leads'">
                        <div class="flex items-center justify-between">
                            <div>
                                <div class="text-xs font-bold text-gray-400 uppercase tracking-wide">Leads Chờ Tư Vấn</div>
                                <div class="text-3xl font-bold text-csr-orange mt-1" id="stat-pending-leads">--</div>
                            </div>
                            <div class="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                                <svg class="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                            </div>
                        </div>
                        <div class="text-[10px] text-orange-500 mt-2 font-medium">Chưa có Sale nhận đơn</div>
                    </div>
                </div>

                <!-- NHẮC NHỞ TỰ ĐỘNG -->
                <div class="glass-panel overflow-hidden">
                    <div class="p-4 border-b border-gray-200 bg-gray-50/50 flex justify-between items-center">
                        <div class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-csr-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                            <h2 class="text-sm font-bold text-gray-700 uppercase tracking-wide">Nhắc Nhở Tự Động</h2>
                        </div>
                        <span class="text-[10px] bg-csr-orange/10 text-csr-orange px-2 py-1 rounded-full font-bold" id="alertCount">0 thông báo</span>
                    </div>
                    <div id="alertsContainer" class="divide-y divide-gray-100">
                        <div class="p-6 text-center text-gray-400 text-sm">Đang rà soát hệ thống...</div>
                    </div>
                </div>

                <!-- BOTTOM: Recent + Schedules -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <!-- Recent Bookings -->
                    <div class="glass-panel overflow-hidden lg:col-span-2">
                        <div class="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
                            <h2 class="text-sm font-bold text-gray-700 uppercase tracking-wide">Đơn Hàng Gần Đây</h2>
                            <a href="/admin_v2/bookings" class="text-csr-orange text-xs font-bold hover:underline">Xem tất cả →</a>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left">
                                <thead class="bg-gray-50 text-[10px] uppercase tracking-wider text-gray-400">
                                    <tr>
                                        <th class="px-4 py-3 font-medium">Khách Hàng</th>
                                        <th class="px-4 py-3 font-medium">Tour</th>
                                        <th class="px-4 py-3 font-medium">Ngày Đi</th>
                                        <th class="px-4 py-3 font-medium">Trạng Thái</th>
                                    </tr>
                                </thead>
                                <tbody id="recentBookingsBody" class="divide-y divide-gray-100">
                                    <tr><td colspan="4" class="text-center py-6 text-gray-400 text-sm">Đang tải...</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Lịch trình sắp tới -->
                    <div class="glass-panel overflow-hidden">
                        <div class="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
                            <h2 class="text-sm font-bold text-gray-700 uppercase tracking-wide">Tour Sắp Khởi Hành</h2>
                            <a href="/admin_v2/schedules" class="text-csr-orange text-xs font-bold hover:underline">Xem →</a>
                        </div>
                        <div id="schedulesContainer" class="p-4 space-y-3">
                            <div class="text-center py-4 text-gray-400 text-sm">Đang tải...</div>
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
    const loadDashboard = async () => {
        try {
            const [bookingsRes, crmRes, schedulesRes, leadsRes, toursRes] = await Promise.all([
                fetch('/api/bookings'),
                fetch('/api/admin_customers'),
                fetch('/api/schedules'),
                fetch('/api/leads'),
                fetch('/api/tours')
            ]);

            const bookings = bookingsRes.ok ? await bookingsRes.json() : [];
            const crmData = crmRes.ok ? await crmRes.json() : { data: [] };
            const schedules = schedulesRes.ok ? await schedulesRes.json() : [];
            const leads = leadsRes.ok ? await leadsRes.json() : [];
            const tours = toursRes.ok ? await toursRes.json() : [];

            // ===================== STAT CARDS =====================
            // Helper: match status linh hoạt
            const isStatus = (s, keyword) => s && s.includes(keyword);

            const pendingDeposit = bookings.filter(b => isStatus(b.status, 'Chờ xác nhận cọc') || !b.status).length;
            document.getElementById('stat-pending-deposit').textContent = pendingDeposit;

            // Đơn chờ thanh toán = đã cọc nhưng chưa thanh toán đủ
            const pendingPayment = bookings.filter(b => {
                if (!isStatus(b.status, 'Đã cọc')) return false;
                const total = parseFloat(b.total_price) || 0;
                const deposit = parseFloat(b.deposit) || 0;
                if (total === 0) return true; // chưa xác định giá → cần xử lý
                return deposit < total;
            }).length;
            document.getElementById('stat-pending-payment').textContent = pendingPayment;

            const pendingLeads = leads.filter(l => isStatus(l.status, 'Chờ tư vấn') || !l.status).length;
            document.getElementById('stat-pending-leads').textContent = pendingLeads;

            // ===================== ALERTS =====================
            const alerts = [];
            const today = new Date();
            const currentMonth = today.getMonth(); // 0-indexed
            const currentYear = today.getFullYear();
            const nextMonth = currentMonth + 1;
            const nextMonthYear = nextMonth > 11 ? currentYear + 1 : currentYear;
            const nextMonthActual = nextMonth > 11 ? 0 : nextMonth;

            // --- ALERT 1: Tour chưa có lịch tháng tới ---
            const visibleTours = tours.filter(t => t.is_visible !== false);
            visibleTours.forEach(tour => {
                const hasNextMonth = schedules.some(s => {
                    const sDate = new Date(s.start_date);
                    return s.tour_name === tour.name &&
                        sDate.getMonth() === nextMonthActual &&
                        sDate.getFullYear() === nextMonthYear;
                });
                if (!hasNextMonth) {
                    const monthNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
                    alerts.push({
                        type: 'schedule',
                        icon: '📅',
                        color: 'text-purple-600 bg-purple-50 border-purple-200',
                        title: `Tour "${tour.name}" chưa có lịch tháng ${monthNames[nextMonthActual]}`,
                        desc: `Hãy tạo lịch trình tháng ${monthNames[nextMonthActual]}/${nextMonthYear} cho tour này.`,
                        action: '/admin_v2/schedules'
                    });
                }
            });

            // --- ALERT 2: Tour sắp khởi hành (trong 7 ngày tới) ---
            const sevenDaysLater = new Date(today);
            sevenDaysLater.setDate(today.getDate() + 7);
            schedules.forEach(s => {
                const sDate = new Date(s.start_date);
                if (sDate >= today && sDate <= sevenDaysLater) {
                    const booked = parseInt(s.booked_count) || 0;
                    const remaining = (s.slots || 0) - booked;
                    const dayDiff = Math.ceil((sDate - today) / (1000 * 60 * 60 * 24));
                    const dayLabel = dayDiff === 0 ? 'HÔM NAY' : dayDiff === 1 ? 'NGÀY MAI' : `${dayDiff} ngày nữa`;

                    alerts.push({
                        type: 'departure',
                        icon: '🚐',
                        color: dayDiff <= 2 ? 'text-red-600 bg-red-50 border-red-200' : 'text-green-600 bg-green-50 border-green-200',
                        title: `${s.tour_name} khởi hành ${dayLabel}`,
                        desc: `Ngày ${formatDateVN(sDate)} • ${booked} khách đã đăng ký • ${remaining >= 0 ? remaining : 0} chỗ trống`,
                        action: '/admin_v2/schedules'
                    });
                }
            });

            // --- ALERT 3: Nhắc sinh nhật khách trên tour sắp chạy ---
            schedules.forEach(s => {
                const sDate = new Date(s.start_date);
                if (sDate >= today && sDate <= sevenDaysLater) {
                    // Tìm bookings thuộc tour này
                    const tourBookings = bookings.filter(b => {
                        if (!b.dob || !b.date) return false;
                        // Match tour name loosely
                        const tourMatch = b.tour && (b.tour === s.tour_name || s.tour_name.includes(b.tour) || b.tour.includes(s.tour_name));
                        if (!tourMatch) return false;
                        // Match date
                        const bDateStr = b.date;
                        const sDateStr = formatDateVN(sDate);
                        return bDateStr.includes(sDateStr.split('/')[0] + '/' + sDateStr.split('/')[1]);
                    });

                    tourBookings.forEach(b => {
                        if (!b.dob) return;
                        // Parse dob - could be "YYYY-MM-DD" or "DD/MM/YYYY" or other formats
                        let dobMonth, dobDay;
                        if (b.dob.includes('-')) {
                            const parts = b.dob.split('-');
                            dobMonth = parseInt(parts[1]);
                            dobDay = parseInt(parts[2]);
                        } else if (b.dob.includes('/')) {
                            const parts = b.dob.split('/');
                            dobDay = parseInt(parts[0]);
                            dobMonth = parseInt(parts[1]);
                        } else {
                            return;
                        }

                        // So sánh: sinh nhật trong tháng hiện tại
                        if (dobMonth === today.getMonth() + 1) {
                            alerts.push({
                                type: 'birthday',
                                icon: '🎂',
                                color: 'text-pink-600 bg-pink-50 border-pink-200',
                                title: `${b.name} có sinh nhật tháng ${dobMonth}!`,
                                desc: `Sinh ngày ${dobDay}/${dobMonth} • Tour ${s.tour_name} ngày ${formatDateVN(sDate)}`,
                                action: '/admin_v2/bookings'
                            });
                        }
                    });
                }
            });

            // Sort alerts: departure (sắp khởi hành) pin lên đầu, sort theo urgency
            const typePriority = { departure: 0, birthday: 1, schedule: 2 };
            alerts.sort((a, b) => {
                const pA = typePriority[a.type] ?? 99;
                const pB = typePriority[b.type] ?? 99;
                return pA - pB;
            });

            // Render alerts
            const alertContainer = document.getElementById('alertsContainer');
            const alertCountEl = document.getElementById('alertCount');
            alertCountEl.textContent = `${alerts.length} thông báo`;

            if (alerts.length === 0) {
                alertContainer.innerHTML = `
                    <div class="p-6 text-center">
                        <div class="text-3xl mb-2">✅</div>
                        <div class="text-gray-500 text-sm font-medium">Tuyệt vời! Không có công việc cần xử lý.</div>
                    </div>`;
            } else {
                alertContainer.innerHTML = alerts.map(a => `
                    <div class="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors cursor-pointer" onclick="window.location.href='${a.action}'">
                        <div class="w-10 h-10 rounded-xl ${a.color} border flex items-center justify-center text-lg shrink-0">${a.icon}</div>
                        <div class="min-w-0 flex-1">
                            <div class="text-sm font-bold text-gray-800">${a.title}</div>
                            <div class="text-xs text-gray-500 mt-0.5">${a.desc}</div>
                        </div>
                        <svg class="w-4 h-4 text-gray-300 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                `).join('');
            }

            // Subtitle
            const totalTasks = pendingDeposit + pendingPayment + pendingLeads;
            document.getElementById('dashboardSubtitle').textContent = totalTasks > 0
                ? `Có ${totalTasks} công việc cần xử lý và ${alerts.length} nhắc nhở.`
                : 'Không có công việc nào cần xử lý. 🎉';

            // ===================== RECENT BOOKINGS =====================
            const recentBody = document.getElementById('recentBookingsBody');
            const recent5 = bookings.slice(0, 5);
            if (recent5.length === 0) {
                recentBody.innerHTML = '<tr><td colspan="4" class="text-center py-6 text-gray-400 text-sm">Chưa có đơn hàng nào.</td></tr>';
            } else {
                recentBody.innerHTML = recent5.map(b => {
                    const getStatusClass = (s) => {
                        if (!s) return 'bg-gray-100 text-gray-500';
                        if (s.includes('Đã cọc')) return 'bg-green-100 text-green-600';
                        if (s.includes('Chờ xác nhận')) return 'bg-yellow-100 text-yellow-600';
                        if (s.includes('Hoàn')) return 'bg-blue-100 text-blue-600';
                        if (s.includes('hủy') || s.includes('Hủy')) return 'bg-red-100 text-red-500';
                        return 'bg-gray-100 text-gray-500';
                    };
                    const statusClass = getStatusClass(b.status);
                    const initial = (b.name || '?')[0].toUpperCase();
                    const colors = ['bg-orange-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500'];
                    const color = colors[Math.abs(initial.charCodeAt(0)) % colors.length];

                    return `
                        <tr class="hover:bg-gray-50 transition-colors">
                            <td class="px-4 py-3">
                                <div class="flex items-center gap-2">
                                    <div class="w-7 h-7 rounded-full ${color} flex items-center justify-center text-white text-[10px] font-bold shrink-0">${initial}</div>
                                    <div class="min-w-0">
                                        <div class="text-sm font-medium text-gray-900 truncate">${b.name || '-'}</div>
                                        <div class="text-[10px] text-gray-400">${b.phone || ''}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-4 py-3 text-sm text-gray-600 truncate max-w-[150px]">${b.tour || '-'}</td>
                            <td class="px-4 py-3 text-sm text-gray-500">${b.date || '-'}</td>
                            <td class="px-4 py-3">
                                <span class="${statusClass} text-[10px] px-2 py-0.5 rounded-full font-bold">${b.status || 'Mới'}</span>
                            </td>
                        </tr>
                    `;
                }).join('');
            }

            // ===================== UPCOMING SCHEDULES =====================
            const schedulesContainer = document.getElementById('schedulesContainer');
            const upcoming = schedules
                .filter(s => new Date(s.start_date) >= today)
                .sort((a, b) => new Date(a.start_date) - new Date(b.start_date))
                .slice(0, 5);

            if (upcoming.length === 0) {
                schedulesContainer.innerHTML = '<div class="text-center py-4 text-gray-400 text-sm">Không có lịch trình sắp tới.</div>';
            } else {
                schedulesContainer.innerHTML = upcoming.map(s => {
                    const booked = parseInt(s.booked_count) || 0;
                    const remaining = (s.slots || 0) - booked;
                    const pct = s.slots ? Math.round((booked / s.slots) * 100) : 0;
                    const barColor = pct >= 80 ? 'bg-red-500' : pct >= 50 ? 'bg-yellow-500' : 'bg-green-500';
                    const sDate = new Date(s.start_date);
                    const dayDiff = Math.ceil((sDate - today) / (1000 * 60 * 60 * 24));
                    const urgency = dayDiff <= 3 ? '<span class="text-[9px] bg-red-100 text-red-500 px-1.5 py-0.5 rounded-full font-bold ml-2">SẮP ĐI</span>' : '';

                    return `
                        <div class="p-2 rounded-lg hover:bg-gray-50 transition-colors">
                            <div class="flex justify-between items-center mb-1">
                                <span class="text-sm font-medium text-gray-800 truncate">${s.tour_name || '-'}${urgency}</span>
                                <span class="text-[10px] text-gray-400 shrink-0 ml-2">${formatDateVN(sDate)}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                    <div class="h-full ${barColor} rounded-full" style="width: ${pct}%"></div>
                                </div>
                                <span class="text-[10px] font-bold text-gray-500 shrink-0">${booked}/${s.slots || '?'}</span>
                            </div>
                        </div>
                    `;
                }).join('');
            }

        } catch (err) {
            console.error('Dashboard load error:', err);
        }
    };

    loadDashboard();
};

function formatDateVN(date) {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
}
