const { test, expect } = require('@playwright/test');
const path = require('path');

const filePath = 'file://' + path.join(__dirname, '..', '_site', 'index.html');

test('home page loads', async ({ page }) => {
  await page.goto(filePath);
  await expect(page).toHaveTitle(/David McGill Technologies/);
  await expect(page.locator('h1')).toContainText('Welcome to McGill Technologies');
});
