import { test, expect } from '@playwright/test';

// Task: PROD-31762

// Setting URLs and Locators: 

// 1. URL
const homePageURL: string = 'https://www.pin-up370.com';

// 2. Core Elements
const regButtonOnHeader: string = '[data-testid="registrationBtn"]';

// 3. Colors & Properties
const regButtonColor: string = 'rgb(255, 36, 0)'; //'#ff2400'
const regButtonTextColor: string = 'rgb(255, 255, 255)'; //'#ffffff';
const regButtonAnimation: string = '1.6s ease-out 0.5s infinite normal none running button-pulse';
const regButtonColorOnHover: string = 'linear-gradient(0deg, rgba(49, 51, 52, 0.15), rgba(49, 51, 52, 0.15)), none';

// Test cases

test.only('test scenario 31762', async ({ page }) => {
  // Відкриваємо сайт
  await page.goto(homePageURL);

  // Чекаємо поки вся сторінка завантажиться
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('load');
  await page.waitForSelector(regButtonOnHeader, { state: 'visible' });

  // Перевіряємо колір кнопки реєстрації
  await expect (page.locator(regButtonOnHeader)).toBeVisible();
  const bgColor:string = await page.locator(regButtonOnHeader).evaluate(el => getComputedStyle(el).backgroundColor);
  console.log(`The real background color before hover is: ${bgColor}`);
  expect(bgColor.includes(regButtonColor)).toBeTruthy();

  //  Перевіряємо колір тексту на кнопці
  await expect (page.locator(regButtonOnHeader)).toHaveCSS('color', regButtonTextColor);

  // Перевіряємо, яку анімацію має :after стан елементу і виводимо значення в консоль
  const afterAnimationCss = await page.locator(regButtonOnHeader).evaluate(el => {
    const afterStyle = window.getComputedStyle(el, ':after');
    return afterStyle.animation;
  });
  console.log('Animation has such params:', afterAnimationCss);

  // Перевіряємо, чи анімація є коректною
  expect(afterAnimationCss).toBe(regButtonAnimation);

  // Робимо ховер мишкою на елемент
  await page.locator(regButtonOnHeader).hover();

  // Перевіряємо, що кнопка змінила колір
  await expect (page.locator(regButtonOnHeader)).toHaveCSS('background-image', regButtonColorOnHover);

  // Перевіряємо, що текст лишився білим
  await expect (page.locator(regButtonOnHeader)).toHaveCSS('color', regButtonTextColor);

  // Перевіряємо, що анімація не змінилась після ховеру
  expect(afterAnimationCss).toBe(regButtonAnimation);
});