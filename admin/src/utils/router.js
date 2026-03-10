// Route permissions: chỉ activity-log và trash là admin-only
// Các route khác: mọi user đã đăng nhập đều vào được
const ROUTE_PERMISSIONS = {
    '/admin/activity-log': ['admin'],
    '/admin/trash': ['admin'],
};

// Default redirect nếu không có quyền
const ROLE_DEFAULT_PAGE = {
    'admin': '/admin/',
    'sale': '/admin/',
};

export const initRouter = () => {
    const routes = {
        '/admin/': () => import('../pages/Dashboard.js'),
        '/admin/login': () => import('../pages/Login.js'),
        '/admin/profile': () => import('../pages/Profile.js'),
        '/admin/bookings': () => import('../pages/Bookings.js'),
        '/admin/customers': () => import('../pages/Customers.js'),
        '/admin/tours': () => import('../pages/Tours.js'),
        '/admin/schedules': () => import('../pages/Schedules.js'),
        '/admin/reports': () => import('../pages/Reports.js'),
        '/admin/users': () => import('../pages/Users.js'),
        '/admin/roster': () => import('../pages/Roster.js'),
        '/admin/activity-log': () => import('../pages/ActivityLog.js'),
        '/admin/trash': () => import('../pages/Trash.js'),
    };

    const navigateTo = async (url) => {
        history.pushState(null, null, url);
        await router();
    };

    const router = async () => {
        const path = location.pathname;
        const matchedRoute = routes[path] || routes['/admin/'];

        // Auth check
        const isAuthenticated = localStorage.getItem('csr_admin_token') !== null;

        if (!isAuthenticated && path !== '/admin/login') {
            navigateTo('/admin/login');
            return;
        }
        if (isAuthenticated && path === '/admin/login') {
            navigateTo('/admin/');
            return;
        }

        // Role permission check
        if (isAuthenticated && path !== '/admin/login') {
            let currentUser = {};
            try { currentUser = JSON.parse(localStorage.getItem('csr_user') || '{}'); } catch (e) { }
            const userRole = currentUser.role || 'sale';

            const allowedRoles = ROUTE_PERMISSIONS[path];
            if (allowedRoles && !allowedRoles.includes(userRole)) {
                // No permission → redirect to default page for this role
                navigateTo(ROLE_DEFAULT_PAGE[userRole] || '/admin/tours');
                return;
            }
        }

        try {
            const { render } = await matchedRoute();
            document.getElementById('app').innerHTML = render();

            const { afterRender } = await matchedRoute();
            if (afterRender) afterRender();

        } catch (e) {
            console.error('Error loading page:', e);
            document.getElementById('app').innerHTML = '<h1>404 Not Found</h1>';
        }
    };

    window.addEventListener('popstate', router);

    document.addEventListener('click', e => {
        if (e.target.matches('[data-link]') || e.target.closest('[data-link]')) {
            e.preventDefault();
            const link = e.target.closest('[data-link]');
            let targetPath = link.getAttribute('href');
            if (!targetPath.startsWith('/admin')) {
                targetPath = targetPath === '/' ? '/admin/' : '/admin' + targetPath;
            }
            navigateTo(targetPath);
        }
    });

    window.addEventListener('popstate', router);
    router();
    return { navigateTo };
};


