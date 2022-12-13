import { test, chromium, expect } from "@playwright/test";

    test('Open', async()=>{
        const browser = await chromium.launch({
           headless : false
        })

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://automatenow.io/sandbox-automation-testing-practice-website/')
        await page.click('//a[@class="wp-block-button__link wp-element-button"][1]')
        //await expect(page).toHaveTitle('JavaScript Delays | automateNow')
        await page.click('//button[@class="custom_btn btn_hover"]')

        await page.evaluate(() => {
            // We can try to increase 0 to a higher number (i.e. 100)
            return new Promise((resolve) => setTimeout(resolve, 11000));
          });
        
        await browser.close()
    })