import{S as c,H as h}from"./Header-DjwXxBfR.js";const x=()=>{let a={role:"sale",fullName:"Guest"};try{const s=localStorage.getItem("csr_user");s&&(a=JSON.parse(s))}catch{}return a.role!=="admin"?`<div class="flex h-screen items-center justify-center bg-gray-50">
            <div class="text-center">
                <h1 class="text-4xl font-bold text-gray-900 mb-4">403</h1>
                <p class="text-gray-500 mb-6">Bạn không có quyền truy cập trang này!</p>
                <a href="/tours" data-link class="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-csr-orange transition-colors">Quay lại</a>
            </div>
        </div>`:`
    <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${c()}
        <div class="flex flex-col flex-1 w-full overflow-hidden">
            ${h()}
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
                <div class="max-w-7xl mx-auto space-y-6">
                    <div class="flex justify-between items-end">
                        <div>
                            <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Thùng Rác</h1>
                            <p class="text-gray-500 text-sm">Dữ liệu đã xóa. Bạn có thể khôi phục hoặc xóa vĩnh viễn.</p>
                        </div>
                    </div>

                    <!-- Tabs -->
                    <div class="flex gap-2">
                        <button id="tab-booking" onclick="window._trashTab('booking')" class="px-5 py-2 rounded-full text-sm font-bold bg-gray-900 text-white transition-all">Booking</button>
                        <button id="tab-customer" onclick="window._trashTab('customer')" class="px-5 py-2 rounded-full text-sm font-semibold border border-gray-200 text-gray-600 hover:bg-gray-100 transition-all">Khách hàng</button>
                    </div>

                    <!-- Table -->
                    <div class="glass-panel overflow-hidden border border-gray-100 shadow-sm rounded-2xl bg-white">
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="bg-gray-50/80 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-bold">
                                        <th class="p-4">Loại</th>
                                        <th class="p-4">Thông tin</th>
                                        <th class="p-4">Xóa bởi</th>
                                        <th class="p-4 whitespace-nowrap">Ngày xóa</th>
                                        <th class="p-4 text-center">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody id="trash-body" class="divide-y divide-gray-100 text-sm">
                                    <tr><td colspan="5" class="p-8 text-center text-gray-400">Đang tải...</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <!-- Confirm Modal -->
    <div id="trash-confirm-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/50 backdrop-blur-sm">
        <div class="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Xóa vĩnh viễn?</h3>
            <p class="text-gray-500 text-sm mb-6">Hành động này không thể hoàn tác. Dữ liệu sẽ bị xóa hoàn toàn.</p>
            <div class="flex gap-3">
                <button id="cancel-delete-btn" class="flex-1 border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition-all">Hủy</button>
                <button id="confirm-delete-btn" class="flex-1 bg-red-500 text-white font-bold py-2.5 rounded-xl hover:bg-red-600 transition-all">Xóa vĩnh viễn</button>
            </div>
        </div>
    </div>`},b=()=>{let a="booking";const s=e=>{if(!e)return"—";const t=new Date(e);return`${t.getDate().toString().padStart(2,"0")}/${(t.getMonth()+1).toString().padStart(2,"0")}/${t.getFullYear()}`},i=e=>{const t=e.data||{};return e.type==="booking"?`${t.customer_name||t.name||"—"} — ${t.tour||"—"}`:e.type==="customer"?`${t.name||t.full_name||"—"} — ${t.phone||"—"}`:JSON.stringify(t).slice(0,60)+"..."},l=async e=>{const t=document.getElementById("trash-body");if(t){t.innerHTML='<tr><td colspan="5" class="p-8 text-center text-gray-400">Đang tải...</td></tr>';try{const d=await(await fetch(`/api/trash?type=${e}`)).json();if(!d||d.length===0){t.innerHTML='<tr><td colspan="5" class="p-8 text-center text-gray-400">Thùng rác trống.</td></tr>';return}t.innerHTML=d.map(n=>`
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="p-4">
                        <span class="capitalize text-xs font-bold px-2 py-1 rounded-full ${n.type==="booking"?"bg-blue-100 text-blue-700":"bg-purple-100 text-purple-700"}">
                            ${n.type==="booking"?"Booking":"Khách hàng"}
                        </span>
                    </td>
                    <td class="p-4 text-gray-800 font-medium max-w-xs truncate">${i(n)}</td>
                    <td class="p-4 text-gray-500 text-xs">${n.deleted_by_name||"—"}</td>
                    <td class="p-4 text-gray-500 text-xs whitespace-nowrap">${s(n.deleted_at)}</td>
                    <td class="p-4 text-center">
                        <div class="flex justify-center gap-2">
                            <button onclick="window._restoreTrash(${n.id})"
                                class="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-green-600 transition-all">
                                Khôi phục
                            </button>
                            <button onclick="window._deleteTrash(${n.id})"
                                class="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-red-600 transition-all">
                                Xóa vĩnh viễn
                            </button>
                        </div>
                    </td>
                </tr>
            `).join("")}catch{t.innerHTML='<tr><td colspan="5" class="p-8 text-center text-red-400">Lỗi tải dữ liệu.</td></tr>'}}};window._trashTab=e=>{a=e,["booking","customer"].forEach(t=>{const r=document.getElementById(`tab-${t}`);r&&(t===e?r.className="px-5 py-2 rounded-full text-sm font-bold bg-gray-900 text-white transition-all":r.className="px-5 py-2 rounded-full text-sm font-semibold border border-gray-200 text-gray-600 hover:bg-gray-100 transition-all")}),l(e)},window._restoreTrash=async e=>{if(confirm("Khôi phục mục này?"))try{const r=await(await fetch(`/api/trash?id=${e}`,{method:"POST"})).json();r.success?(alert("Đã khôi phục thành công!"),l(a)):alert("Lỗi: "+(r.error||"Không khôi phục được"))}catch{alert("Lỗi kết nối!")}};let o=null;window._deleteTrash=e=>{o=e;const t=document.getElementById("trash-confirm-modal");t&&(t.classList.remove("hidden"),t.classList.add("flex"))},document.getElementById("cancel-delete-btn")?.addEventListener("click",()=>{o=null;const e=document.getElementById("trash-confirm-modal");e&&(e.classList.add("hidden"),e.classList.remove("flex"))}),document.getElementById("confirm-delete-btn")?.addEventListener("click",async()=>{if(o)try{await fetch(`/api/trash?id=${o}`,{method:"DELETE"});const e=document.getElementById("trash-confirm-modal");e&&(e.classList.add("hidden"),e.classList.remove("flex")),o=null,l(a)}catch{alert("Lỗi xóa!")}}),l(a)};export{b as afterRender,x as render};
