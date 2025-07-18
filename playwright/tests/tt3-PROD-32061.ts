import { test, expect } from '@playwright/test';

// PROD-32061 & PROD-32062

// Setting URLs and Locators: 

// 1. URL
const homePage: string = 'https://pin-up.world';

// 2. Core Elements 
const loginButtonOnHeader: string = '[data-testid="loginBtn"]';
const forgotYourPasswordButton: string = '[data-testid="passwordRecoveryBtn"]';

const passwordRecoveryPopupElement: string = '[data-testid="recoveryPasswordBody"]';
const passwordRecoveryPopupTitle: string = '[data-testid="recoveryPasswordTitle"]';
const passwordRecoveryPopupSubtitle: string = '[data-testid="resetPasswordDescription"]';
const passwordRecoveryPopupInputForm: string = '[data-testid="recoveryPasswordFormLoginInput"]';
const passwordRecoveryPopupSendButton: string = '[data-testid="recoveryPasswordSubmitBtn"]';
const passwordRecoveryPopupCloseButton: string = '[data-testid="recoveryPasswordCloseDialogBtn"]';
const passwordRecoveryPopupBackground: string = 'body > div > div.cdk-overlay-backdrop.pu-overlay-backdrop.cdk-overlay-backdrop-showing';

// 3. Texts 
const prTitleText: string = "Password recovery";
const prSubtitleText: string = "Enter your email or phone number you used during registration";


// Test cases

test('test scenario PROD-32062', async ({ page }) => {
  // Відкриваємо сайт
  await page.goto(homePage);

  // Чекаємо поки вся сторінка завантажиться
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('networkidle')

  // Клацаємо кнопку Логіну
  await page.locator(loginButtonOnHeader).click();

  // Клацаємо кнопку "відновити пароль"
  await page.locator(forgotYourPasswordButton).click();

  // Перевіряємо, що попап відновлення паролю відобразився
  await expect (page.locator(passwordRecoveryPopupElement)).toBeVisible();

  // Перевіряємо текст заголовку попапу
  await expect (page.locator(passwordRecoveryPopupTitle)).toHaveText(prTitleText);

  // Перевіряємо текст підзаголовку попапу
  await expect (page.locator(passwordRecoveryPopupSubtitle)).toHaveText(prSubtitleText);

  // Перевіряємо, що попап містить інпут для телефону/мейлу 
  await expect (page.locator(passwordRecoveryPopupInputForm)).toBeVisible();

  // Перевіряємо, що кнопка Send є неактивною 
  await expect(page.locator(passwordRecoveryPopupSendButton)).toBeDisabled();

  // Перевіряємо, що попап містить кнопку "Закрити" 
  await expect (page.locator(passwordRecoveryPopupCloseButton)).toBeVisible();

  // Перевіряємо, що бекграунд заблюрився
  await expect(page.locator(passwordRecoveryPopupBackground)).toHaveCSS('opacity', '1');
  await expect(page.locator(passwordRecoveryPopupBackground)).toHaveCSS('background-color', 'rgba(13, 16, 22, 0.7)');

});