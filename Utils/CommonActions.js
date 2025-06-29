import { test, expect, page } from '@playwright/test';

export class CommonActions {
    constructor(page) {
        this.page = page;

    }

    async navigateTo(page, url) {
        await page.goto(url);
    }

    async click(page, element){
        await page.locator(element).click({ force: true });
    }

    async enter(page, element, value){
        await page.locator(element).fill(value);
       
    }


}

module.exports = { CommonActions };