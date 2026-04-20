import{S as ee,H as te}from"./Header-CtRUqTZE.js";const ne=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800 font-sans">
        <!-- Sidebar is hidden when printing -->
        <div class="print:hidden">
            ${ee()}
        </div>
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          <div class="print:hidden">
              ${te()}
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
                          <div class="flex flex-wrap items-center gap-4">
                              <h3 class="font-bold text-gray-800 flex items-center gap-2">
                                  <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                                  Bộ lọc & Tìm kiếm
                              </h3>
                              <!-- Tìm kiếm text -->
                              <div class="relative min-w-[200px]">
                                  <input type="text" id="filterSearch" placeholder="Tìm tên, SĐT..." class="input-field pl-9 py-2 text-sm w-full">
                                  <svg class="w-4 h-4 absolute left-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                              </div>

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

                              <!-- Sắp xếp -->
                              <select id="filterSort" class="input-field py-2 text-sm max-w-[180px] font-bold text-csr-orange border-csr-orange/20">
                                  <option value="newest">🆕 Mới nhất lên đầu</option>
                                  <option value="oldest">⏳ Cũ nhất lên đầu</option>
                              </select>
                          </div>
                          
                          <div class="text-sm text-gray-500 font-medium">
                              Hiển thị <span id="text-visible-count" class="text-gray-900 font-bold">0</span> danh mục
                          </div>
                      </div>

                      <div>
                          <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <svg class="w-4 h-4 text-csr-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                              Hiển Thị Thêm Cột <span class="ml-2 text-xs font-normal text-gray-400 normal-case tracking-normal">(Tick để bổ sung thông tin bên dưới)</span>
                          </h3>
                          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2" id="column-toggles">
                              <!-- Checkboxes generated by JS -->
                          </div>
                          <p class="text-xs text-gray-400 mt-3 italic">* 6 trường mặc định luôn hiển thị. Tick để thêm cột mở rộng.</p>
                      </div>
                  </div>

                  <!-- Assigned Guides Section -->
                  <div id="rosterGuidesSection" class="bg-indigo-50/50 rounded-2xl border border-indigo-100 p-5 hidden print:block print:border-none print:p-0 print:mb-6">
                      <h3 class="font-bold text-indigo-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider print:text-black print:mb-2">
                          <svg class="w-4 h-4 text-indigo-500 print:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                          Nhân Sự Phụ Trách
                      </h3>
                      <div id="rosterGuidesList" class="flex flex-wrap gap-2">
                          <!-- Guides will be loaded here -->
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
    `,ae=async()=>{const G=e=>{const t=(e||"").toLowerCase();return t.includes("hoàn tất")||t.includes("hoàn thành")||t.includes("đã thanh toán")||t.includes("thanh toán")?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                        Đã Thanh Toán</span>`:t.includes("đã cọc")||t.includes("da coc")?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2H6z"/></svg>
                        Đã Cọc</span>`:t.includes("hủy")||t.includes("cancelled")?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-600 border border-red-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                        Đã Hủy</span>`:`<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">${e||"Chờ cọc"}</span>`},z=e=>{let t=[];const a=e.services_booked;if(a&&a!=="[]"&&a!=="null"&&a!==""){if(Array.isArray(a))t=a.map(r=>{const n=r.label||r.name||r.title||"",d=r.price&&Number(r.price)>0?` (+${Number(r.price).toLocaleString("vi-VN")}đ)`:"";return(n+d).trim()}).filter(Boolean);else if(typeof a=="string"&&a.trim().startsWith("["))try{const r=JSON.parse(a);Array.isArray(r)&&r.length>0&&(t=r.map(n=>{const d=n.label||n.name||n.title||"",l=n.price&&Number(n.price)>0?` (+${Number(n.price).toLocaleString("vi-VN")}đ)`:"";return(d+l).trim()}).filter(Boolean))}catch{const n=a.match(/label:\s*['"]([^'"]+)['"]/g)||[],d=a.match(/price:\s*(\d+)/g)||[];n.length>0&&(t=n.map((l,g)=>{const m=l.replace(/label:\s*['"]/,"").replace(/['"]$/,"").trim(),s=d[g]||"",u=s?Number(s.replace(/price:\s*/,"")):0;return(m+(u>0?` (+${u.toLocaleString("vi-VN")}đ)`:"")).trim()}).filter(Boolean))}}if(t.length===0){const r=e.extra_services||e.extraServices||e.extra||e.notes_extra||"";r&&r!=="-"&&r.trim()!==""&&(t=r.split(/[\n,;]+/).map(n=>n.trim()).filter(Boolean))}if(t.length===0)return'<span class="text-gray-300 text-xs italic">Không có</span>';const o=["bg-violet-100 text-violet-700 border-violet-200","bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200","bg-sky-100 text-sky-700 border-sky-200","bg-teal-100 text-teal-700 border-teal-200","bg-orange-100 text-orange-700 border-orange-200","bg-rose-100 text-rose-700 border-rose-200"];return`<div class="flex flex-wrap gap-1.5">${t.map((r,n)=>`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${o[n%o.length]}">
                        <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                        ${r}</span>`).join("")}</div>`},x=[{id:"col-stt",label:"STT",always:!0,render:(e,t)=>`<span class="text-gray-400 font-mono text-xs">${t+1}</span>`},{id:"col-name",label:"Họ và Tên",default:!0,render:e=>`<div class="font-bold text-gray-900 text-sm">${e.name||"-"}</div>`},{id:"col-order-id",label:"Mã Đơn Hàng",default:!0,render:e=>`<span class="font-mono text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-200">#${e.id||"—"}</span>`},{id:"col-dob",label:"Ngày Sinh",default:!0,render:e=>{if(!e.dob)return'<span class="text-gray-300">—</span>';const t=e.dob.split("-");return`<span class="text-gray-700 text-sm tabular-nums">${t.length===3?`${t[2]}/${t[1]}/${t[0]}`:e.dob}</span>`}},{id:"col-phone",label:"Số Điện Thoại",default:!0,render:e=>`<a href="tel:${e.phone||""}" class="font-medium text-blue-600 hover:text-blue-800 hover:underline tabular-nums text-sm">${e.phone||"—"}</a>`},{id:"col-status",label:"Trạng Thái",default:!0,render:e=>G(e.status)},{id:"col-extra",label:"Dịch Vụ Phát Sinh",default:!0,render:e=>z(e)},{id:"col-gender",label:"Giới Tính",default:!1,render:e=>e.gender||"-"},{id:"col-cccd",label:"CCCD / Passport",default:!1,render:e=>e.id_card||e.cccd||"-"},{id:"col-address",label:"Địa Chỉ",default:!1,render:e=>`<div class="max-w-[200px] truncate print:max-w-none print:whitespace-normal" title="${e.address||""}">${e.address||"-"}</div>`},{id:"col-diet",label:"Ăn Chay",default:!1,render:e=>e.diet==="Ăn chay"||e.diet==="Chay"||e.diet==="Có"?'<span class="text-green-600 font-bold">Có</span>':"Không"},{id:"col-pole",label:"Gậy Trekking",default:!1,render:e=>e.trekking_pole==="Có"?'<span class="text-orange-600 font-bold">Có</span>':"Không"},{id:"col-allergy",label:"Dị Ứng / Bệnh",default:!1,render:e=>e.medical_notes||e.allergy||"-"},{id:"col-special",label:"Yêu Cầu ĐB",default:!1,render:e=>e.special||e.special_notes||"-"},{id:"col-medal",label:"Tên Huy Chương",default:!1,render:e=>e.medal_name||e.name||"-"}],C=new URLSearchParams(window.location.search),f=C.get("tour")||"",y=C.get("date")||"",L=C.get("scheduleId")||"",V=!!C.get("groupLabel");let S=y;const P=e=>{if(!e)return"";const t=e.split(/[-/.]/);if(t.length!==3)return e;let a,o,r;return t[0].length===4?[r,o,a]=t:[a,o,r]=t,`${a.toString().padStart(2,"0")}/${o.toString().padStart(2,"0")}/${r}`},N=e=>(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[-_]/g," ").replace(/\s+/g," ").trim();y&&(S=P(y));const O=document.getElementById("roster-title"),F=document.getElementById("roster-subtitle"),K=document.getElementById("print-tour-name"),J=document.getElementById("print-tour-date"),U=document.getElementById("print-total"),T=document.getElementById("filterStatus"),B=document.getElementById("filterGender"),M=document.getElementById("rosterList");let b=[],v=new Set(x.filter(e=>e.default||e.always).map(e=>e.id));f&&(O.textContent=f,K.textContent=f),S&&(F.innerHTML=`Ngày khởi hành: <span class="font-bold text-csr-orange">${S}</span>`,J.textContent=S);const q=()=>{const e=document.getElementById("column-toggles");e.innerHTML=x.filter(t=>!t.always&&!t.default).map(t=>`
            <label class="flex items-center gap-2 cursor-pointer group bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 hover:border-csr-orange/50 transition-colors">
                <input type="checkbox" value="${t.id}" class="col-toggle-cb text-csr-orange focus:ring-csr-orange rounded" ${v.has(t.id)?"checked":""}>
                <span class="text-sm font-medium text-gray-600 group-hover:text-gray-900 select-none">${t.label}</span>
            </label>
        `).join(""),document.querySelectorAll(".col-toggle-cb").forEach(t=>{t.addEventListener("change",a=>{a.target.checked?v.add(a.target.value):v.delete(a.target.value),X()})})},W=()=>{const e=document.getElementById("table-header-row");e.innerHTML=x.map(t=>`
            <th class="p-4 whitespace-nowrap ${t.id}" data-col="${t.id}">${t.label}</th>
        `).join("")},X=()=>{x.forEach(e=>{const t=v.has(e.id),a=document.querySelector(`th[data-col="${e.id}"]`);a&&(t?a.classList.remove("col-hidden"):a.classList.add("col-hidden")),document.querySelectorAll(`td[data-col="${e.id}"]`).forEach(o=>{t?o.classList.remove("col-hidden"):o.classList.add("col-hidden")})})},I=e=>{if(!e)return null;e.includes(" - ")&&(e=e.split(" - ")[0].trim()),e.includes("T")&&(e=e.split("T")[0]);const t=e.split(/[-/.]/);return t.length===2?{day:parseInt(t[0]),month:parseInt(t[1]),year:null}:t.length===3?t[0].length===4?{day:parseInt(t[2]),month:parseInt(t[1]),year:parseInt(t[0])}:{day:parseInt(t[0]),month:parseInt(t[1]),year:parseInt(t[2])}:null},w=I(y),Q=e=>{if(!w)return!0;const t=I(e);return!(!t||t.day!==w.day||t.month!==w.month||t.year&&w.year&&t.year!==w.year)},j=async()=>{try{if(L)try{const r=await(await fetch(`/api/guides?schedule_id=${L}`)).json();if(r&&r.length>0){const n=document.getElementById("rosterGuidesSection"),d=document.getElementById("rosterGuidesList"),l={"Hướng Dẫn Viên":"bg-blue-100 text-blue-700 border-blue-200",Leader:"bg-purple-100 text-purple-700 border-purple-200",Photo:"bg-pink-100 text-pink-700 border-pink-200",Guider:"bg-cyan-100 text-cyan-700 border-cyan-200","Hậu Cần":"bg-amber-100 text-amber-700 border-amber-200","Học Việc":"bg-gray-100 text-gray-600 border-gray-200"};n.classList.remove("hidden"),d.innerHTML=r.map(g=>`
                                <div class="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-gray-200 shadow-sm print:shadow-none print:border-gray-400">
                                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${l[g.role]||"bg-gray-100 text-gray-600 border-gray-200"} uppercase tracking-wide print:border-black print:text-black">${g.role}</span>
                                    <span class="font-bold text-gray-900 text-sm print:text-black">${g.full_name}</span>
                                    ${g.phone?`<a href="tel:${g.phone}" class="text-xs text-gray-500 hover:text-indigo-600 font-medium ml-1 print:text-black print:no-underline">(${g.phone})</a>`:""}
                                </div>
                            `).join("")}}catch(o){console.error("Error loading guides:",o)}const t=await(await fetch("/api/bookings")).json();console.log("[Roster] targetTour:",f,"targetDateStr:",y,"targetParsed:",w),console.log("[Roster] Total bookings:",t.length),t.length>0&&t.filter(r=>r.tour&&r.tour.includes("Liêng")).slice(0,3).forEach(r=>console.log("[Roster] Sample Liêng:",{tour:r.tour,date:r.date,parsed:I(r.date)})),b=t.filter(o=>{if(L){if(String(o.schedule_id)===String(L))return!0;if(!(!V&&!o.schedule_id))return!1}let r=!0,n=!0;if(f){const d=N(o.tour),l=N(f);r=d===l||d.includes(l)||l.includes(d)}return y&&(n=Q(o.date)),r&&n}),console.log("[Roster] Matched bookings:",b.length);const a=document.getElementById("filterSort")?.value||"newest";a==="newest"?b.sort((o,r)=>parseInt(r.id)-parseInt(o.id)):b.sort((o,r)=>parseInt(o.id)-parseInt(r.id)),console.log(`[Roster] Sorted bookings (${a}):`,b.map(o=>o.id)),$()}catch(e){console.error("Lỗi khi tải dữ liệu đoàn:",e),M.innerHTML='<tr><td colspan="12" class="p-8 text-center text-red-500 font-bold">Lỗi khi tải dữ liệu. Vui lòng tải lại trang.</td></tr>'}},$=()=>{const e=T.value.toLowerCase(),t=B.value.toLowerCase(),a=document.getElementById("filterSearch")?.value?.toLowerCase()||"",o=b.filter(r=>{if(a&&!`${r.name} ${r.phone} ${r.address} ${r.medal_name} ${r.customer_id}`.toLowerCase().includes(a))return!1;const n=(r.status||"").toLowerCase();if(!(e===""||e==="chờ cọc"&&(n.includes("chờ cọc")||n.includes("chờ xác nhận"))||e==="đã cọc"&&(n.includes("đã cọc")||n.includes("hoàn tất")||n.includes("hoàn thành"))||e==="đã hủy"&&n.includes("hủy")))return!1;const l=(r.gender||"").toLowerCase();return t===""||l===t});if(document.getElementById("text-visible-count").textContent=o.length,U.textContent=o.length,o.length===0){M.innerHTML='<tr><td colspan="12" class="p-12 text-center text-gray-500 bg-gray-50">Không tìm thấy khách hàng nào khớp với điều kiện lọc.</td></tr>';return}M.innerHTML=o.map((r,n)=>`<tr class="${n%2===0?"bg-white":"bg-gray-50/40"} hover:bg-amber-50/40 transition-colors border-b border-gray-100 group">`+x.map(l=>`
                    <td class="px-4 py-3 align-middle ${l.id==="col-extra"?"min-w-[220px]":""} ${v.has(l.id)?"":"col-hidden"}" data-col="${l.id}">
                        ${l.render(r,n)}
                    </td>
                `).join("")+"</tr>").join("")},Y=()=>{const e=x.filter(s=>v.has(s.id)),t=T.value.toLowerCase(),a=B.value.toLowerCase(),o=document.getElementById("filterSearch")?.value?.toLowerCase()||"",r=b.filter(s=>{if(o&&!`${s.name} ${s.phone} ${s.address} ${s.medal_name} ${s.customer_id}`.toLowerCase().includes(o))return!1;const u=(s.status||"").toLowerCase();if(!(t===""||t==="chờ cọc"&&(u.includes("chờ cọc")||u.includes("chờ xác nhận"))||t==="đã cọc"&&(u.includes("đã cọc")||u.includes("hoàn tất")||u.includes("hoàn thành"))||t==="đã hủy"&&u.includes("hủy")))return!1;const i=(s.gender||"").toLowerCase();return a===""||i===a});let n=`
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
            <head>
                <meta charset="utf-8" />
                <style>
                    table { border-collapse: collapse; width: 100%; font-family: 'Calibri', sans-serif; font-size: 11pt; }
                    th, td { border: 1px solid #000000; padding: 6px 8px; text-align: left; vertical-align: middle; }
                    th { background-color: #f2f2f2; font-weight: bold; }
                    /* Class ngăn Excel tự động format số điện thoại / cccd thành số khoa học / mất số 0 */
                    .num { mso-number-format: "\\@"; }
                </style>
            </head>
            <body>
                <table>
                    <thead>
                        <tr>
                            ${e.map(s=>`<th>${s.label}</th>`).join("")}
                        </tr>
                    </thead>
                    <tbody>
        `;r.forEach((s,u)=>{n+="<tr>",e.forEach(p=>{let i="";if(p.id==="col-stt")i=u+1;else if(p.id==="col-name")i=s.name||"";else if(p.id==="col-order-id")i=s.id||"";else if(p.id==="col-address")i=s.address||"";else if(p.id==="col-phone")i=s.phone?String(s.phone):"";else if(p.id==="col-diet")i=s.diet==="Ăn chay"||s.diet==="Chay"||s.diet==="Có"?"Có":"Không";else if(p.id==="col-pole")i=s.trekking_pole==="Có"?"Có":"Không";else if(p.id==="col-status")i=s.status||"";else if(p.id==="col-extra"){const c=s.services_booked;if(c&&c!=="[]"&&c!=="null"&&c!==""){const k=_=>_.map(h=>{const E=h.label||h.name||h.title||"",H=h.price&&Number(h.price)>0?` (+${Number(h.price).toLocaleString("vi-VN")}đ)`:"";return(E+H).trim()}).filter(Boolean).join(", ");if(Array.isArray(c))i=k(c);else if(typeof c=="string"&&c.trim().startsWith("["))try{i=k(JSON.parse(c))}catch{const h=c.match(/label:\s*['"]([^'"]+)['"]/g)||[],E=c.match(/price:\s*(\d+)/g)||[];h.length>0&&(i=h.map((H,R)=>{const Z=H.replace(/label:\s*['"]/,"").replace(/['"]$/,"").trim(),A=E[R]?Number(E[R].replace(/price:\s*/,"")):0;return(Z+(A>0?` (+${A.toLocaleString("vi-VN")}đ)`:"")).trim()}).filter(Boolean).join(", "))}}i||(i=s.extra_services||"")}else{const c=String(p.render(s,u)),k=document.createElement("DIV");k.innerHTML=c,i=k.textContent||k.innerText||""}const D=p.id==="col-phone"||p.id==="col-cccd";n+=`<td ${D?'class="num"':""}>${i}</td>`}),n+="</tr>"}),n+=`
                    </tbody>
                </table>
            </body>
            </html>
        `;const d=new Blob(["\uFEFF",n],{type:"application/vnd.ms-excel;charset=utf-8"}),l=URL.createObjectURL(d),g=`DS_Doan_${f||"Tour"}_${S||"Date"}.xls`.replace(/[/\\?%*:|"<>]/g,"-"),m=document.createElement("a");m.setAttribute("href",l),m.setAttribute("download",g),document.body.appendChild(m),m.click(),document.body.removeChild(m)};T.addEventListener("change",$),B.addEventListener("change",$),document.getElementById("filterSearch")?.addEventListener("input",$),document.getElementById("filterSort")?.addEventListener("change",j),document.getElementById("btnExportPDF").addEventListener("click",()=>{window.print()}),document.getElementById("btnExportExcel").addEventListener("click",()=>{Y()}),q(),W(),j()};export{ae as afterRender,ne as render};
