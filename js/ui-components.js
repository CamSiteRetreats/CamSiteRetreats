/**
 * CAM SITE RETREATS - UI Components
 * Centralized Header and Footer templates with automatic path detection
 */

const UIComponents = {
    // Determine path based on current location
    getPathPrefix: function () {
        const path = window.location.pathname.toLowerCase();
        // Check if we are in a subfolder (TOUR or ADMIN)
        if (path.includes('/tour/') || path.includes('/admin/')) {
            return '../';
        }
        return '';
    },

    renderHeader: function (containerId) {
        const prefix = this.getPathPrefix();
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <nav class="fixed top-0 w-full z-30 glass-nav py-4 bg-white/90 backdrop-blur-md transition-all duration-300">
                <div class="max-w-6xl mx-auto px-6 flex justify-between items-center w-full relative">
                    <div class="flex items-center">
                        <a href="${prefix}" class="block">
                            <img src="${prefix}logo.png" alt="CAM SITE RETREATS" class="h-10 w-auto object-contain">
                        </a>
                    </div>
                    
                    <!-- Mobile Menu Button -->
                    <button onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" class="md:hidden p-2 text-gray-600">
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    </button>

                    <div class="hidden md:flex space-x-6 font-medium text-sm tracking-wide uppercase">
                        <a href="${prefix}" class="hover:text-primary transition-colors">Trang chủ</a>
                        <a href="${prefix}tour" class="hover:text-primary transition-colors">Tất cả Tour</a>
                        <a href="${prefix}#about" class="hover:text-primary transition-colors">Về chúng tôi</a>
                        <a href="${prefix}#contact" class="hover:text-primary transition-colors">Liên hệ</a>
                    </div>

                    <button onclick="window.location.href='${prefix}#contact'"
                        class="hidden md:block bg-primary text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-all transform hover:scale-105 active:scale-95 shadow-lg">
                        ĐĂNG KÝ NGAY
                    </button>
                    
                    <!-- Mobile Menu Dropdown -->
                    <div id="mobile-menu" class="hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 flex flex-col p-6 space-y-4 md:hidden animate__animated animate__fadeInDown">
                        <a href="${prefix}" class="font-bold text-gray-800 py-2 border-b border-gray-50 uppercase text-xs tracking-widest">Trang chủ</a>
                        <a href="${prefix}tour" class="font-bold text-gray-800 py-2 border-b border-gray-50 uppercase text-xs tracking-widest">Tất cả Tour</a>
                        <a href="${prefix}#about" class="font-bold text-gray-800 py-2 border-b border-gray-50 uppercase text-xs tracking-widest">Về chúng tôi</a>
                        <a href="${prefix}#contact" class="font-bold text-gray-800 py-2 border-b border-gray-50 uppercase text-xs tracking-widest">Liên hệ</a>
                        <button onclick="window.location.href='${prefix}#contact'" class="bg-primary text-white py-3 px-8 rounded-xl font-bold uppercase tracking-widest text-xs w-fit self-center shadow-lg shadow-primary/20">Đăng ký ngay</button>
                    </div>
                </div>
            </nav>
        `;

        // Initialize Scroll Logic for the newly rendered nav
        this.initNavScroll();
    },

    renderFooter: function (containerId) {
        const prefix = this.getPathPrefix();
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <footer class="py-20 bg-white/90 backdrop-blur-sm relative overflow-hidden">
                <!-- Texture Overlay -->
                <div class="absolute inset-0 z-0 opacity-50 pointer-events-none"
                    style="background-image: url('${prefix}bg-texture.png'); background-size: cover; background-position: center; mask-image: linear-gradient(to bottom, transparent, black 15%); -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%);">
                </div>
                <div class="max-w-6xl mx-auto px-6 relative z-10">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-gray-600">
                        <!-- Col 1: Brand -->
                        <div class="space-y-6">
                            <a href="${prefix}" class="block">
                                <img src="${prefix}logo.png" alt="CAM SITE RETREATS" class="h-12 w-auto object-contain mb-4">
                            </a>
                            <p class="italic leading-relaxed font-medium">
                                CAM SITE RETREATS là một đội ngũ trẻ trung, với mong muốn mang đến những tinh thần tràn đầy
                                nhiệt huyết, những câu chuyện chữa lành và biến những trải nghiệm ngày hôm nay trở thành những
                                kỷ niệm cho mai sau!
                            </p>
                        </div>

                        <!-- Col 2: Contact -->
                        <div>
                            <h3 class="text-primary font-bold uppercase mb-6 text-base tracking-wide">THÔNG TIN LIÊN HỆ</h3>
                            <ul class="space-y-4 font-medium">
                                <li>EMAIL: admin@camsiteretreats.com</li>
                                <li>SĐT: 0819 685 878</li>
                            </ul>
                        </div>

                        <!-- Col 3: Tour Types -->
                        <div>
                            <h3 class="text-primary font-bold uppercase mb-6 text-base tracking-wide">CÁC LOẠI HÌNH TOUR</h3>
                            <ul class="space-y-4 uppercase font-bold text-gray-500">
                                <li>TREKKING</li>
                                <li>CANYONING</li>
                                <li>HIKING</li>
                                <li>CAMPING</li>
                            </ul>
                        </div>

                        <!-- Col 4: Policies -->
                        <div>
                            <h3 class="text-primary font-bold uppercase mb-6 text-base tracking-wide">CHÍNH SÁCH</h3>
                            <ul class="space-y-4 font-medium">
                                <li><a href="#" class="hover:text-primary transition-colors">Bảo mật thông tin</a></li>
                                <li><a href="#" class="hover:text-primary transition-colors">Hướng dẫn đặt tour</a></li>
                                <li><a href="#" class="hover:text-primary transition-colors">Chính sách hoàn / hủy tour</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="mt-20 text-center font-bold text-gray-800 text-base uppercase tracking-wide">
                        Chúc bạn có một hành trình rực rỡ tại CAM SITE RETREATS
                    </div>
                </div>
            </footer>
        `;
    },

    initNavScroll: function () {
        const nav = document.querySelector('nav');
        if (!nav) return;

        let hasAnimated = false;
        window.addEventListener('scroll', function () {
            if (window.scrollY > 10) {
                if (!nav.classList.contains('py-2')) {
                    nav.classList.add('py-2', 'shadow-md');
                    nav.classList.remove('py-4');

                    if (!hasAnimated) {
                        nav.classList.add('animate__animated', 'animate__fadeInDown');
                        hasAnimated = true;
                    }
                }
            } else {
                nav.classList.add('py-4');
                nav.classList.remove('py-2', 'shadow-md', 'animate__animated', 'animate__fadeInDown');
                hasAnimated = false;
            }
        });
    },

    init: function () {
        this.renderHeader('header-placeholder');
        this.renderFooter('footer-placeholder');

        // Re-initialize Lucide icons for the new elements
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
};

// Initialize when the script is loaded or DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => UIComponents.init());
} else {
    UIComponents.init();
}
