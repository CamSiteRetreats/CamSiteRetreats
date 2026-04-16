import{S as y,H as x}from"./Header-DFYmXmuY.js";const k=()=>{let e={id:"",username:"",fullName:"",role:"",avatar:"",phone:"",email:"",payment_info:null};try{const r=localStorage.getItem("csr_user");r&&(e=JSON.parse(r))}catch{}const o=e.payment_info||{};return`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${y()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${x()}
          
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
                                    <img id="avatarPreview" src="${e.avatar||"https://ui-avatars.com/api/?name=Guest&background=2A2A2A&color=fff"}" class="w-24 h-24 rounded-full object-cover border-4 border-csr-card shadow-lg">
                                    <div class="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <input type="file" id="avatarUpload" class="hidden" accept="image/*">
                                </div>
                                <div>
                                    <h3 class="text-lg font-medium text-gray-900">Ảnh Đại Diện</h3>
                                    <p class="text-sm text-gray-500 mt-1">Nên sử dụng ảnh vuông (1:1), dung lượng dưới 2MB.</p>
                                    <button type="button" onclick="document.getElementById('avatarUpload').click()" class="mt-3 text-sm text-csr-orange hover:text-csr-light transition-colors font-bold">Tải ảnh đại diện</button>
                                </div>
                            </div>

                            <hr class="border-gray-200">

                            <!-- Info Grid -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-medium text-gray-500 mb-2">Họ và Tên</label>
                                    <input type="text" id="fullName" value="${e.fullName||""}" class="input-field w-full font-bold text-gray-900" required>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-500 mb-2">Vai Trò</label>
                                    <input type="text" value="${e.role==="admin"?"Quản Trị Viên (Admin)":"Nhân Viên Sale"}" class="input-field w-full bg-gray-100 text-gray-500 cursor-not-allowed border-dashed" disabled>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-500 mb-2">Số Điện Thoại</label>
                                    <input type="tel" id="phone" value="${e.phone||""}" class="input-field w-full">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-500 mb-2">Email</label>
                                    <input type="email" id="email" value="${e.email||""}" class="input-field w-full">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-500 mb-2">Đổi Mật Khẩu</label>
                                    <input type="password" id="newPassword" placeholder="Để trống nếu không muốn đổi" class="input-field w-full placeholder-gray-400">
                                </div>
                            </div>

                            <hr class="border-gray-200">

                            <!-- Banking Info -->
                            <div>
                                <h3 class="text-lg font-bold text-gray-900 mb-4">💳 Thông Tin Thanh Toán (Hoa Hồng)</h3>
                                <p class="text-sm text-gray-500 mb-5">Thông tin này sẽ được hiển thị cho Admin để chuyển khoản thanh toán hoa hồng cho bạn.</p>
                                
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div class="space-y-4">
                                        <div>
                                            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Tên Ngân Hàng</label>
                                            <input type="text" id="bankName" value="${o.bank_name||""}" class="input-field w-full" placeholder="VD: Vietcombank, MB Bank...">
                                        </div>
                                        <div>
                                            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Số Tài Khoản</label>
                                            <input type="text" id="bankAccount" value="${o.account_number||""}" class="input-field w-full font-mono text-lg font-bold" placeholder="VD: 123456789">
                                        </div>
                                        <div>
                                            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Tên Chủ Tài Khoản</label>
                                            <input type="text" id="bankOwner" value="${o.account_name||""}" class="input-field w-full font-black uppercase text-gray-900" placeholder="VD: NGUYEN VAN A">
                                        </div>
                                    </div>

                                    <!-- QR Code Upload -->
                                    <div>
                                        <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Mã QR Thanh Toán</label>
                                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-2xl hover:border-csr-orange transition-colors bg-gray-50 group relative cursor-pointer" onclick="document.getElementById('qrUpload').click()">
                                            <div class="space-y-1 text-center" id="qrUploadPrompt" style="${o.qr_code?"display: none;":""}">
                                                <svg class="mx-auto h-12 w-12 text-gray-400 group-hover:text-csr-orange transition-colors" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                <div class="flex text-sm text-gray-600 justify-center">
                                                    <span class="relative cursor-pointer bg-transparent rounded-md font-medium text-csr-orange hover:text-csr-light focus-within:outline-none">Tải ảnh QR lên</span>
                                                </div>
                                                <p class="text-xs text-gray-500">Tự động hỗ trợ cắt vuông (Crop)</p>
                                            </div>
                                            <!-- Preview Image -->
                                            <div id="qrPreviewContainer" class="w-full relative" style="${o.qr_code?"":"display: none;"}">
                                                <img id="qrPreview" src="${o.qr_code||""}" class="mx-auto max-h-48 object-contain rounded-xl shadow-sm border border-gray-200">
                                                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                                                    <span class="text-white font-bold text-sm">Đổi Ảnh Khác</span>
                                                </div>
                                            </div>
                                            <input type="file" id="qrUpload" class="hidden" accept="image/*">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Action Buttons -->
                            <div class="flex justify-end gap-4 pt-4">
                                <button type="button" class="px-6 py-2 rounded-xl text-sm font-bold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors" onclick="window.location.reload()">Hủy Cập Nhật</button>
                                <button type="submit" id="btnSaveProfile" class="bg-csr-orange hover:bg-[#d65503] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-csr-orange/30 transition-all flex items-center justify-center gap-2">
                                    Lưu Thay Đổi
                                </button>
                            </div>
                       </form>
                  </div>
               </div>
          </main>
        </div>
      </div>

      <!-- MODAL CROP QR -->
      <div id="cropModal" class="fixed inset-0 z-[60] bg-gray-900/80 backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-200">
          <div class="bg-white rounded-2xl w-full max-w-lg shadow-2xl p-6 scale-95 transition-transform duration-300 transform" id="cropModalContent">
              <div class="flex justify-between items-center mb-4">
                  <h3 class="text-lg font-bold text-gray-900">Cắt Mã QR (Crop)</h3>
                  <button type="button" class="text-gray-400 hover:text-gray-600 p-1" onclick="window.closeCropModal()">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
              </div>
              <div class="w-full bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center relative" style="height: 400px;">
                  <img id="cropImage" class="max-w-full max-h-full opacity-0" src="">
              </div>
              <div class="mt-5 flex gap-3">
                  <button type="button" onclick="window.closeCropModal()" class="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors">Hủy</button>
                  <button type="button" onclick="window.confirmCrop()" class="flex-1 py-3 bg-csr-orange text-white font-bold rounded-xl shadow-lg hover:bg-[#d65503] transition-colors">✂️ Hoàn Tất Cắt</button>
              </div>
          </div>
      </div>
    `},B=()=>{let e={id:"",username:"",role:"",status:"active"};try{const a=localStorage.getItem("csr_user");a&&(e=JSON.parse(a))}catch{}const o=document.getElementById("avatarUpload"),r=document.getElementById("avatarPreview");o&&o.addEventListener("change",a=>{const t=a.target.files[0];if(t){const l=new FileReader;l.onload=s=>r.src=s.target.result,l.readAsDataURL(t)}});let n=null;const m=document.getElementById("qrUpload"),d=document.getElementById("cropModal"),g=document.getElementById("cropModalContent"),c=document.getElementById("cropImage"),h=document.getElementById("qrPreviewContainer"),f=document.getElementById("qrUploadPrompt"),u=document.getElementById("qrPreview");window.closeCropModal=()=>{d.classList.add("opacity-0"),g.classList.add("scale-95"),setTimeout(()=>{d.classList.add("hidden"),n&&(n.destroy(),n=null),m.value=""},200)},m&&m.addEventListener("change",a=>{const t=a.target.files[0];if(t){const l=new FileReader;l.onload=s=>{c.src=s.target.result,d.classList.remove("hidden"),c.onload=()=>{n&&n.destroy(),n=new Cropper(c,{aspectRatio:1,viewMode:1,dragMode:"move",autoCropArea:.8,restore:!1,guides:!0,center:!0,highlight:!1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!1}),c.classList.remove("opacity-0"),requestAnimationFrame(()=>{d.classList.remove("opacity-0"),g.classList.remove("scale-95")})}},l.readAsDataURL(t)}}),window.confirmCrop=()=>{if(!n)return;const t=n.getCroppedCanvas({width:400,height:400,fillColor:"#fff",imageSmoothingEnabled:!0,imageSmoothingQuality:"high"}).toDataURL("image/png",.9);u.src=t,h.style.display="block",f.style.display="none",window.closeCropModal()};const v=document.getElementById("profileForm");v&&v.addEventListener("submit",async a=>{a.preventDefault();const t=document.getElementById("btnSaveProfile"),l=t.innerHTML;t.innerHTML="Đang lưu...",t.disabled=!0;const s={bank_name:document.getElementById("bankName").value.trim(),account_number:document.getElementById("bankAccount").value.trim(),account_name:document.getElementById("bankOwner").value.trim(),qr_code:u.src.startsWith("data:")||u.src.startsWith("http")?u.src:null},b={id:e.id||void 0,username:e.username,role:e.role,status:e.status,fullName:document.getElementById("fullName").value.trim(),phone:document.getElementById("phone").value.trim(),email:document.getElementById("email").value.trim(),password:document.getElementById("newPassword").value||void 0,avatar:r.src,payment_info:s};try{const i=await fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)});if(i.ok){const p=await i.json();localStorage.setItem("csr_user",JSON.stringify(p)),alert("Đã lưu thông tin hồ sơ thành công!"),window.location.reload()}else{const p=await i.json();alert(p.error||"Lỗi khi lưu trên máy chủ!")}}catch(i){console.error(i),alert("Lỗi kết nối máy chủ!")}finally{t.innerHTML=l,t.disabled=!1}})};export{B as afterRender,k as render};
