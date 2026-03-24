/**
 * Booking Flow - Modal Wrapper
 * Sử dụng BookingEngine để hiển thị form đăng ký 4 bước trong Modal
 */

const BookingFlow = {
    _isOpen: false,
    _tourData: null,

    init() {
        if (document.getElementById('bfw-modal')) return;

        const html = `
        <div id="bfw-modal" class="fixed inset-0 z-[100] hidden" role="dialog" aria-modal="true">
            <!-- Backdrop -->
            <div id="bfw-backdrop" class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="BookingFlow.close()"></div>

            <!-- Modal Content -->
            <div id="bfw-content"
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       w-[95vw] max-w-2xl max-h-[92vh]
                       bg-white rounded-3xl shadow-2xl flex flex-col
                       opacity-0 scale-95 transition-all duration-300">

                <!-- Header -->
                <div class="flex items-center justify-between px-7 pt-6 pb-4 border-b border-gray-100 shrink-0">
                    <div>
                        <h3 class="text-xl font-black text-gray-900 uppercase tracking-tight">Đăng ký Tour</h3>
                        <p id="bfw-subtitle" class="text-sm font-medium text-gray-400 mt-0.5"></p>
                    </div>
                    <button onclick="BookingFlow.close()"
                        class="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600">
                        <i data-lucide="x" class="w-6 h-6"></i>
                    </button>
                </div>

                <!-- Booking Engine Container -->
                <div id="bfw-engine-container" class="flex-1 overflow-y-auto px-7 py-6 custom-scrollbar"></div>
            </div>
        </div>`;

        document.body.insertAdjacentHTML('beforeend', html);
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    /**
     * Mở modal đăng ký
     * @param {string} tourName - Tên tour
     * @param {number|string} price - Giá tour
     * @param {string} date - Ngày khởi hành (YYYY-MM-DD hoặc DD/MM/YYYY)
     * @param {string|number} tourId - ID tour trong DB (để load form_config)
     */
    open(tourName, price, date, tourId = null) {
        this.init();

        // Normalize date
        let displayDate = date || '';
        if (displayDate.includes('T')) displayDate = displayDate.split('T')[0];
        if (displayDate.includes('-') && displayDate.split('-').length === 3 && displayDate.split('-')[0].length === 4) {
            displayDate = displayDate.split('-').reverse().join('/');
        }

        document.getElementById('bfw-subtitle').textContent = `${tourName} | ${displayDate}`;

        // Show modal with animation
        const modal = document.getElementById('bfw-modal');
        const content = document.getElementById('bfw-content');
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            content.classList.remove('opacity-0', 'scale-95');
            content.classList.add('opacity-100', 'scale-100');
        }, 10);

        // Mount BookingEngine
        const container = document.getElementById('bfw-engine-container');
        container.innerHTML = '<div style="text-align:center;padding:40px;color:#9ca3af;"><div style="width:36px;height:36px;border:3px solid #e5e7eb;border-top-color:#E85D04;border-radius:50%;animation:bfwSpin .7s linear infinite;margin:0 auto 12px;"></div><p style="font-weight:600;">Đang tải...</p></div><style>@keyframes bfwSpin{to{transform:rotate(360deg)}}</style>';

        // Fallback tourData từ params nếu không có tourId
        const fallback = tourId ? null : {
            id: null,
            name: tourName,
            price: parseInt(price) || 0,
            form_config: {
                step2: { show_pickup: false, show_medal_name: true, show_vegetarian: true, show_trekking_pole: true, show_special_request: true },
                step3: { show_coupon: true }
            },
            pickup_points: [],
            services: []
        };

        if (typeof BookingEngine !== 'undefined') {
            // Normalize date cho engine (DD/MM/YYYY → YYYY-MM-DD)
            let isoDate = date || '';
            if (isoDate.includes('T')) isoDate = isoDate.split('T')[0];
            if (isoDate.includes('/')) {
                const p = isoDate.split('/');
                isoDate = `${p[2]}-${p[1].padStart(2,'0')}-${p[0].padStart(2,'0')}`;
            }
            // Dùng trực tiếp global BookingEngine để tất cả onclick handler tham chiếu đúng
            BookingEngine.mount(container, tourId, isoDate, {
                tourData: fallback,
                onSuccess: (saved) => {
                    console.log('[BookingFlow] Booking saved:', saved.id);
                }
            });
        } else {
            console.warn('BookingEngine not loaded. Make sure booking-engine.js is included.');
        }

        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    close() {
        const modal = document.getElementById('bfw-modal');
        const content = document.getElementById('bfw-content');
        if (!modal) return;
        content.classList.remove('opacity-100', 'scale-100');
        content.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
            // Stop any polling
            if (typeof BookingEngine !== 'undefined' && BookingEngine._pollInterval) {
                clearInterval(BookingEngine._pollInterval);
                BookingEngine._pollInterval = null;
            }
        }, 250);
    }
};

window.BookingFlow = BookingFlow;
