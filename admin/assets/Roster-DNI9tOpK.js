import{S as q,H as J}from"./Header-Dmidaim7.js";const Q=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800 font-sans">
        <!-- Sidebar is hidden when printing -->
        <div class="print:hidden">
            ${q()}
        </div>
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          <div class="print:hidden">
              ${J()}
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
    `,Y=async()=>{const D=e=>{const t=(e||"").toLowerCase();return t.includes("hoàn tất")||t.includes("hoàn thành")||t.includes("đã thanh toán")||t.includes("thanh toán")?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                        Đã Thanh Toán</span>`:t.includes("đã cọc")||t.includes("da coc")?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2H6z"/></svg>
                        Đã Cọc</span>`:t.includes("hủy")||t.includes("cancelled")?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-600 border border-red-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                        Đã Hủy</span>`:`<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">${e||"Chờ cọc"}</span>`},j=e=>{const t=e.extra_services||e.extraServices||e.extra||e.notes_extra||"";if(!t||t==="-"||t.trim()==="")return'<span class="text-gray-300 text-xs italic">Không có</span>';const s=t.split(/[\n,;]+/).map(r=>r.trim()).filter(Boolean);if(s.length===0)return'<span class="text-gray-300 text-xs italic">Không có</span>';const n=["bg-violet-100 text-violet-700 border-violet-200","bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200","bg-sky-100 text-sky-700 border-sky-200","bg-teal-100 text-teal-700 border-teal-200","bg-orange-100 text-orange-700 border-orange-200","bg-rose-100 text-rose-700 border-rose-200"];return`<div class="flex flex-wrap gap-1.5">${s.map((r,o)=>`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${n[o%n.length]}">
                        <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                        ${r}</span>`).join("")}</div>`},g=[{id:"col-stt",label:"STT",always:!0,render:(e,t)=>`<span class="text-gray-400 font-mono text-xs">${t+1}</span>`},{id:"col-name",label:"Họ và Tên",default:!0,render:e=>`<div class="font-bold text-gray-900 text-sm">${e.name||"-"}</div>`},{id:"col-order-id",label:"Mã Đơn Hàng",default:!0,render:e=>`<span class="font-mono text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-200">#${e.id||"—"}</span>`},{id:"col-dob",label:"Ngày Sinh",default:!0,render:e=>{if(!e.dob)return'<span class="text-gray-300">—</span>';const t=e.dob.split("-");return`<span class="text-gray-700 text-sm tabular-nums">${t.length===3?`${t[2]}/${t[1]}/${t[0]}`:e.dob}</span>`}},{id:"col-phone",label:"Số Điện Thoại",default:!0,render:e=>`<a href="tel:${e.phone||""}" class="font-medium text-blue-600 hover:text-blue-800 hover:underline tabular-nums text-sm">${e.phone||"—"}</a>`},{id:"col-status",label:"Trạng Thái",default:!0,render:e=>D(e.status)},{id:"col-extra",label:"Dịch Vụ Phát Sinh",default:!0,render:e=>j(e)},{id:"col-gender",label:"Giới Tính",default:!1,render:e=>e.gender||"-"},{id:"col-cccd",label:"CCCD / Passport",default:!1,render:e=>e.id_card||e.cccd||"-"},{id:"col-address",label:"Địa Chỉ",default:!1,render:e=>`<div class="max-w-[200px] truncate print:max-w-none print:whitespace-normal" title="${e.address||""}">${e.address||"-"}</div>`},{id:"col-diet",label:"Ăn Chay",default:!1,render:e=>e.diet==="Ăn chay"||e.diet==="Chay"||e.diet==="Có"?'<span class="text-green-600 font-bold">Có</span>':"Không"},{id:"col-pole",label:"Gậy Trekking",default:!1,render:e=>e.trekking_pole==="Có"?'<span class="text-orange-600 font-bold">Có</span>':"Không"},{id:"col-allergy",label:"Dị Ứng / Bệnh",default:!1,render:e=>e.medical_notes||e.allergy||"-"},{id:"col-special",label:"Yêu Cầu ĐB",default:!1,render:e=>e.special||e.special_notes||"-"},{id:"col-medal",label:"Tên Huy Chương",default:!1,render:e=>e.medal_name||e.name||"-"}],y=new URLSearchParams(window.location.search),u=y.get("tour")||"",m=y.get("date")||"",L=y.get("scheduleId")||"",_=!!y.get("groupLabel");let b=m;const R=e=>{if(!e)return"";const t=e.split(/[-/.]/);if(t.length!==3)return e;let s,n,r;return t[0].length===4?[r,n,s]=t:[s,n,r]=t,`${s.toString().padStart(2,"0")}/${n.toString().padStart(2,"0")}/${r}`},$=e=>(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[-_]/g," ").replace(/\s+/g," ").trim();m&&(b=R(m));const z=document.getElementById("roster-title"),N=document.getElementById("roster-subtitle"),A=document.getElementById("print-tour-name"),P=document.getElementById("print-tour-date"),G=document.getElementById("print-total"),k=document.getElementById("filterStatus"),C=document.getElementById("filterGender"),S=document.getElementById("rosterList");let h=[],f=new Set(g.filter(e=>e.default||e.always).map(e=>e.id));u&&(z.textContent=u,A.textContent=u),b&&(N.innerHTML=`Ngày khởi hành: <span class="font-bold text-csr-orange">${b}</span>`,P.textContent=b);const V=()=>{const e=document.getElementById("column-toggles");e.innerHTML=g.filter(t=>!t.always&&!t.default).map(t=>`
            <label class="flex items-center gap-2 cursor-pointer group bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 hover:border-csr-orange/50 transition-colors">
                <input type="checkbox" value="${t.id}" class="col-toggle-cb text-csr-orange focus:ring-csr-orange rounded" ${f.has(t.id)?"checked":""}>
                <span class="text-sm font-medium text-gray-600 group-hover:text-gray-900 select-none">${t.label}</span>
            </label>
        `).join(""),document.querySelectorAll(".col-toggle-cb").forEach(t=>{t.addEventListener("change",s=>{s.target.checked?f.add(s.target.value):f.delete(s.target.value),K()})})},F=()=>{const e=document.getElementById("table-header-row");e.innerHTML=g.map(t=>`
            <th class="p-4 whitespace-nowrap ${t.id}" data-col="${t.id}">${t.label}</th>
        `).join("")},K=()=>{g.forEach(e=>{const t=f.has(e.id),s=document.querySelector(`th[data-col="${e.id}"]`);s&&(t?s.classList.remove("col-hidden"):s.classList.add("col-hidden")),document.querySelectorAll(`td[data-col="${e.id}"]`).forEach(n=>{t?n.classList.remove("col-hidden"):n.classList.add("col-hidden")})})},T=e=>{if(!e)return null;e.includes(" - ")&&(e=e.split(" - ")[0].trim()),e.includes("T")&&(e=e.split("T")[0]);const t=e.split(/[-/.]/);return t.length===2?{day:parseInt(t[0]),month:parseInt(t[1]),year:null}:t.length===3?t[0].length===4?{day:parseInt(t[2]),month:parseInt(t[1]),year:parseInt(t[0])}:{day:parseInt(t[0]),month:parseInt(t[1]),year:parseInt(t[2])}:null},x=T(m),O=e=>{if(!x)return!0;const t=T(e);return!(!t||t.day!==x.day||t.month!==x.month||t.year&&x.year&&t.year!==x.year)},B=async()=>{try{const t=await(await fetch("/api/bookings")).json();console.log("[Roster] targetTour:",u,"targetDateStr:",m,"targetParsed:",x),console.log("[Roster] Total bookings:",t.length),t.length>0&&t.filter(r=>r.tour&&r.tour.includes("Liêng")).slice(0,3).forEach(r=>console.log("[Roster] Sample Liêng:",{tour:r.tour,date:r.date,parsed:T(r.date)})),h=t.filter(n=>{if(L){if(String(n.schedule_id)===String(L))return!0;if(!(!_&&!n.schedule_id))return!1}let r=!0,o=!0;if(u){const p=$(n.tour),d=$(u);r=p===d||p.includes(d)||d.includes(p)}return m&&(o=O(n.date)),r&&o}),console.log("[Roster] Matched bookings:",h.length);const s=document.getElementById("filterSort")?.value||"newest";s==="newest"?h.sort((n,r)=>parseInt(r.id)-parseInt(n.id)):h.sort((n,r)=>parseInt(n.id)-parseInt(r.id)),console.log(`[Roster] Sorted bookings (${s}):`,h.map(n=>n.id)),w()}catch(e){console.error("Lỗi khi tải dữ liệu đoàn:",e),S.innerHTML='<tr><td colspan="12" class="p-8 text-center text-red-500 font-bold">Lỗi khi tải dữ liệu. Vui lòng tải lại trang.</td></tr>'}},w=()=>{const e=k.value.toLowerCase(),t=C.value.toLowerCase(),s=document.getElementById("filterSearch")?.value?.toLowerCase()||"",n=h.filter(r=>{if(s&&!`${r.name} ${r.phone} ${r.address} ${r.medal_name} ${r.customer_id}`.toLowerCase().includes(s))return!1;const o=(r.status||"").toLowerCase();if(!(e===""||e==="chờ cọc"&&(o.includes("chờ cọc")||o.includes("chờ xác nhận"))||e==="đã cọc"&&(o.includes("đã cọc")||o.includes("hoàn tất")||o.includes("hoàn thành"))||e==="đã hủy"&&o.includes("hủy")))return!1;const d=(r.gender||"").toLowerCase();return t===""||d===t});if(document.getElementById("text-visible-count").textContent=n.length,G.textContent=n.length,n.length===0){S.innerHTML='<tr><td colspan="12" class="p-12 text-center text-gray-500 bg-gray-50">Không tìm thấy khách hàng nào khớp với điều kiện lọc.</td></tr>';return}S.innerHTML=n.map((r,o)=>`<tr class="${o%2===0?"bg-white":"bg-gray-50/40"} hover:bg-amber-50/40 transition-colors border-b border-gray-100 group">`+g.map(d=>`
                    <td class="px-4 py-3 align-middle ${d.id==="col-extra"?"min-w-[220px]":""} ${f.has(d.id)?"":"col-hidden"}" data-col="${d.id}">
                        ${d.render(r,o)}
                    </td>
                `).join("")+"</tr>").join("")},U=()=>{const e=g.filter(a=>f.has(a.id)),t=k.value.toLowerCase(),s=C.value.toLowerCase(),n=document.getElementById("filterSearch")?.value?.toLowerCase()||"",r=h.filter(a=>{if(n&&!`${a.name} ${a.phone} ${a.address} ${a.medal_name} ${a.customer_id}`.toLowerCase().includes(n))return!1;const c=(a.status||"").toLowerCase();if(!(t===""||t==="chờ cọc"&&(c.includes("chờ cọc")||c.includes("chờ xác nhận"))||t==="đã cọc"&&(c.includes("đã cọc")||c.includes("hoàn tất")||c.includes("hoàn thành"))||t==="đã hủy"&&c.includes("hủy")))return!1;const i=(a.gender||"").toLowerCase();return s===""||i===s});let o=`
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
                            ${e.map(a=>`<th>${a.label}</th>`).join("")}
                        </tr>
                    </thead>
                    <tbody>
        `;r.forEach((a,c)=>{o+="<tr>",e.forEach(l=>{let i="";if(l.id==="col-stt")i=c+1;else if(l.id==="col-name")i=a.name||"";else if(l.id==="col-order-id")i=a.id||"";else if(l.id==="col-address")i=a.address||"";else if(l.id==="col-phone")i=a.phone?String(a.phone):"";else if(l.id==="col-diet")i=a.diet==="Ăn chay"||a.diet==="Chay"||a.diet==="Có"?"Có":"Không";else if(l.id==="col-pole")i=a.trekking_pole==="Có"?"Có":"Không";else if(l.id==="col-status")i=a.status||"";else if(l.id==="col-extra")i=a.extra_services||a.extraServices||a.extra||a.notes_extra||"";else{const H=String(l.render(a,c)),E=document.createElement("DIV");E.innerHTML=H,i=E.textContent||E.innerText||""}const M=l.id==="col-phone"||l.id==="col-cccd";o+=`<td ${M?'class="num"':""}>${i}</td>`}),o+="</tr>"}),o+=`
                    </tbody>
                </table>
            </body>
            </html>
        `;const p=new Blob(["\uFEFF",o],{type:"application/vnd.ms-excel;charset=utf-8"}),d=URL.createObjectURL(p),I=`DS_Doan_${u||"Tour"}_${b||"Date"}.xls`.replace(/[/\\?%*:|"<>]/g,"-"),v=document.createElement("a");v.setAttribute("href",d),v.setAttribute("download",I),document.body.appendChild(v),v.click(),document.body.removeChild(v)};k.addEventListener("change",w),C.addEventListener("change",w),document.getElementById("filterSearch")?.addEventListener("input",w),document.getElementById("filterSort")?.addEventListener("change",B),document.getElementById("btnExportPDF").addEventListener("click",()=>{window.print()}),document.getElementById("btnExportExcel").addEventListener("click",()=>{U()}),V(),F(),B()};export{Y as afterRender,Q as render};
