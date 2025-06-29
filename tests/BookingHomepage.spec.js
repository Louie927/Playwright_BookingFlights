import { test, expect, chromium } from '@playwright/test';
import { BookingHomePage } from '../pages/BookingHomepagePage.js';
import { CommonActions } from '../Utils/CommonActions.js';

const bookingHomePage = new BookingHomePage();
const commonActions = new CommonActions();

let browser;
let context;
let page;

test.beforeAll(async () => {
  // Launch the browser and create a context
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
});

test.afterAll(async () => {
  // Close the browser after all tests
   if (browser) {
    await browser.close();
  }
});

test('Navigate to Flight Booking homepage', async () => {
    await commonActions.navigateTo(page, bookingHomePage.clientURL);
    await commonActions.click(page, bookingHomePage.fromDestinationTxtBox);
    await commonActions.click(page, bookingHomePage.toDestinationTxtBox);
});

test('Enter Origin location and destination in homepage', async () => {
    await commonActions.click(page, bookingHomePage.fromDestinationTxtBox);
    await commonActions.enter(page, bookingHomePage.fromDestinationTxtBox, bookingHomePage.fromDestinationVal1);
    await commonActions.click(page, bookingHomePage.toDestinationTxtBox);
    await commonActions.enter(page, bookingHomePage.toDestinationTxtBox, bookingHomePage.toDestinationVal1);
    await commonActions.click(page, bookingHomePage.flightSearchBtn);
    await commonActions.click(page, bookingHomePage.flightSearchBtn);
});

test('Verify if user is navigated to flight selection page', async () => {
    // Specify assertion to check if a element for flight selection page
    // is visible
    await expect(page.locator(bookingHomePage.changeSearchBtn)).toBeVisible();
});






