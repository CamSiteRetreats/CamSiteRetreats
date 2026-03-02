/**
 * Booking Flow Component
 * Handles the multi-step registration modal for all tours.
 */

const BookingFlow = {
    currentStep: 1,
    tourData: null,
    selectedDate: null,
    bookingData: {},

    // Initialize the modal structure and inject it into the body
    init: function () {
        if (document.getElementById('booking-flow-modal')) return;

        const modalHTML = `
            <div id="booking-flow-modal" class="fixed inset-0 z-[100] hidden">
                <!-- Backdrop -->
                <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" onclick="BookingFlow.close()"></div>
                
                <!-- Modal Content -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-2xl bg-white rounded-3xl shadow-2xl flex flex-col max-h-[90vh] animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)]">
                    <style>
                        @keyframes slideUp {
                            from { transform: translate(-50%, -40%); opacity: 0; }
                            to { transform: translate(-50%, -50%); opacity: 1; }
                        }
                    </style>
                    <!-- Header -->
                    <div class="flex items-center justify-between p-6 border-b border-gray-100">
                        <div>
                            <h3 class="text-xl font-black text-gray-800 uppercase" id="bf-modal-title">Đăng ký Tour</h3>
                            <p class="text-sm font-medium text-gray-500 mt-1" id="bf-tour-name">...</p>
                        </div>
                        <button onclick="BookingFlow.close()" class="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <i data-lucide="x" class="w-6 h-6 text-gray-400"></i>
                        </button>
                    </div>

                    <!-- Stepper -->
                    <div class="px-8 mt-6">
                        <div class="flex items-center justify-between relative">
                            <!-- Horizontal Line under numbers -->
                            <div class="absolute left-[10%] right-[10%] top-[calc(1rem+8px)] h-0.5 bg-gray-100 -z-10 rounded-full"></div>
                            <div id="bf-progress-bar" class="absolute left-[10%] right-[10%] top-[calc(1rem+8px)] h-0.5 bg-primary -z-10 transition-all duration-300 rounded-full" style="width: 0%"></div>
                            
                            <!-- Step 1 -->
                            <div class="flex flex-col items-center gap-2 relative z-10 bg-white px-2">
                                <div id="bf-step-1-circle" class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md transition-colors">1</div>
                                <span class="text-[10px] font-bold text-gray-500 uppercase">Thông tin</span>
                            </div>
                            <!-- Step 2 -->
                            <div class="flex flex-col items-center gap-2 relative z-10 bg-white px-2">
                                <div id="bf-step-2-circle" class="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold text-sm transition-colors">2</div>
                                <span class="text-[10px] font-bold text-gray-400 uppercase">Xác nhận</span>
                            </div>
                            <!-- Step 3 -->
                            <div class="flex flex-col items-center gap-2 relative z-10 bg-white px-2">
                                <div id="bf-step-3-circle" class="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold text-sm transition-colors">3</div>
                                <span class="text-[10px] font-bold text-gray-400 uppercase">Thanh toán</span>
                            </div>
                        </div>
                    </div>

                    <!-- Body / Steps Content -->
                    <div class="p-8 overflow-y-auto flex-1 custom-scrollbar">
                        
                        <!-- STEP 1: INFORMATION FORM -->
                        <form id="bf-step-1-form" class="space-y-5 animate-[fadeIn_0.3s_ease-out]" onsubmit="BookingFlow.handleStep1Submit(event)">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div class="space-y-1.5">
                                    <label class="text-xs font-bold text-gray-500 uppercase">Họ và Tên *</label>
                                    <input type="text" id="bf-name" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-primary focus:bg-white outline-none transition-all" placeholder="Nhập họ tên...">
                                </div>
                                <div class="space-y-1.5">
                                    <label class="text-xs font-bold text-gray-500 uppercase">Số Điện Thoại *</label>
                                    <input type="tel" id="bf-phone" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-primary focus:bg-white outline-none transition-all" placeholder="09xx...">
                                </div>
                                <div class="space-y-1.5">
                                    <label class="text-xs font-bold text-gray-500 uppercase">Ngày Tháng Năm Sinh *</label>
                                    <input type="text" id="bf-dob" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-primary focus:bg-white outline-none transition-all" placeholder="DD/MM/YYYY">
                                </div>
                                <div class="space-y-1.5">
                                    <label class="text-xs font-bold text-gray-500 uppercase">Căn cước công dân *</label>
                                    <input type="text" id="bf-id" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-primary focus:bg-white outline-none transition-all" placeholder="Số CCCD...">
                                </div>
                                <div class="space-y-1.5 md:col-span-2">
                                    <label class="text-xs font-bold text-gray-500 uppercase">Địa chỉ *</label>
                                    <input type="text" id="bf-address" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-primary focus:bg-white outline-none transition-all" placeholder="Địa chỉ hiện tại...">
                                </div>
                                <div class="space-y-1.5">
                                    <label class="text-xs font-bold text-gray-500 uppercase">Tên in trên huy chương *</label>
                                    <input type="text" id="bf-medal-name" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-primary focus:bg-white outline-none transition-all" placeholder="Tên in (viết hoa không dấu)...">
                                </div>
                                <div class="space-y-1.5">
                                    <label class="text-xs font-bold text-gray-500 uppercase">Giới Tính *</label>
                                    <select id="bf-gender" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-primary focus:bg-white outline-none transition-all">
                                        <option value="">Chọn giới tính</option>
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                </div>
                            </div>

                            <div class="space-y-1.5 flex-1">
                                <label class="text-xs font-bold text-gray-500 uppercase">Yêu cầu đặc biệt (tùy chọn)</label>
                                <textarea id="bf-notes" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:border-primary focus:bg-white outline-none transition-all h-20" placeholder="Ví dụ: Ăn chay, dị ứng hải sản..."></textarea>
                            </div>

                            <button type="submit" class="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all mt-6 shadow-lg shadow-primary/20 cursor-pointer">
                                Tiếp Tục
                            </button>
                        </form>

                        <!-- STEP 2: CONFIRMATION -->
                        <div id="bf-step-2-content" class="hidden space-y-6 animate-[fadeIn_0.3s_ease-out]">
                            <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4">
                                <h4 class="text-sm font-black text-gray-800 uppercase border-b border-gray-200 pb-2">Xác Nhận Đơn Hàng</h4>
                                
                                <div class="flex justify-between text-sm">
                                    <span class="font-medium text-gray-500">Khách hàng:</span>
                                    <span class="font-bold text-gray-800" id="bf-confirm-name">...</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="font-medium text-gray-500">Số Điện thoại:</span>
                                    <span class="font-bold text-gray-800" id="bf-confirm-phone">...</span>
                                </div>
                                
                                <div class="my-4 border-t border-gray-200 border-dashed"></div>

                                <div class="flex justify-between text-sm items-center">
                                    <span class="font-medium text-gray-500">Lịch khởi hành:</span>
                                    <span class="font-black text-primary bg-primary/10 px-3 py-1 rounded-lg" id="bf-confirm-date">...</span>
                                </div>
                                
                                <div class="flex justify-between text-sm items-center mt-2 pt-2 border-t border-gray-200">
                                    <span class="font-bold text-gray-500 uppercase text-xs">Tổng tiền Tour:</span>
                                    <span class="font-black text-xl text-gray-800" id="bf-confirm-price">...</span>
                                </div>
                                <div class="flex justify-between text-sm items-center mt-1">
                                    <span class="font-bold text-gray-500 uppercase text-xs">Cọc trước đăng ký:</span>
                                    <span class="font-black text-xl text-orange-500">1.000.000đ</span>
                                </div>
                            </div>

                            <!-- Terms and Policies -->
                            <div class="bg-red-50/50 p-5 rounded-xl border border-red-100 flex gap-3 items-start">
                                <div class="mt-0.5">
                                    <input type="checkbox" id="bf-terms" class="w-5 h-5 accent-primary cursor-pointer border-gray-300">
                                </div>
                                <label for="bf-terms" class="text-[13px] text-gray-700 font-medium leading-relaxed cursor-pointer select-none">
                                    Tôi hoàn toàn đảm bảo không mắc các vấn đề về tim mạch, tiền sử bị tim mạch và tự chịu trách nhiệm với các rủi ro liên quan đến các bệnh nền.
                                </label>
                            </div>

                            <div class="flex gap-4">
                                <button onclick="BookingFlow.setStep(1)" class="w-1/3 py-4 text-gray-500 font-bold uppercase tracking-widest hover:text-gray-800 bg-gray-100 rounded-xl transition-colors">
                                    Quay Lại
                                </button>
                                <button onclick="BookingFlow.handleStep2Submit()" id="bf-btn-confirm" class="w-2/3 bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20 opacity-50 cursor-not-allowed">
                                    Thanh Toán Cọc
                                </button>
                            </div>
                        </div>

                        <!-- STEP 3: PAYMENT -->
                        <div id="bf-step-3-content" class="hidden space-y-6 animate-[fadeIn_0.3s_ease-out]">
                            <div class="text-center space-y-2">
                                <h4 class="text-lg font-black text-gray-800 uppercase">Thanh Toán Chuyển Khoản</h4>
                                <p class="text-sm font-medium text-gray-500">Vui lòng thanh toán số tiền cọc để giữ chỗ cho chuyến đi này.</p>
                            </div>

                            <div class="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex flex-col items-center">
                                <!-- Deposit Amount Box -->
                                <div class="bg-white px-8 py-3 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col items-center w-full">
                                    <span class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Số tiền cọc</span>
                                    <span class="text-3xl font-black text-primary" id="bf-deposit-amount">1.000.000đ</span>
                                </div>

                                <!-- QR Code Container -->
                                <div class="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 w-48 h-48 flex items-center justify-center mb-6 relative overflow-hidden" id="bf-qr-container">
                                    <!-- QR Image will be injected here -->
                                    <div class="animate-pulse flex space-x-4">
                                        <div class="rounded bg-gray-200 h-32 w-32"></div>
                                    </div>
                                </div>

                                <!-- Bank Details Transfer -->
                                <div class="w-full space-y-3 bg-white p-4 rounded-xl border border-gray-100 mb-6">
                                    <div class="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100 cursor-pointer hover:bg-gray-100 transition" onclick="BookingFlow.copyText('0819685878', 'Số tài khoản')">
                                        <div>
                                            <p class="text-[10px] uppercase font-bold text-gray-400 mb-0.5">Số tài khoản (MB Bank)</p>
                                            <p class="font-bold text-gray-800">0819685878</p>
                                        </div>
                                        <i data-lucide="copy" class="w-5 h-5 text-gray-400"></i>
                                    </div>

                                    <div class="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100 cursor-pointer hover:bg-gray-100 transition" onclick="BookingFlow.copyText(document.getElementById('bf-transfer-content').innerText, 'Nội dung CK')">
                                        <div>
                                            <p class="text-[10px] uppercase font-bold text-gray-400 mb-0.5">Nội dung chuyển khoản</p>
                                            <p class="font-bold text-gray-800" id="bf-transfer-content">...</p>
                                        </div>
                                        <i data-lucide="copy" class="w-5 h-5 text-gray-400"></i>
                                    </div>
                                </div>

                                <!-- Terms and Policies (Step 3) -->
                                <div class="bg-blue-50/50 p-4 rounded-xl border border-blue-100 flex gap-3 items-start w-full text-left mb-6">
                                    <div class="mt-0.5">
                                        <input type="checkbox" id="bf-terms-step3" class="w-5 h-5 accent-primary cursor-pointer border-gray-300">
                                    </div>
                                    <label for="bf-terms-step3" class="text-[12px] text-gray-600 font-medium leading-relaxed cursor-pointer select-none">
                                        Tôi đã đọc và đồng ý với <a href="../chinh-sach.html#an-toan" target="_blank" class="text-primary font-bold hover:underline">Quy định an toàn</a>, <a href="../chinh-sach.html#mien-tru" target="_blank" class="text-primary font-bold hover:underline">Miễn trừ trách nhiệm</a> và <a href="../chinh-sach.html#hoan-huy" target="_blank" class="text-primary font-bold hover:underline">Chính sách hủy/hoàn tour</a> của CAM SITE RETREATS.
                                    </label>
                                </div>

                                <button onclick="BookingFlow.completeBooking()" id="bf-btn-complete" class="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20 opacity-50 cursor-not-allowed">
                                    Tôi Đã Chuyển Khoản
                                </button>
                                <p class="text-xs text-gray-400 font-medium italic mt-3 text-center">Chúng tôi sẽ kiểm tra và gửi xác nhận qua Email/Zalo của bạn sớm nhất.</p>
                            </div>
                        </div>

                        <!-- SUCCESS STATE -->
                        <div id="bf-success-content" class="hidden text-center py-8 space-y-6">
                            <div class="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i data-lucide="check-circle-2" class="w-12 h-12 text-green-500"></i>
                            </div>
                            <h3 class="text-2xl font-black text-gray-800 uppercase">Đăng Ký Thành Công!</h3>
                            <p class="text-gray-500 font-medium leading-relaxed max-w-sm mx-auto">
                                Cảm ơn <span id="bf-success-name" class="font-bold text-gray-800">...</span>.<br>
                                Hệ thống đã ghi nhận đơn đăng ký của bạn. Bộ phận vận hành sẽ liên hệ qua SĐT để xác nhận đơn cọc và gửi thông tin chi tiết về chuyến đi.
                            </p>
                            <button onclick="BookingFlow.close()" class="bg-gray-100 text-gray-600 px-8 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors mt-4">
                                Đóng
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Add event listener for checkbox in Step 2
        document.getElementById('bf-terms').addEventListener('change', function (e) {
            const btn = document.getElementById('bf-btn-confirm');
            if (e.target.checked) {
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
            } else {
                btn.classList.add('opacity-50', 'cursor-not-allowed');
            }
        });

        // Add event listener for checkbox in Step 3
        document.getElementById('bf-terms-step3').addEventListener('change', function (e) {
            const btn = document.getElementById('bf-btn-complete');
            if (e.target.checked) {
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
            } else {
                btn.classList.add('opacity-50', 'cursor-not-allowed');
            }
        });
    },

    open: function (tourName, price, date) {
        this.init(); // Ensure modal exists

        this.tourData = { name: tourName, price: price };
        this.selectedDate = date;

        document.getElementById('bf-tour-name').textContent = `${tourName} | ${date}`;
        document.getElementById('booking-flow-modal').classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scroll

        // Re-init lucide icons for modal
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Reset state
        document.getElementById('bf-step-1-form').reset();
        document.getElementById('bf-terms').checked = false;
        document.getElementById('bf-btn-confirm').classList.add('opacity-50', 'cursor-not-allowed');
        document.getElementById('bf-terms-step3').checked = false;
        document.getElementById('bf-btn-complete').classList.add('opacity-50', 'cursor-not-allowed');

        if (this.depositPollInterval) {
            clearInterval(this.depositPollInterval);
            this.depositPollInterval = null;
        }

        this.setStep(1);
    },

    close: function () {
        if (document.getElementById('booking-flow-modal')) {
            document.getElementById('booking-flow-modal').classList.add('hidden');
            document.body.style.overflow = '';
        }
    },

    setStep: function (step) {
        this.currentStep = step;

        // Hide all contents
        document.getElementById('bf-step-1-form').classList.add('hidden');
        document.getElementById('bf-step-2-content').classList.add('hidden');
        document.getElementById('bf-step-3-content').classList.add('hidden');
        document.getElementById('bf-success-content').classList.add('hidden');

        // Reset Step UI styles
        [1, 2, 3].forEach(i => {
            const circle = document.getElementById(`bf-step-${i}-circle`);
            if (i < step) {
                // Completed
                circle.className = 'w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md transition-colors';
                circle.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i>';
            } else if (i === step) {
                // Current
                circle.className = 'w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md transition-colors';
                circle.innerHTML = i;
            } else {
                // Pending
                circle.className = 'w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold text-sm transition-colors';
                circle.innerHTML = i;
            }
        });

        // Update Progress Bar
        const progress = step === 1 ? 0 : (step === 2 ? 50 : 100);
        document.getElementById('bf-progress-bar').style.width = `${progress}%`;

        // Render current content
        if (step === 1) {
            document.getElementById('bf-step-1-form').classList.remove('hidden');
        } else if (step === 2) {
            document.getElementById('bf-step-2-content').classList.remove('hidden');
            this.renderConfirmation();
        } else if (step === 3) {
            document.getElementById('bf-step-3-content').classList.remove('hidden');
            this.renderPayment();
        }

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    },

    handleStep1Submit: function (e) {
        e.preventDefault();

        // Collect Data
        this.bookingData = {
            name: document.getElementById('bf-name').value.trim(),
            phone: document.getElementById('bf-phone').value.trim(),
            dob: document.getElementById('bf-dob').value.trim(),
            idCard: document.getElementById('bf-id').value.trim(),
            address: document.getElementById('bf-address').value.trim(),
            medalName: document.getElementById('bf-medal-name').value.trim(),
            gender: document.getElementById('bf-gender').value,
            notes: document.getElementById('bf-notes').value.trim() || 'Không'
        };

        this.setStep(2);
    },

    renderConfirmation: function () {
        document.getElementById('bf-confirm-name').textContent = this.bookingData.name;
        document.getElementById('bf-confirm-phone').textContent = this.bookingData.phone;
        document.getElementById('bf-confirm-date').textContent = this.selectedDate;

        if (this.tourData.price) {
            document.getElementById('bf-confirm-price').textContent = TourManager.formatPrice(this.tourData.price);
        } else {
            document.getElementById('bf-confirm-price').textContent = "Liên hệ";
        }
    },

    handleStep2Submit: async function () {
        if (!document.getElementById('bf-terms').checked) return;

        const btn = document.getElementById('bf-btn-confirm');
        const ogText = btn.innerText;
        btn.innerText = 'ĐANG TẠO ĐƠN...';
        btn.disabled = true;

        const payload = {
            name: this.bookingData.name,
            phone: this.bookingData.phone,
            tour: this.tourData.name,
            date: this.selectedDate,
            total_price: this.tourData.price ? this.tourData.price : 3200000,
            deposit_required: 1000000,
            status: "Chờ xác nhận cọc",
            dob: this.bookingData.dob,
            id_card: this.bookingData.idCard,
            address: this.bookingData.address,
            medal_name: this.bookingData.medalName,
            gender: this.bookingData.gender,
            special: this.bookingData.notes,
            commitments: true
        };

        try {
            const res = await fetch('../api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error('API Error');
            const savedBooking = await res.json();

            // Save Real DB ID to generate Accurate SePay Code
            this.bookingDbId = savedBooking.id;

            btn.innerText = ogText;
            btn.disabled = false;
            this.setStep(3);
        } catch (error) {
            console.error('Error saving booking:', error);
            alert('Có lỗi xảy ra khi tạo đơn hàng, vui lòng thử lại.');
            btn.innerText = ogText;
            btn.disabled = false;
        }
    },

    renderPayment: function () {
        const depositAmount = 1000000; // Fixed deposit 1M
        const amountStr = TourManager.formatPrice(depositAmount);

        document.getElementById('bf-deposit-amount').textContent = amountStr;

        // Generate a pseudo-unique code based on DB ID to ensure SePay matching
        function normalizeVN(str) {
            return (str || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/gi, 'd').toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '').trim();
        }
        const cleanName = normalizeVN(this.bookingData.name || 'khach');
        const cleanTour = normalizeVN((this.tourData.name || 'Tour').split('-')[0].trim());

        // Format: CSR{id} {tour} {name} coc (This matches strategy 1 & 2 in SePay webhook)
        const bookingCode = `CSR${this.bookingDbId} ${cleanTour} ${cleanName} coc`;
        document.getElementById('bf-transfer-content').textContent = bookingCode;

        // Generate SePay QR
        const qrUrl = `https://qr.sepay.vn/img?acc=96247CAMSITERETREAT&bank=BIDV&amount=${depositAmount}&des=${encodeURIComponent(bookingCode)}`;

        const qrContainer = document.getElementById('bf-qr-container');
        qrContainer.innerHTML = `<img src="${qrUrl}" class="w-full h-full object-contain mix-blend-multiply" alt="QR Code">`;

        // Add a listening indicator text
        let oldWaiting = document.getElementById('bf-payment-listening');
        if (!oldWaiting) {
            const waitingHtml = `
            <div id="bf-payment-listening" class="flex items-center justify-center gap-2 mb-4 text-xs font-medium text-green-600 animate-pulse bg-green-50 p-2 rounded-lg border border-green-100">
                <div style="width:8px;height:8px;border-radius:50%;background:#22c55e;"></div>
                <span>Hệ thống đang chờ nhận tiền... (Tự động xác nhận)</span>
            </div>`;
            document.getElementById('bf-btn-complete').insertAdjacentHTML('beforebegin', waitingHtml);
        }

        this.startDepositPolling();
    },

    startDepositPolling: function () {
        if (this.depositPollInterval) clearInterval(this.depositPollInterval);
        if (!this.bookingDbId) return;

        this.depositPollInterval = setInterval(async () => {
            try {
                const res = await fetch(`../api/payment?action=status&id=${this.bookingDbId}`);
                if (!res.ok) return;
                const data = await res.json();

                // If paid, auto redirect and stop
                if (data.isPaid) {
                    clearInterval(this.depositPollInterval);
                    this.handlePaymentSuccess();
                }
            } catch (err) { console.warn('Poll error:', err); }
        }, 5000);
    },

    handlePaymentSuccess: function () {
        document.getElementById('bf-step-3-content').classList.add('hidden');
        document.getElementById('bf-success-content').classList.remove('hidden');
        document.getElementById('bf-success-name').textContent = this.bookingData.name;

        // Hide stepper container safely
        const stepper = document.getElementById('bf-progress-bar');
        if (stepper && stepper.parentElement) {
            stepper.parentElement.classList.add('hidden');
        }
    },

    copyText: function (text, type) {
        navigator.clipboard.writeText(text).then(() => {
            alert(`Đã copy ${type}: ${text}`);
        });
    },

    completeBooking: async function () {
        const btn = document.getElementById('bf-btn-complete');
        btn.innerText = 'ĐANG XỬ LÝ...';
        btn.disabled = true;

        // Just stop polling and show success screen since booking is already in DB
        if (this.depositPollInterval) clearInterval(this.depositPollInterval);

        // Small delay to make it feel natural
        setTimeout(() => {
            this.handlePaymentSuccess();
        }, 800);
    }
};

window.BookingFlow = BookingFlow;
