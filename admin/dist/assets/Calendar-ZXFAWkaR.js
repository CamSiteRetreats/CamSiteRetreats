import{S as P,H as U}from"./Header-CARqqxjt.js";const X=()=>`
  <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
    ${P()}
    <div class="flex flex-col flex-1 w-full overflow-hidden">
      ${U()}
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
              ${["CN","T2","T3","T4","T5","T6","T7"].map(p=>`<div class="py-2 text-center text-[11px] font-bold text-gray-400 uppercase">${p}</div>`).join("")}
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
`,J=()=>{let p=[],f=[],d=new Date,w="",$="";const _={Leader:"bg-purple-100 text-purple-700","Hướng Dẫn Viên":"bg-blue-100 text-blue-700",Photo:"bg-pink-100 text-pink-700",Guider:"bg-cyan-100 text-cyan-700","Hậu Cần":"bg-amber-100 text-amber-700","Học Việc":"bg-gray-100 text-gray-600"};let T="sale";try{T=JSON.parse(localStorage.getItem("csr_user")||"{}").role||"sale"}catch{}const D=async()=>{u();const[n,e,c]=await Promise.all([fetch("/api/schedules"),fetch("/api/guides"),fetch("/api/tours")]);p=await n.json(),f=await e.json();const l=await c.json(),x=document.getElementById("calFilterTour");l.forEach(a=>{const o=document.createElement("option");o.value=a.name,o.textContent=a.name,x.appendChild(o)});const r=document.getElementById("calFilterGuide");f.forEach(a=>{const o=document.createElement("option");o.value=a.id,o.textContent=a.full_name,r.appendChild(o)}),u()},F=()=>{const n=d.getFullYear(),e=d.getMonth();return p.filter(c=>{const l=new Date(c.start_date);return!(l.getFullYear()!==n||l.getMonth()!==e||w&&c.tour_name!==w||$&&!(c.assigned_guides||[]).some(r=>String(r.id)===String($)))})},u=()=>{const n=d.getFullYear(),e=d.getMonth(),c=["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"];document.getElementById("calTitle").textContent=`${c[e]} / ${n}`;const l=F(),x=l.reduce((t,i)=>t+(parseInt(i.booked_count)||0),0),r=new Set(l.flatMap(t=>(t.assigned_guides||[]).map(i=>i.id)));document.getElementById("statTours").textContent=l.length,document.getElementById("statGuests").textContent=x,document.getElementById("statGuides").textContent=r.size;const a={};l.forEach(t=>{const i=new Date(t.start_date).toISOString().split("T")[0];a[i]||(a[i]=[]),a[i].push(t)});const o=new Date(n,e,1).getDay(),v=new Date(n,e+1,0).getDate(),h=new Date;h.setHours(0,0,0,0);let g="";for(let t=0;t<o;t++)g+='<div class="min-h-[80px] border-r border-b border-gray-100 bg-gray-50/50 p-1"></div>';for(let t=1;t<=v;t++){const i=new Date(n,e,t),E=`${n}-${String(e+1).padStart(2,"0")}-${String(t).padStart(2,"0")}`,M=i.getTime()===h.getTime(),I=a[E]||[],G=I.slice(0,3).map(b=>{const B=parseInt(b.booked_count)||0,L=parseInt(b.slots)||0,j=Math.max(0,L-B),H=j<=0?"bg-red-500":j<=3?"bg-orange-500":"bg-green-500",O=(b.assigned_guides||[]).slice(0,2).map(y=>{const A=(y.full_name||"X").split(" ").slice(-1)[0][0].toUpperCase();return`<span class="inline-flex items-center justify-center w-5 h-5 rounded-full text-[9px] font-black ${_[y.role]||"bg-gray-100 text-gray-600"}" title="${y.full_name} (${y.role})">${A}</span>`}).join(""),R=b.tour_name.split(" ").slice(0,2).join(" ");return`<div class="cal-sch-badge rounded-md px-1.5 py-1 bg-csr-orange/8 border border-csr-orange/20 cursor-pointer hover:bg-csr-orange/15 transition-colors mb-0.5" data-id="${b.id}">
                    <div class="flex items-center gap-1">
                        <span class="w-2 h-2 rounded-full ${H} shrink-0"></span>
                        <span class="text-[10px] font-bold text-gray-700 truncate flex-1">${R}</span>
                    </div>
                    <div class="flex items-center gap-0.5 mt-0.5">
                        <span class="text-[9px] text-gray-400">${B}/${L}</span>
                        <div class="flex gap-0.5 ml-1">${O}</div>
                    </div>
                </div>`}).join(""),N=I.length>3?`<div class="text-[9px] text-csr-orange font-bold text-center">+${I.length-3} tour</div>`:"";g+=`
            <div class="min-h-[80px] border-r border-b border-gray-100 p-1 ${M?"bg-csr-orange/5 ring-2 ring-inset ring-csr-orange/30":"hover:bg-gray-50"} transition-colors">
                <div class="text-right mb-1">
                    <span class="text-xs font-bold ${M?"bg-csr-orange text-white rounded-full w-6 h-6 inline-flex items-center justify-center":"text-gray-500"}">${t}</span>
                </div>
                ${G}${N}
            </div>`}const s=o+v,m=s%7===0?0:7-s%7;for(let t=0;t<m;t++)g+='<div class="min-h-[80px] border-r border-b border-gray-100 bg-gray-50/50 p-1"></div>';document.getElementById("calGrid").innerHTML=g,document.querySelectorAll(".cal-sch-badge").forEach(t=>{t.addEventListener("click",()=>k(t.getAttribute("data-id")))})},k=async n=>{const e=p.find(s=>String(s.id)===String(n));if(!e)return;const c=document.getElementById("calModal");c.classList.remove("hidden"),c.classList.add("flex");const l=new Date(e.start_date).toLocaleDateString("vi-VN"),x=new Date(e.end_date).toLocaleDateString("vi-VN"),r=parseInt(e.booked_count)||0,a=parseInt(e.slots)||0,o=e.assigned_guides||[];document.getElementById("calModalTitle").textContent=e.tour_name,document.getElementById("calModalSub").textContent=`${l} → ${x} • ${r}/${a} chỗ${e.group_label?" • "+e.group_label:""}`;const v=o.length===0?'<p class="text-gray-400 text-sm italic">Chưa có nhân sự được phân công.</p>':o.map(s=>{const m=_[s.role]||"bg-gray-100 text-gray-600",t=(s.full_name||"X").split(" ").slice(-2).map(E=>E[0]).join("").toUpperCase(),i=T==="admin"?`<button class="modal-unassign-btn px-2 py-1 rounded-lg text-xs bg-red-50 text-red-500 hover:bg-red-100 transition-colors" data-guide-id="${s.id}" data-sch-id="${e.id}">✕</button>`:"";return`<div class="flex items-center gap-3 p-2.5 rounded-xl border border-gray-100 hover:bg-gray-50">
                    <div class="w-9 h-9 rounded-full bg-gradient-to-br from-csr-orange/20 to-orange-100 flex items-center justify-center text-csr-orange font-black text-xs shrink-0">${t}</div>
                    <div class="flex-1">
                        <div class="font-bold text-sm text-gray-900">${s.full_name}</div>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${m}">${s.role}</span>
                        ${s.phone?`<span class="text-xs text-gray-400 ml-2">${s.phone}</span>`:""}
                    </div>
                    ${i}
                </div>`}).join("");let h="";if(T==="admin"){const s=f.filter(m=>!o.some(t=>t.id===m.id));s.length>0&&(h=`
                <div class="border-t border-gray-100 pt-3">
                    <p class="text-xs font-bold text-gray-500 uppercase mb-2">Thêm Nhân Sự</p>
                    <div class="flex gap-2">
                        <select id="modalAssignSelect" class="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-csr-orange">
                            <option value="">-- Chọn nhân sự --</option>${s.map(t=>`<option value="${t.id}">${t.full_name} (${t.role})</option>`).join("")}
                        </select>
                        <button id="modalAssignBtn" data-sch-id="${e.id}" class="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors">+ Thêm</button>
                    </div>
                </div>`)}document.getElementById("calModalBody").innerHTML=`
            <div class="space-y-2">
                <div class="flex items-center gap-4 text-sm text-gray-600 flex-wrap">
                    ${e.zalo_link?`<a href="${e.zalo_link}" target="_blank" class="flex items-center gap-1 text-blue-600 hover:underline text-xs font-medium">🔗 Link Zalo Nhóm</a>`:""}
                    <span class="text-xs">🚗 ${e.vehicle_type==="limo_34"?"Limousine 34 chỗ":e.vehicle_type==="sleeper_45"?"Giường nằm 45":"Solati 16 chỗ"}</span>
                    <span class="text-xs font-bold ${r>=a?"text-red-500":r>=a*.8?"text-orange-500":"text-green-600"}">${r>=a?"Hết chỗ":a-r<=3?`Còn ${a-r} chỗ`:`Còn ${a-r} chỗ trống`}</span>
                </div>
            </div>
            <div>
                <p class="text-xs font-bold text-gray-500 uppercase mb-2">👥 Nhân Sự (${o.length} người)</p>
                <div class="space-y-1.5">${v}</div>
            </div>
            ${h}`,document.getElementById("calModalFooter").innerHTML=`
            <a href="/admin/roster?tour=${encodeURIComponent(e.tour_name)}&date=${e.start_date?.split("T")[0]}&scheduleId=${e.id}&groupLabel=${encodeURIComponent(e.group_label||"")}&vehicleType=${encodeURIComponent(e.vehicle_type||"solati_16")}" data-link
               class="flex-1 py-2.5 bg-csr-orange text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all text-center">
               📋 Xem Danh Sách Đoàn
            </a>
            <button id="calModalCloseFt" class="px-4 py-2.5 border border-gray-200 text-gray-500 text-sm font-bold rounded-xl hover:bg-gray-50 transition-all">Đóng</button>`,document.querySelectorAll(".modal-unassign-btn").forEach(s=>{s.addEventListener("click",async()=>{s.textContent="...",s.disabled=!0,await fetch("/api/guides?action=unassign",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({schedule_id:parseInt(s.dataset.schId),guide_id:parseInt(s.dataset.guideId)})}),await C(),k(n)})});const g=document.getElementById("modalAssignBtn");g&&g.addEventListener("click",async()=>{const s=document.getElementById("modalAssignSelect");s.value&&(g.textContent="...",g.disabled=!0,await fetch("/api/guides?action=assign",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({schedule_id:parseInt(g.dataset.schId),guide_id:parseInt(s.value)})}),await C(),k(n))}),document.getElementById("calModalCloseFt")?.addEventListener("click",S)},S=()=>{const n=document.getElementById("calModal");n.classList.add("hidden"),n.classList.remove("flex")},C=async()=>{p=await(await fetch("/api/schedules")).json(),u()};document.getElementById("calPrev").addEventListener("click",()=>{d=new Date(d.getFullYear(),d.getMonth()-1,1),u()}),document.getElementById("calNext").addEventListener("click",()=>{d=new Date(d.getFullYear(),d.getMonth()+1,1),u()}),document.getElementById("calToday").addEventListener("click",()=>{d=new Date,u()}),document.getElementById("calFilterTour").addEventListener("change",n=>{w=n.target.value,u()}),document.getElementById("calFilterGuide").addEventListener("change",n=>{$=n.target.value,u()}),document.getElementById("calModal").addEventListener("click",n=>{n.target===document.getElementById("calModal")&&S()}),document.getElementById("calModalClose").addEventListener("click",S),D()};export{J as afterRender,X as render};
