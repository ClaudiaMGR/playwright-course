const {test, expect} =  require("@playwright/test");


test("calendar Validation", async({page}) =>

{
    //properties
    const monthNumber= "6";
    const date= "15";
    const year= "2027";
    const expectedList = [monthNumber, date, year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click(); //click on the Delivery Date
    await page.locator(".react-calendar__navigation__label__labelText--from").click(); //click on the month 
    await page.locator(".react-calendar__navigation__label__labelText--from").click(); //click on the year
    await page.getByText (year).click(); //select the year defined in properties
    await page.locator (".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();  //is not unique
    await page.locator ("//abbr[text()='"+date+"']").click();  //select the date
    const inputs = await page.locator(".react-date-picker__inputGroup input");
    for (let index = 0; index <inputs.length; index++)
    {

        const value = inputs [index].geAttribute("value");
        expect(value).toEqual(expectedList[index]);
    }



});