const USERS_KEY = 'cam_site_users'; // Legacy
const CURRENT_USER_KEY = 'cam_site_current_user';

// API Endpoints - Assumes relative path from HTML files works or needs robust handling
// Since this is imported in ../js/auth.js, and used in pages like ADMIN/login.html
// We need to be careful about paths.
// Ideally, we should use absolute paths or detect base.

function getApiUrl(endpoint) {
    // Check if we are in ADMIN folder or root
    // If window.location.pathname contains /ADMIN/, then api is ../api/
    // If window.location.pathname is root, then api is ./api/ or api/
    // A robust way:
    // Actually, just use absolute path if possible, or relative to current page.

    // Easiest hack: checks if we are in 'ADMIN' directory
    const isInAdmin = window.location.pathname.toUpperCase().includes('/ADMIN/');
    const apiBase = isInAdmin ? '../api/' : './api/';

    // But index.html is in root. login.html is in ADMIN.
    // If I call getApiUrl('auth-login.js') from index.html -> ./api/auth-login.js
    // If I call from ADMIN/login.html -> ../api/auth-login.js

    return `${apiBase}${endpoint}`;
}

// --- Initialization ---
function initAuth() {
    // No longer need to seed localStorage users.
    // Check session
    // console.log('Auth initialized');
}

// --- Auth Actions ---
async function login(username, password) {
    try {
        const response = await fetch(getApiUrl('auth'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const result = await response.json();

        if (result.success) {
            sessionStorage.setItem(CURRENT_USER_KEY, JSON.stringify(result.user));
            return { success: true, user: result.user };
        } else {
            return { success: false, message: result.message || 'Login failed' };
        }
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, message: 'Lỗi kết nối Server' };
    }
}

function logout() {
    sessionStorage.removeItem(CURRENT_USER_KEY);
    // Redirect to login page
    // Check if we are in ADMIN or root to determine path to login.html
    const isInAdmin = window.location.pathname.toUpperCase().includes('/ADMIN/');
    window.location.href = isInAdmin ? 'login.html' : 'ADMIN/login.html';
}

function getCurrentUser() {
    // Session storage is synchronous, so this is fine.
    try {
        return JSON.parse(sessionStorage.getItem(CURRENT_USER_KEY));
    } catch (e) {
        return null;
    }
}

function checkAuth() {
    const user = getCurrentUser();
    if (!user) {
        // If not logged in, redirect to login
        // But checking auth might be optional in some public pages?
        // requireRole handles mandatory check. checkAuth just returns user.
        // Wait, original checkAuth *did* redirect.

        // If we want consistent behavior:
        const isInAdmin = window.location.pathname.toUpperCase().includes('/ADMIN/');
        if (isInAdmin && !window.location.pathname.toLowerCase().includes('login.html')) {
            window.location.href = 'login.html';
        }
        return null; // Return null effectively
    }
    return user;
}

function requireRole(allowedRoles) {
    const user = getCurrentUser(); // Don't use checkAuth() to avoid auto-redirect loop if logic differs
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    if (!allowedRoles.includes(user.role)) {
        alert('Bạn không có quyền truy cập trang này!');
        window.location.href = 'dashboard.html';
    }
}

// --- User Management (CRUD) ---
// Now Async!

async function getAllUsers() {
    try {
        const response = await fetch(getApiUrl('users'));
        if (!response.ok) throw new Error('Failed to fetch');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function saveUser(user) {
    try {
        const response = await fetch(getApiUrl('users'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });
        if (!response.ok) throw new Error('Failed to save');
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function deleteUser(id) {
    try {
        await fetch(`${getApiUrl('users')}?id=${id}`, {
            method: 'DELETE'
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

// --- Auto-Run on Load ---
initAuth();
