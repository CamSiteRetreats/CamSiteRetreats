const normalizeVN = (str) => (str || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/gi, 'd').toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '').trim();

const transferContent = "CSR154 thacliengai 30042026 1ethinhutest coc";
const booking = {
    id: 154,
    name: "Lê Thị Như test",
    tour: "thac lieng ai",
    status: ""
};

const searchText = normalizeVN(transferContent);
const searchNoSpace = searchText.replace(/\s/g, '');

console.log('Search Text:', searchText);
console.log('Search No Space:', searchNoSpace);

// ID Match
const idStr = String(booking.id);
const idMatch = searchText.includes('csr' + idStr) || searchText.includes('id' + idStr);
console.log('ID Match (csr' + idStr + '):', idMatch);

// Name + Tour Match
const bookingName = normalizeVN(booking.name).replace(/\s/g, '');
const bookingTour = normalizeVN((booking.tour || '').split('-')[0].trim()).replace(/\s/g, '');
console.log('Booking Name (normalized):', bookingName);
console.log('Booking Tour (normalized):', bookingTour);

const nameMatch = bookingName.length >= 3 && searchNoSpace.includes(bookingName);
const tourMatch = bookingTour.length >= 2 && searchNoSpace.includes(bookingTour);
console.log('Name Match:', nameMatch);
console.log('Tour Match:', tourMatch);
