import{S as V,H as K}from"./Header-CamAZjvb.js";const U=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800 font-sans">
        <!-- Sidebar is hidden when printing -->
        <div class="print:hidden">
            ${V()}
        </div>
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          <div class="print:hidden">
              ${K()}
          </div>
          
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6 print:p-0 print:bg-white print:overflow-visible">
               <div class="max-w-[1400px] mx-auto space-y-6 print:space-y-4">
                  
                  <!-- Top Bar (Hidden on Print) -->
                  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 print:hidden">
                      <div>
                          <div class="flex items-center gap-2 mb-4">
                              <a href="/admin/schedules" data-link class="text-sm font-medium text-gray-400 hover:text-csr-orange transition-colors flex items-center gap-1">
                                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                                  Quay lại Lịch Trình
                              </a>
                          </div>
                          
                          <div class="flex items-center gap-4 mb-2">
                              <img src="/logo-camsite-01.png" alt="CAM SITE RETREATS" class="h-14 md:h-16 object-contain">
                              <div class="h-10 border-l border-gray-300"></div>
                              <span class="text-sm font-bold text-gray-400 uppercase tracking-widest">DANH SÁCH ĐOÀN</span>
                          </div>

                          <h1 class="text-3xl font-black tracking-tight text-gray-800 mb-1" id="roster-title">Đang tải tên tour...</h1>
                          <p class="text-gray-500 text-sm" id="roster-subtitle">Đang tải ngày khởi hành...</p>
                      </div>
                      
                      <div class="flex items-center gap-3">
                          <button id="btnExportExcel" class="btn-secondary flex items-center gap-2 bg-white text-green-600 border border-green-200 hover:bg-green-50 shadow-sm">
                              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                              Xuất Excel
                          </button>
                          <button id="btnExportPDF" class="btn-primary flex items-center gap-2 bg-csr-orange hover:opacity-90 shadow-sm text-white">
                              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                              In PDF / Xuất PDF
                          </button>
                      </div>
                  </div>

                  <!-- Print Header (Only visible on Print) -->
                  <div class="hidden print:flex text-left border-b-4 border-csr-orange pb-4 mb-6 items-center justify-between">
                      <div class="flex items-center gap-6">
                            <img src="/logo-camsite-01.png" alt="CAM SITE RETREATS" class="h-20 object-contain">
                            <div>
                                <h1 class="text-3xl font-black uppercase tracking-widest text-[#1A202C] mb-1">DANH SÁCH ĐOÀN</h1>
                                <div class="text-[16px] text-gray-800 font-bold flex items-center gap-4">
                                    <span class="text-csr-orange text-xl" id="print-tour-name">Tuyến: ...</span>
                                    <span class="text-gray-300">|</span>
                                    <span id="print-tour-date">Ngày: ...</span>
                                </div>
                            </div>
                      </div>
                      <div class="text-right">
                          <span class="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-1">Tổng Số Khách</span>
                          <span class="text-4xl font-black text-csr-orange" id="print-total">0</span>
                      </div>
                  </div>

                  <!-- Filters & Column Selection (Hidden on Print) -->
                  <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-5 print:hidden">
                      <div class="flex flex-col md:flex-row gap-5 items-start md:items-center justify-between border-b border-gray-100 pb-5">
                          <div class="flex items-center gap-4">
                              <h3 class="font-bold text-gray-800 flex items-center gap-2">
                                  <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                                  Lọc Nhanh
                              </h3>
                              <select id="filterStatus" class="input-field py-2 text-sm max-w-[180px]">
                                  <option value="">-- Tất cả Trạng thái --</option>
                                  <option value="Đã cọc">Đã cọc / Hoàn tất</option>
                                  <option value="Chờ cọc">Chờ cọc</option>
                                  <option value="Đã hủy">Đã hủy</option>
                              </select>
                              <select id="filterGender" class="input-field py-2 text-sm max-w-[150px]">
                                  <option value="">-- Giới tính --</option>
                                  <option value="Nam">Nam</option>
                                  <option value="Nữ">Nữ</option>
                              </select>
                          </div>
                          
                          <div class="text-sm text-gray-500 font-medium">
                              Hiển thị <span id="text-visible-count" class="text-gray-900 font-bold">0</span> danh mục
                          </div>
                      </div>

                      <div>
                          <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <svg class="w-4 h-4 text-csr-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                              Tùy Chỉnh Cột Hiển Thị (Dùng cho In/Xuất File)
                          </h3>
                          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3" id="column-toggles">
                              <!-- Checkboxes generated by JS -->
                          </div>
                          <p class="text-xs text-gray-400 mt-3 italic">* Các thông tin về giá tiền/công nợ đã được loại bỏ để bảo mật bảng kê chung.</p>
                      </div>
                  </div>

                  <!-- Data Table -->
                  <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden print:border-none print:shadow-none print:rounded-none">
                      <div class="overflow-x-auto print:overflow-visible">
                          <table class="w-full text-left border-collapse" id="rosterTable">
                              <thead class="bg-gray-50 text-xs uppercase text-gray-500 font-semibold border-b border-gray-200 print:bg-white print:text-black print:border-b-2 print:border-gray-800">
                                  <tr id="table-header-row">
                                      <!-- Headers driven by JS config -->
                                  </tr>
                              </thead>
                              <tbody id="rosterList" class="divide-y divide-gray-100 text-sm print:text-[12px] print:divide-gray-300">
                                  <tr><td colspan="12" class="p-8 text-center text-gray-400">Đang tải dữ liệu...</td></tr>
                              </tbody>
                          </table>
                      </div>
                  </div>

               </div>
          </main>
        </div>
      </div>

      <style>
          /* CSS classes dynamically toggled to hide/show columns */
          .col-hidden { display: none !important; }
          .nowrap { white-space: nowrap; }

          @media print {
              @page { size: landscape; margin: 0; }
              body { 
                  font-family: 'Times New Roman', serif; 
                  background: white; 
                  margin: 1.5cm; /* Re-add margin to content to avoid browser headers/footers */
              }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #ccc; padding: 6px 8px !important; color: black !important; }
              th { background-color: #f3f4f6 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          }
      </style>
    `,q=async()=>{const g=[{id:"col-stt",label:"STT",always:!0,render:(e,t)=>t+1},{id:"col-name",label:"Họ và Tên",default:!0,render:e=>`<div class="font-bold text-gray-900">${e.name}</div>`},{id:"col-dob",label:"Ngày Sinh",default:!0,render:e=>{if(!e.dob)return"-";const t=e.dob.split("-");return t.length===3?`${t[2]}/${t[1]}/${t[0]}`:e.dob}},{id:"col-phone",label:"SĐT",default:!0,render:e=>`<div class="font-medium text-gray-700">${e.phone||"-"}</div>`},{id:"col-gender",label:"Giới tính",default:!0,render:e=>e.gender||"-"},{id:"col-cccd",label:"CCCD / Passport",default:!0,render:e=>e.id_card||e.cccd||"-"},{id:"col-address",label:"Địa chỉ",default:!0,render:e=>`<div class="max-w-[200px] truncate print:max-w-none print:whitespace-normal" title="${e.address||""}">${e.address||"-"}</div>`},{id:"col-diet",label:"Ăn chay",default:!1,render:e=>e.diet==="Chay"||e.diet==="Có"?'<span class="text-green-600 font-bold">Có</span>':"Không"},{id:"col-pole",label:"Gậy Trekking",default:!1,render:e=>e.trekking_pole==="Có"?'<span class="text-orange-600 font-bold">Có</span>':"Không"},{id:"col-allergy",label:"Dị ứng",default:!1,render:e=>e.medical_notes||e.allergy||"-"},{id:"col-special",label:"Yêu cầu ĐB",default:!1,render:e=>e.special_notes||e.special||"-"},{id:"col-medal",label:"Tên Huy Chương",default:!1,render:e=>e.medal_name||e.name||"-"}],b=new URLSearchParams(window.location.search),i=b.get("tour")||"",p=b.get("date")||"",L=b.get("scheduleId")||"";let m=p;const I=e=>{if(!e)return"";const t=e.split(/[-/.]/);if(t.length!==3)return e;let n,r,o;return t[0].length===4?[o,r,n]=t:[n,r,o]=t,`${n.toString().padStart(2,"0")}/${r.toString().padStart(2,"0")}/${o}`},H=e=>(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[-_]/g," ").replace(/\s+/g," ").trim();p&&(m=I(p));const D=document.getElementById("roster-title"),B=document.getElementById("roster-subtitle"),M=document.getElementById("print-tour-name"),j=document.getElementById("print-tour-date"),N=document.getElementById("print-total"),y=document.getElementById("filterStatus"),w=document.getElementById("filterGender"),k=document.getElementById("rosterList");let f=[],u=new Set(g.filter(e=>e.default||e.always).map(e=>e.id));i&&(D.textContent=i,M.textContent=i),m&&(B.innerHTML=`Ngày khởi hành: <span class="font-bold text-csr-orange">${m}</span>`,j.textContent=m);const A=()=>{const e=document.getElementById("column-toggles");e.innerHTML=g.filter(t=>!t.always).map(t=>`
            <label class="flex items-center gap-2 cursor-pointer group bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 hover:border-csr-orange/50 transition-colors">
                <input type="checkbox" value="${t.id}" class="col-toggle-cb text-csr-orange focus:ring-csr-orange rounded" ${u.has(t.id)?"checked":""}>
                <span class="text-sm font-medium text-gray-600 group-hover:text-gray-900 select-none">${t.label}</span>
            </label>
        `).join(""),document.querySelectorAll(".col-toggle-cb").forEach(t=>{t.addEventListener("change",n=>{n.target.checked?u.add(n.target.value):u.delete(n.target.value),P()})})},R=()=>{const e=document.getElementById("table-header-row");e.innerHTML=g.map(t=>`
            <th class="p-4 whitespace-nowrap ${t.id}" data-col="${t.id}">${t.label}</th>
        `).join("")},P=()=>{g.forEach(e=>{const t=u.has(e.id),n=document.querySelector(`th[data-col="${e.id}"]`);n&&(t?n.classList.remove("col-hidden"):n.classList.add("col-hidden")),document.querySelectorAll(`td[data-col="${e.id}"]`).forEach(r=>{t?r.classList.remove("col-hidden"):r.classList.add("col-hidden")})})},C=e=>{if(!e)return null;e.includes(" - ")&&(e=e.split(" - ")[0].trim()),e.includes("T")&&(e=e.split("T")[0]);const t=e.split(/[-/.]/);return t.length===2?{day:parseInt(t[0]),month:parseInt(t[1]),year:null}:t.length===3?t[0].length===4?{day:parseInt(t[2]),month:parseInt(t[1]),year:parseInt(t[0])}:{day:parseInt(t[0]),month:parseInt(t[1]),year:parseInt(t[2])}:null},h=C(p),_=e=>{if(!h)return!0;const t=C(e);return!(!t||t.day!==h.day||t.month!==h.month||t.year&&h.year&&t.year!==h.year)},F=async()=>{try{const t=await(await fetch("/api/bookings")).json();console.log("[Roster] targetTour:",i,"targetDateStr:",p,"targetParsed:",h),console.log("[Roster] Total bookings:",t.length),t.length>0&&t.filter(r=>r.tour&&r.tour.includes("Liêng")).slice(0,3).forEach(r=>console.log("[Roster] Sample Liêng:",{tour:r.tour,date:r.date,parsed:C(r.date)})),f=t.filter(n=>{if(L&&n.schedule_id)return String(n.schedule_id)===String(L);let r=!0,o=!0;if(i){const s=H(n.tour),d=H(i);r=s===d||s.includes(d)||d.includes(s)}return p&&(o=_(n.date)),r&&o}),console.log("[Roster] Matched bookings:",f.length),f.sort((n,r)=>{const o=(n.status||"").includes("cọc")||n.status==="Hoàn tất"?1:0;return((r.status||"").includes("cọc")||r.status==="Hoàn tất"?1:0)-o}),T()}catch(e){console.error("Lỗi khi tải dữ liệu đoàn:",e),k.innerHTML='<tr><td colspan="12" class="p-8 text-center text-red-500 font-bold">Lỗi khi tải dữ liệu. Vui lòng tải lại trang.</td></tr>'}},T=()=>{const e=y.value.toLowerCase(),t=w.value.toLowerCase(),n=f.filter(r=>{const o=(r.status||"").toLowerCase(),s=e===""||e==="chờ cọc"&&(o.includes("chờ cọc")||o.includes("chờ xác nhận"))||e==="đã cọc"&&(o.includes("đã cọc")||o.includes("hoàn tất")||o.includes("hoàn thành"))||e==="đã hủy"&&o.includes("hủy"),d=(r.gender||"").toLowerCase();return s&&(t===""||d===t)});if(document.getElementById("text-visible-count").textContent=n.length,N.textContent=n.length,n.length===0){k.innerHTML='<tr><td colspan="12" class="p-12 text-center text-gray-500 bg-gray-50">Không tìm thấy khách hàng nào khớp với điều kiện lọc.</td></tr>';return}k.innerHTML=n.map((r,o)=>'<tr class="hover:bg-gray-50/50 transition-colors">'+g.map(s=>`
                    <td class="p-4 align-top ${u.has(s.id)?"":"col-hidden"}" data-col="${s.id}">
                        ${s.render(r,o)}
                    </td>
                `).join("")+"</tr>").join("")},G=()=>{const e=g.filter(a=>u.has(a.id));let t="\\uFEFF";t+=e.map(a=>`"${a.label}"`).join(",")+`
`;const n=y.value.toLowerCase(),r=w.value.toLowerCase();f.filter(a=>{const v=n===""||n==="chờ cọc"&&(a.status==="Chờ cọc"||a.status==="Chờ xác nhận cọc")||n==="đã cọc"&&(a.status==="Đã cọc"||a.status==="Hoàn tất"||a.status==="Hoàn thành")||n==="đã hủy"&&a.status==="Đã hủy",E=r===""||a.gender&&a.gender.toLowerCase()===r;return v&&E}).forEach((a,v)=>{const E=e.map(c=>{let l="";if(c.id==="col-stt")l=v+1;else if(c.id==="col-name")l=a.name||"";else if(c.id==="col-address")l=a.address||"";else if(c.id==="col-phone")l=a.phone?`'${a.phone}`:"";else if(c.id==="col-diet")l=a.diet==="Chay"||a.diet==="Có"?"Có":"Không";else if(c.id==="col-pole")l=a.trekking_pole==="Có"?"Có":"Không";else{const z=String(c.render(a,v)),S=document.createElement("DIV");S.innerHTML=z,l=S.textContent||S.innerText||""}return l=String(l).replace(/"/g,'""'),`"${l}"`});t+=E.join(",")+`
`});const s=new Blob([t],{type:"text/csv;charset=utf-8;"}),d=URL.createObjectURL(s),$=`DS_Doan_${i||"Tour"}_${m||"Date"}.csv`.replace(/[/\\?%*:|"<>]/g,"-"),x=document.createElement("a");x.setAttribute("href",d),x.setAttribute("download",$),document.body.appendChild(x),x.click(),document.body.removeChild(x)};y.addEventListener("change",T),w.addEventListener("change",T),document.getElementById("btnExportPDF").addEventListener("click",()=>{window.print()}),document.getElementById("btnExportExcel").addEventListener("click",()=>{G()}),A(),R(),F()};export{q as afterRender,U as render};
