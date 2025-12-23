// E2E tests for basic user flows
import { test, expect } from '@playwright/test';

test.describe('Basic User Flows', () => {
  test('should load home page and navigate to ingredients', async ({ page }) => {
    await page.goto('/');

    // Check if home page loads
    await expect(page).toHaveTitle(/NutriFriendly/); // Assuming title is set
    await expect(page.locator('text=NutriFriendly')).toBeVisible();

    // Navigate to ingredients
    await page.click('text=Ingredients');
    await expect(page).toHaveURL(/.*ingredients/);
  });

  test('should perform search from navigation bar', async ({ page }) => {
    await page.goto('/');

    // Find search input
    const searchInput = page.locator('input[placeholder="Search natural ingredients..."]');
    await expect(searchInput).toBeVisible();

    // Type search query
    await searchInput.fill('ginger');

    // Click search button
    await page.click('button[aria-label="Submit search"]');

    // Should navigate to ingredients page
    await expect(page).toHaveURL(/.*ingredients/);
  });

  test('should access login page', async ({ page }) => {
    await page.goto('/');

    // Click login link
    await page.click('text=Login');

    // Should be on login page
    await expect(page).toHaveURL(/.*login/);
    await expect(page.locator('text=Login')).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });

  test('should access register page', async ({ page }) => {
    await page.goto('/');

    // Click register link
    await page.click('text=Register');

    // Should be on register page
    await expect(page).toHaveURL(/.*register/);
    await expect(page.locator('text=Register')).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });

  test('should toggle mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // Mobile size

    await page.goto('/');

    // Click hamburger menu
    await page.click('button[aria-label="Open main menu"]');

    // Mobile menu should be visible
    await expect(page.locator('text=Home')).toBeVisible(); // Mobile links
  });
});
