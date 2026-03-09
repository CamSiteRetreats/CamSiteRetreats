function normalizeVN(str) {
    return (str || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/gi, 'd').toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
}

function testMatching() {
    const transferContent = "CSR153 TANANG 3004 PHAM THIEN AN COC";
    const normalized = normalizeVN(transferContent);
    const searchNoSpace = normalized.replace(/\s/g, '');

    console.log("Original:", transferContent);
    console.log("Normalized:", normalized);
    console.log("No Space:", searchNoSpace);

    const booking = { id: 153, name: "Phạm Thiên Ân", tour: "Tà Năng - Phan Dũng" };
    const idStr = String(booking.id);

    // Test Strategy 1: ID Match
    const matchId = normalized.includes('csr' + idStr) || normalized.includes('id' + idStr);
    console.log("ID Match (csr153):", matchId);

    // Test Strategy 2: Name/Tour Match
    const bookingName = normalizeVN(booking.name).replace(/\s/g, '');
    const bookingTour = normalizeVN((booking.tour || '').split('-')[0].trim()).replace(/\s/g, '');

    const nameMatch = bookingName.length >= 3 && searchNoSpace.includes(bookingName);
    const tourMatch = bookingTour.length >= 2 && searchNoSpace.includes(bookingTour);

    console.log("Name Match:", nameMatch, `(${bookingName})`);
    console.log("Tour Match:", tourMatch, `(${bookingTour})`);
}

testMatching();
