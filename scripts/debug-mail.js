require('dotenv').config();
const { sendEmail } = require('../api/_mail');

async function testMail() {
    const adminEmail = process.env.ADMIN_EMAIL || 'chuyencaiom@gmail.com';
    console.log(`Attempting to send test email to: ${adminEmail}`);
    console.log(`Using API Key: ${process.env.RESEND_API_KEY ? 'Present (starts with ' + process.env.RESEND_API_KEY.substring(0, 7) + '...)' : 'MISSING'}`);

    try {
        const result = await sendEmail({
            to: adminEmail,
            subject: '🔍 Test Email Notification - Cam Site Retreats',
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #E85D04; border-radius: 10px;">
                    <h2 style="color: #E85D04;">Hệ thống kiểm tra Email</h2>
                    <p>Chào anh Phước,</p>
                    <p>Đây là email kiểm tra tính năng thông báo từ hệ thống CAM SITE RETREATS.</p>
                    <p>Thời gian gửi: ${new Date().toLocaleString('vi-VN')}</p>
                    <hr>
                    <p style="font-size: 12px; color: #999;">Nếu anh nhận được mail này, có nghĩa là Resend API vẫn đang hoạt động bình thường.</p>
                </div>
            `
        });
        console.log('Email sent successfully!');
        console.log('Response:', JSON.stringify(result, null, 2));
    } catch (error) {
        console.error('Failed to send email:');
        console.error(error.message);
        if (error.message.includes('401')) {
            console.error('>>> Error 401: API Key không hợp lệ hoặc đã hết hạn.');
        } else if (error.message.includes('403')) {
            console.error('>>> Error 403: Tên miền chưa được xác thực hoặc bị Resend chặn.');
        } else if (error.message.includes('422')) {
            console.error('>>> Error 422: Dữ liệu gửi đi không hợp lệ (kiểm tra email người nhận).');
        }
    }
}

testMail();
