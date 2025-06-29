// @ts-check
import { defineConfig, devices } from '@playwright/test';
// import { config } from 'process';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  
  /** Timeout for every step */
  timeout: 30 * 1000,
  
  /** Timeout for every assertion */
  expect : {
    timeout: 30000,
  },
  reporter: 'html',
   use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  browserName: 'chromium',
  headless: false
  },

});
module.exports = config

