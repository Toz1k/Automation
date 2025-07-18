import { test, expect } from '@playwright/test';

// Task: PROD-31959

// Setting URLs and Locators: 

// 1. URL
const homePageURL: string = 'https://pin-up.kz/ru/';

// 2. Core Elements
const loginButton: string = '[data-testid="loginBtn"]';

const phoneInput: string = '[data-testid="regPhoneInput"]';
const passwordInput: string = '[data-testid="regPasswordInput"]';
const loginPopupHeader: string = '[data-testid="loginPopupUiDialogHeader"]';
const loginPopupCloseButton: string = '[data-testid="dialogCloseBtn"]';

// 3. Colors & Properties & Texts
const errorRequestedField: string = '[data-testid="appValidationMessage"]';
const errorIncorrectPhone: string = '[data-testid="appValidationMessage"]';


// Test cases

test.only('test scenario 31959', async ({ page }) => {
  // Відкриваємо сайт
  await page.goto(homePageURL);
  await page.reload();

  // Чекаємо поки вся сторінка завантажиться
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('load');
  // await page.waitForLoadState('networkidle');
  await page.waitForSelector(loginButton, { state: 'visible', timeout: 10000 });

  // Клікаємо на кнопку логіну
  await expect (page.locator(loginButton)).toBeVisible();
  await page.locator(loginButton).click();

  // Робимо кілька перевірок відкритого вікна
  await expect (page.locator(loginPopupHeader)).toBeVisible(); // попап відобразився
  await expect (page.locator(phoneInput)).toBeVisible(); // інпут номеру телефону відобразився
  await expect (page.locator(passwordInput)).toBeVisible(); // інпут паролю відобразився
  await expect (page.locator(loginPopupCloseButton)).toBeVisible(); // кнопка закриття попапу відобразилась

  // Клікаємо на інпут номеру телефону
  await page.locator(phoneInput).click();

  // Клікаємо поза інпутом на заголовок
  await page.locator(loginPopupHeader).click();

  // Перевіряємо, що відобразились 2 підказки
  await expect (page.locator(errorRequestedField)).toBeVisible(); // попап відобразився

  // Перевіряємо коректність тексту в обох підказках
  await expect (page.locator(errorRequestedField)).toContainText('Поле является обязательным.'); // попап відобразився

});