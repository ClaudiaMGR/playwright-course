import { test, expect } from '@playwright/test'; //define the test


test.skip('demo practice', async({page})=>
    
    {

await page.goto("https://www.mega-image.ro/")  //open the page
await page.getByLabel('Bautura racoritoare carbogazoasa  0.33L').click();


});