import{S as ee,H as te}from"./Header-CARqqxjt.js";const se=()=>`
  <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
    ${ee()}
    <div class="flex flex-col flex-1 w-full overflow-hidden">
      ${te()}
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-6">
        <div class="max-w-7xl mx-auto space-y-5">
          <!-- Header -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 class="text-2xl md:text-3xl font-black text-gray-800">📅 Lịch Tổng Quan</h1>
              <p class="text-gray-500 text-sm mt-1">Xem toàn bộ lịch tour và lịch làm việc của nhân sự trong tháng.</p>
            </div>
            <div class="flex items-center gap-2 flex-wrap">
              <select id="calFilterTour" class="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-csr-orange bg-white">
                <option value="">🗺️ Tất cả Tour</option>
              </select>
              <select id="calFilterGuide" class="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-csr-orange bg-white">
                <option value="">👥 Tất cả Nhân Sự</option>
              </select>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-3" id="calStats">
            <div class="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <div class="text-2xl font-black text-csr-orange" id="statTours">—</div>
              <div class="text-xs text-gray-500 mt-1">Lịch trong tháng</div>
            </div>
            <div class="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <div class="text-2xl font-black text-green-600" id="statGuests">—</div>
              <div class="text-xs text-gray-500 mt-1">Khách đã đặt</div>
            </div>
            <div class="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <div class="text-2xl font-black text-indigo-600" id="statGuides">—</div>
              <div class="text-xs text-gray-500 mt-1">Nhân sự hoạt động</div>
            </div>
          </div>

          <!-- Calendar Nav -->
          <div class="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <button id="calPrev" class="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <div class="flex items-center gap-3">
                <h2 id="calTitle" class="text-lg font-black text-gray-800">Tháng</h2>
                <button id="calToday" class="px-3 py-1 text-xs font-bold bg-csr-orange/10 text-csr-orange rounded-lg hover:bg-csr-orange/20 transition-colors">Hôm nay</button>
              </div>
              <button id="calNext" class="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
            <!-- Day labels -->
            <div class="grid grid-cols-7 border-b border-gray-100">
              ${["CN","T2","T3","T4","T5","T6","T7"].map(w=>`<div class="py-2 text-center text-[11px] font-bold text-gray-400 uppercase">${w}</div>`).join("")}
            </div>
            <!-- Grid -->
            <div id="calGrid" class="grid grid-cols-7 min-h-[480px]"></div>
          </div>
        </div>
      </main>
    </div>
  </div>

  <!-- Quick View Modal -->
  <div id="calModal" class="fixed inset-0 z-[60] bg-gray-900/60 backdrop-blur-sm hidden items-center justify-center p-4">
    <div id="calModalContent" class="bg-white rounded-2xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between p-5 border-b border-gray-100">
        <div>
          <h3 id="calModalTitle" class="text-lg font-black text-gray-800"></h3>
          <p id="calModalSub" class="text-xs text-gray-400 mt-0.5"></p>
        </div>
        <button id="calModalClose" class="p-2 rounded-lg hover:bg-gray-100 text-gray-400">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div id="calModalBody" class="p-5 space-y-4"></div>
      <div class="p-5 border-t border-gray-100 flex gap-3" id="calModalFooter"></div>
    </div>
  </div>

  <!-- Note Modal -->
  <div id="noteModal" class="fixed inset-0 z-[70] bg-gray-900/60 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white rounded-2xl w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between p-5 border-b border-gray-100">
        <h3 id="noteModalTitle" class="text-base font-black text-gray-800"></h3>
        <button id="noteModalClose" class="p-2 rounded-lg hover:bg-gray-100 text-gray-400">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="p-5 space-y-3">
        <div id="noteExistingList" class="space-y-2 mb-3"></div>
        <div class="border-t border-gray-100 pt-3">
          <p class="text-xs font-bold text-gray-500 uppercase mb-2" id="noteFormLabel">➕ Thêm ghi chú mới</p>
          <input id="noteTitle" type="text" placeholder="Tên công việc / tiêu đề *" class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-csr-orange mb-2">
          <textarea id="noteContent" rows="2" placeholder="Nội dung ghi chú (tùy chọn)" class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-csr-orange resize-none mb-2"></textarea>
          <div class="flex gap-2 mb-3" id="noteColorPicker">
            <button class="note-color-btn w-6 h-6 rounded-full bg-blue-500 ring-2 ring-offset-1 ring-blue-500" data-color="blue"></button>
            <button class="note-color-btn w-6 h-6 rounded-full bg-green-500" data-color="green"></button>
            <button class="note-color-btn w-6 h-6 rounded-full bg-red-500" data-color="red"></button>
            <button class="note-color-btn w-6 h-6 rounded-full bg-yellow-400" data-color="yellow"></button>
            <button class="note-color-btn w-6 h-6 rounded-full bg-purple-500" data-color="purple"></button>
            <button class="note-color-btn w-6 h-6 rounded-full bg-gray-400" data-color="gray"></button>
          </div>
          <div class="flex gap-2">
            <button id="noteSaveBtn" class="flex-1 py-2.5 bg-csr-orange text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all">Lưu Ghi Chú</button>
            <button id="noteModalCloseFt" class="px-4 py-2.5 border border-gray-200 text-gray-500 text-sm font-bold rounded-xl hover:bg-gray-50">Hủy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`,re=()=>{let w=[],M=[],E=[],b=new Date,L="",_="",h="blue",j=null;const k={blue:"bg-blue-100 text-blue-700 border-blue-200",green:"bg-green-100 text-green-700 border-green-200",red:"bg-red-100 text-red-700 border-red-200",yellow:"bg-yellow-100 text-yellow-700 border-yellow-200",purple:"bg-purple-100 text-purple-700 border-purple-200",gray:"bg-gray-100 text-gray-600 border-gray-200"},H={blue:"bg-blue-500",green:"bg-green-500",red:"bg-red-500",yellow:"bg-yellow-400",purple:"bg-purple-500",gray:"bg-gray-400"},A={Leader:"bg-purple-100 text-purple-700","Hướng Dẫn Viên":"bg-blue-100 text-blue-700",Photo:"bg-pink-100 text-pink-700",Guider:"bg-cyan-100 text-cyan-700","Hậu Cần":"bg-amber-100 text-amber-700","Học Việc":"bg-gray-100 text-gray-600"};let N="sale";try{N=JSON.parse(localStorage.getItem("csr_user")||"{}").role||"sale"}catch{}const V=()=>{const t=b.getFullYear(),e=b.getMonth();return`${t}-${String(e+1).padStart(2,"0")}`},$=async()=>{try{E=await(await fetch(`/api/calendar-notes?month=${V()}`)).json()}catch{E=[]}},z=async()=>{m();const[t,e,c]=await Promise.all([fetch("/api/schedules"),fetch("/api/guides"),fetch("/api/tours")]);w=await t.json(),M=await e.json();const g=await c.json(),y=document.getElementById("calFilterTour");g.forEach(s=>{const l=document.createElement("option");l.value=s.name,l.textContent=s.name,y.appendChild(l)});const d=document.getElementById("calFilterGuide");M.forEach(s=>{const l=document.createElement("option");l.value=s.id,l.textContent=s.full_name,d.appendChild(l)}),await $(),m()},X=()=>{const t=b.getFullYear(),e=b.getMonth();return w.filter(c=>{const g=(c.start_date||"").split("T")[0],[y,d]=g.split("-").map(Number);return!(y!==t||d!==e+1||L&&c.tour_name!==L||_&&!(c.assigned_guides||[]).some(l=>String(l.id)===String(_)))})},m=()=>{const t=b.getFullYear(),e=b.getMonth(),c=["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"];document.getElementById("calTitle").textContent=`${c[e]} / ${t}`;const g=X(),y=g.reduce((n,r)=>n+(parseInt(r.booked_count)||0),0),d=new Set(g.flatMap(n=>(n.assigned_guides||[]).map(r=>r.id)));document.getElementById("statTours").textContent=g.length,document.getElementById("statGuests").textContent=y,document.getElementById("statGuides").textContent=d.size;const s={};g.forEach(n=>{const r=(n.start_date||"").split("T")[0];s[r]||(s[r]=[]),s[r].push(n)});const l={};E.forEach(n=>{const r=n.date.split("T")[0];l[r]||(l[r]=[]),l[r].push(n)});const v=new Date(t,e,1).getDay(),a=new Date(t,e+1,0).getDate(),i=new Date;i.setHours(0,0,0,0);let o="";for(let n=0;n<v;n++)o+='<div class="min-h-[80px] border-r border-b border-gray-100 bg-gray-50/50 p-1"></div>';for(let n=1;n<=a;n++){const r=new Date(t,e,n),f=`${t}-${String(e+1).padStart(2,"0")}-${String(n).padStart(2,"0")}`,C=r.getTime()===i.getTime(),O=s[f]||[],J=O.slice(0,3).map(p=>{const S=parseInt(p.booked_count)||0,I=parseInt(p.slots)||0,q=Math.max(0,I-S),Q=q<=0?"bg-red-500":q<=3?"bg-orange-500":"bg-green-500",K=(p.assigned_guides||[]).slice(0,2).map(B=>{const W=(B.full_name||"X").split(" ").slice(-1)[0][0].toUpperCase();return`<span class="inline-flex items-center justify-center w-5 h-5 rounded-full text-[9px] font-black ${A[B.role]||"bg-gray-100 text-gray-600"}" title="${B.full_name} (${B.role})">${W}</span>`}).join(""),Z=p.tour_name.split(" ").slice(0,2).join(" ");return`<div class="cal-sch-badge rounded-md px-1.5 py-1 bg-csr-orange/8 border border-csr-orange/20 cursor-pointer hover:bg-csr-orange/15 transition-colors mb-0.5" data-id="${p.id}">
                    <div class="flex items-center gap-1">
                        <span class="w-2 h-2 rounded-full ${Q} shrink-0"></span>
                        <span class="text-[10px] font-bold text-gray-700 truncate flex-1">${Z}</span>
                    </div>
                    <div class="flex items-center gap-0.5 mt-0.5">
                        <span class="text-[9px] text-gray-400">${S}/${I}</span>
                        <div class="flex gap-0.5 ml-1">${K}</div>
                    </div>
                </div>`}).join(""),U=O.length>3?`<div class="text-[9px] text-csr-orange font-bold text-center">+${O.length-3} tour</div>`:"",Y=(l[f]||[]).map(p=>{const S=k[p.color]||k.blue,I=H[p.color]||H.blue;return`<div class="cal-note-badge rounded-md px-1.5 py-0.5 border cursor-pointer ${S} mb-0.5 flex items-center gap-1" data-note-id="${p.id}" title="${p.note||p.title}">
                    <span class="w-1.5 h-1.5 rounded-full ${I} shrink-0"></span>
                    <span class="text-[10px] font-bold truncate">📝 ${p.title}</span>
                </div>`}).join("");o+=`
            <div class="cal-day-cell min-h-[80px] border-r border-b border-gray-100 p-1 ${C?"bg-csr-orange/5 ring-2 ring-inset ring-csr-orange/30":"hover:bg-gray-50"} transition-colors cursor-pointer" data-date="${f}">
                <div class="text-right mb-1">
                    <span class="text-xs font-bold ${C?"bg-csr-orange text-white rounded-full w-6 h-6 inline-flex items-center justify-center":"text-gray-500"}">${n}</span>
                </div>
                ${J}${U}${Y}
            </div>`}const u=v+a,x=u%7===0?0:7-u%7;for(let n=0;n<x;n++)o+='<div class="min-h-[80px] border-r border-b border-gray-100 bg-gray-50/50 p-1"></div>';document.getElementById("calGrid").innerHTML=o,document.querySelectorAll(".cal-sch-badge").forEach(n=>{n.addEventListener("click",r=>{r.stopPropagation(),D(n.getAttribute("data-id"))})}),document.querySelectorAll(".cal-note-badge").forEach(n=>{n.addEventListener("click",r=>{r.stopPropagation();const f=E.find(C=>String(C.id)===n.dataset.noteId);f&&F(f.date.split("T")[0],f)})}),document.querySelectorAll(".cal-day-cell").forEach(n=>{n.addEventListener("click",()=>F(n.dataset.date))})},D=async t=>{const e=w.find(o=>String(o.id)===String(t));if(!e)return;const c=document.getElementById("calModal");c.classList.remove("hidden"),c.classList.add("flex");const g=new Date(e.start_date).toLocaleDateString("vi-VN"),y=new Date(e.end_date).toLocaleDateString("vi-VN"),d=parseInt(e.booked_count)||0,s=parseInt(e.slots)||0,l=e.assigned_guides||[];document.getElementById("calModalTitle").textContent=e.tour_name,document.getElementById("calModalSub").textContent=`${g} → ${y} • ${d}/${s} chỗ${e.group_label?" • "+e.group_label:""}`;const v=l.length===0?'<p class="text-gray-400 text-sm italic">Chưa có nhân sự được phân công.</p>':l.map(o=>{const u=A[o.role]||"bg-gray-100 text-gray-600",x=(o.full_name||"X").split(" ").slice(-2).map(r=>r[0]).join("").toUpperCase(),n=N==="admin"?`<button class="modal-unassign-btn px-2 py-1 rounded-lg text-xs bg-red-50 text-red-500 hover:bg-red-100 transition-colors" data-guide-id="${o.id}" data-sch-id="${e.id}">✕</button>`:"";return`<div class="flex items-center gap-3 p-2.5 rounded-xl border border-gray-100 hover:bg-gray-50">
                    <div class="w-9 h-9 rounded-full bg-gradient-to-br from-csr-orange/20 to-orange-100 flex items-center justify-center text-csr-orange font-black text-xs shrink-0">${x}</div>
                    <div class="flex-1">
                        <div class="font-bold text-sm text-gray-900">${o.full_name}</div>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${u}">${o.role}</span>
                        ${o.phone?`<span class="text-xs text-gray-400 ml-2">${o.phone}</span>`:""}
                    </div>
                    ${n}
                </div>`}).join("");let a="";if(N==="admin"){const o=M.filter(u=>!l.some(x=>x.id===u.id));o.length>0&&(a=`
                <div class="border-t border-gray-100 pt-3">
                    <p class="text-xs font-bold text-gray-500 uppercase mb-2">Thêm Nhân Sự</p>
                    <div class="flex gap-2">
                        <select id="modalAssignSelect" class="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-csr-orange">
                            <option value="">-- Chọn nhân sự --</option>${o.map(x=>`<option value="${x.id}">${x.full_name} (${x.role})</option>`).join("")}
                        </select>
                        <button id="modalAssignBtn" data-sch-id="${e.id}" class="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors">+ Thêm</button>
                    </div>
                </div>`)}document.getElementById("calModalBody").innerHTML=`
            <div class="space-y-2">
                <div class="flex items-center gap-4 text-sm text-gray-600 flex-wrap">
                    ${e.zalo_link?`<a href="${e.zalo_link}" target="_blank" class="flex items-center gap-1 text-blue-600 hover:underline text-xs font-medium">🔗 Link Zalo Nhóm</a>`:""}
                    <span class="text-xs">🚗 ${e.vehicle_type==="limo_34"?"Limousine 34 chỗ":e.vehicle_type==="sleeper_45"?"Giường nằm 45":"Solati 16 chỗ"}</span>
                    <span class="text-xs font-bold ${d>=s?"text-red-500":d>=s*.8?"text-orange-500":"text-green-600"}">${d>=s?"Hết chỗ":s-d<=3?`Còn ${s-d} chỗ`:`Còn ${s-d} chỗ trống`}</span>
                </div>
            </div>
            <div>
                <p class="text-xs font-bold text-gray-500 uppercase mb-2">👥 Nhân Sự (${l.length} người)</p>
                <div class="space-y-1.5">${v}</div>
            </div>
            ${a}`,document.getElementById("calModalFooter").innerHTML=`
            <a href="/admin/roster?tour=${encodeURIComponent(e.tour_name)}&date=${e.start_date?.split("T")[0]}&scheduleId=${e.id}&groupLabel=${encodeURIComponent(e.group_label||"")}&vehicleType=${encodeURIComponent(e.vehicle_type||"solati_16")}" data-link
               class="flex-1 py-2.5 bg-csr-orange text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all text-center">
               📋 Xem Danh Sách Đoàn
            </a>
            <button id="calModalCloseFt" class="px-4 py-2.5 border border-gray-200 text-gray-500 text-sm font-bold rounded-xl hover:bg-gray-50 transition-all">Đóng</button>`,document.querySelectorAll(".modal-unassign-btn").forEach(o=>{o.addEventListener("click",async()=>{o.textContent="...",o.disabled=!0,await fetch("/api/guides?action=unassign",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({schedule_id:parseInt(o.dataset.schId),guide_id:parseInt(o.dataset.guideId)})}),await P(),D(t)})});const i=document.getElementById("modalAssignBtn");i&&i.addEventListener("click",async()=>{const o=document.getElementById("modalAssignSelect");o.value&&(i.textContent="...",i.disabled=!0,await fetch("/api/guides?action=assign",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({schedule_id:parseInt(i.dataset.schId),guide_id:parseInt(o.value)})}),await P(),D(t))}),document.getElementById("calModalCloseFt")?.addEventListener("click",G)},G=()=>{const t=document.getElementById("calModal");t.classList.add("hidden"),t.classList.remove("flex")},P=async()=>{w=await(await fetch("/api/schedules")).json(),m()},F=(t,e=null)=>{j=e?e.id:null;const g=new Date(t+"T00:00:00").toLocaleDateString("vi-VN",{weekday:"long",day:"2-digit",month:"2-digit",year:"numeric"});document.getElementById("noteModalTitle").textContent=`📝 Ghi chú — ${g}`,document.getElementById("noteTitle").value=e?e.title:"",document.getElementById("noteContent").value=e&&e.note||"",h=e&&e.color||"blue",document.querySelectorAll(".note-color-btn").forEach(a=>{a.className=a.className.replace(/ring-2 ring-offset-1 ring-\S+/,"").trim(),a.dataset.color===h&&a.classList.add("ring-2","ring-offset-1",`ring-${h}-500`)});const d=E.filter(a=>a.date.split("T")[0]===t&&(!e||a.id!==e.id)).map(a=>`<div class="flex items-center gap-2 p-2 rounded-lg border ${k[a.color]||k.blue}">
                <span class="flex-1 text-xs font-bold truncate">${a.title}</span>
                <span class="text-[10px] opacity-70 truncate max-w-[80px]">${a.note||""}</span>
                <button class="note-quick-edit text-[10px] underline opacity-70 hover:opacity-100" data-nid="${a.id}">Sửa</button>
            </div>`).join("");document.getElementById("noteExistingList").innerHTML=d||"",document.querySelectorAll(".note-quick-edit").forEach(a=>{a.addEventListener("click",i=>{i.stopPropagation();const o=E.find(u=>String(u.id)===a.dataset.nid);o&&F(t,o)})}),document.getElementById("noteFormLabel").textContent=e?"✏️ Chỉnh sửa ghi chú":"➕ Thêm ghi chú mới";const s=document.getElementById("noteSaveBtn"),l=s.cloneNode(!0);if(s.parentNode.replaceChild(l,s),l.textContent=e?"Cập Nhật":"Lưu Ghi Chú",l.addEventListener("click",async()=>{const a=document.getElementById("noteTitle").value.trim();if(!a){alert("Vui lòng nhập tên công việc!");return}l.disabled=!0,l.textContent="Đang lưu...";let i={};try{i=JSON.parse(localStorage.getItem("csr_user")||"{}")}catch{}const o=j?{id:j,title:a,note:document.getElementById("noteContent").value.trim(),color:h}:{date:t,title:a,note:document.getElementById("noteContent").value.trim(),color:h,created_by:i.name||i.username||""};try{await fetch("/api/calendar-notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),await $(),m(),T()}catch(u){alert("Lỗi: "+u.message)}finally{l.disabled=!1,l.textContent=e?"Cập Nhật":"Lưu Ghi Chú"}}),e){const a=document.createElement("button");a.textContent="🗑 Xóa",a.className="w-full mt-2 py-2 text-sm font-bold text-red-500 border border-red-200 rounded-xl hover:bg-red-50 transition-all",a.addEventListener("click",async()=>{confirm("Xóa ghi chú này?")&&(await fetch(`/api/calendar-notes?id=${e.id}`,{method:"DELETE"}),await $(),m(),T())}),document.getElementById("noteContent").parentNode.appendChild(a)}const v=document.getElementById("noteModal");v.classList.remove("hidden"),v.classList.add("flex")},T=()=>{const t=document.getElementById("noteModal");t.classList.add("hidden"),t.classList.remove("flex");const e=document.querySelector("#noteModal button.text-red-500");e&&e.remove()};document.getElementById("noteColorPicker").addEventListener("click",t=>{const e=t.target.closest(".note-color-btn");e&&(h=e.dataset.color,document.querySelectorAll(".note-color-btn").forEach(c=>{c.className=c.className.replace(/\sring-2 ring-offset-1 ring-\S+/g,"").trim()}),e.classList.add("ring-2","ring-offset-1",`ring-${h}-500`))}),document.getElementById("noteModalClose").addEventListener("click",T),document.getElementById("noteModalCloseFt").addEventListener("click",T),document.getElementById("noteModal").addEventListener("click",t=>{t.target===document.getElementById("noteModal")&&T()});const R=async t=>{b=new Date(b.getFullYear(),b.getMonth()+t,1),await $(),m()};document.getElementById("calPrev").addEventListener("click",()=>R(-1)),document.getElementById("calNext").addEventListener("click",()=>R(1)),document.getElementById("calToday").addEventListener("click",async()=>{b=new Date,await $(),m()}),document.getElementById("calFilterTour").addEventListener("change",t=>{L=t.target.value,m()}),document.getElementById("calFilterGuide").addEventListener("change",t=>{_=t.target.value,m()}),document.getElementById("calModal").addEventListener("click",t=>{t.target===document.getElementById("calModal")&&G()}),document.getElementById("calModalClose").addEventListener("click",G),z()};export{re as afterRender,se as render};
