/**
 * CAM SITE RETREATS - Tour Manager
 * Centralized script to handle tour data across the website
 */

const TOURS_KEY = 'cam_site_tours';

const TourManager = {
    // Get all tours from LocalStorage or API
    getAllTours: function () {
        // Try to fetch from API in background to update cache
        this.fetchToursFromAPI();
        this.fetchSchedulesFromAPI(); // NEW: Fetch schedules too

        const data = localStorage.getItem(TOURS_KEY);
        let tours = data ? JSON.parse(data) : [];

        // If no data in local storage, return defaults (or empty if we want to force API wait, but better to show something)
        if (tours.length === 0) {
            tours = this.getDefaultTours();
        }

        // Ensure Tà Năng (ID 1) always has fixed URL if not set
        const taNang = tours.find(t => t.id == 1);
        if (taNang && !taNang.url) {
            taNang.url = 'tour/tanangphandung';
            localStorage.setItem(TOURS_KEY, JSON.stringify(tours));
        }

        // Filter out hidden tours for public view
        return tours.filter(t => t.is_visible !== false);
    },

    // NEW: Fetch from Backend API
    fetchToursFromAPI: async function () {
        try {
            // Only fetch if not recently fetched (e.g. 1 minute cache)
            const lastFetch = localStorage.getItem('cam_site_last_fetch');
            if (lastFetch && (Date.now() - parseInt(lastFetch)) < 60000) return;

            // Vercel API endpoint
            const response = await fetch('/api/tours');
            if (!response.ok) throw new Error('API Network response was not ok');

            const tours = await response.json();

            // Save to LocalStorage to act as cache
            localStorage.setItem(TOURS_KEY, JSON.stringify(tours));
            localStorage.setItem('cam_site_last_fetch', Date.now().toString());
            console.log('Tours updated from API');

            // Dispatch event to refresh UI if needed
            window.dispatchEvent(new Event('tours-updated'));

        } catch (error) {
            console.warn('Failed to fetch tours from API, using offline data:', error);
        }
    },

    // NEW: Fetch Schedules from API to LocalStorage
    fetchSchedulesFromAPI: async function () {
        try {
            // Short cache 30s
            const lastFetch = localStorage.getItem('cam_site_schedules_last_fetch');
            if (lastFetch && (Date.now() - parseInt(lastFetch)) < 30000) return;

            const res = await fetch('/api/schedules');
            if (!res.ok) throw new Error('Failed to fetch schedules');

            const schedules = await res.json();

            // Transform DB structure to Frontend structure if needed? 
            // DB: id, tour_name, start_date, end_date, slots, status
            // Frontend expects: { tour: "Tour Name", startDate: "YYYY-MM-DD", slots: 20, status: "..." }
            // Let's map it to match what getTourById expects (it expects `s.tour === tour.name`)

            const mappedSchedules = schedules.map(s => {
                const formatDate = (isoStr) => {
                    if (!isoStr) return '';
                    const d = new Date(isoStr);
                    return `${d.getDate()}/${d.getMonth() + 1}`;
                };

                return {
                    id: s.id,
                    tour: s.tour_name,
                    startDate: s.start_date,
                    endDate: s.end_date,
                    date: `${formatDate(s.start_date)} - ${formatDate(s.end_date)}`,
                    slots: s.slots,
                    bookedCount: s.booked_count || 0, // NEW: from API
                    status: s.status
                };
            });

            localStorage.setItem('cam_site_schedules', JSON.stringify(mappedSchedules));
            localStorage.setItem('cam_site_schedules_last_fetch', Date.now().toString());
            console.log('Schedules updated from API with real booked counts');

            // Dispatch event
            window.dispatchEvent(new Event('schedules-updated'));

        } catch (error) {
            console.warn('Failed to fetch schedules:', error);
        }
    },

    // NEW: Get single tour by ID with schedules linked
    getTourById: function (id) {
        const tours = this.getAllTours();
        const tour = tours.find(t => t.id == id);
        if (tour) {
            // Attach schedules from separate key
            const schedulesData = JSON.parse(localStorage.getItem('cam_site_schedules')) || [];

            // Filter schedules for this tour
            let tourSchedules = schedulesData.filter(s => s.tour === tour.name);

            // If no schedules in LocalStorage, check if there are default ones
            if (tourSchedules.length === 0 && tour.defaultSchedules) {
                tourSchedules = tour.defaultSchedules;
            }

            // Calculate availability for each schedule
            tour.schedules = tourSchedules.map(sch => {
                // Prioritize API data (bookedCount) if available, otherwise fallback to local calculation
                let booked = sch.bookedCount;
                let remaining = Math.max(0, (parseInt(sch.slots) || 0) - (parseInt(booked) || 0));

                // If bookedCount is missing (legacy/fallback), try local calculation
                if (booked === undefined) {
                    const availability = this.getScheduleAvailability(tour.name, sch.startDate, sch.slots);
                    booked = availability.booked;
                    remaining = availability.remaining;
                }

                return {
                    ...sch,
                    booked: booked,
                    remaining: remaining,
                    calculatedStatus: remaining <= 0 ? 'Hết chỗ' : (remaining <= 3 ? 'Sắp hết' : 'Đang mở')
                };
            });
        }
        return tour;
    },

    // NEW: Calculate real-time availability
    getScheduleAvailability: function (tourName, startDateStr, maxSlots) {
        const bookings = JSON.parse(localStorage.getItem('cam_site_bookings')) || [];

        // Helper to extract "DD/MM" from various formats
        const getDayMonth = (dateInput) => {
            if (!dateInput) return '';

            // If it's a "DD/MM - DD/MM" range string
            if (dateInput.includes(' - ')) {
                const startPart = dateInput.split(' - ')[0]; // "15/03"
                // Normalize 15/3 to 15/03
                const parts = startPart.split('/');
                if (parts.length === 2) {
                    return `${parts[0].padStart(2, '0')}/${parts[1].padStart(2, '0')}`;
                }
                return startPart;
            }

            // If it's ISO or Date string
            const d = new Date(dateInput);
            if (!isNaN(d.getTime())) {
                return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}`;
            }

            return '';
        };

        const targetDM = getDayMonth(startDateStr);

        const bookedCount = bookings.filter(b => {
            // Handle Tour Name mismatch (sometimes "Tà Năng" vs "Tà Năng - Phan Dũng")
            const isTourMatch = b.tour && (b.tour === tourName || b.tour.includes(tourName) || tourName.includes(b.tour));

            // Check Status (Exclude cancelled)
            const isStatusValid = b.status !== 'Đã hủy';

            // Check Date
            const bookingDM = getDayMonth(b.date);
            const isDateMatch = bookingDM === targetDM;

            return isTourMatch && isStatusValid && isDateMatch;
        }).length;

        const max = parseInt(maxSlots) || 0;
        const remaining = Math.max(0, max - bookedCount);

        return {
            max: max,
            booked: bookedCount,
            remaining: remaining
        };
    },

    // Get random tours (excluding current)
    getRandomTours: function (count, excludeId) {
        const allTours = this.getAllTours(); // Already filtered by is_visible in getAllTours()
        const filtered = allTours.filter(t => t.id != excludeId);
        // Shuffle
        const shuffled = filtered.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    },

    // Default data if LocalStorage is empty
    getDefaultTours: function () {
        const defaults = [
            {
                id: 1,
                name: 'Tà Năng - Phan Dũng',
                image: 'tour/Tanang/thumb1.png',
                image2: 'tour/Tanang/thumb2.png',
                image3: 'tour/Tanang/thumb3.png',
                image4: null,
                region: 'Miền Nam',
                type: 'TREKKING',
                duration: '2 Ngày 1 Đêm',
                price: 3200000,
                level: 'Trung Bình',
                altitude: '1.100M',
                url: 'tour/tanangphandung',
                shortDesc: 'Cung đường trekking đẹp nhất Việt Nam, đi qua 3 tỉnh Lâm Đồng, Ninh Thuận, Bình Thuận. Trải nghiệm đồi cỏ cháy ngút ngàn.',
                defaultSchedules: [
                    { date: '20/03 - 21/03', slots: 12, status: 'Đang mở' },
                    { date: '27/03 - 28/03', slots: 8, status: 'Đang mở' },
                    { date: '03/04 - 04/04', slots: 0, status: 'Hết chỗ' }
                ]
            },
            {
                id: 2,
                name: 'Bidoup Tà Giang',
                image: 'tour/Tanang/thumb1.png',
                image2: 'tour/Tanang/thumb2.png',
                image3: 'tour/Tanang/thumb3.png',
                image4: null,
                region: 'Miền Nam',
                type: 'TREKKING',
                duration: '2 Ngày 1 Đêm',
                price: 'Update',
                level: 'Khó',
                altitude: '2.287M',
                url: 'tour/bidouptagiang',
                shortDesc: 'Chinh phục nóc nhà tỉnh Lâm Đồng và băng qua những cánh rừng thông nguyên sinh tuyệt đẹp.',
                defaultSchedules: [
                    { date: '15/03 - 16/03', slots: 10, status: 'Đang mở' },
                    { date: '22/03 - 23/03', slots: 5, status: 'Đang mở' }
                ]
            },
            {
                id: 3,
                name: 'Thác Liêng Ài',
                image: 'tour/Tanang/thumb1.png',
                image2: 'tour/Tanang/thumb2.png',
                image3: 'tour/Tanang/thumb3.png',
                image4: null,
                region: 'Miền Nam',
                type: 'CANYONING',
                duration: '2 Ngày 1 Đêm',
                price: 3750000,
                level: 'Trung Bình',
                url: '#',
                shortDesc: 'Trải nghiệm đu dây vượt thác đầy phấn khích tại một trong những con thác hoang sơ nhất.',
                defaultSchedules: [
                    { date: '10/03 - 11/03', slots: 6, status: 'Đang mở' }
                ]
            },
            {
                id: 4,
                name: 'Langbiang',
                image: 'tour/Tanang/thumb1.png',
                image2: 'tour/Tanang/thumb2.png',
                image3: 'tour/Tanang/thumb3.png',
                image4: null,
                region: 'Miền Trung',
                type: 'HIKING',
                duration: 'Trong ngày',
                price: 'Update',
                level: 'Dễ',
                url: 'tour/langbiang',
                shortDesc: 'Hành trình nhẹ nhàng ngắm nhìn toàn cảnh thành phố Đà Lạt mộng mơ từ trên cao.',
                defaultSchedules: [
                    { date: 'Mỗi ngày', slots: 20, status: 'Đang mở' }
                ]
            },
            {
                id: 5,
                name: 'Mũi Kê Gà',
                image: 'tour/Tanang/thumb1.png',
                image2: 'tour/Tanang/thumb2.png',
                image3: 'tour/Tanang/thumb3.png',
                image4: null,
                region: 'Miền Nam',
                type: 'CAMPING',
                duration: '2 Ngày 1 Đêm',
                price: 1550000,
                level: 'Dễ',
                url: '#',
                shortDesc: 'Cắm trại bên bờ biển, ngắm hoàng hôn và bình minh tại ngọn hải đăng cổ nhất Việt Nam.',
                defaultSchedules: [
                    { date: '12/03 - 13/03', slots: 15, status: 'Đang mở' }
                ]
            },
            {
                id: 6,
                name: 'Thác Mưa Bay',
                image: 'tour/Tanang/thumb1.png',
                image2: 'tour/Tanang/thumb2.png',
                image3: 'tour/Tanang/thumb3.png',
                image4: null,
                region: 'Miền Nam',
                type: 'TREKKING',
                duration: '2 Ngày 1 Đêm',
                price: 'Update',
                level: 'Trung Bình',
                url: 'tour/thacmuabay',
                shortDesc: 'Khám phá cung đường trekking Thác Mưa Bay, đi qua những cánh rừng thông và thác tuyệt đẹp.',
                defaultSchedules: [
                    { date: '21/03 - 22/03', slots: 10, status: 'Đang mở' }
                ]
            },
            {
                id: 7,
                name: 'Ky Quan San',
                image: 'tour/Tanang/thumb1.png',
                image2: 'tour/Tanang/thumb2.png',
                image3: 'tour/Tanang/thumb3.png',
                image4: null,
                region: 'Miền Bắc',
                type: 'TREKKING',
                duration: '3 Ngày 2 Đêm',
                price: 'Update',
                level: 'Khó',
                altitude: '3.046M',
                url: 'tour/kyquansan',
                shortDesc: 'Hành trình chinh phục Bạch Mộc Lương Tử - Ky Quan San, săn biển mây kì ảo và ngắm bình minh trên độ cao 3.046m.',
                defaultSchedules: [
                    { date: '25/03 - 28/03', slots: 12, status: 'Đang mở' }
                ]
            },
            {
                id: 8,
                name: 'Yang Đoan',
                image: 'tour/Yangdoan/yangdoan (4).jpg',
                image2: 'tour/Yangdoan/yangdoan (1).jpg',
                image3: 'tour/Yangdoan/yangdoan (2).jpg',
                image4: 'tour/Yangdoan/yangdoan (3).jpg',
                region: 'Miền Nam',
                type: 'TREKKING',
                duration: '1 Ngày 1 Đêm',
                price: 1100000,
                level: 'Trung Bình',
                altitude: '1.812M',
                url: 'tour/yangdoan',
                shortDesc: 'Chinh phục đỉnh Yang Đoan - nóc nhà Di Linh. Hành trình trekking rừng già rêu phong, ngắm hoàng hôn triệu đô trên hồ Kala.',
                defaultSchedules: [
                    { date: '15/03 - 16/03', slots: 13, status: 'Đang mở' },
                    { date: '29/03 - 30/03', slots: 13, status: 'Đang mở' }
                ]
            }
        ];
        localStorage.setItem(TOURS_KEY, JSON.stringify(defaults));
        return defaults;
    },

    // Format price to Vietnamese currency
    formatPrice: function (price) {
        if (!price || price === 'Update' || (typeof price === 'string' && price.toLowerCase().includes('update'))) {
            return 'Update...';
        }
        const numericPrice = parseInt(price);
        if (isNaN(numericPrice) || numericPrice === 0) return 'Update...';
        return numericPrice.toLocaleString('vi-VN') + 'đ';
    },

    // Create a Tour Card HTML (Generic for Home and Tour List)
    createTourCardHTML: function (tour, isCompact = false) {
        const priceStr = this.formatPrice(tour.price);
        const levelColor = tour.level === 'Dễ' ? 'bg-green-500' : (tour.level === 'Khó' ? 'bg-red-500' : 'bg-orange-500');

        // Prioritize custom_domain if available
        let tourUrl = tour.custom_domain || tour.url || '#';

        // If it looks like a domain without protocol, add https://
        if (tourUrl && !tourUrl.startsWith('http') && !tourUrl.startsWith('/') && !tourUrl.startsWith('.') && tourUrl.includes('.')) {
            tourUrl = 'https://' + tourUrl;
        }

        // CSS classes based on screen size/context
        const cardClass = isCompact
            ? "tour-item group bg-white rounded-[24px] shadow-lg border-2 border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden flex flex-col"
            : "tour-card w-[340px] md:w-[400px] bg-white rounded-[24px] shadow-lg snap-center flex-shrink-0 border-2 border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden flex flex-col group";

        const tourType = (tour.type || 'TREKKING').toLowerCase();
        const tourRegion = this.mapRegion(tour.region || '');
        const imageContainerClass = isCompact ? "relative h-[240px] overflow-hidden" : "relative h-[240px] md:h-[280px] overflow-hidden";

        return `
            <div class="${cardClass}" data-region="${tourRegion}" data-type="${tourType}">
                <div class="${imageContainerClass}">
                    <div class="absolute top-4 left-4 flex gap-2 z-20">
                        <span class="bg-white text-gray-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">${tour.type}</span>
                        <span class="${levelColor} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">${tour.level}</span>
                        ${tour.altitude ? `<span class="bg-gray-800 text-white text-[10px] font-bold px-3 py-1 rounded-full">${tour.altitude}</span>` : ''}
                    </div>
                    ${this.createImageSlideshow(tour)}
                </div>
                <div class="p-5 flex flex-col flex-grow justify-between">
                    <div>
                        <div class="flex items-center gap-2 text-orange-500 font-bold text-xs mb-2">
                            <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                            <span>${tour.duration}</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors line-clamp-1">
                            ${tour.name}
                        </h3>
                        <p class="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">
                            ${tour.short_desc || tour.shortDesc || 'Trải nghiệm hành trình khám phá thiên nhiên tuyệt vời cùng Cam Site Retreats.'}
                        </p>
                    </div>

                    <div class="pt-3 border-t border-gray-100 flex items-center justify-between">
                        <div>
                            <p class="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-0.5">Chi phí</p>
                            <p class="text-xl font-black text-orange-500">${priceStr}</p>
                        </div>
                        <a href="${tourUrl}"
                            class="bg-gray-900 text-white px-4 py-2 rounded-lg font-bold text-xs hover:bg-primary transition-all active:scale-95 shadow-md flex items-center justify-center">
                            CHI TIẾT
                        </a>
                    </div>
                </div>
            </div>
        `;
    },

    // Create Recommendation Card HTML (Specially for "You might also like" section)
    createRecommendationCardHTML: function (tour, isSubfolder = false) {
        const priceStr = this.formatPrice(tour.price);

        // Prioritize custom_domain
        let tourUrl = tour.custom_domain || tour.url || '#';

        // If it looks like a domain without protocol, add https://
        if (tourUrl && !tourUrl.startsWith('http') && !tourUrl.startsWith('/') && !tourUrl.startsWith('.') && tourUrl.includes('.')) {
            tourUrl = 'https://' + tourUrl;
        }

        // Prefix with ../ only if we are in a subfolder and the URL is relative (and NOT a full domain)
        const finalUrl = (isSubfolder && tourUrl && !tourUrl.startsWith('http') && !tourUrl.startsWith('/'))
            ? '../' + tourUrl
            : tourUrl;

        return `
            <div class="min-w-[280px] md:min-w-[340px] bg-white rounded-[24px] overflow-hidden shadow-lg shadow-gray-200/40 border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group flex-shrink-0">
                <div class="h-56 overflow-hidden relative">
                    ${this.createImageSlideshow(tour)}
                    <div class="absolute top-4 left-4 flex gap-2 z-20">
                        <span class="bg-gray-900/80 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md">${tour.type}</span>
                    </div>
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-2 text-primary font-bold text-[11px] mb-2">
                        <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${tour.duration}
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors line-clamp-1">
                        ${tour.name}
                    </h3>
                    <div class="flex items-center justify-between pt-4 border-t border-gray-50">
                        <div>
                            <p class="text-[9px] text-gray-400 uppercase font-bold tracking-widest mb-0.5">Chi phí từ</p>
                            <span class="text-xl font-black text-primary">${priceStr}</span>
                        </div>
                        <a href="${finalUrl}" class="bg-gray-900 text-white p-2.5 rounded-xl hover:bg-primary transition-all">
                            <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    },

    // Render multiple recommendations to a container
    renderRecommendations: function (containerId, excludeId, count = 5) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Auto-detect if we are in a subfolder (checking for /tour/ in path)
        const isSubfolder = window.location.pathname.toLowerCase().includes('/tour/');

        const randomTours = this.getRandomTours(count, excludeId);
        if (randomTours.length === 0) {
            container.innerHTML = '<p class="text-gray-400 italic text-sm">Chưa có tour gợi ý thêm.</p>';
            return;
        }

        container.innerHTML = randomTours.map(t => this.createRecommendationCardHTML(t, isSubfolder)).join('');

        // Clone for marquee effect
        const children = Array.from(container.children);
        if (children.length > 0) {
            children.forEach(child => {
                const clone = child.cloneNode(true);
                container.appendChild(clone);
            });
        }

        this.initSlideshows();
    },

    // Create Slideshow HTML if multiple images exist
    createImageSlideshow: function (tour) {
        const images = [tour.image, tour.image2, tour.image3, tour.image4].filter(img => img);

        // Auto-detect if we are in a subfolder
        const isSubfolder = window.location.pathname.toLowerCase().includes('/tour/');
        const resolvePath = (path) => {
            if (isSubfolder && path && !path.startsWith('http') && !path.startsWith('/') && !path.startsWith('../')) {
                return '../' + path;
            }
            return path;
        };

        if (images.length <= 1) {
            return `<img src="${resolvePath(tour.image)}" loading="lazy" class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" alt="${tour.name}">`;
        }

        let imgsHTML = '';
        images.forEach((img, index) => {
            const resolvedImg = resolvePath(img);
            imgsHTML += `<img src="${resolvedImg}" loading="lazy" class="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${index === 0 ? 'opacity-100' : 'opacity-0'}" alt="${tour.name} ${index + 1}">`;
        });

        return `<div class="slideshow absolute inset-0">${imgsHTML}</div>`;
    },

    // Helper to map Vietnamese region names to data attributes
    mapRegion: function (region) {
        if (region.includes('Nam')) return 'south';
        if (region.includes('Bắc')) return 'north';
        if (region.includes('Trung')) return 'central';
        return 'other';
    },

    // Initialize Slideshow Hover effects
    initSlideshows: function () {
        document.querySelectorAll('.group').forEach(card => {
            let interval;
            const images = card.querySelectorAll('.slideshow img');
            if (images.length <= 1) return;

            card.addEventListener('mouseenter', () => {
                let current = 0;
                interval = setInterval(() => {
                    images[current].classList.replace('opacity-100', 'opacity-0');
                    current = (current + 1) % images.length;
                    images[current].classList.replace('opacity-0', 'opacity-100');
                }, 1500);
            });

            card.addEventListener('mouseleave', () => {
                clearInterval(interval);
                images.forEach((img, i) => {
                    img.classList.replace('opacity-100', 'opacity-0');
                    if (i === 0) img.classList.replace('opacity-0', 'opacity-100');
                });
            });
        });
    }
};

// Export if in environment that supports it, or just leave as global for browser
if (typeof module !== 'undefined') module.exports = TourManager;
