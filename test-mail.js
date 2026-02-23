require('dotenv').config();
const { sendEmail } = require('./api/_mail');

async function test() {
    console.log('--- Testing Email Notification ---');
    console.log('ADMIN_EMAIL:', process.env.ADMIN_EMAIL);
    console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? 'Set' : 'NOT SET');

    if (!process.env.ADMIN_EMAIL || !process.env.RESEND_API_KEY) {
        console.error('Error: Missing environment variables in .env');
        return;
    }

    try {
        const result = await sendEmail({
            to: process.env.ADMIN_EMAIL,
            subject: 'Test Email from CAM SITE System',
            html: '<h1>Success!</h1><p>Hệ thống gửi mail đã hoạt động.</p>'
        });
        console.log('Success Result:', result);
    } catch (error) {
        console.error('Email Sending Failed:');
        console.error(error.message);

        if (error.message.includes('403')) {
            console.log('\n--- LƯU Ý QUAN TRỌNG ---');
            console.log('Lỗi 403 thường do bạn đang dùng domain mặc định "onboarding@resend.dev".');
            console.log('Với domain này, Resend CHỈ cho phép gửi mail về chính địa chỉ email bạn đã dùng để đăng ký tài khoản Resend.');
            console.log('Vui lòng kiểm tra xem "chuyencaiom@gmail.com" có phải là email đăng ký Resend không.');
        }
    }
}

test();
