const p=()=>`
      <div class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
          <!-- Background Effects -->
          <div class="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-csr-orange rounded-full mix-blend-multiply filter blur-[150px] opacity-20"></div>
          <div class="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-csr-light rounded-full mix-blend-multiply filter blur-[150px] opacity-20"></div>
          
          <div class="glass-panel w-full max-w-md p-8 relative z-10 transition-all duration-300 hover:shadow-2xl">
              <div class="text-center mb-8">
                  <h1 class="text-3xl font-bold bg-gradient-to-r from-csr-light to-csr-orange bg-clip-text text-transparent">CAM SITE RETREATS</h1>
                  <p class="text-gray-500 mt-2 text-sm uppercase tracking-wider font-semibold">Admin Workspace</p>
              </div>
  
              <form id="loginForm" class="space-y-6">
                  <div>
                      <label class="block text-sm font-medium text-gray-600 mb-2">Tên đăng nhập / Số điện thoại</label>
                      <input type="text" id="username" class="input-field" placeholder="Nhập tên đăng nhập..." required autocomplete="off">
                  </div>
                  <div>
                      <label class="block text-sm font-medium text-gray-600 mb-2">Mật khẩu</label>
                      <input type="password" id="password" class="input-field" placeholder="••••••••" required>
                  </div>
                  
                  <div class="flex items-center justify-between text-sm">
                      <label class="flex items-center space-x-2 text-gray-500 cursor-pointer">
                          <input type="checkbox" id="rememberMe" class="rounded border-gray-300 text-csr-orange focus:ring-csr-orange bg-transparent">
                          <span>Ghi nhớ tôi</span>
                      </label>
                  </div>
  
                  <button type="submit" class="w-full btn-primary flex justify-center py-3 font-semibold text-lg relative group overflow-hidden">
                      <span class="relative z-10">Đăng Nhập</span>
                      <div class="absolute inset-0 h-full w-full max-w-0 bg-gray-200 transition-all duration-300 ease-out group-hover:max-w-full"></div>
                  </button>
  
                  <p id="errorMsg" class="text-red-500 text-sm text-center hidden"></p>
              </form>
          </div>
      </div>
    `,g=()=>{const a=document.getElementById("loginForm"),n=document.getElementById("errorMsg"),o=document.getElementById("rememberMe"),l=localStorage.getItem("csr_remembered_user");if(l)try{const t=JSON.parse(atob(l));document.getElementById("username").value=t.username||"",document.getElementById("password").value=t.password||"",o.checked=!0}catch{console.error("Invalid remembered user data"),localStorage.removeItem("csr_remembered_user")}a.addEventListener("submit",async t=>{t.preventDefault();const i=document.getElementById("username").value,c=document.getElementById("password").value,s=a.querySelector('button[type="submit"]');s.innerHTML='<svg class="animate-spin h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>',s.disabled=!0;try{const r=await fetch("/api/auth_v2",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:i,password:c})}),m=r.headers.get("content-type");if(m&&m.indexOf("application/json")!==-1){const e=await r.json();if(r.ok&&e.success){if(localStorage.setItem("csr_admin_token",e.token),localStorage.setItem("csr_user",JSON.stringify({id:e.user.id,role:e.user.role,fullName:e.user.fullName,avatar:e.user.avatar||`https://ui-avatars.com/api/?name=${e.user.fullName.replace(" ","+")}&background=E85D04&color=fff`,phone:e.user.phone,email:e.user.email,bank_info:e.user.bank_info})),o.checked){const u=btoa(JSON.stringify({username:i,password:c}));localStorage.setItem("csr_remembered_user",u)}else localStorage.removeItem("csr_remembered_user");window.location.href="/admin/"}else throw new Error(e.message||e.error||"Lỗi đăng nhập từ hệ thống.")}else{const e=await r.text();throw console.error("Server returned non-JSON response:",e),new Error(`Server Error (${r.status}): ${e.substring(0,50)}...`)}}catch(d){n.textContent=d.message,n.classList.remove("hidden")}finally{s.innerHTML='<span class="relative z-10">Đăng Nhập</span>',s.disabled=!1}})};export{g as afterRender,p as render};
