const assert = require('assert');

//TODO: 'describe' the test suite/scenario - Positive / Negative
describe('Test Suite => Open Browser: kasirdemo', () => {
  //-- Test Case 1: OPEN BROWSER for desired URL
  it(`TC01-POSITIVE => should open (redirect) to "kasirdemo.vercel.app" - with 'correct' expected URL`, async () => {
    //TODO: -- open URL --
    await browser.url('/');

    const url = await browser.getUrl();
    const expectedURL = 'https://kasirdemo.vercel.app/login';

    //TODO: add assertion script (using 'expect') - use wdio-assert package
    await assert.strictEqual(
      url,
      expectedURL,
      `URL is not as expected. Actual: ${url}, Expected: ${expectedURL}`
    );
  });

  //-- Test Case 2: Open browser for 'wrong' expected URL
  it(`TC02-NEGATIVE => should open (redirect) to "kasirdemo.vercel.app" - with 'wrong' expected URL`, async () => {
    await browser.url('/');

    const url = await browser.getUrl();
    const expectedURL = 'https://kasirdemo.vercel.app/loginX';

    //TODO 1.2: add assertion script (expect) - use wdio-assert package
    await assert.strictEqual(
      url,
      expectedURL,
      `URL is not as expected. Actual: ${url}, Expected: ${expectedURL}`
    );
  });
});
