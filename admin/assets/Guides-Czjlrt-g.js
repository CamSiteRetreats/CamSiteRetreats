import{S as h,H as v}from"./Header-CtRUqTZE.js";const g=["Hướng Dẫn Viên","Leader","Photo","Guider","Hậu Cần","Học Việc"],m={"Hướng Dẫn Viên":"bg-blue-100 text-blue-700 border-blue-200",Leader:"bg-purple-100 text-purple-700 border-purple-200",Photo:"bg-pink-100 text-pink-700 border-pink-200",Guider:"bg-cyan-100 text-cyan-700 border-cyan-200","Hậu Cần":"bg-amber-100 text-amber-700 border-amber-200","Học Việc":"bg-gray-100 text-gray-600 border-gray-200"},k=()=>`
    <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800 font-sans">
        ${h()}
        <div class="flex flex-col flex-1 w-full overflow-hidden">
            ${v()}
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-6">
                <div class="max-w-6xl mx-auto space-y-6">

                    <!-- Header -->
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <div class="flex items-center gap-2 mb-1 text-sm text-gray-400">
                                <a href="/admin/schedules" data-link class="hover:text-csr-orange transition-colors flex items-center gap-1">
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
                                    Lịch Trình
                                </a>
                                <span>/</span>
                                <span class="text-gray-600 font-medium">Quản Lý Nhân Sự</span>
                            </div>
                            <h1 class="text-2xl md:text-3xl font-black text-gray-800">👥 Quản Lý Nhân Sự (HDV)</h1>
                            <p class="text-gray-500 text-sm mt-1">Danh sách hướng dẫn viên, leader và nhân sự đoàn tour.</p>
                        </div>
                        <button id="btnAddGuide"
                            class="flex items-center gap-2 bg-csr-orange hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-bold shadow-md shadow-orange-200 transition-all hover:scale-[1.02] text-sm shrink-0">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
                            Thêm Nhân Sự
                        </button>
                    </div>

                    <!-- Filters -->
                    <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 flex flex-wrap gap-3 items-center">
                        <div class="relative flex-1 min-w-[200px]">
                            <input type="text" id="searchGuide" placeholder="Tìm tên, SĐT, CCCD..." class="w-full border border-gray-200 rounded-lg px-4 py-2.5 pl-9 text-sm focus:outline-none focus:border-csr-orange focus:ring-2 focus:ring-csr-orange/10">
                            <svg class="w-4 h-4 absolute left-3 top-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                        </div>
                        <select id="filterRole" class="border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-csr-orange">
                            <option value="">-- Tất cả chức vụ --</option>
                            ${g.map(n=>`<option value="${n}">${n}</option>`).join("")}
                        </select>
                        <span id="guideCount" class="text-sm text-gray-400 font-medium ml-auto">Đang tải...</span>
                    </div>

                    <!-- Table -->
                    <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm">
                                <thead>
                                    <tr class="border-b-2 border-gray-100 bg-gray-50 text-xs text-gray-400 uppercase tracking-wider">
                                        <th class="text-left px-4 py-3 font-bold">Nhân Sự</th>
                                        <th class="text-left px-4 py-3 font-bold">Chức Vụ</th>
                                        <th class="text-left px-4 py-3 font-bold">Ngày Sinh</th>
                                        <th class="text-left px-4 py-3 font-bold">CCCD / Passport</th>
                                        <th class="text-left px-4 py-3 font-bold hidden md:table-cell">Địa Chỉ</th>
                                        <th class="text-center px-4 py-3 font-bold">Thao Tác</th>
                                    </tr>
                                </thead>
                                <tbody id="guideTableBody">
                                    <tr>
                                        <td colspan="6" class="text-center py-16 text-gray-400">
                                            <div class="w-8 h-8 border-2 border-gray-200 border-t-csr-orange rounded-full animate-spin mx-auto mb-3"></div>
                                            Đang tải dữ liệu...
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <!-- Modal Thêm/Sửa HDV -->
    <div id="guideModal" class="fixed inset-0 z-50 hidden">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" id="guideModalBg"></div>
        <div class="relative flex items-center justify-center min-h-screen p-4">
            <div id="guideModalContent" class="bg-white rounded-2xl shadow-2xl w-full max-w-xl transform scale-95 opacity-0 transition-all duration-200">
                <div class="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 id="guideModalTitle" class="text-xl font-black text-gray-800">Thêm Nhân Sự</h2>
                    <button id="closeGuideModalBtn" class="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                </div>
                <form id="guideForm" class="p-6 space-y-4">
                    <input type="hidden" id="guide-id">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="sm:col-span-2">
                            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Họ và Tên <span class="text-red-500">*</span></label>
                            <input type="text" id="guide-name" required class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-csr-orange focus:ring-2 focus:ring-csr-orange/10" placeholder="Nguyễn Văn A">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Chức Vụ</label>
                            <select id="guide-role" class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-csr-orange">
                                ${g.map(n=>`<option value="${n}">${n}</option>`).join("")}
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Số Điện Thoại</label>
                            <input type="tel" id="guide-phone" class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-csr-orange" placeholder="0912 345 678">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Ngày Sinh</label>
                            <input type="date" id="guide-dob" class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-csr-orange">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">CCCD / Passport</label>
                            <input type="text" id="guide-cccd" class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-csr-orange font-mono" placeholder="012345678901">
                        </div>
                        <div class="sm:col-span-2">
                            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Địa Chỉ</label>
                            <input type="text" id="guide-address" class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-csr-orange" placeholder="Đà Lạt, Lâm Đồng">
                        </div>
                        <div class="sm:col-span-2">
                            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Ghi Chú</label>
                            <textarea id="guide-notes" rows="2" class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-csr-orange resize-none" placeholder="Kinh nghiệm, kỹ năng đặc biệt..."></textarea>
                        </div>
                    </div>
                    <div class="flex gap-3 pt-2">
                        <button type="button" id="cancelGuideBtn" class="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors">Hủy</button>
                        <button type="submit" id="submitGuideBtn" class="flex-1 px-4 py-3 rounded-xl bg-csr-orange text-white font-bold text-sm hover:bg-orange-600 transition-colors shadow-md shadow-orange-200">Lưu</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `,E=async()=>{let n=[];const p=d=>{if(!d)return"—";if(d.includes("-")){const[t,o,e]=d.split("-");return`${e}/${o}/${t}`}return d},b=d=>{const t=document.getElementById("guideTableBody"),o=document.getElementById("guideCount");if(t){if(o.textContent=`${d.length} nhân sự`,d.length===0){t.innerHTML=`
                <tr><td colspan="6" class="text-center py-16 text-gray-400">
                    <div class="text-4xl mb-3">👥</div>
                    <div class="font-medium">Chưa có nhân sự nào</div>
                    <p class="text-xs mt-1">Nhấn "Thêm Nhân Sự" để bắt đầu</p>
                </td></tr>`;return}t.innerHTML=d.map(e=>{const i=m[e.role]||m["Học Việc"];return`
            <tr class="border-b border-gray-50 hover:bg-orange-50/30 transition-colors group">
                <td class="px-4 py-3">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-csr-orange/20 to-orange-100 flex items-center justify-center text-csr-orange font-black text-sm shrink-0">${(e.full_name||"X").split(" ").slice(-2).map(y=>y[0]).join("").toUpperCase()}</div>
                        <div>
                            <div class="font-bold text-gray-900">${e.full_name}</div>
                            <div class="text-xs text-gray-400">${e.phone||"—"}</div>
                        </div>
                    </div>
                </td>
                <td class="px-4 py-3">
                    <span class="inline-block text-xs font-bold px-2.5 py-1 rounded-full border ${i}">${e.role||"—"}</span>
                </td>
                <td class="px-4 py-3 text-gray-600 text-xs">${p(e.dob)}</td>
                <td class="px-4 py-3 font-mono text-xs text-gray-600">${e.cccd||"—"}</td>
                <td class="px-4 py-3 text-xs text-gray-500 hidden md:table-cell max-w-[200px] truncate">${e.address||"—"}</td>
                <td class="px-4 py-3">
                    <div class="flex items-center justify-center gap-2">
                        <button class="edit-guide-btn p-2 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-colors" data-id="${e.id}" title="Sửa">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                        </button>
                        <button class="delete-guide-btn p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors" data-id="${e.id}" data-name="${e.full_name}" title="Xóa">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                        </button>
                    </div>
                </td>
            </tr>`}).join(""),document.querySelectorAll(".edit-guide-btn").forEach(e=>e.addEventListener("click",()=>u(e.getAttribute("data-id")))),document.querySelectorAll(".delete-guide-btn").forEach(e=>e.addEventListener("click",()=>x(e.getAttribute("data-id"),e.getAttribute("data-name"))))}},l=async()=>{try{n=await(await fetch("/api/guides")).json(),s()}catch(d){document.getElementById("guideTableBody").innerHTML=`<tr><td colspan="6" class="text-center py-10 text-red-400">Lỗi tải dữ liệu: ${d.message}</td></tr>`}},s=()=>{const d=(document.getElementById("searchGuide")?.value||"").toLowerCase().trim(),t=document.getElementById("filterRole")?.value||"",o=n.filter(e=>{const i=`${e.full_name} ${e.phone} ${e.cccd} ${e.address}`.toLowerCase();return(!d||i.includes(d))&&(!t||e.role===t)});b(o)},c=document.getElementById("guideModal"),a=document.getElementById("guideModalContent"),u=(d=null)=>{const t=d?n.find(o=>String(o.id)===String(d)):null;document.getElementById("guideModalTitle").textContent=t?"Chỉnh Sửa Nhân Sự":"Thêm Nhân Sự",document.getElementById("guide-id").value=t?.id||"",document.getElementById("guide-name").value=t?.full_name||"",document.getElementById("guide-role").value=t?.role||"Hướng Dẫn Viên",document.getElementById("guide-phone").value=t?.phone||"",document.getElementById("guide-dob").value=t?.dob||"",document.getElementById("guide-cccd").value=t?.cccd||"",document.getElementById("guide-address").value=t?.address||"",document.getElementById("guide-notes").value=t?.notes||"",c.classList.remove("hidden"),requestAnimationFrame(()=>{a.classList.remove("scale-95","opacity-0"),a.classList.add("scale-100","opacity-100")})},r=()=>{a.classList.add("scale-95","opacity-0"),setTimeout(()=>c.classList.add("hidden"),200)},x=async(d,t)=>{confirm(`Xóa nhân sự "${t}"? Họ sẽ bị xóa khỏi mọi lịch tour đã gán.`)&&(await fetch(`/api/guides?id=${d}`,{method:"DELETE"}),await l())};document.getElementById("btnAddGuide").addEventListener("click",()=>u()),document.getElementById("closeGuideModalBtn").addEventListener("click",r),document.getElementById("cancelGuideBtn").addEventListener("click",r),document.getElementById("guideModalBg").addEventListener("click",r),document.getElementById("searchGuide").addEventListener("input",s),document.getElementById("filterRole").addEventListener("change",s),document.getElementById("guideForm").addEventListener("submit",async d=>{d.preventDefault();const t=document.getElementById("submitGuideBtn");t.disabled=!0,t.textContent="Đang lưu...";const o={id:document.getElementById("guide-id").value||void 0,full_name:document.getElementById("guide-name").value.trim(),role:document.getElementById("guide-role").value,phone:document.getElementById("guide-phone").value.trim(),dob:document.getElementById("guide-dob").value,cccd:document.getElementById("guide-cccd").value.trim(),address:document.getElementById("guide-address").value.trim(),notes:document.getElementById("guide-notes").value.trim()};o.id||delete o.id;try{const e=await fetch("/api/guides",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!e.ok)throw new Error((await e.json()).error||"Server error");r(),await l()}catch(e){alert("Lỗi: "+e.message)}finally{t.disabled=!1,t.textContent="Lưu"}}),await l()};export{E as afterRender,k as render};
