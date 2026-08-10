import{S as T,H as C}from"./Header-CARqqxjt.js";const q=()=>`
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
    `,A=()=>{let h=[],m=null;const L="/api/admin_tours",M=async()=>{try{const e=await(await fetch(L)).json();h=e.data||e,x();const s=new URLSearchParams(window.location.search).get("id");if(s){const i=h.find(o=>String(o.id)===String(s));i&&y(i)}}catch{document.getElementById("ts-tour-list").innerHTML='<div class="p-4 text-red-500 text-sm">Lỗi kết nối server.</div>'}},x=()=>{const t=document.getElementById("ts-tour-list");if(t){if(h.length===0){t.innerHTML='<div class="p-4 text-gray-400 text-sm text-center">Chưa có tour nào.</div>';return}t.innerHTML=h.map(e=>`
            <div class="ts-tour-item flex items-center gap-3 p-3 cursor-pointer hover:bg-orange-50 transition-colors ${m?.id===e.id?"bg-orange-50 border-l-2 border-csr-orange":""}"
                 data-id="${e.id}">
                <div class="w-10 h-10 rounded-xl bg-gray-100 overflow-hidden shrink-0">
                    <img src="${e.image||""}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/80x80/f3f4f6/9ca3af?text=?'" loading="lazy">
                </div>
                <div class="min-w-0">
                    <div class="font-bold text-sm text-gray-800 truncate">${e.name}</div>
                    <div class="text-xs text-gray-400">${e.type||""} · ${e.duration||""}</div>
                </div>
            </div>
        `).join("")}},y=t=>{m=t,x();const e=document.getElementById("ts-config-panel");if(!e)return;const s=t.form_config||{},i=s.step2||{},o=s.step3||{},p=t.pickup_points||[],c=t.services||[];e.innerHTML=`
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
                    ${[{key:"show_pickup",label:"Điểm đón"},{key:"show_medal_name",label:"Tên in huy chương"},{key:"show_vegetarian",label:"Ăn chay"},{key:"show_trekking_pole",label:"Mượn gậy trekking"},{key:"show_special_request",label:"Yêu cầu đặc biệt"}].map(a=>`
                        <label class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:border-orange-200 transition-colors">
                            <input type="checkbox" class="ts-step2-check w-4 h-4 rounded accent-csr-orange" data-key="${a.key}" ${i[a.key]!==!1?"checked":""}>
                            <span class="text-sm font-medium text-gray-700">${a.label}</span>
                        </label>
                    `).join("")}
                </div>

                <!-- Điểm đón manager -->
                <div class="mt-4" id="ts-pickup-section" ${i.show_pickup===!1?'style="display:none;"':""}>
                    <div class="flex justify-between items-center mb-2">
                        <h5 class="text-xs font-bold text-gray-500 uppercase tracking-wider">Danh sách điểm đón</h5>
                        <button id="ts-add-pickup" class="text-xs font-bold text-csr-orange hover:underline">+ Thêm điểm đón</button>
                    </div>
                    <div id="ts-pickups-list" class="space-y-2">
                        ${p.map((a,r)=>b(a,r)).join("")}
                    </div>
                </div>
            </section>

            <!-- Bước 3: Dịch vụ -->
            <section>
                <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">✨ Bước 3 — Dịch vụ & Mã giảm giá</h4>
                <label class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:border-orange-200 transition-colors mb-4">
                    <input type="checkbox" class="w-4 h-4 rounded accent-csr-orange" id="ts-show-coupon" ${o.show_coupon!==!1?"checked":""}>
                    <span class="text-sm font-medium text-gray-700">Cho phép nhập mã giảm giá</span>
                </label>

                <div class="flex justify-between items-center mb-2">
                    <h5 class="text-xs font-bold text-gray-500 uppercase tracking-wider">Các gói dịch vụ bổ sung</h5>
                    <button id="ts-add-service" class="text-xs font-bold text-csr-orange hover:underline">+ Thêm dịch vụ</button>
                </div>
                <div id="ts-services-list" class="space-y-2">
                    ${c.map((a,r)=>w(a,r)).join("")}
                </div>
                ${c.length===0?'<p class="text-xs text-gray-400 italic p-3">Chưa có dịch vụ nào. Nhấn "+ Thêm dịch vụ" để cấu hình.</p>':""}
            </section>

        </div>`,B(t)},b=(t,e)=>{const s=typeof t=="string"?t:t.label||"",i=typeof t=="string"?"":t.time||"";return`
        <div class="ts-pickup-row flex gap-2 items-center" data-index="${e}">
            <input type="text" class="ts-pickup-label input-field bg-gray-50 text-sm flex-1" value="${s}" placeholder="Tên điểm đón (VD: Quán 26)">
            <input type="text" class="ts-pickup-time input-field bg-gray-50 text-sm w-32" value="${i}" placeholder="Giờ (VD: 04:00)">
            <button class="ts-remove-pickup p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" data-index="${e}" title="Xóa">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>`},w=(t,e)=>`
        <div class="ts-service-row flex gap-3 items-start p-3 bg-gray-50 rounded-xl border border-gray-100" data-index="${e}">

            <!-- Ô upload ảnh -->
            <div class="ts-img-upload-area flex-shrink-0 w-20 h-20 rounded-xl border-2 border-dashed border-gray-300 overflow-hidden cursor-pointer relative group hover:border-csr-orange transition-colors"
                 style="min-width:80px; min-height:80px;"
                 onclick="document.getElementById('ts-img-input-${e}').click()"
                 ondragover="event.preventDefault(); this.classList.add('border-csr-orange','bg-orange-50');"
                 ondragleave="this.classList.remove('border-csr-orange','bg-orange-50');"
                 ondrop="event.preventDefault(); this.classList.remove('border-csr-orange','bg-orange-50'); window.handleServiceImgDrop(event, ${e});">
                <!-- Preview ảnh nếu đã có -->
                ${t.image?`<img src="${t.image}" class="w-full h-full object-cover ts-img-preview" id="ts-img-preview-${e}">`:`<div id="ts-img-preview-${e}" class="w-full h-full flex flex-col items-center justify-center text-gray-300 text-center p-1">
                            <svg class="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                            <span style="font-size:9px; font-weight:700; text-transform:uppercase;">Thêm ảnh</span>
                       </div>`}
                <!-- Overlay khi hover để đổi ảnh -->
                ${t.image?`<div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span style="font-size:9px; color:white; font-weight:700;">ĐỔI ẢNH</span>
                </div>`:""}
                <input type="file" id="ts-img-input-${e}" accept="image/*" class="hidden ts-img-file-input" data-row="${e}">
            </div>
            <!-- Hidden input lưu URL ảnh sau khi upload -->
            <input type="hidden" class="ts-srv-image" value="${t.image||""}">

            <!-- Thông tin dịch vụ -->
            <div class="flex-1 space-y-2">
                <input type="text" class="ts-srv-label input-field bg-white text-sm w-full" value="${t.label||""}" placeholder="Tên dịch vụ (VD: Áo khoác CSR)">
                <input type="text" class="ts-srv-desc input-field bg-white text-xs w-full" value="${t.description||""}" placeholder="Mô tả ngắn (tùy chọn)">
            </div>

            <!-- Giá -->
            <div style="width:120px;" class="flex-shrink-0">
                <input type="number" class="ts-srv-price input-field bg-white text-sm w-full" value="${t.price||0}" placeholder="Giá (VNĐ)">
                <div class="text-[10px] text-gray-400 text-center mt-1">đồng</div>
            </div>

            <!-- Nút xóa -->
            <button class="ts-remove-service p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors mt-1 flex-shrink-0" data-index="${e}" title="Xóa dịch vụ">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>`,B=t=>{document.querySelectorAll(".ts-step2-check").forEach(e=>{e.addEventListener("change",()=>{if(e.dataset.key==="show_pickup"){const s=document.getElementById("ts-pickup-section");s&&(s.style.display=e.checked?"":"none")}})}),document.getElementById("ts-add-pickup")?.addEventListener("click",()=>{const e=document.getElementById("ts-pickups-list"),s=e.children.length,i=document.createElement("div");i.innerHTML=b({label:"",time:""},s),e.appendChild(i.firstElementChild),f()}),document.getElementById("ts-add-service")?.addEventListener("click",()=>{const e=document.getElementById("ts-services-list"),s=e.children.length,i=e.parentElement.querySelector("p");i&&i.remove();const o=document.createElement("div");o.innerHTML=w({label:"",description:"",price:0,image:""},s),e.appendChild(o.firstElementChild),f(),$()}),f(),$(),document.getElementById("ts-save-btn")?.addEventListener("click",()=>S(t))},I=t=>new Promise((e,s)=>{const o=new FileReader;o.onload=p=>{const c=new Image;c.onload=()=>{let{width:a,height:r}=c;(a>1e3||r>1e3)&&(a>r?(r=Math.round(r*1e3/a),a=1e3):(a=Math.round(a*1e3/r),r=1e3));let n=.85,l=1,d="",v=1/0;const g=2*1024*1024,u=document.createElement("canvas"),E=u.getContext("2d");for(;v>g&&n>.1;)u.width=Math.round(a*l),u.height=Math.round(r*l),E.clearRect(0,0,u.width,u.height),E.drawImage(c,0,0,u.width,u.height),d=u.toDataURL("image/jpeg",n),v=(d.split(",")[1]||d).length*.75,v>g&&(n>.5?n-=.1:l*=.8);console.log(`[compressImage] Nén hoàn tất: ${Math.round(v/1024)}KB (Chất lượng: ${Math.round(n*100)}%, Tỷ lệ: ${Math.round(l*100)}%)`),e(d)},c.onerror=s,c.src=p.target.result},o.onerror=s,o.readAsDataURL(t)}),k=async(t,e)=>{const s=document.getElementById(`ts-img-preview-${e}`),i=document.querySelector(`.ts-service-row[data-index="${e}"]`),o=i?.querySelector(".ts-srv-image");if(!(!s||!i)){s.outerHTML=`<div id="ts-img-preview-${e}" class="w-full h-full flex items-center justify-center">
            <svg class="animate-spin w-6 h-6 text-csr-orange" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
        </div>`;try{const p=await I(t),c=(t.name||"service").replace(/\.[^.]+$/,""),r=await(await fetch("/api/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:p,filename:c})})).json();if(!r.success)throw new Error(r.error||"Upload thất bại");const n=r.url,l=document.getElementById(`ts-img-preview-${e}`);l&&(l.outerHTML=`<img src="${n}" class="w-full h-full object-cover" id="ts-img-preview-${e}">`),o&&(o.value=n),console.log(`[upload] ✅ Row ${e}: ${r.stats?.inputKB}KB → ${r.stats?.outputKB}KB (${r.stats?.savePct}% nhẹ hơn)`)}catch(p){console.error("[upload] ❌",p);const c=document.getElementById(`ts-img-preview-${e}`);c&&(c.outerHTML=`<div id="ts-img-preview-${e}" class="w-full h-full flex items-center justify-center text-red-400 text-[9px] text-center p-1">Lỗi upload</div>`),alert("Lỗi upload ảnh: "+p.message)}}},$=()=>{document.querySelectorAll(".ts-img-file-input").forEach(t=>{t.dataset.bound||(t.dataset.bound="1",t.addEventListener("change",e=>{const s=e.target.files?.[0],i=parseInt(t.dataset.row);s&&!isNaN(i)&&k(s,i)}))})};window.handleServiceImgDrop=(t,e)=>{const s=t.dataTransfer?.files?.[0];s&&s.type.startsWith("image/")&&k(s,e)};const f=()=>{document.querySelectorAll(".ts-remove-pickup").forEach(t=>{t.onclick=()=>t.closest(".ts-pickup-row").remove()}),document.querySelectorAll(".ts-remove-service").forEach(t=>{t.onclick=()=>t.closest(".ts-service-row").remove()})},S=async t=>{const e=document.getElementById("ts-save-btn");e&&(e.textContent="Đang lưu...",e.disabled=!0);const s={};document.querySelectorAll(".ts-step2-check").forEach(n=>{s[n.dataset.key]=n.checked});const i=document.querySelectorAll(".ts-pickup-row"),o=[];i.forEach(n=>{const l=n.querySelector(".ts-pickup-label")?.value.trim(),d=n.querySelector(".ts-pickup-time")?.value.trim();l&&o.push({label:l,time:d})});const p=document.querySelectorAll(".ts-service-row"),c=[];p.forEach((n,l)=>{const d=n.querySelector(".ts-srv-label")?.value.trim(),v=n.querySelector(".ts-srv-desc")?.value.trim(),g=parseInt(n.querySelector(".ts-srv-price")?.value||"0"),u=n.querySelector(".ts-srv-image")?.value.trim()||"";d&&c.push({id:`srv_${l}_${Date.now()}`,label:d,description:v||"",price:g,image:u})});const a={show_coupon:document.getElementById("ts-show-coupon")?.checked!==!1},r={step2:s,step3:a};try{const l=await(await fetch(`/api/admin_tours?id=${t.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({form_config:r,pickup_points:o,services:c})})).json();if(l.success){const d=h.findIndex(v=>v.id===t.id);d!==-1&&(h[d]=l.data||{...h[d],form_config:r,pickup_points:o,services:c},m=h[d]),e&&(e.textContent="✅ Đã lưu!",e.disabled=!1),setTimeout(()=>{e&&(e.textContent="Lưu cấu hình")},2e3)}else throw new Error(l.message||"Save failed")}catch(n){alert("Lỗi khi lưu: "+n.message),e&&(e.textContent="Lưu cấu hình",e.disabled=!1)}};document.getElementById("ts-tour-list")?.addEventListener("click",t=>{const e=t.target.closest(".ts-tour-item");if(!e)return;const s=parseInt(e.dataset.id),i=h.find(o=>o.id===s);i&&y(i)}),M()};export{A as afterRender,q as render};
