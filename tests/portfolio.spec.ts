import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ContactsPage } from './pages/ContactsPage';

test.describe('Портфоліо E2E Тести', () => {

  test('Тест 1: Перевірка головного заголовку на сторінці Home', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    
    // Залишаємо лише перевірку головного H1 заголовка на сторінці
    await expect(homePage.heading).toHaveText('Розробник C++ (Портной Артем)');
  }); 

  test('Тест 2: Наявність карток та робота пошуку', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    // Перевіряємо, що карток більше нуля
    expect(await homePage.projectCards.count()).toBeGreaterThan(0);

    await homePage.searchFor('Змійка');

    // Перевіряємо, що після пошуку залишилася потрібна картка
    await expect(homePage.projectCards.first()).toContainText('Змійка');
  });

test('Тест 3: Перевірка атрибута у полі пошуку (Home)', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    await expect(homePage.searchInput).toHaveAttribute('placeholder', 'Шукати за назвою або тегом...');
  });
});