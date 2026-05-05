import{S as se,H as oe}from"./Header-CtRUqTZE.js";const ie=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800 font-sans">
        <!-- Sidebar is hidden when printing -->
        <div class="print:hidden">
            ${se()}
        </div>
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          <div class="print:hidden">
              ${oe()}
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
                                <h1 class="text-3xl font-black uppercase tracking-widest text-[#1A202C] mb-1">VẬN HÀNH TOUR</h1>
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

                  <!-- Main Content: Table + Seat Map -->
                  <div class="flex flex-col xl:flex-row gap-4 items-start">

                      <!-- LEFT: Data Table -->
                      <div class="flex-1 min-w-0 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden print:border-none print:shadow-none print:rounded-none">
                          <div class="overflow-x-auto print:overflow-visible">
                              <table class="w-full text-left border-collapse" id="rosterTable">
                                  <thead class="bg-gray-50 text-xs uppercase text-gray-500 font-semibold border-b border-gray-200 print:bg-white print:text-black print:border-b-2 print:border-gray-800">
                                      <tr id="table-header-row">
                                          <!-- Headers driven by JS config -->
                                      </tr>
                                  </thead>
                                  <tbody id="rosterList" class="divide-y divide-gray-100 text-sm print:text-[12px] print:divide-gray-300">
                                      <tr><td colspan="14" class="p-8 text-center text-gray-400">Đang tải dữ liệu...</td></tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>

                      <!-- RIGHT: Seat Map (hidden on print) -->
                      <div class="xl:sticky xl:top-4 w-full xl:w-72 flex-shrink-0 print:hidden">
                          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
                              <!-- Header -->
                              <div class="flex items-center justify-between mb-3">
                                  <h3 class="font-black text-gray-800 text-sm flex items-center gap-2">
                                      <span class="text-xl">🚌</span> Sơ Đồ Xe 16 Chỗ
                                  </h3>
                                  <span id="seat-map-count" class="text-xs bg-orange-50 text-csr-orange border border-orange-100 px-2 py-0.5 rounded-full font-bold">0/15</span>
                              </div>
                              <!-- Bus Direction -->
                              <div class="text-[10px] text-gray-400 text-center mb-2 uppercase tracking-widest">← Đầu Xe</div>
                              <!-- Seat Grid -->
                              <div id="seatMapGrid" class="space-y-1.5">
                                  <!-- Generated by JS -->
                              </div>
                              <div class="text-[10px] text-gray-400 text-center mt-2 uppercase tracking-widest">Đuôi Xe →</div>
                              <!-- Legend -->
                              <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-center gap-4 text-[11px] text-gray-500">
                                  <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-gray-200 inline-block"></span> Trống</span>
                                  <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-csr-orange inline-block"></span> Đã xếp</span>
                                  <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-gray-700 inline-block"></span> Lái xe</span>
                              </div>
                          </div>
                      </div>

                  </div>

               </div>
          </main>
        </div>
      </div>

      <!-- Seat Assignment Modal -->
      <div id="seatModal" class="fixed inset-0 bg-black/60 z-[100] hidden items-center justify-center p-4" style="display:none">
          <div id="seatModalContent" class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
              <div class="bg-csr-orange px-5 py-4 flex items-center justify-between">
                  <h3 class="font-black text-white text-base" id="seatModalTitle">Ghế #1</h3>
                  <button id="seatModalClose" class="text-white/80 hover:text-white">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                  </button>
              </div>
              <div class="p-4 max-h-80 overflow-y-auto" id="seatModalBody">
                  <!-- List of passengers -->
              </div>
          </div>
      </div>

      <style>
          .col-hidden { display: none !important; }
          .nowrap { white-space: nowrap; }
          .seat-btn { transition: all 0.15s ease; cursor: pointer; }
          .seat-btn:hover:not(.seat-driver) { transform: scale(1.05); box-shadow: 0 0 0 2px #E85D04; }
          .seat-empty { background: #f3f4f6; border: 2px dashed #d1d5db; color: #9ca3af; }
          .seat-assigned { background: #E85D04; border: 2px solid #c44c03; color: white; }
          .seat-driver { background: #1f2937; border: 2px solid #111827; color: #6b7280; cursor: default !important; }
          .seat-highlighted { box-shadow: 0 0 0 3px #E85D04, 0 0 0 5px rgba(232,93,4,0.3) !important; }
          .row-highlighted td { background-color: #fff7ed !important; }
          @media print {
              @page { size: landscape; margin: 0; }
              body { font-family: 'Times New Roman', serif; background: white; margin: 1.5cm; }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #ccc; padding: 6px 8px !important; color: black !important; }
              th { background-color: #f3f4f6 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          }
      </style>
    `,de=async()=>{const O=e=>{const t=(e||"").toLowerCase();return t.includes("hoàn tất")||t.includes("hoàn thành")||t.includes("đã thanh toán")||t.includes("thanh toán")?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                        Đã Thanh Toán</span>`:t.includes("đã cọc")||t.includes("da coc")?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2H6z"/></svg>
                        Đã Cọc</span>`:t.includes("hủy")||t.includes("cancelled")?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-600 border border-red-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                        Đã Hủy</span>`:`<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">${e||"Chờ cọc"}</span>`},F=e=>{let t=[];const r=e.services_booked;if(r&&r!=="[]"&&r!=="null"&&r!==""){if(Array.isArray(r))t=r.map(n=>{const a=n.label||n.name||n.title||"",i=n.price&&Number(n.price)>0?` (+${Number(n.price).toLocaleString("vi-VN")}đ)`:"";return(a+i).trim()}).filter(Boolean);else if(typeof r=="string"&&r.trim().startsWith("["))try{const n=JSON.parse(r);Array.isArray(n)&&n.length>0&&(t=n.map(a=>{const i=a.label||a.name||a.title||"",d=a.price&&Number(a.price)>0?` (+${Number(a.price).toLocaleString("vi-VN")}đ)`:"";return(i+d).trim()}).filter(Boolean))}catch{const a=r.match(/label:\s*['"]([^'"]+)['"]/g)||[],i=r.match(/price:\s*(\d+)/g)||[];a.length>0&&(t=a.map((d,l)=>{const c=d.replace(/label:\s*['"]/,"").replace(/['"]$/,"").trim(),o=i[l]||"",p=o?Number(o.replace(/price:\s*/,"")):0;return(c+(p>0?` (+${p.toLocaleString("vi-VN")}đ)`:"")).trim()}).filter(Boolean))}}if(t.length===0){const n=e.extra_services||e.extraServices||e.extra||e.notes_extra||"";n&&n!=="-"&&n.trim()!==""&&(t=n.split(/[\n,;]+/).map(a=>a.trim()).filter(Boolean))}if(t.length===0)return'<span class="text-gray-300 text-xs italic">Không có</span>';const s=["bg-violet-100 text-violet-700 border-violet-200","bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200","bg-sky-100 text-sky-700 border-sky-200","bg-teal-100 text-teal-700 border-teal-200","bg-orange-100 text-orange-700 border-orange-200","bg-rose-100 text-rose-700 border-rose-200"];return`<div class="flex flex-wrap gap-1.5">${t.map((n,a)=>`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${s[a%s.length]}">
                        <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                        ${n}</span>`).join("")}</div>`},N=e=>{if(!e)return!1;const t=new Date().getMonth()+1,r=e.split("-");return r.length===3?parseInt(r[1])===t:!1},b=[{id:"col-stt",label:"STT",always:!0,render:(e,t)=>`<span class="text-gray-400 font-mono text-xs">${t+1}</span>`},{id:"col-name",label:"Họ và Tên",default:!0,render:e=>{const t=N(e.dob)?' <span title="Sinh nhật tháng này!" class="text-pink-500">🎂</span>':"";return`<div class="font-bold text-gray-900 text-sm">${e.name||"-"}${t}</div>`}},{id:"col-dob",label:"Ngày Sinh",default:!0,render:e=>{if(!e.dob)return'<span class="text-gray-300">—</span>';const t=e.dob.split("-"),r=t.length===3?`${t[2]}/${t[1]}/${t[0]}`:e.dob,s=N(e.dob)?" 🎂":"";return`<span class="text-gray-700 text-sm tabular-nums">${r}${s}</span>`}},{id:"col-gender",label:"Giới Tính",default:!0,render:e=>{const t=e.gender||"";return t==="Nam"?'<span class="text-blue-600 font-bold text-xs">👨 Nam</span>':t==="Nữ"?'<span class="text-pink-600 font-bold text-xs">👩 Nữ</span>':'<span class="text-gray-400 text-xs">—</span>'}},{id:"col-phone",label:"Số Điện Thoại",default:!0,render:e=>`<a href="tel:${e.phone||""}" class="font-medium text-blue-600 hover:text-blue-800 hover:underline tabular-nums text-sm">${e.phone||"—"}</a>`},{id:"col-pickup",label:"Điểm Đón",default:!0,render:e=>e.pickup_point?`<span class="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full font-medium">${e.pickup_point}</span>`:'<span class="text-gray-300 text-xs">—</span>'},{id:"col-seat",label:"💺 Ghế",default:!0,render:e=>{const t=e.seat_number||"";return`<div class="flex items-center gap-1">
                    ${t?`<span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-csr-orange text-white font-black text-sm seat-badge" data-id="${e.id}">${t}</span>`:`<span class="inline-flex items-center justify-center w-8 h-8 rounded-lg border-2 border-dashed border-gray-300 text-gray-400 text-xs seat-badge cursor-pointer hover:border-csr-orange hover:text-csr-orange transition-colors" data-id="${e.id}">+</span>`}
                </div>`}},{id:"col-note",label:"Ghi Chú",default:!0,render:e=>e.special?`<span class="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">${e.special}</span>`:'<span class="text-gray-300 text-xs">—</span>'},{id:"col-status",label:"Trạng Thái",default:!0,render:e=>O(e.status)},{id:"col-order-id",label:"Mã Đơn",default:!1,render:e=>`<span class="font-mono text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-200">#${e.id||"—"}</span>`},{id:"col-extra",label:"Dịch Vụ Phát Sinh",default:!1,render:e=>F(e)},{id:"col-sale",label:"Sale Phụ Trách",default:!1,render:e=>`<div class="font-bold text-indigo-700 text-sm whitespace-nowrap">${e.sale_name&&e.sale_name!=="null"&&e.sale_name!=="Website"?e.sale_name:'<span class="text-gray-400 font-normal">Website</span>'}</div>`},{id:"col-cccd",label:"CCCD / Passport",default:!1,render:e=>e.id_card||e.cccd||"-"},{id:"col-address",label:"Địa Chỉ",default:!1,render:e=>`<div class="max-w-[200px] truncate print:max-w-none print:whitespace-normal" title="${e.address||""}">${e.address||"-"}</div>`},{id:"col-diet",label:"Ăn Chay",default:!1,render:e=>e.diet==="Ăn chay"||e.diet==="Chay"||e.diet==="Có"?'<span class="text-green-600 font-bold">Có</span>':"Không"},{id:"col-pole",label:"Gậy Trekking",default:!1,render:e=>e.trekking_pole==="Có"?'<span class="text-orange-600 font-bold">Có</span>':"Không"},{id:"col-allergy",label:"Dị Ứng / Bệnh",default:!1,render:e=>e.medical_notes||e.allergy||"-"},{id:"col-medal",label:"Tên Huy Chương",default:!1,render:e=>e.medal_name||e.name||"-"}],E=new URLSearchParams(window.location.search),f=E.get("tour")||"",y=E.get("date")||"",C=E.get("scheduleId")||"",q=!!E.get("groupLabel");let S=y;const K=e=>{if(!e)return"";const t=e.split(/[-/.]/);if(t.length!==3)return e;let r,s,n;return t[0].length===4?[n,s,r]=t:[r,s,n]=t,`${r.toString().padStart(2,"0")}/${s.toString().padStart(2,"0")}/${n}`},D=e=>(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[-_]/g," ").replace(/\s+/g," ").trim();y&&(S=K(y));const J=document.getElementById("roster-title"),U=document.getElementById("roster-subtitle"),W=document.getElementById("print-tour-name"),X=document.getElementById("print-tour-date"),Q=document.getElementById("print-total"),T=document.getElementById("filterStatus"),M=document.getElementById("filterGender"),B=document.getElementById("rosterList");let h=[],v=new Set(b.filter(e=>e.default||e.always).map(e=>e.id));f&&(J.textContent=f,W.textContent=f),S&&(U.innerHTML=`Ngày khởi hành: <span class="font-bold text-csr-orange">${S}</span>`,X.textContent=S);const Y=()=>{const e=document.getElementById("column-toggles");e.innerHTML=b.filter(t=>!t.always&&!t.default).map(t=>`
            <label class="flex items-center gap-2 cursor-pointer group bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 hover:border-csr-orange/50 transition-colors">
                <input type="checkbox" value="${t.id}" class="col-toggle-cb text-csr-orange focus:ring-csr-orange rounded" ${v.has(t.id)?"checked":""}>
                <span class="text-sm font-medium text-gray-600 group-hover:text-gray-900 select-none">${t.label}</span>
            </label>
        `).join(""),document.querySelectorAll(".col-toggle-cb").forEach(t=>{t.addEventListener("change",r=>{r.target.checked?v.add(r.target.value):v.delete(r.target.value),ee()})})},Z=()=>{const e=document.getElementById("table-header-row");e.innerHTML=b.map(t=>`
            <th class="p-4 whitespace-nowrap ${t.id}" data-col="${t.id}">${t.label}</th>
        `).join("")},ee=()=>{b.forEach(e=>{const t=v.has(e.id),r=document.querySelector(`th[data-col="${e.id}"]`);r&&(t?r.classList.remove("col-hidden"):r.classList.add("col-hidden")),document.querySelectorAll(`td[data-col="${e.id}"]`).forEach(s=>{t?s.classList.remove("col-hidden"):s.classList.add("col-hidden")})})},I=e=>{if(!e)return null;e.includes(" - ")&&(e=e.split(" - ")[0].trim()),e.includes("T")&&(e=e.split("T")[0]);const t=e.split(/[-/.]/);return t.length===2?{day:parseInt(t[0]),month:parseInt(t[1]),year:null}:t.length===3?t[0].length===4?{day:parseInt(t[2]),month:parseInt(t[1]),year:parseInt(t[0])}:{day:parseInt(t[0]),month:parseInt(t[1]),year:parseInt(t[2])}:null},w=I(y),te=e=>{if(!w)return!0;const t=I(e);return!(!t||t.day!==w.day||t.month!==w.month||t.year&&w.year&&t.year!==w.year)},G=async()=>{try{if(C)try{const n=await(await fetch(`/api/guides?schedule_id=${C}`)).json();if(n&&n.length>0){const a=document.getElementById("rosterGuidesSection"),i=document.getElementById("rosterGuidesList"),d={"Hướng Dẫn Viên":"bg-blue-100 text-blue-700 border-blue-200",Leader:"bg-purple-100 text-purple-700 border-purple-200",Photo:"bg-pink-100 text-pink-700 border-pink-200",Guider:"bg-cyan-100 text-cyan-700 border-cyan-200","Hậu Cần":"bg-amber-100 text-amber-700 border-amber-200","Học Việc":"bg-gray-100 text-gray-600 border-gray-200"};a.classList.remove("hidden"),i.innerHTML=n.map(l=>`
                                <div class="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-gray-200 shadow-sm print:shadow-none print:border-gray-400">
                                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${d[l.role]||"bg-gray-100 text-gray-600 border-gray-200"} uppercase tracking-wide print:border-black print:text-black">${l.role}</span>
                                    <span class="font-bold text-gray-900 text-sm print:text-black">${l.full_name}</span>
                                    ${l.phone?`<a href="tel:${l.phone}" class="text-xs text-gray-500 hover:text-indigo-600 font-medium ml-1 print:text-black print:no-underline">(${l.phone})</a>`:""}
                                </div>
                            `).join("")}}catch(s){console.error("Error loading guides:",s)}const t=await(await fetch("/api/bookings")).json();console.log("[Roster] targetTour:",f,"targetDateStr:",y,"targetParsed:",w),console.log("[Roster] Total bookings:",t.length),t.length>0&&t.filter(n=>n.tour&&n.tour.includes("Liêng")).slice(0,3).forEach(n=>console.log("[Roster] Sample Liêng:",{tour:n.tour,date:n.date,parsed:I(n.date)})),h=t.filter(s=>{if(C){if(String(s.schedule_id)===String(C))return!0;if(!(!q&&!s.schedule_id))return!1}let n=!0,a=!0;if(f){const i=D(s.tour),d=D(f);n=i===d||i.includes(d)||d.includes(i)}return y&&(a=te(s.date)),n&&a}),console.log("[Roster] Matched bookings:",h.length);const r=document.getElementById("filterSort")?.value||"newest";r==="newest"?h.sort((s,n)=>parseInt(n.id)-parseInt(s.id)):h.sort((s,n)=>parseInt(s.id)-parseInt(n.id)),console.log(`[Roster] Sorted bookings (${r}):`,h.map(s=>s.id)),$()}catch(e){console.error("Lỗi khi tải dữ liệu đoàn:",e),B.innerHTML='<tr><td colspan="12" class="p-8 text-center text-red-500 font-bold">Lỗi khi tải dữ liệu. Vui lòng tải lại trang.</td></tr>'}},$=()=>{const e=T.value.toLowerCase(),t=M.value.toLowerCase(),r=document.getElementById("filterSearch")?.value?.toLowerCase()||"",s=h.filter(n=>{if(r&&!`${n.name} ${n.phone} ${n.address} ${n.medal_name} ${n.customer_id}`.toLowerCase().includes(r))return!1;const a=(n.status||"").toLowerCase();if(!(e===""||e==="chờ cọc"&&(a.includes("chờ cọc")||a.includes("chờ xác nhận"))||e==="đã cọc"&&(a.includes("đã cọc")||a.includes("hoàn tất")||a.includes("hoàn thành"))||e==="đã hủy"&&a.includes("hủy")))return!1;const d=(n.gender||"").toLowerCase();return t===""||d===t});if(document.getElementById("text-visible-count").textContent=s.length,Q.textContent=s.length,s.length===0){B.innerHTML='<tr><td colspan="12" class="p-12 text-center text-gray-500 bg-gray-50">Không tìm thấy khách hàng nào khớp với điều kiện lọc.</td></tr>';return}B.innerHTML=s.map((n,a)=>`<tr class="${a%2===0?"bg-white":"bg-gray-50/40"} hover:bg-amber-50/40 transition-colors border-b border-gray-100 group" data-booking-id="${n.id}">`+b.map(d=>`
                    <td class="px-4 py-3 align-middle ${d.id==="col-extra"?"min-w-[220px]":""} ${v.has(d.id)?"":"col-hidden"}" data-col="${d.id}">
                        ${d.render(n,a)}
                    </td>
                `).join("")+"</tr>").join("")},ne=()=>{const e=b.filter(o=>v.has(o.id)),t=T.value.toLowerCase(),r=M.value.toLowerCase(),s=document.getElementById("filterSearch")?.value?.toLowerCase()||"",n=h.filter(o=>{if(s&&!`${o.name} ${o.phone} ${o.address} ${o.medal_name} ${o.customer_id}`.toLowerCase().includes(s))return!1;const p=(o.status||"").toLowerCase();if(!(t===""||t==="chờ cọc"&&(p.includes("chờ cọc")||p.includes("chờ xác nhận"))||t==="đã cọc"&&(p.includes("đã cọc")||p.includes("hoàn tất")||p.includes("hoàn thành"))||t==="đã hủy"&&p.includes("hủy")))return!1;const u=(o.gender||"").toLowerCase();return r===""||u===r});let a=`
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
                            ${e.map(o=>`<th>${o.label}</th>`).join("")}
                        </tr>
                    </thead>
                    <tbody>
        `;n.forEach((o,p)=>{a+="<tr>",e.forEach(g=>{let u="";if(g.id==="col-stt")u=p+1;else if(g.id==="col-name")u=o.name||"";else if(g.id==="col-order-id")u=o.id||"";else if(g.id==="col-address")u=o.address||"";else if(g.id==="col-phone")u=o.phone?String(o.phone):"";else if(g.id==="col-diet")u=o.diet==="Ăn chay"||o.diet==="Chay"||o.diet==="Có"?"Có":"Không";else if(g.id==="col-pole")u=o.trekking_pole==="Có"?"Có":"Không";else if(g.id==="col-status")u=o.status||"";else if(g.id==="col-extra"){const m=o.services_booked;if(m&&m!=="[]"&&m!=="null"&&m!==""){const k=z=>z.map(x=>{const L=x.label||x.name||x.title||"",H=x.price&&Number(x.price)>0?` (+${Number(x.price).toLocaleString("vi-VN")}đ)`:"";return(L+H).trim()}).filter(Boolean).join(", ");if(Array.isArray(m))u=k(m);else if(typeof m=="string"&&m.trim().startsWith("["))try{u=k(JSON.parse(m))}catch{const x=m.match(/label:\s*['"]([^'"]+)['"]/g)||[],L=m.match(/price:\s*(\d+)/g)||[];x.length>0&&(u=x.map((H,V)=>{const ae=H.replace(/label:\s*['"]/,"").replace(/['"]$/,"").trim(),P=L[V]?Number(L[V].replace(/price:\s*/,"")):0;return(ae+(P>0?` (+${P.toLocaleString("vi-VN")}đ)`:"")).trim()}).filter(Boolean).join(", "))}}u||(u=o.extra_services||"")}else{const m=String(g.render(o,p)),k=document.createElement("DIV");k.innerHTML=m,u=k.textContent||k.innerText||""}const A=g.id==="col-phone"||g.id==="col-cccd";a+=`<td ${A?'class="num"':""}>${u}</td>`}),a+="</tr>"}),a+=`
                    </tbody>
                </table>
            </body>
            </html>
        `;const i=new Blob(["\uFEFF",a],{type:"application/vnd.ms-excel;charset=utf-8"}),d=URL.createObjectURL(i),l=`DS_Doan_${f||"Tour"}_${S||"Date"}.xls`.replace(/[/\\?%*:|"<>]/g,"-"),c=document.createElement("a");c.setAttribute("href",d),c.setAttribute("download",l),document.body.appendChild(c),c.click(),document.body.removeChild(c)},re=[[{n:"LÁI",driver:!0},{n:1}],[{n:2},{n:3},null,{n:4},{n:5}],[{n:6},{n:7},null,{n:8},{n:9}],[{n:10},{n:11},null,{n:12},{n:13}],[null,{n:14},{n:15},null]],_=()=>{const e=document.getElementById("seatMapGrid");if(!e)return;const t={};h.forEach(a=>{a.seat_number&&(t[String(a.seat_number)]=a)});const r=Object.keys(t).length,s=document.getElementById("seat-map-count"),n=document.getElementById("seat-count-badge");s&&(s.textContent=`${r}/15`),n&&(n.textContent=`💺 ${r}/15 ghế đã xếp`),e.innerHTML=re.map((a,i)=>`<div class="flex items-center justify-center gap-1.5">${a.map(l=>{if(!l)return'<div class="w-12 h-10 flex-shrink-0"></div>';if(l.driver)return'<div class="seat-btn seat-driver w-12 h-10 rounded-lg flex flex-col items-center justify-center text-[9px] font-bold flex-shrink-0"><span>🚗</span><span>LÁI</span></div>';const c=String(l.n),o=t[c],p=o?(o.name||"").split(" ").pop().slice(0,4):"";return`<button
                    class="seat-btn ${o?"seat-assigned":"seat-empty"} w-12 h-10 rounded-lg flex flex-col items-center justify-center flex-shrink-0 group relative"
                    data-seat="${c}"
                    data-booking-id="${o?o.id:""}"
                    title="${o?o.name+" — Ghế "+c:"Ghế "+c+" (trống)"}">
                    <span class="text-[9px] font-bold leading-none">${c}</span>
                    ${o?`<span class="text-[9px] leading-none mt-0.5 truncate max-w-[44px] px-0.5">${p}</span>`:""}
                </button>`}).join("")}</div>`).join(""),e.querySelectorAll(".seat-btn[data-seat]").forEach(a=>{a.addEventListener("click",()=>R(a.dataset.seat,a.dataset.bookingId))})},R=(e,t)=>{const r=document.getElementById("seatModal"),s=document.getElementById("seatModalTitle"),n=document.getElementById("seatModalBody");if(!r||!s||!n)return;s.textContent=t?`Ghế ${e} — ${h.find(l=>String(l.id)===String(t))?.name||"?"}`:`Ghế ${e} — Chưa có khách`;const a=h.find(l=>String(l.id)===String(t));let i="";a&&(i+=`<div class="mb-3 p-3 bg-orange-50 border border-orange-200 rounded-xl text-sm">
                <div class="font-bold text-gray-800">${a.name}</div>
                <div class="text-gray-500 text-xs">${a.phone||""} ${a.gender?"· "+a.gender:""}</div>
                ${a.pickup_point?`<div class="text-xs text-blue-600 mt-1">📍 ${a.pickup_point}</div>`:""}
            </div>
            <button class="w-full py-2 text-sm font-bold text-red-600 border border-red-200 rounded-xl hover:bg-red-50 transition-colors mb-3" id="btnRemoveSeat">
                ✖ Bỏ gán ghế này
            </button>
            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Chọn khách khác:</div>`);const d=h.filter(l=>!l.seat_number||String(l.id)===String(t));d.length===0?i+='<p class="text-gray-400 text-sm text-center py-4">Tất cả khách đã được xếp ghế.</p>':i+=d.map(l=>`
                <button class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-orange-50 border border-transparent hover:border-orange-200 transition-colors mb-1 btn-assign-passenger" data-booking-id="${l.id}" data-seat="${e}">
                    <div class="font-bold text-gray-800 text-sm">${l.name}</div>
                    <div class="text-xs text-gray-500">${l.phone||""} ${l.gender?"· "+l.gender:""} ${l.pickup_point?"📍 "+l.pickup_point:""}</div>
                </button>`).join(""),n.innerHTML=i,r.style.display="flex",n.querySelector("#btnRemoveSeat")?.addEventListener("click",async()=>{await j(t,null),r.style.display="none"}),n.querySelectorAll(".btn-assign-passenger").forEach(l=>{l.addEventListener("click",async()=>{const c=l.dataset.bookingId,o=l.dataset.seat,p=h.find(g=>String(g.seat_number)===String(o)&&String(g.id)!==String(c));p&&await j(p.id,null),await j(c,o),r.style.display="none"})})},j=async(e,t)=>{try{await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,seat_number:t||null})});const r=h.find(s=>String(s.id)===String(e));r&&(r.seat_number=t||null),$(),_()}catch(r){console.error("Lỗi lưu ghế:",r),alert("Lỗi lưu số ghế. Vui lòng thử lại.")}};T.addEventListener("change",$),M.addEventListener("change",$),document.getElementById("filterSearch")?.addEventListener("input",$),document.getElementById("filterSort")?.addEventListener("change",G),document.getElementById("btnExportPDF").addEventListener("click",()=>window.print()),document.getElementById("btnExportExcel").addEventListener("click",()=>ne()),document.getElementById("seatModalClose")?.addEventListener("click",()=>{document.getElementById("seatModal").style.display="none"}),document.getElementById("seatModal")?.addEventListener("click",e=>{e.target===document.getElementById("seatModal")&&(document.getElementById("seatModal").style.display="none")}),document.getElementById("rosterList")?.addEventListener("mouseover",e=>{const t=e.target.closest("tr[data-booking-id]");if(!t)return;document.querySelectorAll(".seat-btn").forEach(n=>n.classList.remove("seat-highlighted"));const r=t.dataset.bookingId,s=h.find(n=>String(n.id)===String(r));s?.seat_number&&document.querySelector(`.seat-btn[data-seat="${s.seat_number}"]`)?.classList.add("seat-highlighted")}),document.getElementById("rosterList")?.addEventListener("click",e=>{const t=e.target.closest(".seat-badge");if(!t)return;const r=t.dataset.id,s=h.find(n=>String(n.id)===String(r));R(s?.seat_number||"?",r)}),Y(),Z(),G().then(()=>_()).catch(()=>_())};export{de as afterRender,ie as render};
