import { expect, type Locator, type Page } from '@playwright/test';

export class ContactsPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly emailLink: Locator;
  readonly phoneLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h1');
    // Шукаємо посилання, які містять специфічні атрибути href
    this.emailLink = page.locator('a[href^="mailto:"]');
    this.phoneLink = page.locator('a[href^="tel:"]');
  }

  async goto() {
    await this.page.goto('/contacts');
  }

  async getEmailHref() {
    return await this.emailLink.getAttribute('href');
  }
}