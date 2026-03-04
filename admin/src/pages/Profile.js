import { Sidebar } from '../components/Sidebar.js';
import { Header } from '../components/Header.js';

export const render = () => {
    let user = { fullName: '', role: '', avatar: '', phone: '', email: '', bank_info: '' };
    try {
        const stored = localStorage.getItem('csr_user');
        if (stored) user = JSON.parse(stored);
    } catch (e) { }

    return `
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${Sidebar()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${Header()}
          
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
               <div class="max-w-4xl mx-auto space-y-6">
                  
                  <div class="flex justify-between items-end">
                      <div>
                          <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Hồ Sơ Cá Nhân</h1>
                          <p class="text-gray-500 text-sm">Quản lý thông tin tài khoản và cấu hình hệ thống</p>
                      </div>
                  </div>

                  <div class="glass-panel p-8">
                       <form id="profileForm" class="space-y-8">
                            <!-- Avatar Section -->
                            <div class="flex items-center space-x-6">
                                <div class="relative group cursor-pointer">
                                    <img id="avatarPreview" src="${user.avatar || 'https://ui-avatars.com/api/?name=Guest&background=2A2A2A&color=fff'}" class="w-24 h-24 rounded-full object-cover border-4 border-csr-card shadow-lg">
                                    <div class="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg class="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <input type="file" id="avatarUpload" class="hidden" accept="image/*">
                                </div>
                                <div>
                                    <h3 class="text-lg font-medium text-gray-900">Ảnh Đại Diện</h3>
                                    <p class="text-sm text-gray-500 mt-1">Nên sử dụng ảnh vuông (1:1), dung lượng dưới 2MB.</p>
                                    <button type="button" onclick="document.getElementById('avatarUpload').click()" class="mt-3 text-sm text-csr-orange hover:text-csr-light transition-colors">Tải ảnh lên</button>
                                </div>
                            </div>

                            <hr class="border-gray-200">

                            <!-- Info Grid -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-medium text-gray-500 mb-2">Họ và Tên</label>
                                    <input type="text" id="fullName" value="${user.fullName || ''}" class="input-field" required>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-500 mb-2">Vai Trò</label>
                                    <input type="text" value="${user.role === 'admin' ? 'Quản Trị Viên (Admin)' : 'Nhân Viên Sale'}" class="input-field bg-gray-100 text-gray-500 cursor-not-allowed border-dashed" disabled>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-500 mb-2">Số Điện Thoại</label>
                                    <input type="tel" id="phone" value="${user.phone || ''}" class="input-field">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-500 mb-2">Email</label>
                                    <input type="email" id="email" value="${user.email || ''}" class="input-field">
                                </div>
                            </div>

                            <hr class="border-gray-200">

                            <!-- Banking Info -->
                            <div>
                                <h3 class="text-lg font-medium text-gray-900 mb-4">Thông Tin Thanh Toán (Hoa Hồng)</h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div class="md:col-span-2">
                                        <label class="block text-sm font-medium text-gray-500 mb-2">Thông tin Ngân Hàng (Số TK - Tên Ngân Hàng - Chi Nhánh)</label>
                                        <textarea id="bankInfo" rows="3" class="input-field resize-none" placeholder="VD: 123456789 - Vietcombank - Chi nhánh Tân Bình...">${user.bank_info || ''}</textarea>
                                    </div>
                                </div>
                            </div>

                            <!-- Action Buttons -->
                            <div class="flex justify-end gap-4 pt-4">
                                <button type="button" class="px-6 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors">Hủy</button>
                                <button type="submit" class="btn-primary px-8 flex items-center justify-center shadow-lg shadow-csr-orange/20">
                                    <span>Lưu Thay Đổi</span>
                                </button>
                            </div>
                       </form>
                  </div>
               </div>
          </main>
        </div>
      </div>
    `;
};

export const afterRender = () => {
    // Avatar logic
    const avatarUpload = document.getElementById('avatarUpload');
    const avatarPreview = document.getElementById('avatarPreview');

    if (avatarUpload) {
        avatarUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    avatarPreview.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Save profile logic (Mock)
    const form = document.getElementById('profileForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            btn.innerHTML = `<svg class="animate-spin h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`;

            setTimeout(() => {
                let user = {};
                try {
                    user = JSON.parse(localStorage.getItem('csr_user') || '{}');
                } catch (err) { }

                user.fullName = document.getElementById('fullName').value;
                user.phone = document.getElementById('phone').value;
                user.email = document.getElementById('email').value;
                user.bank_info = document.getElementById('bankInfo').value;
                user.avatar = avatarPreview.src;

                localStorage.setItem('csr_user', JSON.stringify(user));

                // Show success toast (basic implementation)
                alert("Đã lưu thông tin hồ sơ thành công!");

                // Update header visually by force reloading or re-rendering header part
                window.location.reload();
            }, 500);
        });
    }
};
