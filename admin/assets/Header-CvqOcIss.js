const n=()=>{const r=window.location.pathname;let t={role:"sale"};try{const e=localStorage.getItem("csr_user");e&&(t=JSON.parse(e))}catch{}const a=[{path:"/admin/",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',label:"Dashboard"},{path:"/admin/bookings",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>',label:"Đơn Hàng (Sale)"},{path:"/admin/customers",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>',label:"Khách Hàng Thân Thiết"},{path:"/admin/tours",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',label:"Quản Lý Tour"},{path:"/admin/schedules",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>',label:"Lịch Trình"},{path:"/admin/reports",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>',label:"Báo Cáo (Report)"}];return t.role==="admin"&&a.push({path:"/admin/users",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>',label:"Tài Khoản (Users)"}),`
      <aside class="w-64 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col transition-all duration-300 relative z-20">
          <!-- Logo Area -->
          <div class="h-16 flex items-center justify-center border-b border-gray-200 bg-gray-50">
              <span class="text-xl font-bold bg-gradient-to-r from-csr-light to-csr-orange bg-clip-text text-transparent">CAM SITE RETREATS</span>
          </div>
  
          <!-- Navigation -->
          <nav class="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
              <ul class="space-y-1">
                  ${a.map(e=>`
        <li>
            <a href="${e.path}" data-link class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${r===e.path?"bg-csr-orange/10 text-csr-orange border-r-4 border-csr-orange":"text-gray-500 hover:bg-gray-100 hover:text-gray-900"}">
                <svg class="w-6 h-6 stroke-current transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24">
                    ${e.icon}
                </svg>
                <span class="font-medium">${e.label}</span>
            </a>
        </li>
    `).join("")}
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
    `},s=()=>{let r={fullName:"Guest",role:"guest",avatar:""};try{const a=localStorage.getItem("csr_user");a&&(r=JSON.parse(a))}catch{}const t=r.role==="admin"?'<span class="bg-csr-orange/20 text-csr-orange text-[10px] px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Admin</span>':'<span class="bg-blue-500/20 text-blue-400 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Sale</span>';return`
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
              <div class="relative flex items-center gap-3 pl-4 border-l border-gray-200 cursor-pointer hover:bg-gray-100 p-1 px-3 rounded-lg transition-colors">
                  <div class="flex flex-col items-end">
                      <span class="text-sm font-medium text-gray-900 line-clamp-1">${r.fullName}</span>
                      ${t}
                  </div>
                  <img class="h-9 w-9 rounded-full object-cover border-2 border-gray-200" src="${r.avatar}" alt="${r.fullName}">
              </div>
          </div>
      </header>
    `};export{s as H,n as S};
