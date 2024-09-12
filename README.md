# Playwright Test Automation - Practice Project

This is my practice project using the site [Demoblaze](https://www.demoblaze.com/), where I'm exploring Playwright for automated testing.

### Steps to Create and Run a Playwright Test:

1. **Create a New Test File:**
   - Create a new file under the `test` folder.

2. **Import Playwright Test Module:**
   ```javascript
   const { test, expect } = require('@playwright/test');
## Playwright Functions: `test` and `expect`

`test` and `expect` are functions from the `@playwright/test` module.

- **`test`**: Used to declare and run test blocks.
- **`expect`**: Used to write assertions within the test block.

3.  **Write a Test Block:**

Use the following structure to define a test:
```javascript
test('test title', async ({ page }) => {
  // Test code goes here
});

- **`async`**: Declares a function as asynchronous, allowing it to use `await` and return a promise. This helps in handling operations that take time to complete, like network requests or file operations, without blocking the execution of other code.

- **`await`**: Used within `async` functions to pause execution until a promise is resolved or rejected. It simplifies asynchronous code by avoiding the need for explicit promise handling with `.then()` and `.catch()`.

4. **Run the Tests:**

- **Run all tests in all browsers (headless mode):**
  ```bash
  npx playwright test

- **Run a specific test file:**
npx playwright test MyTest1.spec.js

- **Run tests in a specific browser (e.g., Chromium):**
npx playwright test --project=chromium

- **Run tests in headed mode (with a visible browser window):**
npx playwright test --headed

- **Debug a specific test file:**
npx playwright test example.spec.js --debug
```


##For more detailed test configurations and additional Playwright features, please refer to the Playwright documentation.
