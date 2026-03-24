/**
 * Fix tour image paths in DB: .png → .jpg
 * Also fix invalid placeholder image paths for Bidoup, Langbiang, BachMoc
 */
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const db = require('../utils/db');

async function fixTourImages() {
    const updates = [
        // Tà Năng - Phan Dũng (ID 1): .png → .jpg
        {
            id: 1,
            image: 'tour/Tanang/thumb1.jpg',
            image2: 'tour/Tanang/thumb2.jpg',
            image3: 'tour/Tanang/thumb3.jpg',
            image4: null
        },
        // Thác Liêng Ài (ID 3): .png → .jpg
        {
            id: 3,
            image: 'tour/liengai/12.jpg',
            image2: 'tour/liengai/3.jpg',
            image3: 'tour/liengai/7.jpg',
            image4: 'tour/liengai/4.jpg'
        },
        // Thác Mưa Bay (ID 14): .png → .jpg
        {
            id: 14,
            image: 'tour/thacmuabay/muabay (3).jpg',
            image2: 'tour/thacmuabay/muabay (10).jpg',
            image3: 'tour/thacmuabay/muabay (8).jpg',
            image4: 'tour/thacmuabay/muabay (2).jpg'
        },
        // Bidoup - Tà Giang (ID 11): fix placeholder "update"
        {
            id: 11,
            image: 'tour/Bidoup/bdtg (1).jpg',
            image2: 'tour/Bidoup/bdtg (7).jpg',
            image3: 'tour/Bidoup/bdtg (2).jpg',
            image4: 'tour/Bidoup/bdtg (3).jpg'
        },
        // Langbiang (ID 12): fix placeholder "a"
        {
            id: 12,
            image: 'tour/Tanang/thumb1.jpg',
            image2: 'tour/Tanang/thumb2.jpg',
            image3: 'tour/Tanang/thumb3.jpg',
            image4: null
        },
        // Bạch Mộc Lương Tử (ID 13): fix placeholder "1"
        {
            id: 13,
            image: 'tour/Tanang/thumb1.jpg',
            image2: 'tour/Tanang/thumb2.jpg',
            image3: 'tour/Tanang/thumb3.jpg',
            image4: null
        }
    ];

    for (const u of updates) {
        try {
            const { rows } = await db.query(
                'UPDATE tours SET image=$1, image2=$2, image3=$3, image4=$4 WHERE id=$5 RETURNING id, name',
                [u.image, u.image2, u.image3, u.image4, u.id]
            );
            if (rows.length > 0) {
                console.log(`✅ Updated: [${rows[0].id}] ${rows[0].name}`);
            } else {
                console.log(`⚠️  ID ${u.id} not found in DB`);
            }
        } catch (err) {
            console.error(`❌ Failed to update ID ${u.id}:`, err.message);
        }
    }

    console.log('\n🎉 Done fixing tour image paths!');
    process.exit(0);
}

fixTourImages();
