import { test, expect } from '@playwright/test';

const BASE_URL = 'http://davidmcgill.tech';
const MAIN_IMAGE = 'images/dam-bw - small.jpg';

test.describe('Production site checks', () => {
  test('Home page loads and main image is present', async ({ page }) => {
    await page.goto(BASE_URL);
    // Check that the main image is present and loaded
    const img = page.locator(`img[src="${MAIN_IMAGE}"]`);
    await expect(img).toBeVisible();
    // Ensure the image has loaded
    const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  });

  test('pics.html page loads and main image is present', async ({ page }) => {
    await page.goto(`${BASE_URL}/pics.html`);
    // Check that the main image is present and loaded
    const img = page.locator(`img[src="${MAIN_IMAGE}"]`);
    await expect(img).toBeVisible();
    // Ensure the image has loaded
    const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  });
});
