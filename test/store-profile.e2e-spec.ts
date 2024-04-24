import { expect, test } from "@playwright/test";

test.describe("Store profile", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/", {
      waitUntil: "networkidle"
    });
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });

  test("Update profile successfully", async ({ page }) => {
    await page.getByRole("button", { name: "Pizza Shop" }).click();
    await page.getByRole("menuitem", { name: "Perfil da loja" }).click();

    await page.getByLabel("Nome").fill("Rocket Pizza");
    await page.getByLabel("Descrição").fill("Alguma descrição aleatória.");

    await page.getByRole("button", { name: "Salvar" }).click();

    await page.waitForLoadState("networkidle");

    const toast = page.getByText("Perfil atualizado com sucesso!");

    expect(toast).toBeVisible();

    await page.getByRole("button", { name: "Close" }).click();

    await page.waitForTimeout(250);

    expect(page.getByRole("button", { name: "Rocket Pizza" })).toBeVisible();
  });

  test("Update profile with error", async ({ page }) => {
    await page.getByRole("button", { name: "Pizza Shop" }).click();
    await page.getByRole("menuitem", { name: "Perfil da loja" }).click();

    await page.getByLabel("Nome").fill("Nome inválido");
    await page.getByLabel("Descrição").fill("Alguma descrição aleatória.");

    await page.getByRole("button", { name: "Salvar" }).click();

    await page.waitForLoadState("networkidle");

    const toast = page.getByText(
      "Falha ao atualizar o perfil, tente novamente!"
    );

    expect(toast).toBeVisible();

    await page.getByRole("button", { name: "Close" }).click();

    await page.waitForTimeout(250);

    expect(page.getByRole("button", { name: "Pizza Shop" })).toBeVisible();
  });
});
