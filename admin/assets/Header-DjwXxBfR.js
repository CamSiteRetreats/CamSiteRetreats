const l=()=>{const e=window.location.pathname;let r={role:"sale",fullName:"Khách"};try{const a=localStorage.getItem("csr_user");a&&(r=JSON.parse(a))}catch{}const t=r.role==="admin",o=[{path:"/admin/",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',label:"Dashboard"},{path:"/admin/bookings",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>',label:"Đơn Hàng"},{path:"/admin/customers",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>',label:"Khách Hàng"},{path:"/admin/tours",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',label:"Quản Lý Tour",saleReadOnly:!0},{path:"/admin/schedules",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>',label:"Lịch Trình",saleReadOnly:!0},{path:"/admin/reports",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>',label:"Báo Cáo"},{path:"/admin/roster",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>',label:"Danh Sách Chuyến"},{path:"/admin/users",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>',label:"Tài Khoản"}];t&&o.push({path:"/admin/activity-log",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>',label:"Lịch Sử Hoạt Động"},{path:"/admin/trash",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>',label:"Thùng Rác"});const n=o.map(a=>`
        <li>
            <a href="${a.path}" data-link class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${e===a.path?"bg-csr-orange/10 text-csr-orange border-r-4 border-csr-orange":"text-gray-500 hover:bg-gray-100 hover:text-gray-900"}">
                <svg class="w-5 h-5 stroke-current transition-transform duration-300 group-hover:scale-110 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                    ${a.icon}
                </svg>
                <span class="font-medium text-sm">${a.label}</span>
            </a>
        </li>
    `).join(""),s=t?'<span class="px-2 py-0.5 bg-csr-orange/10 text-csr-orange text-xs font-bold rounded-full">ADMIN</span>':'<span class="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs font-bold rounded-full">SALE</span>';return`
      <aside class="w-64 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col transition-all duration-300 relative z-20">
          <a href="/admin/" data-link class="h-16 flex items-center justify-center border-b border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors">
              <span class="text-lg font-bold bg-gradient-to-r from-csr-light to-csr-orange bg-clip-text text-transparent">CAM SITE RETREATS</span>
          </a>

          <!-- User badge -->
          <div class="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-csr-orange/10 flex items-center justify-center text-csr-orange font-bold text-sm flex-shrink-0">
                  ${(r.fullName||"U").charAt(0).toUpperCase()}
              </div>
              <div class="min-w-0">
                  <p class="text-xs font-semibold text-gray-800 truncate">${r.fullName||"Người dùng"}</p>
                  ${s}
              </div>
          </div>

          <nav class="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
              <ul class="space-y-1">
                  ${n}
              </ul>
          </nav>

          <div class="p-4 border-t border-gray-200">
              <button onclick="localStorage.removeItem('csr_admin_token'); localStorage.removeItem('csr_user'); window.location.href='/admin/login'" class="flex items-center space-x-3 text-gray-500 hover:text-red-400 w-full px-4 py-2 rounded-lg transition-colors group">
                  <svg class="w-5 h-5 stroke-current group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                  </svg>
                  <span class="text-sm">Đăng Xuất</span>
              </button>
          </div>
      </aside>
    `},i=()=>{let e={fullName:"Guest",role:"guest",avatar:""};try{const t=localStorage.getItem("csr_user");t&&(e=JSON.parse(t))}catch{}const r=e.role==="admin"?'<span class="bg-csr-orange/20 text-csr-orange text-[10px] px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Admin</span>':'<span class="bg-blue-500/20 text-blue-400 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Sale</span>';return`
      <header class="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 relative z-10 sticky top-0 backdrop-blur-md bg-opacity-90">
          
          <!-- Search Bar (Optional for Top Header) -->
          <div class="flex-1 flex items-center">
              <div class="relative w-full max-w-md hidden md:block">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                  </div>
                  <input type="text" class="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full leading-5 bg-gray-50 text-gray-600 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-csr-orange focus:ring-1 focus:ring-csr-orange transition-all sm:text-sm" placeholder="Tìm kiếm mã vé, số điện thoại...">
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span class="text-gray-500 text-xs border border-gray-200 rounded px-1.5 py-0.5">Ctrl K</span>
                  </div>
              </div>
          </div>
  
          <!-- Right side items (Notifications, Profile) -->
          <div class="flex items-center space-x-4">
              <!-- Notifications -->
              <button class="text-gray-500 hover:text-gray-900 relative transition-colors focus:outline-none p-1 group">
                  <svg class="h-6 w-6 group-hover:animate-swing" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span class="absolute top-1 right-1 block h-2 w-2 rounded-full bg-csr-orange ring-2 ring-csr-card animate-pulse"></span>
              </button>
  
              <!-- Profile dropdown -->
              <a href="/admin/profile" data-link class="relative flex items-center gap-3 pl-4 border-l border-gray-200 cursor-pointer hover:bg-gray-100 p-1 px-3 rounded-lg transition-colors" title="Chỉnh sửa thông tin cá nhân">
                  <div class="flex flex-col items-end">
                      <span class="text-sm font-medium text-gray-900 line-clamp-1">${e.fullName}</span>
                      ${r}
                  </div>
                  <img class="h-9 w-9 rounded-full object-cover border-2 border-gray-200" src="${e.avatar||"https://ui-avatars.com/api/?name="+encodeURIComponent(e.fullName)}" alt="${e.fullName}">
              </a>
          </div>
      </header>
    `};export{i as H,l as S};
