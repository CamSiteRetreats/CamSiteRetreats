import{S as T,H as M}from"./Header-CsK1zS95.js";const $=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${T()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${M()}
          
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
               <div class="max-w-7xl mx-auto space-y-6">
                  
                  <div class="flex justify-between items-end">
                      <div>
                          <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Quản Lý Tour</h1>
                          <p class="text-gray-500 text-sm">Thêm, sửa, xóa các tuyến trekking. Đồng bộ trực tiếp lên Website.</p>
                      </div>
                      <button id="addTourBtn" class="btn-primary flex items-center gap-2">
                          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                          Thêm Tour Mới
                      </button>
                  </div>

                  <!-- Table -->
                  <div class="glass-panel overflow-hidden">
                      <div class="overflow-x-auto">
                          <table class="w-full text-left border-collapse">
                              <thead class="hidden md:table-header-group">
                                  <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                                      <th class="p-4 font-medium">Tour</th>
                                      <th class="p-4 font-medium">Vùng / Loại</th>
                                      <th class="p-4 font-medium">Thời Lượng</th>
                                      <th class="p-4 font-medium">Độ Khó</th>
                                      <th class="p-4 font-medium">Giá</th>
                                      <th class="p-4 font-medium text-center">Hiển Thị</th>
                                      <th class="p-4 font-medium text-right">Thao Tác</th>
                                  </tr>
                              </thead>
                              <tbody id="toursTableBody" class="divide-y divide-csr-border block md:table-row-group">
                              </tbody>
                          </table>
                      </div>
                  </div>
               </div>
          </main>
        </div>
      </div>

      <!-- Add/Edit Tour Modal -->
      <div id="tourModal" class="fixed inset-0 z-[60] bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-2 md:p-4 opacity-0 transition-opacity duration-300">
          <div class="bg-white border border-gray-200 rounded-2xl w-full max-w-2xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto shadow-2xl scale-95 transition-transform duration-300 transform relative" id="tourModalContent">
              <button id="closeTourModalBtn" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full p-2 transition-colors z-20">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <div class="p-5 md:p-8">
                  <h2 id="tourModalTitle" class="text-xl md:text-2xl font-bold text-gray-800 mb-6">Thêm Tour Mới</h2>
                  <form id="tourForm" class="space-y-4 md:space-y-5">
                      <input type="hidden" id="tour-edit-id">
                      
                      <!-- Tên & Mô tả -->
                      <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Tên Tour *</label>
                          <input type="text" id="tour-name" class="input-field bg-gray-50 text-base" placeholder="VD: Tà Năng - Phan Dũng" required>
                      </div>
                      <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Mô tả ngắn</label>
                          <textarea id="tour-short-desc" class="input-field bg-gray-50 h-20 resize-none text-base" placeholder="Mô tả ngắn hiển thị trên card tour..."></textarea>
                      </div>

                      <!-- Ảnh chính -->
                      <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ảnh chính *</label>
                          <div id="tour-img-zone-main"
                               class="relative w-full h-36 rounded-xl border-2 border-dashed border-gray-300 overflow-hidden cursor-pointer hover:border-csr-orange transition-colors group flex items-center justify-center bg-gray-50"
                               ondragover="event.preventDefault(); this.classList.add('border-csr-orange','bg-orange-50');"
                               ondragleave="this.classList.remove('border-csr-orange','bg-orange-50');"
                               ondrop="event.preventDefault(); this.classList.remove('border-csr-orange','bg-orange-50'); window.handleTourImgDrop(event,'main');"
                               onclick="document.getElementById('tour-img-input-main').click()">
                              <div id="tour-img-preview-main" class="w-full h-full flex flex-col items-center justify-center text-gray-300 gap-1">
                                  <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                                  <span class="text-xs font-bold uppercase">Kéo thả hoặc click để chọn ảnh</span>
                                  <span class="text-[10px] text-gray-400">JPG, PNG, WEBP — tối đa 10MB, tự động nén</span>
                              </div>
                              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hidden" id="tour-img-overlay-main">
                                  <span class="text-white font-bold text-sm">ĐỔI ẢNH</span>
                              </div>
                          </div>
                          <input type="file" id="tour-img-input-main" accept="image/*" class="hidden" data-slot="main">
                          <input type="hidden" id="tour-image" value="">
                      </div>

                      <!-- Ảnh phụ 1,2,3 -->
                      <div class="grid grid-cols-3 gap-3">
                          ${["2","3","4"].map(s=>`
                          <div>
                              <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1">Ảnh phụ ${parseInt(s)-1}</label>
                              <div id="tour-img-zone-${s}"
                                   class="relative h-24 rounded-xl border-2 border-dashed border-gray-300 overflow-hidden cursor-pointer hover:border-csr-orange transition-colors group flex items-center justify-center bg-gray-50"
                                   ondragover="event.preventDefault(); this.classList.add('border-csr-orange','bg-orange-50');"
                                   ondragleave="this.classList.remove('border-csr-orange','bg-orange-50');"
                                   ondrop="event.preventDefault(); this.classList.remove('border-csr-orange','bg-orange-50'); window.handleTourImgDrop(event,'${s}');"
                                   onclick="document.getElementById('tour-img-input-${s}').click()">
                                  <div id="tour-img-preview-${s}" class="w-full h-full flex flex-col items-center justify-center text-gray-300 gap-1">
                                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m8-8H4"/></svg>
                                      <span class="text-[9px] font-bold uppercase">Thêm ảnh</span>
                                  </div>
                                  <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hidden" id="tour-img-overlay-${s}">
                                      <span class="text-white font-bold text-[10px]">ĐỔI ẢNH</span>
                                  </div>
                              </div>
                              <input type="file" id="tour-img-input-${s}" accept="image/*" class="hidden" data-slot="${s}">
                              <input type="hidden" id="tour-image${s}" value="">
                          </div>`).join("")}
                      </div>

                      <!-- Thông số -->
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Thời lượng *</label>
                              <input type="text" id="tour-duration" class="input-field bg-gray-50 text-base" placeholder="2 Ngày 1 Đêm" required>
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Giá (VNĐ) *</label>
                              <input type="text" id="tour-price" class="input-field bg-gray-50 font-bold text-base" placeholder="3000000" required>
                          </div>
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Độ khó</label>
                              <select id="tour-level" class="input-field bg-gray-50 text-base">
                                  <option value="Dễ">Dễ</option>
                                  <option value="Trung Bình" selected>Trung Bình</option>
                                  <option value="Khó">Khó</option>
                              </select>
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Vùng miền</label>
                              <select id="tour-region" class="input-field bg-gray-50 text-base">
                                  <option value="Miền Nam">Miền Nam</option>
                                  <option value="Miền Bắc">Miền Bắc</option>
                                  <option value="Miền Trung">Miền Trung</option>
                              </select>
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Loại hình</label>
                              <select id="tour-type" class="input-field bg-gray-50 text-base">
                                  <option value="TREKKING">TREKKING</option>
                                  <option value="CAMPING">CAMPING</option>
                                  <option value="CANYONING">CANYONING</option>
                                  <option value="HIKING">HIKING</option>
                              </select>
                          </div>
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Độ cao</label>
                              <input type="text" id="tour-altitude" class="input-field bg-gray-50 text-base" placeholder="VD: 2.287M">
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Thứ tự hiển thị</label>
                              <input type="number" id="tour-sort-order" class="input-field bg-gray-50 text-base" value="0" placeholder="0">
                          </div>
                      </div>

                      <!-- Domain & Visibility -->
                      <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Tên miền riêng (Custom Domain)</label>
                          <input type="text" id="tour-custom-domain" class="input-field bg-gray-50 text-base" placeholder="https://camsiteretreats.com/tour/tanangphandung">
                      </div>
                      <div>
                          <label class="flex items-center gap-3 cursor-pointer py-2">
                              <input type="checkbox" id="tour-is-visible" checked class="w-6 h-6 rounded border-gray-200 text-csr-orange focus:ring-csr-orange">
                              <span class="text-base font-bold text-gray-700">Hiển thị tour này trên website</span>
                          </label>
                      </div>

                      <!-- Buttons -->
                      <div class="pt-3 flex gap-3">
                          <button type="button" id="cancelTourBtn" class="flex-1 min-h-[50px] border border-gray-200 text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition-all">Hủy</button>
                          <button type="submit" class="flex-1 min-h-[50px] bg-csr-orange text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all">Lưu Tour</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    `,j=()=>{const s=document.getElementById("toursTableBody"),c=document.getElementById("tourModal"),m=document.getElementById("tourModalContent"),b=document.getElementById("tourForm");let g=[];const p="/api/admin_tours",y=(e=null)=>{const t=document.getElementById("tourModalTitle");e?(t.textContent="Chỉnh Sửa Tour",document.getElementById("tour-edit-id").value=e.id,document.getElementById("tour-name").value=e.name||"",document.getElementById("tour-short-desc").value=e.short_desc||e.shortDesc||"",u("main",e.image||""),u("2",e.image2||""),u("3",e.image3||""),u("4",e.image4||""),document.getElementById("tour-duration").value=e.duration||"",document.getElementById("tour-price").value=e.price||"",document.getElementById("tour-level").value=e.level||"Trung Bình",document.getElementById("tour-region").value=e.region||"Miền Nam",document.getElementById("tour-type").value=e.type||"TREKKING",document.getElementById("tour-altitude").value=e.altitude||"",document.getElementById("tour-sort-order").value=e.sort_order||0,document.getElementById("tour-custom-domain").value=e.custom_domain||"",document.getElementById("tour-is-visible").checked=e.is_visible!==!1):(t.textContent="Thêm Tour Mới",b.reset(),document.getElementById("tour-edit-id").value="",document.getElementById("tour-is-visible").checked=!0,document.getElementById("tour-custom-domain").value="https://camsiteretreats.com/tour/",["main","2","3","4"].forEach(o=>u(o,""))),c.classList.remove("hidden"),setTimeout(()=>{c.classList.add("opacity-100"),m.classList.remove("scale-95"),m.classList.add("scale-100")},10),I()},h=()=>{c.classList.remove("opacity-100"),m.classList.remove("scale-100"),m.classList.add("scale-95"),setTimeout(()=>{c.classList.add("hidden")},200)};document.getElementById("addTourBtn").addEventListener("click",()=>y()),document.getElementById("closeTourModalBtn").addEventListener("click",h),document.getElementById("cancelTourBtn").addEventListener("click",h),c.addEventListener("click",e=>{e.target===c&&h()});const w=["main","2","3","4"],k=(e,t)=>{const o=document.getElementById(`tour-img-preview-${e}`),n=document.getElementById(`tour-img-overlay-${e}`);document.getElementById(`tour-img-zone-${e}`),o&&(o.innerHTML=`<img src="${t}" class="w-full h-full object-cover" alt="preview">`,o.className="w-full h-full",n&&n.classList.remove("hidden"))},u=(e,t)=>{const o=document.getElementById(`tour-img-preview-${e}`),n=document.getElementById(`tour-img-overlay-${e}`),r=document.getElementById(e==="main"?"tour-image":`tour-image${e}`);if(o){if(t)o.innerHTML=`<img src="${t}" class="w-full h-full object-cover" alt="preview">`,o.className="w-full h-full",n&&n.classList.remove("hidden");else{const l=e==="main";o.innerHTML=l?'<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg><span class="text-xs font-bold uppercase">Kéo thả hoặc click để chọn ảnh</span><span class="text-[10px] text-gray-400">JPG, PNG, WEBP — tối đa 10MB, tự động nén</span>':'<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m8-8H4"/></svg><span class="text-[9px] font-bold uppercase">Thêm ảnh</span>',o.className="w-full h-full flex flex-col items-center justify-center text-gray-300 gap-1",n&&n.classList.add("hidden")}r&&(r.value=t||"")}},B=e=>new Promise((t,o)=>{const r=new FileReader;r.onload=l=>{const d=new Image;d.onload=()=>{let{width:a,height:i}=d;(a>1200||i>1200)&&(a>i?(i=Math.round(i*1200/a),a=1200):(a=Math.round(a*1200/i),i=1200));const v=document.createElement("canvas");v.width=a,v.height=i,v.getContext("2d").drawImage(d,0,0,a,i),t(v.toDataURL("image/jpeg",.85))},d.onerror=o,d.src=l.target.result},r.onerror=o,r.readAsDataURL(e)}),f=async(e,t)=>{const o=document.getElementById(`tour-img-preview-${t}`),n=document.getElementById(t==="main"?"tour-image":`tour-image${t}`);if(o){o.innerHTML='<svg class="animate-spin w-7 h-7 text-csr-orange" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>',o.className="w-full h-full flex items-center justify-center";try{const r=await B(e),l=(e.name||`tour-${t}`).replace(/\.[^.]+$/,""),a=await(await fetch("/api/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:r,filename:`tour-${l}`})})).json();if(!a.success)throw new Error(a.error||"Upload thất bại");k(t,a.url),n&&(n.value=a.url),console.log(`[tour-upload] ✅ slot=${t} ${a.stats?.inputKB}KB → ${a.stats?.outputKB}KB`)}catch(r){o.innerHTML=`<span class="text-red-400 text-xs text-center p-2">❌ Lỗi: ${r.message}</span>`,o.className="w-full h-full flex items-center justify-center",alert("Lỗi upload ảnh: "+r.message)}}},I=()=>{w.forEach(e=>{const t=document.getElementById(`tour-img-input-${e}`);!t||t.dataset.bound||(t.dataset.bound="1",t.addEventListener("change",o=>{const n=o.target.files?.[0];n&&f(n,e)}))})};window.handleTourImgDrop=(e,t)=>{const o=e.dataTransfer?.files?.[0];o&&o.type.startsWith("image/")&&f(o,t)};const x=async()=>{s.innerHTML='<tr><td colspan="7" class="text-center py-8 text-gray-400">Đang tải danh sách tour...</td></tr>';try{const e=await fetch(p);if(!e.ok)throw new Error("Failed to load tours");const t=await e.json();g=Array.isArray(t)?t:t.data||[],E()}catch(e){console.error("Error loading tours:",e),s.innerHTML='<tr><td colspan="7" class="text-center py-4 text-red-500">Lỗi kết nối server.</td></tr>'}},E=()=>{if(g.length===0){s.innerHTML='<tr><td colspan="7" class="text-center py-8 text-gray-400">Chưa có tour nào.</td></tr>';return}s.innerHTML=g.map(e=>{const t=!e.price||e.price==="Update"||e.price==="0"||parseInt(e.price)===0?'<span class="text-gray-400 italic">Update...</span>':`<span class="font-bold text-csr-orange">${parseInt(e.price).toLocaleString("vi-VN")}đ</span>`,o=e.level==="Dễ"?"bg-green-100 text-green-700":e.level==="Khó"?"bg-red-100 text-red-600":"bg-orange-100 text-orange-700",n=e.is_visible!==!1?'<span class="bg-green-100 text-green-600 text-[10px] px-2 py-0.5 rounded-full font-bold">Hiển thị</span>':'<span class="bg-gray-200 text-gray-500 text-[10px] px-2 py-0.5 rounded-full font-bold">Đã ẩn</span>';return`
                <tr class="hover:bg-gray-50 transition-colors group block md:table-row border-b md:border-none p-4 md:p-0" data-tour-id="${e.id}">
                    <td class="p-0 md:p-4 block md:table-cell mb-4 md:mb-0">
                        <div class="flex items-center gap-3">
                            <div class="w-16 h-16 md:w-12 md:h-12 rounded-xl bg-gray-100 overflow-hidden border border-gray-200 shrink-0">
                                <img src="${e.image||""}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/100x100/f3f4f6/9ca3af?text=No+Img'" loading="lazy">
                            </div>
                            <div class="min-w-0">
                                <div class="font-bold text-base md:text-sm text-gray-900 group-hover:text-csr-orange transition-colors truncate">${e.name}</div>
                                <div class="text-[10px] text-gray-400 truncate max-w-[200px]">${e.short_desc||e.shortDesc||""}</div>
                                <div class="flex items-center gap-2 mt-1 md:hidden">
                                     <span class="px-2 py-0.5 ${o} rounded text-[10px] font-bold uppercase">${e.level||"-"}</span>
                                     ${n}
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="hidden md:table-cell p-4 text-sm text-gray-500">
                        <div>${e.region||"-"}</div>
                        <div class="text-[10px] uppercase font-bold text-gray-400">${e.type||"-"}</div>
                    </td>
                    <td class="hidden md:table-cell p-4 text-sm text-gray-600">${e.duration||"-"}</td>
                    <td class="hidden md:table-cell p-4">
                        <span class="px-2 py-0.5 ${o} rounded text-[10px] font-bold uppercase">${e.level||"-"}</span>
                    </td>
                    <td class="p-0 md:p-4 block md:table-cell mb-4 md:mb-0">
                        <div class="flex justify-between items-center md:block">
                            <span class="text-xs font-bold text-gray-400 uppercase md:hidden tracking-wider">Giá tour</span>
                            <div class="text-sm md:text-base">${t}</div>
                        </div>
                    </td>
                    <td class="hidden md:table-cell p-4 text-center">${n}</td>
                    <td class="p-0 md:p-4 block md:table-cell">
                        <div class="flex items-center justify-end md:justify-end gap-2 md:gap-1">
                            <button class="tour-edit-btn p-3 md:p-2 text-gray-500 md:text-gray-400 hover:text-blue-500 hover:bg-blue-50 bg-gray-100 md:bg-transparent rounded-xl md:rounded-lg transition-colors flex-1 md:flex-none justify-center flex items-center gap-2 md:block" data-id="${e.id}" title="Sửa">
                                <svg class="w-5 h-5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                <span class="md:hidden font-bold text-sm">Sửa</span>
                            </button>
                            <a href="/admin/tour-settings?id=${e.id}" data-link class="p-3 md:p-2 text-gray-500 md:text-gray-400 hover:text-orange-500 hover:bg-orange-50 bg-gray-100 md:bg-transparent rounded-xl md:rounded-lg transition-colors inline-flex flex-1 md:flex-none justify-center items-center gap-2 md:block" title="Thiết lập đăng ký">
                                <svg class="w-5 h-5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>
                                <span class="md:hidden font-bold text-sm">Cài đặt</span>
                            </a>
                            <button class="tour-delete-btn p-3 md:p-2 text-gray-500 md:text-gray-400 hover:text-red-500 hover:bg-red-50 bg-gray-100 md:bg-transparent rounded-xl md:rounded-lg transition-colors flex-1 md:flex-none justify-center flex items-center gap-2 md:block" data-id="${e.id}" title="Xóa">
                                <svg class="w-5 h-5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                <span class="md:hidden font-bold text-sm">Xóa</span>
                            </button>
                        </div>
                    </td>
                </tr>
            `}).join("")};s.addEventListener("click",async e=>{const t=e.target.closest(".tour-edit-btn"),o=e.target.closest(".tour-delete-btn");if(t){const n=parseInt(t.getAttribute("data-id")),r=g.find(l=>l.id===n);r&&y(r)}if(o){const n=o.getAttribute("data-id");if(confirm("Dữ liệu lịch trình liên quan có thể bị ảnh hưởng. Bạn vẫn muốn xóa tour này?"))try{if((await fetch(`${p}?id=${n}`,{method:"DELETE"})).ok)x();else throw new Error("Delete failed")}catch(r){alert("Lỗi khi xóa: "+r.message)}}}),b.addEventListener("submit",async e=>{e.preventDefault();const t=b.querySelector('button[type="submit"]'),o=t.textContent;t.textContent="Đang lưu...",t.disabled=!0;const n=document.getElementById("tour-edit-id").value,r={id:n?parseInt(n):null,name:document.getElementById("tour-name").value,image:document.getElementById("tour-image").value,image2:document.getElementById("tour-image2").value||null,image3:document.getElementById("tour-image3").value||null,image4:document.getElementById("tour-image4").value||null,shortDesc:document.getElementById("tour-short-desc").value,altitude:document.getElementById("tour-altitude").value||null,level:document.getElementById("tour-level").value,region:document.getElementById("tour-region").value,type:document.getElementById("tour-type").value,duration:document.getElementById("tour-duration").value,price:document.getElementById("tour-price").value,sort_order:parseInt(document.getElementById("tour-sort-order").value)||0,custom_domain:document.getElementById("tour-custom-domain").value.trim()||null,is_visible:document.getElementById("tour-is-visible").checked};try{const l=n?`${p}?id=${n}`:p,a=await fetch(l,{method:n?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok){const i=await a.json();throw new Error(i.message||i.error||"Save failed")}h(),x(),alert(n?"✅ Cập nhật tour thành công!":"✅ Thêm tour mới thành công! Website sẽ tự đồng bộ trong vài giây.")}catch(l){alert("❌ Lỗi: "+l.message)}finally{t.textContent=o,t.disabled=!1}}),x()};export{j as afterRender,$ as render};
