import { expect, test } from "@playwright/test";

test.describe("Dashboard", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/", {
      waitUntil: "networkidle"
    });
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });

  test("Display day orders amount metric in successfully", async ({ page }) => {
    await expect(page.getByText("20", { exact: true })).toBeVisible();
    await expect(page.getByText("-5% em relação a ontem")).toBeVisible();
  });

  test("Display month orders amount metric", async ({ page }) => {
    await expect(page.getByText("200", { exact: true })).toBeVisible();
    await expect(page.getByText("+7% em relação ao mês passado")).toBeVisible();
  });

  test("Display month canceled orders amount metric", async ({ page }) => {
    await expect(page.getByText("5", { exact: true })).toBeVisible();
    await expect(page.getByText("-5% em relação ao mês passado")).toBeVisible();
  });

  test("Display month revenue metric", async ({ page }) => {
    await expect(page.getByText("R$ 200,00")).toBeVisible();
    await expect(
      page.getByText("+10% em relação ao mês passado")
    ).toBeVisible();
  });
});
