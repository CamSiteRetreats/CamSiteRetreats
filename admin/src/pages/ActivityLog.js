import { Sidebar } from '../components/Sidebar.js';
import { Header } from '../components/Header.js';

export const render = () => {
    let user = { role: 'sale', fullName: 'Guest' };
    try { const s = localStorage.getItem('csr_user'); if (s) user = JSON.parse(s); } catch (e) { }

    if (user.role !== 'admin') {
        return `<div class="flex h-screen items-center justify-center bg-gray-50">
            <div class="text-center">
                <h1 class="text-4xl font-bold text-gray-900 mb-4">403</h1>
                <p class="text-gray-500 mb-6">Bạn không có quyền truy cập trang này!</p>
                <a href="/tours" data-link class="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-csr-orange transition-colors">Quay lại</a>
            </div>
        </div>`;
    }

    return `
    <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${Sidebar()}
        <div class="flex flex-col flex-1 w-full overflow-hidden">
            ${Header()}
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
                <div class="max-w-7xl mx-auto space-y-6">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <div>
                            <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Lịch Sử Hoạt Động</h1>
                            <p class="text-gray-500 text-sm">Theo dõi các thay đổi dữ liệu trong hệ thống.</p>
                        </div>
                    </div>

                    <!-- Bộ lọc -->
                    <div class="glass-panel p-4 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-wrap gap-3">
                        <select id="filter-action" class="text-sm border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-csr-orange/30">
                            <option value="">Tất cả hành động</option>
                            <option value="CREATE">Tạo mới</option>
                            <option value="UPDATE">Cập nhật</option>
                            <option value="DELETE">Xóa</option>
                        </select>
                        <select id="filter-type" class="text-sm border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-csr-orange/30">
                            <option value="">Tất cả đối tượng</option>
                            <option value="booking">Booking</option>
                            <option value="customer">Khách hàng</option>
                            <option value="tour">Tour</option>
                            <option value="schedule">Lịch trình</option>
                        </select>
                        <input type="date" id="filter-date-from" class="text-sm border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-csr-orange/30" placeholder="Từ ngày">
                        <input type="date" id="filter-date-to" class="text-sm border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-csr-orange/30" placeholder="Đến ngày">
                        <button id="btn-filter" class="bg-gray-900 text-white font-semibold py-2 px-5 rounded-xl hover:bg-csr-orange transition-all text-sm">Lọc</button>
                        <button id="btn-reset" class="border border-gray-200 text-gray-600 font-semibold py-2 px-4 rounded-xl hover:bg-gray-100 transition-all text-sm">Reset</button>
                    </div>

                    <!-- Bảng log -->
                    <div class="glass-panel overflow-hidden border border-gray-100 shadow-sm rounded-2xl bg-white">
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="bg-gray-50/80 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-bold">
                                        <th class="p-4">Thời gian</th>
                                        <th class="p-4">Người thực hiện</th>
                                        <th class="p-4 text-center">Hành động</th>
                                        <th class="p-4">Đối tượng</th>
                                        <th class="p-4">Tên / Mô tả</th>
                                    </tr>
                                </thead>
                                <tbody id="activity-log-body" class="divide-y divide-gray-100 text-sm">
                                    <tr><td colspan="5" class="p-8 text-center text-gray-400">Đang tải...</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div id="log-pagination" class="p-4 flex justify-between items-center border-t border-gray-100 text-sm text-gray-500"></div>
                    </div>
                </div>
            </main>
        </div>
    </div>`;
};

export const afterRender = () => {
    let currentOffset = 0;
    const limit = 50;

    const actionColors = {
        'CREATE': 'bg-green-100 text-green-700',
        'UPDATE': 'bg-blue-100 text-blue-700',
        'DELETE': 'bg-red-100 text-red-700',
    };
    const actionLabels = { 'CREATE': 'Tạo mới', 'UPDATE': 'Cập nhật', 'DELETE': 'Xóa' };

    const formatVNDate = (iso) => {
        if (!iso) return '—';
        const d = new Date(iso);
        return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
    };

    const loadLogs = async (offset = 0) => {
        const action = document.getElementById('filter-action')?.value || '';
        const type = document.getElementById('filter-type')?.value || '';
        const dateFrom = document.getElementById('filter-date-from')?.value || '';
        const dateTo = document.getElementById('filter-date-to')?.value || '';

        let url = `/api/activity-logs?limit=${limit}&offset=${offset}`;
        if (action) url += `&action=${action}`;
        if (type) url += `&target_type=${type}`;
        if (dateFrom) url += `&date_from=${dateFrom}`;
        if (dateTo) url += `&date_to=${dateTo}`;

        const tbody = document.getElementById('activity-log-body');
        const pagination = document.getElementById('log-pagination');
        if (!tbody) return;

        tbody.innerHTML = `<tr><td colspan="5" class="p-8 text-center text-gray-400">Đang tải...</td></tr>`;

        try {
            const res = await fetch(url);
            const { logs, total } = await res.json();

            if (!logs || logs.length === 0) {
                tbody.innerHTML = `<tr><td colspan="5" class="p-8 text-center text-gray-400">Không có dữ liệu.</td></tr>`;
                if (pagination) pagination.innerHTML = '';
                return;
            }

            tbody.innerHTML = logs.map(log => `
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="p-4 text-gray-500 whitespace-nowrap text-xs">${formatVNDate(log.created_at)}</td>
                    <td class="p-4">
                        <span class="font-semibold text-gray-800">${log.user_name || '—'}</span>
                    </td>
                    <td class="p-4 text-center">
                        <span class="inline-block px-2.5 py-1 rounded-full text-xs font-bold ${actionColors[log.action] || 'bg-gray-100 text-gray-600'}">
                            ${actionLabels[log.action] || log.action}
                        </span>
                    </td>
                    <td class="p-4">
                        <span class="capitalize text-gray-600 text-xs font-semibold bg-gray-100 px-2 py-1 rounded-md">${log.target_type}</span>
                    </td>
                    <td class="p-4 text-gray-700 max-w-xs truncate">${log.target_name || log.target_id || '—'}</td>
                </tr>
            `).join('');

            // Pagination
            const totalPages = Math.ceil(total / limit);
            const currentPage = Math.floor(offset / limit) + 1;
            if (pagination) {
                pagination.innerHTML = `
                    <span>Hiển thị ${offset + 1}–${Math.min(offset + limit, total)} / ${total} bản ghi</span>
                    <div class="flex gap-2">
                        <button onclick="window._logChangePage(${offset - limit})" ${offset <= 0 ? 'disabled' : ''} class="px-3 py-1 rounded-lg border text-xs ${offset <= 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100'}">← Trước</button>
                        <span class="px-3 py-1 text-xs">Trang ${currentPage}/${totalPages}</span>
                        <button onclick="window._logChangePage(${offset + limit})" ${offset + limit >= total ? 'disabled' : ''} class="px-3 py-1 rounded-lg border text-xs ${offset + limit >= total ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100'}">Sau →</button>
                    </div>`;
            }
        } catch (e) {
            tbody.innerHTML = `<tr><td colspan="5" class="p-8 text-center text-red-400">Lỗi tải dữ liệu.</td></tr>`;
        }
    };

    window._logChangePage = (offset) => { currentOffset = Math.max(0, offset); loadLogs(currentOffset); };

    document.getElementById('btn-filter')?.addEventListener('click', () => { currentOffset = 0; loadLogs(0); });
    document.getElementById('btn-reset')?.addEventListener('click', () => {
        document.getElementById('filter-action').value = '';
        document.getElementById('filter-type').value = '';
        document.getElementById('filter-date-from').value = '';
        document.getElementById('filter-date-to').value = '';
        currentOffset = 0; loadLogs(0);
    });

    loadLogs(0);
};
