import { expect, test } from "@playwright/test";

test.describe("Sign in", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/sign-in", {
      waitUntil: "networkidle"
    });
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });

  test("Sign in successfully", async ({ page }) => {
    await page.getByLabel("Seu e-mail").fill("johndoe@example.com");
    await page.getByRole("button", { name: "Acessar painel" }).click();

    const toast = page.getByText(
      "Enviamos um link de autenticação para seu e-mail."
    );

    expect(toast).toBeVisible();
  });

  test("Sign in with wrong credentials", async ({ page }) => {
    await page.getByLabel("Seu e-mail").fill("wrong@example.com");
    await page.getByRole("button", { name: "Acessar painel" }).click();

    const toast = page.getByText(
      "Ocorreu um erro ao enviar um link autenticação para seu e-mail."
    );

    expect(toast).toBeVisible();
  });

  test("Navigate to new restaurant page", async ({ page }) => {
    await page.getByRole("link", { name: "Novo estabelecimento" }).click();

    expect(page.url()).toContain("/sign-up");
  });
});
