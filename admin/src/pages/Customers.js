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
                          <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Khách Hàng Thân Thiết</h1>
                          <p class="text-gray-500 text-sm">Danh sách khách hàng đã cọc hoặc hoàn thành tour — tự động đồng bộ từ Đơn Hàng.</p>
                      </div>
                  </div>

                  <!-- Statistics -->
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <div class="glass-panel p-5 border-l-4 border-csr-orange">
                          <div class="text-xs font-bold text-gray-400 uppercase tracking-wide">Tổng Khách Hàng</div>
                          <div class="text-3xl font-bold text-gray-900 mt-1" id="stat-total">--</div>
                      </div>
                      <div class="glass-panel p-5 border-l-4 border-green-500">
                          <div class="text-xs font-bold text-gray-400 uppercase tracking-wide">Khách Quay Lại (≥2 Tour)</div>
                          <div class="text-3xl font-bold text-green-600 mt-1" id="stat-returning">--</div>
                      </div>
                      <div class="glass-panel p-5 border-l-4 border-blue-500">
                          <div class="text-xs font-bold text-gray-400 uppercase tracking-wide">Đủ ĐK Giảm Giá</div>
                          <div class="text-3xl font-bold text-blue-600 mt-1" id="stat-discount">--</div>
                      </div>
                  </div>

                  <!-- Search -->
                  <div class="glass-panel overflow-hidden">
                      <div class="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
                          <div class="relative w-80">
                              <svg class="w-4 h-4 absolute left-3 top-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                              <input type="text" id="crmSearchInput" placeholder="Tìm theo Mã #CSR, SĐT, Họ tên..." class="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm text-gray-900 focus:border-csr-orange focus:outline-none transition-colors">
                          </div>
                          <div class="text-sm text-gray-400" id="resultCount"></div>
                      </div>
                      <div class="overflow-x-auto">
                          <table class="w-full text-left border-collapse">
                              <thead>
                                  <tr class="bg-gray-50 border-b border-gray-200 text-[10px] uppercase tracking-wider text-gray-400">
                                      <th class="p-4 font-medium">Mã KH</th>
                                      <th class="p-4 font-medium">Khách Hàng</th>
                                      <th class="p-4 font-medium">Tour Gần Nhất</th>
                                      <th class="p-4 font-medium text-center">Số Tour</th>
                                      <th class="p-4 font-medium">Đề Xuất</th>
                                      <th class="p-4 font-medium text-center">Thao Tác</th>
                                  </tr>
                              </thead>
                              <tbody id="crmTableBody" class="divide-y divide-gray-100">
                              </tbody>
                          </table>
                      </div>
                  </div>
               </div>
          </main>
        </div>
      </div>

      <!-- DETAIL MODAL -->
      <div id="customerDetailModal" class="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-200">
          <div class="bg-white border border-gray-200 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl scale-95 transition-transform duration-300" id="customerDetailContent">
              <div class="sticky top-0 bg-white/95 backdrop-blur z-10 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 class="text-lg font-bold text-gray-900">Chi Tiết Khách Hàng</h2>
                  <button type="button" class="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors" onclick="window.closeCustomerDetail()">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
              </div>
              <div class="p-6" id="customerDetailBody">
              </div>
          </div>
      </div>
    `;
};

export const afterRender = () => {
    const tableBody = document.getElementById('crmTableBody');
    const searchInput = document.getElementById('crmSearchInput');
    let allCustomers = [];
    let allBookings = [];

    // --- LOAD DATA ---
    const loadData = async () => {
        tableBody.innerHTML = '<tr><td colspan="6" class="text-center py-8 text-gray-400">Đang tải danh sách khách hàng...</td></tr>';
        try {
            const [crmRes, bookingsRes] = await Promise.all([
                fetch('/api/admin_customers'),
                fetch('/api/bookings')
            ]);
            const crmJson = crmRes.ok ? await crmRes.json() : { data: [] };
            allBookings = bookingsRes.ok ? await bookingsRes.json() : [];
            allCustomers = (crmJson.data || []).map(c => enrichCustomer(c));
            renderTable(allCustomers);
            updateStats(allCustomers);
        } catch (err) {
            console.error('Error loading CRM:', err);
            tableBody.innerHTML = '<tr><td colspan="6" class="text-center py-4 text-red-500">Lỗi kết nối server.</td></tr>';
        }
    };

    // Enrich với booking data
    const enrichCustomer = (c) => {
        const customerBookings = allBookings
            .filter(b => b.phone === c.phone && b.status && !b.status.includes('hủy'))
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        c._bookings = customerBookings;
        c._tourCount = customerBookings.length;
        c._latestTour = customerBookings.length > 0 ? customerBookings[0].tour : null;
        c._latestDate = customerBookings.length > 0 ? customerBookings[0].date : null;

        // Đề xuất giảm giá
        if (c._tourCount >= 5) {
            c._discount = { pct: 7, label: 'Giảm 7%', color: 'bg-purple-100 text-purple-600 border-purple-200' };
        } else if (c._tourCount >= 2) {
            c._discount = { pct: 5, label: 'Giảm 5%', color: 'bg-green-100 text-green-600 border-green-200' };
        } else {
            c._discount = null;
        }

        return c;
    };

    // --- RENDER TABLE ---
    const renderTable = (data) => {
        const countEl = document.getElementById('resultCount');
        if (countEl) countEl.textContent = `${data.length} khách hàng`;

        if (data.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="6" class="text-center py-8 text-gray-400">Không tìm thấy khách hàng nào.</td></tr>';
            return;
        }

        let userRole = '';
        try {
            const userStr = localStorage.getItem('csr_user');
            if (userStr) {
                userRole = JSON.parse(userStr).role || '';
            }
        } catch (e) { }

        tableBody.innerHTML = data.map((c, idx) => {
            const initial = (c.full_name || '?')[0].toUpperCase();
            const colors = ['bg-orange-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 'bg-teal-500'];
            const bgColor = colors[Math.abs(initial.charCodeAt(0)) % colors.length];

            const tourBadge = c._latestTour
                ? `<span class="text-sm text-gray-700">${c._latestTour}</span><div class="text-[10px] text-gray-400 mt-0.5">${c._latestDate || ''}</div>`
                : '<span class="text-gray-300 text-xs">Chưa có</span>';

            const discountBadge = c._discount
                ? `<span class="text-xs px-2.5 py-1 rounded-full font-bold border ${c._discount.color}">${c._discount.label}</span>`
                : '<span class="text-gray-300 text-xs">—</span>';

            const tourCountBadge = c._tourCount > 0
                ? `<span class="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${c._tourCount >= 5 ? 'bg-purple-100 text-purple-600' : c._tourCount >= 2 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}">${c._tourCount}</span>`
                : '<span class="text-gray-300">0</span>';

            return `
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="p-4">
                        <span class="font-mono text-csr-orange bg-csr-orange/10 px-2 py-1 rounded text-xs font-bold cursor-pointer hover:bg-csr-orange/20 transition-colors" title="Click để copy" onclick="navigator.clipboard.writeText('${c.csr_code || ''}'); this.textContent='Đã copy!'; setTimeout(() => this.textContent='${c.csr_code || '-'}', 1500)">${c.csr_code || '-'}</span>
                    </td>
                    <td class="p-4">
                        <div class="flex items-center gap-3">
                            <div class="w-9 h-9 rounded-full ${bgColor} flex items-center justify-center text-white text-sm font-bold shrink-0">${initial}</div>
                            <div>
                                <div class="font-medium text-gray-900 text-sm">${c.full_name || '-'}</div>
                                <div class="text-[11px] text-gray-400">${c.phone || '-'}</div>
                            </div>
                        </div>
                    </td>
                    <td class="p-4">${tourBadge}</td>
                    <td class="p-4 text-center">${tourCountBadge}</td>
                    <td class="p-4">${discountBadge}</td>
                    <td class="p-4 text-center">
                        <div class="flex items-center justify-center gap-2">
                             <button class="detail-btn text-csr-orange hover:text-orange-700 hover:bg-csr-orange/10 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors" data-idx="${idx}">
                                 Xem Chi Tiết
                             </button>
                             ${userRole === 'admin' ? `
                                 <button class="delete-customer-btn text-red-500 hover:text-white hover:bg-red-500 px-2 py-1.5 rounded-lg text-xs font-bold transition-colors border border-transparent hover:border-red-600 shadow-sm" data-id="${c.id}" title="Xoá Khách Hàng Này">
                                     <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                 </button>
                             ` : ''}
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    };

    // --- UPDATE STATS ---
    const updateStats = (data) => {
        document.getElementById('stat-total').textContent = data.length;
        document.getElementById('stat-returning').textContent = data.filter(c => c._tourCount >= 2).length;
        document.getElementById('stat-discount').textContent = data.filter(c => c._discount).length;
    };

    // --- SEARCH ---
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase().trim();
            if (!keyword) { renderTable(allCustomers); return; }
            const filtered = allCustomers.filter(c =>
                (c.csr_code && c.csr_code.toLowerCase().includes(keyword)) ||
                (c.full_name && c.full_name.toLowerCase().includes(keyword)) ||
                (c.phone && c.phone.includes(keyword))
            );
            renderTable(filtered);
        });
    }

    // --- DETAIL MODAL ---
    const modal = document.getElementById('customerDetailModal');
    const modalContent = document.getElementById('customerDetailContent');
    const detailBody = document.getElementById('customerDetailBody');

    window.closeCustomerDetail = () => {
        modal.classList.add('opacity-0');
        modalContent.classList.add('scale-95');
        setTimeout(() => modal.classList.add('hidden'), 200);
    };

    const openDetail = (c) => {
        const formatDate = (d) => {
            if (!d) return '-';
            const date = new Date(d);
            if (isNaN(date)) return d;
            return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
        };

        // Lấy thêm thông tin từ booking gần nhất
        const lb = c._bookings[0] || {};

        const infoRows = [
            { label: 'Mã Khách Hàng', value: c.csr_code, color: 'text-csr-orange font-mono font-bold' },
            { label: 'Họ và Tên', value: c.full_name },
            { label: 'Số Điện Thoại', value: c.phone },
            { label: 'CCCD / CMND', value: c.cccd || lb.id_card || '' },
            { label: 'Ngày Sinh', value: c.dob ? formatDate(c.dob) : (lb.dob || '') },
            { label: 'Giới Tính', value: c.gender || lb.gender || '' },
            { label: 'Tên In Huy Chương', value: lb.medal_name || '(Dùng tên thật)', color: 'text-csr-orange font-bold text-sm' },
            { label: 'Địa Chỉ', value: lb.address || '' },
            { label: 'Chế Độ Ăn', value: c.dietary || lb.diet || '' },
            { label: 'Dị Ứng / Y Tế', value: c.medical_notes || lb.allergy || '' },
            { label: 'Gậy Trekking', value: lb.trekking_pole || '' },
            { label: 'Ghi Chú Đặc Biệt', value: lb.special || '' },
        ].filter(r => r.value);

        const discountHtml = c._discount
            ? `<div class="p-4 rounded-xl ${c._discount.color} border text-center">
                  <div class="text-2xl font-black">${c._discount.label}</div>
                  <div class="text-xs mt-1 opacity-80">Áp dụng cho tour tiếp theo (Đã tham gia ${c._tourCount} tour)</div>
               </div>`
            : `<div class="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center text-gray-400 text-sm">
                  Chưa đủ điều kiện giảm giá (cần tham gia ≥ 2 tour)
               </div>`;

        const tourHistoryHtml = c._bookings.length > 0
            ? c._bookings.map((b, i) => {
                const statusMap = (s) => {
                    if (!s) return ['bg-gray-100 text-gray-500', 'Mới'];
                    if (s.includes('Đã cọc')) return ['bg-green-100 text-green-600', s];
                    if (s.includes('Hoàn')) return ['bg-blue-100 text-blue-600', s];
                    if (s.includes('Chờ')) return ['bg-yellow-100 text-yellow-600', s];
                    return ['bg-gray-100 text-gray-500', s];
                };
                const [sClass, sLabel] = statusMap(b.status);
                return `
                    <div class="flex items-center gap-4 p-3 rounded-lg ${i === 0 ? 'bg-csr-orange/5 border border-csr-orange/20' : 'hover:bg-gray-50'}">
                        <div class="w-8 h-8 rounded-full ${i === 0 ? 'bg-csr-orange' : 'bg-gray-200'} flex items-center justify-center text-white text-xs font-bold shrink-0">${i + 1}</div>
                        <div class="flex-1 min-w-0">
                            <div class="font-medium text-sm text-gray-800 truncate">${b.tour || '-'}</div>
                            <div class="text-[10px] text-gray-400">${b.date || '-'} ${b.medal_name ? `• <span class="text-csr-orange font-medium">Huy chương: ${b.medal_name}</span>` : ''}</div>
                        </div>
                        <span class="${sClass} text-[10px] px-2 py-0.5 rounded-full font-bold shrink-0">${sLabel}</span>
                    </div>
                `;
            }).join('')
            : '<div class="text-center py-4 text-gray-400 text-sm">Chưa có lịch sử tour.</div>';

        detailBody.innerHTML = `
            <!-- Header Card -->
            <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 rounded-2xl bg-csr-orange flex items-center justify-center text-white text-2xl font-bold">${(c.full_name || '?')[0].toUpperCase()}</div>
                <div>
                    <h3 class="text-xl font-bold text-gray-900">${c.full_name || '-'}</h3>
                    <div class="text-sm text-gray-500">${c.phone || '-'} • <span class="text-csr-orange font-mono font-bold">${c.csr_code || '-'}</span></div>
                    <div class="text-[11px] text-gray-400 mt-0.5">Tham gia: ${formatDate(c.created_at)} • ${c._tourCount} tour</div>
                </div>
            </div>

            <!-- Đề xuất giảm giá -->
            <div class="mb-6">${discountHtml}</div>

            <!-- Thông tin chi tiết -->
            <div class="mb-6">
                <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Thông Tin Cá Nhân</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${infoRows.map(r => `
                        <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span class="text-xs text-gray-500 font-medium">${r.label}</span>
                            <span class="text-sm font-medium ${r.color || 'text-gray-900'}">${r.value || '-'}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Lịch sử Tour -->
            <div>
                <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Lịch Sử Tour (${c._tourCount})</h4>
                <div class="space-y-2">${tourHistoryHtml}</div>
            </div>
        `;

        modal.classList.remove('hidden');
        requestAnimationFrame(() => {
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
        });
    };

    // Event Delegation: Detail button & Delete button
    if (tableBody) {
        tableBody.addEventListener('click', async (e) => {
            const btnDetail = e.target.closest('.detail-btn');
            if (btnDetail) {
                const idx = parseInt(btnDetail.dataset.idx);
                if (allCustomers[idx]) openDetail(allCustomers[idx]);
            }

            const btnDelete = e.target.closest('.delete-customer-btn');
            if (btnDelete) {
                const customerId = btnDelete.dataset.id;

                // Confirm 1: Hỏi xóa khách
                const isConfirmed = confirm("⚠️ CẢNH BÁO: Bạn có chắc chắn muốn xóa khách hàng thân thiết này khỏi danh sách CRM không?");
                if (isConfirmed) {
                    // Confirm 2: Hỏi có xóa tất cả đơn hàng không? 
                    // Chữ "Cancel/No" = False = Chỉ xóa CRM. Chữ "OK/Yes" = True = Xóa cả Booking.
                    const deleteBookings = confirm("🤔 CÂU HỎI PHỤ: Bạn có muốn XÓA LUÔN tất cả lịch sử Đơn Hàng / Booking của khách này không?\n\n- Chọn OK: Xóa khách CRM + Xóa toàn bộ Đơn.\n- Chọn Cancel: Chỉ xóa khách khỏi danh sách CRM.");

                    try {
                        btnDelete.innerHTML = `<svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`;
                        const response = await fetch(`/api/admin_customers?id=${customerId}&delete_bookings=${deleteBookings}`, {
                            method: 'DELETE'
                        });
                        const data = await response.json();
                        if (data.success) {
                            alert("✅ Đã xóa khách hàng thành công!");
                            loadData(); // Tải lại danh sách
                        } else {
                            alert("❌ Lỗi: " + data.message);
                            btnDelete.innerHTML = 'Lỗi';
                        }
                    } catch (err) {
                        console.error(err);
                        alert("Lỗi kết nối máy chủ khi xóa!");
                        loadData(); // Force Reload Button Return
                    }
                }
            }
        });
    }

    // Close modal on backdrop click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) window.closeCustomerDetail();
        });
    }

    // --- INIT ---
    loadData();
};
