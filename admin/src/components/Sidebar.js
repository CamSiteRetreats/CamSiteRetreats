export const Sidebar = () => {
    // Current route to highlight active menu
    const currentPath = window.location.pathname;

    let user = { role: 'sale' };
    try {
        const stored = localStorage.getItem('csr_user');
        if (stored) user = JSON.parse(stored);
    } catch (e) { }

    const navItems = [
        { path: '/admin/', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>', label: 'Dashboard' },
        { path: '/admin/bookings', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>', label: 'Đơn Hàng (Sale)' },
        { path: '/admin/customers', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>', label: 'Khách Hàng Thân Thiết' },
        { path: '/admin/tours', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>', label: 'Quản Lý Tour' },
        { path: '/admin/tour-settings', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/>', label: 'Thiết lập Đăng ký' },
        { path: '/admin/schedules', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>', label: 'Lịch Trình' },
        { path: '/admin/guides', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>', label: 'Nhân Sự (HDV)' },
        { path: '/admin/playbook', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z"/>', label: '📖 Cẩm Nang' },
        { path: '/admin/reports', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>', label: 'Báo Cáo (Report)' },
        { path: '/admin/reviews', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>', label: 'Đánh Giá' },
        { path: '/admin/blog', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>', label: 'Blog' },
    ];

    if (user.role === 'tour_guide') {
        // Tour Guide only sees Playbook and Profile (added to header/elsewhere)
        navItems.splice(0, navItems.length, 
            { path: '/admin/playbook', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z"/>', label: '📖 Cẩm Nang' }
        );
    }

    if (user.role === 'admin') {
        navItems.push({
            path: '/admin/users',
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>',
            label: 'Tài Khoản (Users)'
        });
    }

    const menuHtml = navItems.map(item => `
        <li>
            <a href="${item.path}" data-link class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${currentPath === item.path ? 'bg-csr-orange/10 text-csr-orange border-r-4 border-csr-orange' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}">
                <svg class="w-6 h-6 stroke-current transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24">
                    ${item.icon}
                </svg>
                <span class="font-medium">${item.label}</span>
            </a>
        </li>
    `).join('');

    return `
      <!-- Backdrop for Mobile -->
      <div id="sidebarBackdrop" class="fixed inset-0 bg-gray-900/50 z-40 hidden md:hidden transition-opacity duration-300 opacity-0"></div>

      <aside id="adminSidebar" class="fixed md:static inset-y-0 left-0 w-64 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out z-50 shadow-xl md:shadow-none">
          <!-- Logo Area -->
          <div class="h-16 flex items-center justify-between px-4 border-b border-gray-200 bg-gray-50">
              <a href="/admin/" data-link class="flex items-center hover:opacity-80 transition-opacity">
                  <span class="text-lg font-bold bg-gradient-to-r from-csr-light to-csr-orange bg-clip-text text-transparent">CAM SITE RETREATS</span>
              </a>
              <button id="closeSidebarBtn" class="md:hidden p-2 text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
          </div>
  
          <!-- Navigation -->
          <nav class="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
              <ul class="space-y-1">
                  ${menuHtml}
              </ul>
          </nav>
  
          <!-- Bottom Action (Logout) -->
          <div class="p-4 border-t border-gray-200">
              <button onclick="localStorage.removeItem('csr_admin_token'); localStorage.removeItem('csr_user'); window.location.href='/admin/login'" class="flex items-center space-x-3 text-gray-500 hover:text-red-400 w-full px-4 py-2 rounded-lg transition-colors group">
                  <svg class="w-6 h-6 stroke-current group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                  </svg>
                  <span>Đăng Xuất</span>
              </button>
          </div>
      </aside>

      <script>/* sidebar logic handled by initSidebar() in router.js */<\/script>
    `;
};
