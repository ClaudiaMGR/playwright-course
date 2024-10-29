import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://www.mega-image.ro/');
  await page.getByTestId('close-button').click();
  await page.getByTestId('cookie-popup-accept').click();
  await page.getByLabel('Vin rose sec 0.75L').click();
  await page.getByTestId('product-properties').getByTestId('product-block-add').click();
  await page.getByTestId('modal-close-button').click();
  await page.getByTestId('header-minibasket').click();
  await page.getByTestId('go-to-payment').click();
  await page.getByTestId('radio-button-wrapper-HOME_DELIVERY').click();
  await page.getByTestId('ecom-continue').click();
  await page.getByLabel('Judet *').selectOption('RO-AR');
  await page.getByLabel('Oras *').selectOption('317261');
  await page.getByTestId('postal-code-submit-btn').getByRole('button', { name: 'Adauga' }).click();
  await page.getByTestId('ecom-continue').click();
});