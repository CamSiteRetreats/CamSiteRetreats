export const Header = () => {
    // Lấy thông tin User (Admin/Sale) từ LocalStorage đã set lúc Login
    let user = { fullName: 'Guest', role: 'guest', avatar: '' };
    try {
        const stored = localStorage.getItem('csr_user');
        if (stored) {
            user = JSON.parse(stored);
        }
    } catch (e) { }

    const roleLabel = user.role === 'admin' ?
        '<span class="bg-csr-orange/20 text-csr-orange text-[10px] px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Admin</span>' :
        '<span class="bg-blue-500/20 text-blue-400 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Sale</span>';

    return `
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
                      <span class="text-sm font-medium text-gray-900 line-clamp-1">${user.fullName}</span>
                      ${roleLabel}
                  </div>
                  <img class="h-9 w-9 rounded-full object-cover border-2 border-gray-200" src="${user.avatar}" alt="${user.fullName}">
              </div>
          </div>
      </header>
    `;
};
