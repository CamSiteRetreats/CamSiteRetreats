import{S as y,H as h}from"./Header-CvqOcIss.js";const f=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${y()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${h()}
          
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
                              <thead>
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
                              <tbody id="toursTableBody" class="divide-y divide-csr-border">
                              </tbody>
                          </table>
                      </div>
                  </div>
               </div>
          </main>
        </div>
      </div>

      <!-- Add/Edit Tour Modal -->
      <div id="tourModal" class="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300">
          <div class="bg-white border border-gray-200 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl scale-95 transition-transform duration-300 transform relative" id="tourModalContent">
              <button id="closeTourModalBtn" class="absolute top-5 right-5 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full p-2 transition-colors z-20">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <div class="p-8">
                  <h2 id="tourModalTitle" class="text-2xl font-bold text-gray-800 mb-6">Thêm Tour Mới</h2>
                  <form id="tourForm" class="space-y-5">
                      <input type="hidden" id="tour-edit-id">
                      
                      <!-- Tên & Mô tả -->
                      <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Tên Tour *</label>
                          <input type="text" id="tour-name" class="input-field bg-gray-50" placeholder="VD: Tà Năng - Phan Dũng" required>
                      </div>
                      <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Mô tả ngắn</label>
                          <textarea id="tour-short-desc" class="input-field bg-gray-50 h-20 resize-none" placeholder="Mô tả ngắn hiển thị trên card tour..."></textarea>
                      </div>

                      <!-- Ảnh -->
                      <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ảnh chính (URL) *</label>
                          <input type="text" id="tour-image" class="input-field bg-gray-50" placeholder="tour/Tanang/thumb1.png" required>
                      </div>
                      <div class="grid grid-cols-3 gap-3">
                          <div>
                              <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1">Ảnh phụ 1</label>
                              <input type="text" id="tour-image2" class="input-field bg-gray-50 text-xs" placeholder="URL...">
                          </div>
                          <div>
                              <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1">Ảnh phụ 2</label>
                              <input type="text" id="tour-image3" class="input-field bg-gray-50 text-xs" placeholder="URL...">
                          </div>
                          <div>
                              <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1">Ảnh phụ 3</label>
                              <input type="text" id="tour-image4" class="input-field bg-gray-50 text-xs" placeholder="URL...">
                          </div>
                      </div>

                      <!-- Thông số -->
                      <div class="grid grid-cols-2 gap-5">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Thời lượng *</label>
                              <input type="text" id="tour-duration" class="input-field bg-gray-50" placeholder="2 Ngày 1 Đêm" required>
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Giá (VNĐ) *</label>
                              <input type="text" id="tour-price" class="input-field bg-gray-50 font-bold" placeholder="3200000" required>
                          </div>
                      </div>
                      <div class="grid grid-cols-3 gap-4">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Độ khó</label>
                              <select id="tour-level" class="input-field bg-gray-50">
                                  <option value="Dễ">Dễ</option>
                                  <option value="Trung Bình" selected>Trung Bình</option>
                                  <option value="Khó">Khó</option>
                              </select>
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Vùng miền</label>
                              <select id="tour-region" class="input-field bg-gray-50">
                                  <option value="Miền Nam">Miền Nam</option>
                                  <option value="Miền Bắc">Miền Bắc</option>
                                  <option value="Miền Trung">Miền Trung</option>
                              </select>
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Loại hình</label>
                              <select id="tour-type" class="input-field bg-gray-50">
                                  <option value="TREKKING">TREKKING</option>
                                  <option value="CAMPING">CAMPING</option>
                                  <option value="CANYONING">CANYONING</option>
                                  <option value="HIKING">HIKING</option>
                              </select>
                          </div>
                      </div>
                      <div class="grid grid-cols-2 gap-5">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Độ cao</label>
                              <input type="text" id="tour-altitude" class="input-field bg-gray-50" placeholder="VD: 2.287M">
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Thứ tự hiển thị</label>
                              <input type="number" id="tour-sort-order" class="input-field bg-gray-50" value="0" placeholder="0">
                          </div>
                      </div>

                      <!-- Domain & Visibility -->
                      <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Tên miền riêng (Custom Domain)</label>
                          <input type="text" id="tour-custom-domain" class="input-field bg-gray-50" placeholder="https://camsiteretreats.com/tour/tanangphandung">
                          <p class="text-[10px] text-gray-400 mt-1 italic">Bỏ trống nếu dùng trang mặc định hệ thống.</p>
                      </div>
                      <div>
                          <label class="flex items-center gap-3 cursor-pointer">
                              <input type="checkbox" id="tour-is-visible" checked class="w-5 h-5 rounded border-gray-200 text-csr-orange focus:ring-csr-orange">
                              <span class="text-sm font-bold text-gray-700">Hiển thị tour này trên website</span>
                          </label>
                      </div>

                      <!-- Buttons -->
                      <div class="pt-3 flex gap-3">
                          <button type="button" id="cancelTourBtn" class="flex-1 px-6 py-3 border border-gray-200 text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition-all">Hủy</button>
                          <button type="submit" class="flex-1 px-6 py-3 bg-csr-orange text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all">Lưu Tour</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    `,B=()=>{const s=document.getElementById("toursTableBody"),r=document.getElementById("tourModal"),d=document.getElementById("tourModalContent"),u=document.getElementById("tourForm");let i=[];const g="/api/tours",m=(e=null)=>{const t=document.getElementById("tourModalTitle");e?(t.textContent="Chỉnh Sửa Tour",document.getElementById("tour-edit-id").value=e.id,document.getElementById("tour-name").value=e.name||"",document.getElementById("tour-short-desc").value=e.short_desc||e.shortDesc||"",document.getElementById("tour-image").value=e.image||"",document.getElementById("tour-image2").value=e.image2||"",document.getElementById("tour-image3").value=e.image3||"",document.getElementById("tour-image4").value=e.image4||"",document.getElementById("tour-duration").value=e.duration||"",document.getElementById("tour-price").value=e.price||"",document.getElementById("tour-level").value=e.level||"Trung Bình",document.getElementById("tour-region").value=e.region||"Miền Nam",document.getElementById("tour-type").value=e.type||"TREKKING",document.getElementById("tour-altitude").value=e.altitude||"",document.getElementById("tour-sort-order").value=e.sort_order||0,document.getElementById("tour-custom-domain").value=e.custom_domain||"",document.getElementById("tour-is-visible").checked=e.is_visible!==!1):(t.textContent="Thêm Tour Mới",u.reset(),document.getElementById("tour-edit-id").value="",document.getElementById("tour-is-visible").checked=!0,document.getElementById("tour-custom-domain").value="https://camsiteretreats.com/tour/"),r.classList.remove("hidden"),setTimeout(()=>{r.classList.add("opacity-100"),d.classList.remove("scale-95"),d.classList.add("scale-100")},10)},c=()=>{r.classList.remove("opacity-100"),d.classList.remove("scale-100"),d.classList.add("scale-95"),setTimeout(()=>{r.classList.add("hidden")},200)};document.getElementById("addTourBtn").addEventListener("click",()=>m()),document.getElementById("closeTourModalBtn").addEventListener("click",c),document.getElementById("cancelTourBtn").addEventListener("click",c),r.addEventListener("click",e=>{e.target===r&&c()});const p=async()=>{s.innerHTML='<tr><td colspan="7" class="text-center py-8 text-gray-400">Đang tải danh sách tour...</td></tr>';try{const e=await fetch(g);if(!e.ok)throw new Error("Failed to load tours");i=await e.json(),v()}catch(e){console.error("Error loading tours:",e),s.innerHTML='<tr><td colspan="7" class="text-center py-4 text-red-500">Lỗi kết nối server.</td></tr>'}},v=()=>{if(i.length===0){s.innerHTML='<tr><td colspan="7" class="text-center py-8 text-gray-400">Chưa có tour nào.</td></tr>';return}s.innerHTML=i.map(e=>{const t=!e.price||e.price==="Update"||e.price==="0"||parseInt(e.price)===0?'<span class="text-gray-400 italic">Update...</span>':`<span class="font-bold text-csr-orange">${parseInt(e.price).toLocaleString("vi-VN")}đ</span>`,n=e.level==="Dễ"?"bg-green-100 text-green-700":e.level==="Khó"?"bg-red-100 text-red-600":"bg-orange-100 text-orange-700",o=e.is_visible!==!1?'<span class="bg-green-100 text-green-600 text-[10px] px-2 py-0.5 rounded-full font-bold">Hiển thị</span>':'<span class="bg-gray-200 text-gray-500 text-[10px] px-2 py-0.5 rounded-full font-bold">Đã ẩn</span>';return`
                <tr class="hover:bg-gray-50 transition-colors group" data-tour-id="${e.id}">
                    <td class="p-4">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden border border-gray-200 shrink-0">
                                <img src="${e.image||""}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/100x100/f3f4f6/9ca3af?text=No+Img'" loading="lazy">
                            </div>
                            <div class="min-w-0">
                                <div class="font-bold text-gray-900 group-hover:text-csr-orange transition-colors truncate">${e.name}</div>
                                <div class="text-[10px] text-gray-400 truncate max-w-[200px]">${e.short_desc||e.shortDesc||""}</div>
                            </div>
                        </div>
                    </td>
                    <td class="p-4 text-sm text-gray-500">
                        <div>${e.region||"-"}</div>
                        <div class="text-[10px] uppercase font-bold text-gray-400">${e.type||"-"}</div>
                    </td>
                    <td class="p-4 text-sm text-gray-600">${e.duration||"-"}</td>
                    <td class="p-4">
                        <span class="px-2 py-0.5 ${n} rounded text-[10px] font-bold uppercase">${e.level||"-"}</span>
                    </td>
                    <td class="p-4">${t}</td>
                    <td class="p-4 text-center">${o}</td>
                    <td class="p-4 text-right">
                        <div class="flex items-center justify-end gap-1">
                            <button class="tour-edit-btn p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors" data-id="${e.id}" title="Sửa">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                            </button>
                            <button class="tour-delete-btn p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" data-id="${e.id}" title="Xóa">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                        </div>
                    </td>
                </tr>
            `}).join("")};s.addEventListener("click",async e=>{const t=e.target.closest(".tour-edit-btn"),n=e.target.closest(".tour-delete-btn");if(t){const o=parseInt(t.getAttribute("data-id")),l=i.find(a=>a.id===o);l&&m(l)}if(n){const o=n.getAttribute("data-id");if(confirm("Dữ liệu lịch trình liên quan có thể bị ảnh hưởng. Bạn vẫn muốn xóa tour này?"))try{if((await fetch(`${g}?id=${o}`,{method:"DELETE"})).ok)p();else throw new Error("Delete failed")}catch(l){alert("Lỗi khi xóa: "+l.message)}}}),u.addEventListener("submit",async e=>{e.preventDefault();const t=u.querySelector('button[type="submit"]'),n=t.textContent;t.textContent="Đang lưu...",t.disabled=!0;const o=document.getElementById("tour-edit-id").value,l={id:o?parseInt(o):null,name:document.getElementById("tour-name").value,image:document.getElementById("tour-image").value,image2:document.getElementById("tour-image2").value||null,image3:document.getElementById("tour-image3").value||null,image4:document.getElementById("tour-image4").value||null,shortDesc:document.getElementById("tour-short-desc").value,altitude:document.getElementById("tour-altitude").value||null,level:document.getElementById("tour-level").value,region:document.getElementById("tour-region").value,type:document.getElementById("tour-type").value,duration:document.getElementById("tour-duration").value,price:document.getElementById("tour-price").value,sort_order:parseInt(document.getElementById("tour-sort-order").value)||0,custom_domain:document.getElementById("tour-custom-domain").value.trim()||null,is_visible:document.getElementById("tour-is-visible").checked};try{const a=await fetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(!a.ok){const b=await a.json();throw new Error(b.error||"Save failed")}c(),p(),alert(o?"✅ Cập nhật tour thành công!":"✅ Thêm tour mới thành công! Website sẽ tự đồng bộ trong vài giây.")}catch(a){alert("❌ Lỗi: "+a.message)}finally{t.textContent=n,t.disabled=!1}}),p()};export{B as afterRender,f as render};
