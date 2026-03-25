import{S as T,H as C}from"./Header-CamAZjvb.js";const S=()=>`
    <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${T()}
        <div class="flex flex-col flex-1 w-full overflow-hidden">
            ${C()}
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
                <div class="max-w-7xl mx-auto">

                    <div class="flex justify-between items-end mb-6">
                        <div>
                            <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Thiết lập Đăng ký Tour</h1>
                            <p class="text-gray-500 text-sm">Cấu hình form đăng ký, điểm đón và dịch vụ bổ sung cho từng tour.</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-6">
                        <!-- Danh sách Tour -->
                        <div class="col-span-4">
                            <div class="glass-panel overflow-hidden">
                                <div class="p-4 border-b border-csr-border">
                                    <h3 class="font-bold text-gray-700 text-sm uppercase tracking-wider">Chọn Tour</h3>
                                </div>
                                <div id="ts-tour-list" class="divide-y divide-csr-border max-h-[70vh] overflow-y-auto">
                                    <div class="p-4 text-gray-400 text-sm text-center">Đang tải...</div>
                                </div>
                            </div>
                        </div>

                        <!-- Cấu hình -->
                        <div class="col-span-8">
                            <div class="glass-panel" id="ts-config-panel">
                                <div class="p-16 text-center text-gray-400">
                                    <svg class="w-12 h-12 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>
                                    <p class="font-medium">Chọn một tour để bắt đầu cấu hình</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    </div>
    `,B=()=>{let r=[],u=null;const b="/api/admin_tours",k=async()=>{try{const e=await(await fetch(b)).json();r=e.data||e,g();const s=new URLSearchParams(window.location.search).get("id");if(s){const n=r.find(i=>String(i.id)===String(s));n&&x(n)}}catch{document.getElementById("ts-tour-list").innerHTML='<div class="p-4 text-red-500 text-sm">Lỗi kết nối server.</div>'}},g=()=>{const t=document.getElementById("ts-tour-list");if(t){if(r.length===0){t.innerHTML='<div class="p-4 text-gray-400 text-sm text-center">Chưa có tour nào.</div>';return}t.innerHTML=r.map(e=>`
            <div class="ts-tour-item flex items-center gap-3 p-3 cursor-pointer hover:bg-orange-50 transition-colors ${u?.id===e.id?"bg-orange-50 border-l-2 border-csr-orange":""}"
                 data-id="${e.id}">
                <div class="w-10 h-10 rounded-xl bg-gray-100 overflow-hidden shrink-0">
                    <img src="${e.image||""}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/80x80/f3f4f6/9ca3af?text=?'" loading="lazy">
                </div>
                <div class="min-w-0">
                    <div class="font-bold text-sm text-gray-800 truncate">${e.name}</div>
                    <div class="text-xs text-gray-400">${e.type||""} · ${e.duration||""}</div>
                </div>
            </div>
        `).join("")}},x=t=>{u=t,g();const e=document.getElementById("ts-config-panel");if(!e)return;const s=t.form_config||{},n=s.step2||{},i=s.step3||{},h=t.pickup_points||[],d=t.services||[];e.innerHTML=`
        <div class="p-6 border-b border-csr-border flex items-center gap-3">
            <img src="${t.image}" class="w-12 h-12 rounded-xl object-cover" onerror="this.src='https://placehold.co/80x80/f3f4f6/9ca3af?text=?'">
            <div>
                <div class="font-bold text-lg text-gray-900">${t.name}</div>
                <div class="text-sm text-gray-400">${t.type||""} · ${t.duration||""} · ${parseInt(t.price||0).toLocaleString("vi-VN")}đ</div>
            </div>
            <div class="ml-auto">
                <button id="ts-save-btn" class="btn-primary text-sm px-5 py-2">Lưu cấu hình</button>
            </div>
        </div>

        <div class="p-6 space-y-8 overflow-y-auto max-h-[calc(70vh-80px)]">

            <!-- Bước 2: Hậu cần -->
            <section>
                <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">📦 Bước 2 — Thông tin hậu cần</h4>
                <div class="space-y-2">
                    ${[{key:"show_pickup",label:"Điểm đón"},{key:"show_medal_name",label:"Tên in huy chương"},{key:"show_vegetarian",label:"Ăn chay"},{key:"show_trekking_pole",label:"Mượn gậy trekking"},{key:"show_special_request",label:"Yêu cầu đặc biệt"}].map(o=>`
                        <label class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:border-orange-200 transition-colors">
                            <input type="checkbox" class="ts-step2-check w-4 h-4 rounded accent-csr-orange" data-key="${o.key}" ${n[o.key]!==!1?"checked":""}>
                            <span class="text-sm font-medium text-gray-700">${o.label}</span>
                        </label>
                    `).join("")}
                </div>

                <!-- Điểm đón manager -->
                <div class="mt-4" id="ts-pickup-section" ${n.show_pickup===!1?'style="display:none;"':""}>
                    <div class="flex justify-between items-center mb-2">
                        <h5 class="text-xs font-bold text-gray-500 uppercase tracking-wider">Danh sách điểm đón</h5>
                        <button id="ts-add-pickup" class="text-xs font-bold text-csr-orange hover:underline">+ Thêm điểm đón</button>
                    </div>
                    <div id="ts-pickups-list" class="space-y-2">
                        ${h.map((o,p)=>f(o,p)).join("")}
                    </div>
                </div>
            </section>

            <!-- Bước 3: Dịch vụ -->
            <section>
                <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">✨ Bước 3 — Dịch vụ & Mã giảm giá</h4>
                <label class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:border-orange-200 transition-colors mb-4">
                    <input type="checkbox" class="w-4 h-4 rounded accent-csr-orange" id="ts-show-coupon" ${i.show_coupon!==!1?"checked":""}>
                    <span class="text-sm font-medium text-gray-700">Cho phép nhập mã giảm giá</span>
                </label>

                <div class="flex justify-between items-center mb-2">
                    <h5 class="text-xs font-bold text-gray-500 uppercase tracking-wider">Các gói dịch vụ bổ sung</h5>
                    <button id="ts-add-service" class="text-xs font-bold text-csr-orange hover:underline">+ Thêm dịch vụ</button>
                </div>
                <div id="ts-services-list" class="space-y-2">
                    ${d.map((o,p)=>y(o,p)).join("")}
                </div>
                ${d.length===0?'<p class="text-xs text-gray-400 italic p-3">Chưa có dịch vụ nào. Nhấn "+ Thêm dịch vụ" để cấu hình.</p>':""}
            </section>

        </div>`,w(t)},f=(t,e)=>{const s=typeof t=="string"?t:t.label||"",n=typeof t=="string"?"":t.time||"";return`
        <div class="ts-pickup-row flex gap-2 items-center" data-index="${e}">
            <input type="text" class="ts-pickup-label input-field bg-gray-50 text-sm flex-1" value="${s}" placeholder="Tên điểm đón (VD: Quán 26)">
            <input type="text" class="ts-pickup-time input-field bg-gray-50 text-sm w-32" value="${n}" placeholder="Giờ (VD: 04:00)">
            <button class="ts-remove-pickup p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" data-index="${e}" title="Xóa">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>`},y=(t,e)=>`
        <div class="ts-service-row flex gap-2 items-start" data-index="${e}">
            <div class="flex-1 space-y-1">
                <input type="text" class="ts-srv-label input-field bg-gray-50 text-sm w-full" value="${t.label||""}" placeholder="Tên dịch vụ (VD: Thuê lều riêng)">
                <input type="text" class="ts-srv-desc input-field bg-gray-50 text-xs w-full" value="${t.description||""}" placeholder="Mô tả ngắn (tùy chọn)">
            </div>
            <div style="width:130px;">
                <input type="number" class="ts-srv-price input-field bg-gray-50 text-sm w-full" value="${t.price||0}" placeholder="Giá (VNĐ)">
            </div>
            <button class="ts-remove-service p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors mt-1" data-index="${e}" title="Xóa">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>`,w=t=>{document.querySelectorAll(".ts-step2-check").forEach(e=>{e.addEventListener("change",()=>{if(e.dataset.key==="show_pickup"){const s=document.getElementById("ts-pickup-section");s&&(s.style.display=e.checked?"":"none")}})}),document.getElementById("ts-add-pickup")?.addEventListener("click",()=>{const e=document.getElementById("ts-pickups-list"),s=e.children.length,n=document.createElement("div");n.innerHTML=f({label:"",time:""},s),e.appendChild(n.firstElementChild),v()}),document.getElementById("ts-add-service")?.addEventListener("click",()=>{const e=document.getElementById("ts-services-list"),s=e.children.length,n=e.parentElement.querySelector("p");n&&n.remove();const i=document.createElement("div");i.innerHTML=y({label:"",description:"",price:0},s),e.appendChild(i.firstElementChild),v()}),v(),document.getElementById("ts-save-btn")?.addEventListener("click",()=>$(t))},v=()=>{document.querySelectorAll(".ts-remove-pickup").forEach(t=>{t.onclick=()=>t.closest(".ts-pickup-row").remove()}),document.querySelectorAll(".ts-remove-service").forEach(t=>{t.onclick=()=>t.closest(".ts-service-row").remove()})},$=async t=>{const e=document.getElementById("ts-save-btn");e&&(e.textContent="Đang lưu...",e.disabled=!0);const s={};document.querySelectorAll(".ts-step2-check").forEach(c=>{s[c.dataset.key]=c.checked});const n=document.querySelectorAll(".ts-pickup-row"),i=[];n.forEach(c=>{const l=c.querySelector(".ts-pickup-label")?.value.trim(),a=c.querySelector(".ts-pickup-time")?.value.trim();l&&i.push({label:l,time:a})});const h=document.querySelectorAll(".ts-service-row"),d=[];h.forEach((c,l)=>{const a=c.querySelector(".ts-srv-label")?.value.trim(),m=c.querySelector(".ts-srv-desc")?.value.trim(),E=parseInt(c.querySelector(".ts-srv-price")?.value||"0");a&&d.push({id:`srv_${l}_${Date.now()}`,label:a,description:m||"",price:E})});const o={show_coupon:document.getElementById("ts-show-coupon")?.checked!==!1},p={step2:s,step3:o};try{const l=await(await fetch(`/api/admin_tours?id=${t.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({form_config:p,pickup_points:i,services:d})})).json();if(l.success){const a=r.findIndex(m=>m.id===t.id);a!==-1&&(r[a]=l.data||{...r[a],form_config:p,pickup_points:i,services:d},u=r[a]),e&&(e.textContent="✅ Đã lưu!",e.disabled=!1),setTimeout(()=>{e&&(e.textContent="Lưu cấu hình")},2e3)}else throw new Error(l.message||"Save failed")}catch(c){alert("Lỗi khi lưu: "+c.message),e&&(e.textContent="Lưu cấu hình",e.disabled=!1)}};document.getElementById("ts-tour-list")?.addEventListener("click",t=>{const e=t.target.closest(".ts-tour-item");if(!e)return;const s=parseInt(e.dataset.id),n=r.find(i=>i.id===s);n&&x(n)}),k()};export{B as afterRender,S as render};
