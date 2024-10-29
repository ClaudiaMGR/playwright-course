import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://www.mega-image.ro/');
  await page.getByTestId('cookie-popup-accept').click();
  await page.getByLabel('Rezerva sapun-crema lichid').click();
  await page.getByTestId('product-properties').getByTestId('product-block-add').click();
  await page.getByTestId('radio-button-icon-FAST_DELIVERY').click();
  await page.getByTestId('ecom-continue').click();
  await page.getByTestId('LIST_VIEW-radio-label').click();
  await page.getByTestId('input-field').click();
  await page.getByTestId('input-field').fill('brasov');
  await page.getByText('Timișoara, România').click();
  await page.getByTestId('ecom-continue').click();
});