import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly heading: Locator;
  readonly searchInput: Locator;
  readonly projectCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h1');
    this.searchInput = page.getByPlaceholder('Шукати за назвою або тегом...');
    this.projectCards = page.locator('.card');
  }

  async goto() {
    await this.page.goto('/');
  }

  async searchFor(query: string) {
    await this.searchInput.fill(query);
  }
}