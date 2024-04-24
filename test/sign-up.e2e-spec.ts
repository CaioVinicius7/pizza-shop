import { expect, test } from "@playwright/test";

test.describe("Sign up", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/sign-up", {
      waitUntil: "networkidle"
    });
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });

  test("Sign up successfully", async ({ page }) => {
    await page.getByLabel("Nome do estabelecimento").fill("Pizza Shop");
    await page.getByLabel("Seu nome").fill("John Doe");
    await page.getByLabel("Seu celular").fill("(35) 9 9999-9999");
    await page.getByLabel("Seu e-mail").fill("johndoe@example.com");

    await page.getByRole("button", { name: "Finalizar cadastro" }).click();

    const toast = page.getByText("Restaurante cadastrado com sucesso!");

    await expect(toast).toBeVisible();
  });

  test("Sign up with error", async ({ page }) => {
    await page.getByLabel("Nome do estabelecimento").fill("Invalid name");
    await page.getByLabel("Seu nome").fill("John Doe");
    await page.getByLabel("Seu celular").fill("(35) 9 9999-9999");
    await page.getByLabel("Seu e-mail").fill("johndoe@example.com");

    await page.getByRole("button", { name: "Finalizar cadastro" }).click();

    const toast = page.getByText("Erro ao cadastrar o restaurante.");

    await expect(toast).toBeVisible();
  });

  test("Navigate to login restaurant page", async ({ page }) => {
    await page.getByRole("link", { name: "Fazer login" }).click();

    expect(page.url()).toContain("/sign-in");
  });
});
