const fs = require('fs');
const path = require('path');
const { neon } = require('@neondatabase/serverless');

const dbUrl = 'postgresql://neondb_owner:npg_g84SJTklqPNK@ep-autumn-cloud-aiq2007n-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';
const sql = neon(dbUrl);

async function run() {
    try {
        const imagePath = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\1627ec09-f423-4c5e-915e-eadc653605c6\\media__1781589337160.jpg';
        const fileData = fs.readFileSync(imagePath);
        const base64Data = fileData.toString('base64');
        const mimeType = 'image/jpeg';
        
        const filename = `bidoup-tajiang-hero-${Date.now()}.jpg`;
        
        // 1. Insert into uploaded_images
        await sql.query(
            'INSERT INTO uploaded_images (filename, mime_type, data) VALUES ($1, $2, $3)',
            [filename, mimeType, base64Data]
        );
        console.log('Inserted image into uploaded_images:', filename);
        
        // 2. Update tours table main image
        const imgUrl = `/api/uploads/services/${filename}`;
        await sql.query(
            'UPDATE tours SET image = $1 WHERE id = 11',
            [imgUrl]
        );
        console.log('Updated tours table main image for Bidoup - Tà Giang to:', imgUrl);
        
    } catch (e) {
        console.error('Error running migration:', e);
    }
}

run();
