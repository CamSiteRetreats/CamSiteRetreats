import { test, expect } from '@playwright/test';

test('login as sale and capture report', async ({ page }) => {
    await page.goto('http://localhost:5173/login.html');
    await page.fill('#username', 'sale1');
    await page.fill('#password', '123456');
    await page.click('button[type="submit"]');

    // Wait for redirect to admin v2
    await page.waitForURL('http://localhost:5173/');

    // Go to Reports
    await page.click('a[href="#reports"]');
    await page.waitForSelector('h1:has-text("Báo Cáo")');

    // Set month to 2026-03 to see data
    await page.fill('#reportMonth', '2026-03');
    // Wait for stats update
    await page.waitForTimeout(2000);

    await page.screenshot({ path: 'sale_report_view.png', fullPage: true });

    // Open detail modal for the first item
    const detailBtn = await page.waitForSelector('button:has-text("Xem Chi Tiết Khách")');
    if (detailBtn) {
        await detailBtn.click();
        await page.waitForSelector('#saleDetailModal:not(.hidden)');
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'sale_report_modal.png' });
    }
});
