import{S as g,H as b}from"./Header-CvqOcIss.js";const y=()=>{let d={role:"sale",fullName:"Guest"};try{const r=localStorage.getItem("csr_user");r&&(d=JSON.parse(r))}catch{}return d.role!=="admin"?`
            <div class="flex h-screen items-center justify-center bg-gray-50 text-gray-800">
                <div class="text-center">
                    <h1 class="text-4xl font-bold text-gray-900 mb-4">403</h1>
                    <p class="text-gray-500 mb-6">Bạn không có quyền truy cập trang này!</p>
                    <a href="/#" class="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-csr-orange transition-colors">Quay lại Dashboard</a>
                </div>
            </div>
        `:`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${g()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${b()}
          
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
    `},h=()=>{let d={role:"sale",fullName:"Guest"};try{const t=localStorage.getItem("csr_user");t&&(d=JSON.parse(t))}catch{}if(d.role!=="admin")return;let r=[];const i=async()=>{try{const t=await fetch("/api/users");t.ok?(r=await t.json(),p()):document.getElementById("usersTableBody").innerHTML='<tr><td colspan="7" class="p-8 text-center text-red-500">Lỗi lấy dữ liệu</td></tr>'}catch(t){console.error(t),document.getElementById("usersTableBody").innerHTML='<tr><td colspan="7" class="p-8 text-center text-red-500">Lỗi kết nối server</td></tr>'}},p=()=>{const t=document.getElementById("usersTableBody");if(t){if(r.length===0){t.innerHTML='<tr><td colspan="7" class="p-8 text-center text-gray-500 font-medium">Chưa có tài khoản nào.</td></tr>';return}t.innerHTML=r.map(e=>{const s=e.username==="admin";let n='<span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-bold uppercase border border-gray-200">Sale</span>';e.role==="admin"&&(n='<span class="bg-red-50 text-red-600 px-2 py-1 rounded text-[10px] font-bold uppercase border border-red-100">Admin</span>');let a='<span class="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded uppercase flex items-center gap-1 w-max mx-auto"><div class="w-1.5 h-1.5 rounded-full bg-green-500"></div> Active</span>';return e.status!=="active"&&(a='<span class="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold rounded uppercase flex items-center gap-1 w-max mx-auto"><div class="w-1.5 h-1.5 rounded-full bg-gray-400"></div> Locked</span>'),`
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="p-4 border-b border-gray-100 text-center font-mono text-gray-400">#${e.id}</td>
                    <td class="p-4 border-b border-gray-100">
                        <div class="font-bold text-gray-900">${e.username} ${s?'<span class="text-[10px] bg-yellow-100 text-yellow-700 px-1 py-0.5 rounded ml-1">Kẻ Sáng Lập</span>':""}</div>
                    </td>
                    <td class="p-4 border-b border-gray-100 font-medium text-gray-700">${e.fullName}</td>
                    <td class="p-4 border-b border-gray-100">${n}</td>
                    <td class="p-4 border-b border-gray-100 text-xs text-gray-500">
                        ${e.phone?`<div>📞 ${e.phone}</div>`:""}
                        ${e.bank_info?`<div class="mt-1 text-csr-orange font-medium">💳 ${e.bank_info}</div>`:""}
                    </td>
                    <td class="p-4 border-b border-gray-100 text-center">${a}</td>
                    <td class="p-4 border-b border-gray-100 text-center">
                        <div class="flex justify-center gap-2">
                            <button class="text-blue-500 hover:text-blue-700 transition-colors p-1" onclick="window.editUser(${e.id})" title="Chỉnh sửa">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                            </button>
                            ${s?'<div class="w-6"></div>':`
                            <button class="text-red-400 hover:text-red-600 transition-colors p-1" onclick="window.deleteUser(${e.id}, '${e.username}')" title="Xóa">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                            `}
                        </div>
                    </td>
                </tr>
            `}).join("")}},o=document.getElementById("userModal"),m=document.getElementById("userModalContent"),c=document.getElementById("userForm");window.closeUserModal=()=>{o.classList.add("opacity-0"),m.classList.add("scale-95"),setTimeout(()=>{o.classList.add("hidden"),c.reset(),document.getElementById("userId").value=""},200)},window.openUserModal=(t=!1,e=null)=>{c.reset(),document.getElementById("userId").value="",document.getElementById("modalUserTitle").innerHTML=t?'<svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg> Cập Nhật Tài Khoản':'<svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Thêm Tài Khoản Mới',t&&e?(document.getElementById("userId").value=e.id,document.getElementById("userName").value=e.username,document.getElementById("userFullName").value=e.fullName,document.getElementById("userRole").value=e.role,document.getElementById("userPhone").value=e.phone||"",document.getElementById("userEmail").value=e.email||"",document.getElementById("userBank").value=e.bank_info||"",document.getElementById("userStatus").value=e.status||"active",document.getElementById("userName").disabled=e.username==="admin",document.getElementById("userRole").disabled=e.username==="admin"):(document.getElementById("userName").disabled=!1,document.getElementById("userRole").disabled=!1),o.classList.remove("hidden"),requestAnimationFrame(()=>{o.classList.remove("opacity-0"),m.classList.remove("scale-95")})},document.getElementById("btnAddNewUser").addEventListener("click",()=>{window.openUserModal(!1)}),window.editUser=t=>{const e=r.find(s=>s.id===t);e&&window.openUserModal(!0,e)},window.deleteUser=async(t,e)=>{if(confirm(`Bạn có chắc chắn muốn XÓA tài khoản "${e}" không?`))try{const s=await fetch(`/api/users?id=${t}`,{method:"DELETE"});if(s.ok)alert("Đã xóa thành công!"),i();else{const n=await s.json();alert(n.error||"Lỗi khi xóa!")}}catch(s){console.error(s)}},c.addEventListener("submit",async t=>{t.preventDefault();const e=document.getElementById("btnSubmitUser"),s=e.textContent;e.disabled=!0,e.textContent="Đang lưu...";const n=document.getElementById("userId").value,a={id:n||void 0,username:document.getElementById("userName").value,fullName:document.getElementById("userFullName").value,role:document.getElementById("userRole").value,password:document.getElementById("userPass").value,phone:document.getElementById("userPhone").value,email:document.getElementById("userEmail").value,bank_info:document.getElementById("userBank").value,status:document.getElementById("userStatus").value};if(document.getElementById("userName").disabled){const l=r.find(u=>u.id==n);a.username=l.username,a.role=l.role}try{const l=await fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(l.ok)window.closeUserModal(),i();else{const u=await l.json();alert(u.error||"Lỗi lưu thông tin")}}catch(l){console.error(l),alert("Lỗi kết nối server!")}finally{e.disabled=!1,e.textContent=s}}),o.addEventListener("click",t=>{t.target===o&&window.closeUserModal()}),i()};export{h as afterRender,y as render};
