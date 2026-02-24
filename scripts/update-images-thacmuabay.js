const fs = require('fs');
const path = require('path');

// 1. UPDATE HTML
const htmlPath = path.join(__dirname, '../TOUR/thacmuabay.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Update Hero image to muabay (3).png
// The original hero image might be tanangphandung's hero or a placeholder.
// In the hero section, it has something like: style="background-image: linear-gradient(...), url('hero.jpg');"
htmlContent = htmlContent.replace(/url\(['"]?hero\.jpg['"]?\)/g, "url('../tour/thacmuabay/muabay (3).png')");
htmlContent = htmlContent.replace(/url\(['"]?\.\.\/tour\/hero\.jpg['"]?\)/g, "url('../tour/thacmuabay/muabay (3).png')");

// We also need to update "CẢM XÚC HÀNH TRÌNH" gallery.
// Let's replace the whole masonry gallery.
const galleryStart = htmlContent.indexOf('<div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">');
const galleryEnd = htmlContent.indexOf('</section>', galleryStart);

if (galleryStart !== -1 && galleryEnd !== -1) {
    const masonryGallery = `
<div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                <!-- Item 1 -->
                <div class="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm">
                    <img src="../tour/thacmuabay/muabay (1).png" alt="Thác Mưa Bay" class="w-full object-cover group-hover:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <!-- Item 2 -->
                <div class="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm">
                    <img src="../tour/thacmuabay/muabay (2).png" alt="Thác Mưa Bay" class="w-full object-cover group-hover:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <!-- Item 3 -->
                <div class="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm">
                    <img src="../tour/thacmuabay/muabay (3).png" alt="Thác Mưa Bay" class="w-full object-cover group-hover:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <!-- Item 4 -->
                <div class="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm">
                    <img src="../tour/thacmuabay/muabay (4).png" alt="Thác Mưa Bay" class="w-full object-cover group-hover:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <!-- Item 5 -->
                <div class="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm">
                    <img src="../tour/thacmuabay/muabay (5).png" alt="Thác Mưa Bay" class="w-full object-cover group-hover:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <!-- Item 6 -->
                <div class="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm">
                    <img src="../tour/thacmuabay/muabay (6).png" alt="Thác Mưa Bay" class="w-full object-cover group-hover:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <!-- Item 7 -->
                <div class="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm">
                    <img src="../tour/thacmuabay/muabay (7).png" alt="Thác Mưa Bay" class="w-full object-cover group-hover:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <!-- Item 8 -->
                <div class="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm">
                    <img src="../tour/thacmuabay/muabay (8).png" alt="Thác Mưa Bay" class="w-full object-cover group-hover:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <!-- Item 9 -->
                <div class="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm">
                    <img src="../tour/thacmuabay/muabay (9).png" alt="Thác Mưa Bay" class="w-full object-cover group-hover:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <!-- Item 10 -->
                <div class="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm">
                    <img src="../tour/thacmuabay/muabay (10).png" alt="Thác Mưa Bay" class="w-full object-cover group-hover:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </div>
        `;
    htmlContent = htmlContent.substring(0, galleryStart) + masonryGallery + '\n    ' + htmlContent.substring(galleryEnd);
}

fs.writeFileSync(htmlPath, htmlContent, 'utf8');
console.log('HTML updated.');

// 2. UPDATE JS (tour-manager.js)
const jsPath = path.join(__dirname, '../js/tour-manager.js');
let jsContent = fs.readFileSync(jsPath, 'utf8');

const thacMuaBayObjectStart = jsContent.indexOf("name: 'Thác Mưa Bay'");
if (thacMuaBayObjectStart !== -1) {
    // We replace the image properties...
    jsContent = jsContent.replace(/image: 'tour\/Tanang\/thumb1.png',\s*image2: 'tour\/Tanang\/thumb2.png',\s*image3: 'tour\/Tanang\/thumb3.png',\s*image4: null,/,
        `image: 'tour/thacmuabay/muabay (10).png',\n                image2: 'tour/thacmuabay/muabay (9).png',\n                image3: 'tour/thacmuabay/muabay (1).png',\n                image4: 'tour/thacmuabay/muabay (2).png',`);

    fs.writeFileSync(jsPath, jsContent, 'utf8');
    console.log('JS updated.');
}

// 3. UPDATE DB
const db = require('../api/_db');

async function updateDb() {
    const updateQuery = `
        UPDATE tours 
        SET image = $1, image2 = $2, image3 = $3, image4 = $4
        WHERE id = $5
    `;
    try {
        await db.query(updateQuery, [
            'tour/thacmuabay/muabay (10).png',
            'tour/thacmuabay/muabay (9).png',
            'tour/thacmuabay/muabay (1).png',
            'tour/thacmuabay/muabay (2).png',
            6
        ]);
        console.log('DB updated.');
    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}

updateDb();

