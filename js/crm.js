const CUSTOMERS_KEY = 'cam_site_customers';

/**
 * Customer Structure:
 * {
 *   id: string (CUST-timestamp),
 *   name: string,
 *   phone: string,
 *   email: string,
 *   dob: string,
 *   gender: string,
 *   address: string,
 *   idCard: string,
 *   totalSpent: number,
 *   bookings: [bookingId1, bookingId2],
 *   firstSeen: timestamp,
 *   lastSeen: timestamp
 * }
 */

// --- Main Function to Process Booking -> Customer ---
function syncCustomerFromBooking(booking) {
    let customers = JSON.parse(localStorage.getItem(CUSTOMERS_KEY)) || [];

    // Find existing customer by Phone (primary key for simplicity)
    let customerIndex = customers.findIndex(c => c.phone === booking.phone);

    if (customerIndex !== -1) {
        // Update Existing
        let customer = customers[customerIndex];

        // Update Personal Info (take latest)
        customer.name = booking.name; // Update name just in case
        customer.dob = booking.dob || customer.dob;
        customer.gender = booking.gender || customer.gender;
        customer.address = booking.address || customer.address;
        customer.idCard = booking.idCard || customer.idCard;

        // Update Metrics
        if (!customer.bookings.includes(booking.id)) {
            customer.bookings.push(booking.id);
            customer.totalSpent += Number(booking.totalPrice) || 0;
        }

        customer.lastSeen = new Date().toISOString();
        customers[customerIndex] = customer;

    } else {
        // Create New
        // Use high-resolution time + random to ensure uniqueness even in loops
        const uniqueSuffix = Math.random().toString(36).substr(2, 4);
        const newCustomer = {
            id: `C${Date.now().toString().slice(-6)}${uniqueSuffix}`.toUpperCase(),
            name: booking.name,
            phone: booking.phone,
            email: booking.email || '',
            dob: booking.dob || '',
            gender: booking.gender || '',
            address: booking.address || '',
            idCard: booking.idCard || '',
            totalSpent: Number(booking.totalPrice) || 0,
            bookings: [booking.id],
            firstSeen: new Date().toISOString(),
            lastSeen: new Date().toISOString()
        };
        customers.push(newCustomer);
    }

    // Self-repair: Check for duplicate IDs and fix immediately
    // This handles the case where duplicates were already created
    /* 
       Note: ideally we would check this broadly, but for now we rely on the 
       fact that future creations are unique. 
       To fix existing data, we can run a one-time fix.
    */
    customers = fixDuplicateIds(customers);

    localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(customers));
    return customers[customerIndex] ? customers[customerIndex].id : customers[customers.length - 1].id;
}

// --- Migration Utility ---
function migrateBookingsToCustomers() {
    console.log('Starting Customer Migration...');
    const bookings = JSON.parse(localStorage.getItem('cam_site_bookings')) || [];
    let customers = JSON.parse(localStorage.getItem(CUSTOMERS_KEY)) || [];

    if (bookings.length === 0) return;

    bookings.forEach(booking => {
        const customerId = syncCustomerFromBooking(booking);
        if (!booking.customerId) {
            booking.customerId = customerId;
        }
    });

    // Save updated bookings
    localStorage.setItem('cam_site_bookings', JSON.stringify(bookings));

    console.log('Migration Complete. Total Customers:', JSON.parse(localStorage.getItem(CUSTOMERS_KEY)).length);
}

// --- Getters ---
function getCustomerByPhone(phone) {
    const customers = JSON.parse(localStorage.getItem(CUSTOMERS_KEY)) || [];
    return customers.find(c => c.phone === phone);
}

function getAllCustomers() {
    return JSON.parse(localStorage.getItem(CUSTOMERS_KEY)) || [];
}

// --- Helper to Fix Duplicate IDs ---
function fixDuplicateIds(customers) {
    const seenIds = new Set();
    let updated = false;

    customers.forEach((c) => {
        if (seenIds.has(c.id)) {
            // Found duplicate, regenerate ID
            const uniqueSuffix = Math.random().toString(36).substr(2, 5);
            c.id = `C${Date.now().toString().slice(-6)}${uniqueSuffix}`.toUpperCase();
            updated = true;
        }
        seenIds.add(c.id);
    });

    if (updated) {
        console.log('Fixed duplicate Customer IDs.');
    }
    return customers;
}
