/**
 * BottomNav.js
 * Thanh điều hướng dưới cùng dành cho giao diện mobile (PWA)
 * Chỉ hiển thị trên màn hình nhỏ (< md breakpoint)
 */

export const BottomNav = () => {
    const currentPath = window.location.pathname;

    const navItems = [
        {
            path: '/admin/',
            label: 'Tổng Quan',
            icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>`,
        },
        {
            path: '/admin/bookings',
            label: 'Đơn Hàng',
            icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>`,
        },
        {
            path: '/admin/schedules',
            label: 'Lịch Trình',
            icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>`,
        },
        {
            path: '/admin/guides',
            label: 'Nhân Sự',
            icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>`,
        },
        {
            path: '/admin/more',
            label: 'Thêm',
            isMore: true,
            icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>`,
        },
    ];

    const isActive = (itemPath, isMore) => {
        if (isMore) {
            // "Thêm" is active when on pages NOT in the main nav
            const mainPaths = ['/admin/', '/admin/bookings', '/admin/schedules', '/admin/guides'];
            return !mainPaths.some(p => currentPath === p || currentPath.startsWith(p + '/'));
        }
        if (itemPath === '/admin/') return currentPath === '/admin/' || currentPath === '/admin';
        return currentPath === itemPath || currentPath.startsWith(itemPath);
    };

    const items = navItems.map(item => {
        const active = isActive(item.path, item.isMore);
        return `
        <a href="${item.isMore ? '#' : item.path}" 
           ${item.isMore ? 'id="bottomNavMore"' : 'data-link'}
           class="flex flex-col items-center justify-center flex-1 py-2 px-1 transition-all duration-200 relative group bottom-nav-item ${active ? 'bottom-nav-active' : ''}">
            <div class="relative">
                <div class="transition-all duration-200 ${active ? 'text-csr-orange scale-110' : 'text-gray-400 group-hover:text-gray-600 group-hover:scale-105'}">
                    ${item.icon}
                </div>
                ${active ? '<span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-csr-orange rounded-full"></span>' : ''}
            </div>
            <span class="text-[10px] font-semibold mt-1 transition-colors duration-200 ${active ? 'text-csr-orange' : 'text-gray-400 group-hover:text-gray-600'}">${item.label}</span>
        </a>`;
    }).join('');

    return `
    <!-- Bottom Navigation (Mobile Only) -->
    <nav id="bottomNavBar" class="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 flex items-stretch shadow-[0_-4px_20px_rgba(0,0,0,0.08)]" style="padding-bottom: env(safe-area-inset-bottom);">
        ${items}
    </nav>

    <!-- More Menu Drawer (Mobile) -->
    <div id="moreMenuBackdrop" class="fixed inset-0 bg-gray-900/50 z-[60] hidden md:hidden opacity-0 transition-opacity duration-300"></div>
    <div id="moreMenuDrawer" class="fixed bottom-0 left-0 right-0 z-[70] md:hidden bg-white rounded-t-3xl shadow-2xl transform translate-y-full transition-transform duration-300 ease-out" style="padding-bottom: env(safe-area-inset-bottom);">
        <div class="flex items-center justify-between p-4 border-b border-gray-100">
            <span class="text-base font-bold text-gray-800">Menu</span>
            <button id="closeMoreMenu" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>

        <div class="p-4 grid grid-cols-3 gap-3">
            ${[
                { path: '/admin/customers', icon: '👥', label: 'Khách Hàng' },
                { path: '/admin/tours', icon: '🗺️', label: 'Quản Lý Tour' },
                { path: '/admin/roster', icon: '📋', label: 'Danh Sách Đoàn' },
                { path: '/admin/reports', icon: '📊', label: 'Báo Cáo' },
                { path: '/admin/reviews', icon: '⭐', label: 'Đánh Giá' },
                { path: '/admin/blog', icon: '✍️', label: 'Blog' },
                { path: '/admin/tour-settings', icon: '⚙️', label: 'Thiết Lập' },
                { path: '/admin/profile', icon: '👤', label: 'Hồ Sơ' },
            ].map(item => `
                <a href="${item.path}" data-link class="more-menu-item flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-50 hover:bg-orange-50 hover:border-csr-orange border border-transparent transition-all duration-200 gap-2">
                    <span class="text-2xl">${item.icon}</span>
                    <span class="text-[11px] font-semibold text-gray-600 text-center leading-tight">${item.label}</span>
                </a>
            `).join('')}
        </div>

        <!-- Logout button in drawer -->
        <div class="px-4 pb-2">
            <button onclick="localStorage.removeItem('csr_admin_token'); localStorage.removeItem('csr_user'); window.location.href='/admin/login'" 
                class="w-full flex items-center justify-center gap-2 p-3 rounded-2xl bg-red-50 text-red-500 font-semibold text-sm transition-colors hover:bg-red-100">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                Đăng Xuất
            </button>
        </div>
    </div>
    `;
};

/**
 * Khởi tạo logic cho BottomNav (More drawer, etc.)
 * Gọi sau khi render DOM
 */
export const initBottomNav = () => {
    const moreBtn = document.getElementById('bottomNavMore');
    const backdrop = document.getElementById('moreMenuBackdrop');
    const drawer = document.getElementById('moreMenuDrawer');
    const closeBtn = document.getElementById('closeMoreMenu');

    if (!moreBtn || !drawer) return;

    const openDrawer = () => {
        backdrop.classList.remove('hidden', 'opacity-0');
        backdrop.classList.add('opacity-100');
        drawer.classList.remove('translate-y-full');
        document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
        backdrop.classList.remove('opacity-100');
        backdrop.classList.add('opacity-0');
        drawer.classList.add('translate-y-full');
        document.body.style.overflow = '';
        setTimeout(() => backdrop.classList.add('hidden'), 300);
    };

    moreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openDrawer();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    // Close drawer when a link is tapped
    drawer.querySelectorAll('[data-link]').forEach(link => {
        link.addEventListener('click', closeDrawer);
    });
};
