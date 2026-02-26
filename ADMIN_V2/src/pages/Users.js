import { Sidebar } from '../components/Sidebar.js';
import { Header } from '../components/Header.js';

export const render = () => {
    let user = { role: 'sale', fullName: 'Guest' };
    try {
        const stored = localStorage.getItem('csr_user');
        if (stored) user = JSON.parse(stored);
    } catch (e) { }

    // Only Admin can see this page
    if (user.role !== 'admin') {
        return `
            <div class="flex h-screen items-center justify-center bg-gray-50 text-gray-800">
                <div class="text-center">
                    <h1 class="text-4xl font-bold text-gray-900 mb-4">403</h1>
                    <p class="text-gray-500 mb-6">Bạn không có quyền truy cập trang này!</p>
                    <a href="/#" class="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-csr-orange transition-colors">Quay lại Dashboard</a>
                </div>
            </div>
        `;
    }

    return `
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${Sidebar()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${Header()}
          
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
               <div class="max-w-7xl mx-auto space-y-6">
                  
                  <div class="flex justify-between items-end">
                      <div>
                          <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Quản Lý Người Dùng</h1>
                          <p class="text-gray-500 text-sm">Quản trị tài khoản đăng nhập nội bộ (Admin / Sale).</p>
                      </div>
                      <button id="btnAddNewUser" class="bg-gray-900 text-white font-bold py-2.5 px-6 rounded-xl hover:bg-csr-orange hover:shadow-lg transition-all flex items-center gap-2">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                          Thêm Tài Khoản
                      </button>
                  </div>

                  <!-- USERS TABLE -->
                  <div class="glass-panel overflow-hidden border border-gray-100 shadow-sm rounded-2xl bg-white">
                      <div class="overflow-x-auto">
                          <table class="w-full text-left border-collapse">
                              <thead>
                                  <tr class="bg-gray-50/80 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-bold">
                                      <th class="p-4 w-16 text-center">ID</th>
                                      <th class="p-4">Tài Khoản</th>
                                      <th class="p-4">Họ Tên</th>
                                      <th class="p-4">Phân Quyền</th>
                                      <th class="p-4">Thông Tin Khác</th>
                                      <th class="p-4 text-center">Trạng Thái</th>
                                      <th class="p-4 text-center">Thao Tác</th>
                                  </tr>
                              </thead>
                              <tbody id="usersTableBody" class="divide-y divide-gray-100 text-sm">
                                  <tr><td colspan="7" class="p-8 text-center text-gray-400">Đang tải dữ liệu...</td></tr>
                              </tbody>
                          </table>
                      </div>
                  </div>

               </div>
          </main>
        </div>
      </div>

      <!-- MODAL USER -->
      <div id="userModal" class="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-200">
          <div class="bg-white border border-gray-200 rounded-2xl w-full max-w-lg shadow-2xl scale-95 transition-transform duration-300 transform" id="userModalContent">
              <div class="flex justify-between items-center p-5 border-b border-gray-100 bg-gray-50/50 rounded-t-2xl">
                  <h3 class="font-bold text-gray-900 text-lg flex items-center gap-2" id="modalUserTitle">
                    <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    <span>Thêm Tài Khoản</span>
                  </h3>
                  <button type="button" class="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors" onclick="window.closeUserModal()">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
              </div>
              <form id="userForm" class="p-6 space-y-4">
                  <input type="hidden" id="userId" name="id">
                  
                  <div>
                      <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Tên Đăng Nhập *</label>
                      <input type="text" id="userName" name="username" required class="input-field w-full font-bold text-gray-900" placeholder="VD: sale01">
                  </div>
                  
                  <div>
                      <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Mật Khẩu</label>
                      <input type="text" id="userPass" name="password" class="input-field w-full" placeholder="Để trống nếu không muốn đổi (Khi Edit)">
                      <p class="text-[10px] text-gray-400 mt-1">* Bắt buộc khi tạo mới. Nhập text bình thường (chưa mã hóa).</p>
                  </div>

                  <div>
                      <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Họ và Tên *</label>
                      <input type="text" id="userFullName" name="fullName" required class="input-field w-full" placeholder="VD: Nguyễn Văn A">
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                      <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Phân Quyền *</label>
                          <select id="userRole" name="role" required class="input-field w-full font-bold">
                              <option value="sale">Sale</option>
                              <option value="admin">Admin</option>
                          </select>
                      </div>
                      <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Trạng Thái</label>
                          <select id="userStatus" name="status" class="input-field w-full">
                              <option value="active">Hoạt Động</option>
                              <option value="inactive">Đã Khóa</option>
                          </select>
                      </div>
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                      <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Số Điện Thoại</label>
                          <input type="text" id="userPhone" name="phone" class="input-field w-full">
                      </div>
                      <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Email</label>
                          <input type="email" id="userEmail" name="email" class="input-field w-full">
                      </div>
                  </div>

                  <div>
                      <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Thông Tin NH (Bank Info)</label>
                      <input type="text" id="userBank" name="bank_info" class="input-field w-full" placeholder="VD: VCB - 123456789 - NGUYEN VAN A">
                  </div>

                  <div class="pt-4 flex justify-end gap-3 border-t border-gray-100 mt-6">
                      <button type="button" class="px-5 py-2.5 text-sm font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors" onclick="window.closeUserModal()">Hủy</button>
                      <button type="submit" id="btnSubmitUser" class="px-5 py-2.5 text-sm font-bold text-white bg-gray-900 hover:bg-csr-orange rounded-xl transition-all shadow-md">Lưu Tài Khoản</button>
                  </div>
              </form>
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

    if (user.role !== 'admin') return; // Stop logic if not admin

    let allUsers = [];

    const loadUsers = async () => {
        try {
            const res = await fetch('/api/users');
            if (res.ok) {
                allUsers = await res.json();
                renderTable();
            } else {
                document.getElementById('usersTableBody').innerHTML = '<tr><td colspan="7" class="p-8 text-center text-red-500">Lỗi lấy dữ liệu</td></tr>';
            }
        } catch (error) {
            console.error(error);
            document.getElementById('usersTableBody').innerHTML = '<tr><td colspan="7" class="p-8 text-center text-red-500">Lỗi kết nối server</td></tr>';
        }
    };

    const renderTable = () => {
        const tbody = document.getElementById('usersTableBody');
        if (!tbody) return;

        if (allUsers.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" class="p-8 text-center text-gray-500 font-medium">Chưa có tài khoản nào.</td></tr>';
            return;
        }

        tbody.innerHTML = allUsers.map(u => {
            const isSuperAdmin = u.username === 'admin';

            let roleBadge = `<span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-bold uppercase border border-gray-200">Sale</span>`;
            if (u.role === 'admin') {
                roleBadge = `<span class="bg-red-50 text-red-600 px-2 py-1 rounded text-[10px] font-bold uppercase border border-red-100">Admin</span>`;
            }

            let statusBadge = `<span class="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded uppercase flex items-center gap-1 w-max mx-auto"><div class="w-1.5 h-1.5 rounded-full bg-green-500"></div> Active</span>`;
            if (u.status !== 'active') {
                statusBadge = `<span class="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold rounded uppercase flex items-center gap-1 w-max mx-auto"><div class="w-1.5 h-1.5 rounded-full bg-gray-400"></div> Locked</span>`;
            }

            return `
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="p-4 border-b border-gray-100 text-center font-mono text-gray-400">#${u.id}</td>
                    <td class="p-4 border-b border-gray-100">
                        <div class="font-bold text-gray-900">${u.username} ${isSuperAdmin ? '<span class="text-[10px] bg-yellow-100 text-yellow-700 px-1 py-0.5 rounded ml-1">Kẻ Sáng Lập</span>' : ''}</div>
                    </td>
                    <td class="p-4 border-b border-gray-100 font-medium text-gray-700">${u.fullName}</td>
                    <td class="p-4 border-b border-gray-100">${roleBadge}</td>
                    <td class="p-4 border-b border-gray-100 text-xs text-gray-500">
                        ${u.phone ? `<div>📞 ${u.phone}</div>` : ''}
                        ${u.bank_info ? `<div class="mt-1 text-csr-orange font-medium">💳 ${u.bank_info}</div>` : ''}
                    </td>
                    <td class="p-4 border-b border-gray-100 text-center">${statusBadge}</td>
                    <td class="p-4 border-b border-gray-100 text-center">
                        <div class="flex justify-center gap-2">
                            <button class="text-blue-500 hover:text-blue-700 transition-colors p-1" onclick="window.editUser(${u.id})" title="Chỉnh sửa">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                            </button>
                            ${!isSuperAdmin ? `
                            <button class="text-red-400 hover:text-red-600 transition-colors p-1" onclick="window.deleteUser(${u.id}, '${u.username}')" title="Xóa">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                            ` : `<div class="w-6"></div>`}
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    };

    // --- Modal Logic ---
    const modal = document.getElementById('userModal');
    const modalContent = document.getElementById('userModalContent');
    const userForm = document.getElementById('userForm');

    window.closeUserModal = () => {
        modal.classList.add('opacity-0');
        modalContent.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            userForm.reset();
            document.getElementById('userId').value = '';
        }, 200);
    };

    window.openUserModal = (isEdit = false, userData = null) => {
        userForm.reset();
        document.getElementById('userId').value = '';
        document.getElementById('modalUserTitle').innerHTML = isEdit
            ? `<svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg> Cập Nhật Tài Khoản`
            : `<svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Thêm Tài Khoản Mới`;

        if (isEdit && userData) {
            document.getElementById('userId').value = userData.id;
            document.getElementById('userName').value = userData.username;
            document.getElementById('userFullName').value = userData.fullName;
            document.getElementById('userRole').value = userData.role;
            document.getElementById('userPhone').value = userData.phone || '';
            document.getElementById('userEmail').value = userData.email || '';
            document.getElementById('userBank').value = userData.bank_info || '';
            document.getElementById('userStatus').value = userData.status || 'active';

            document.getElementById('userName').disabled = (userData.username === 'admin');
            document.getElementById('userRole').disabled = (userData.username === 'admin');
        } else {
            document.getElementById('userName').disabled = false;
            document.getElementById('userRole').disabled = false;
        }

        modal.classList.remove('hidden');
        requestAnimationFrame(() => {
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
        });
    };

    document.getElementById('btnAddNewUser').addEventListener('click', () => {
        window.openUserModal(false);
    });

    window.editUser = (id) => {
        const u = allUsers.find(x => x.id === id);
        if (u) window.openUserModal(true, u);
    };

    window.deleteUser = async (id, un) => {
        if (!confirm(`Bạn có chắc chắn muốn XÓA tài khoản "${un}" không?`)) return;
        try {
            const res = await fetch(`/api/users?id=${id}`, { method: 'DELETE' });
            if (res.ok) {
                alert('Đã xóa thành công!');
                loadUsers();
            } else {
                const data = await res.json();
                alert(data.error || 'Lỗi khi xóa!');
            }
        } catch (err) {
            console.error(err);
        }
    };

    // Form Submit
    userForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = document.getElementById('btnSubmitUser');
        const oldText = btn.textContent;
        btn.disabled = true;
        btn.textContent = 'Đang lưu...';

        const id = document.getElementById('userId').value;
        // Collect data
        const bodyObj = {
            id: id || undefined,
            username: document.getElementById('userName').value, // Need to read raw value if disabled
            fullName: document.getElementById('userFullName').value,
            role: document.getElementById('userRole').value,
            password: document.getElementById('userPass').value,
            phone: document.getElementById('userPhone').value,
            email: document.getElementById('userEmail').value,
            bank_info: document.getElementById('userBank').value,
            status: document.getElementById('userStatus').value
        };

        // If field was disabled (e.g. admin), it might be empty or missing in normal form data, fetch manually.
        if (document.getElementById('userName').disabled) {
            const u = allUsers.find(x => x.id == id);
            bodyObj.username = u.username;
            bodyObj.role = u.role;
        }

        try {
            const res = await fetch('/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyObj)
            });

            if (res.ok) {
                window.closeUserModal();
                loadUsers();
            } else {
                const err = await res.json();
                alert(err.error || 'Lỗi lưu thông tin');
            }
        } catch (err) {
            console.error(err);
            alert('Lỗi kết nối server!');
        } finally {
            btn.disabled = false;
            btn.textContent = oldText;
        }
    });

    // Close on bg click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) window.closeUserModal();
    });

    // Init
    loadUsers();
};
