const { test, expect } = require('@playwright/test');
 
 
 

test('@Webst Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.getByPlaceholder("email@example.com").fill(email);
   await page.getByPlaceholder("enter your passsword").fill("Iamking@000");
   await page.getByRole('button', {name: "Login"}).click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 

   await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
   .getByRole("button", {name: "Add to Cart"}).click(); //add to cart

  
                                                                                                             
   await page.getByRole("listitem").getByRole("button", {name: "Cart"}).click(); //check and click on the card button

   //await page.pause();


 
   await page.locator("div li").first().waitFor();
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();

   //const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   //expect(bool).toBeTruthy();

   await page.getByRole("button", {name: "Checkout"}).click();



 
   await page.getByPlaceholder("Select Country").pressSequentially("ind");

   await page.getByRole("button", {name: "India"}).nth(1).click();


   await page.getByText("PLACE ORDER").click();
   await expect(page.getByText("Thankyou for the order.")).toBeVisible();
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
});
 
 