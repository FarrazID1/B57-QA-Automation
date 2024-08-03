const { Given, When, Then } = require('@wdio/cucumber-framework');
const Page = require('../pages/page');
const LoginPage = require('../pages/login.page');
const DashboardPage = require('../pages/dashboard.page');

//TODO -> open URL -- same like: before each
Given(/^I open Kasirdemo website$/, async () => {
  await Page.open('/');
  await browser.pause(1000);
});

//TODO: TC01-NEGATIVE => Verify login failed with invalid Email
When(/^I login with invalid Email$/, async () => {
  await LoginPage.login('invalid_email@gmail.com', 'farraz123');
  await browser.pause(1000);
});

Then(/^I should see an error message$/, async () => {
  // const alert = await $('[role="alert"]');
  // expect(alert).toHaveTextContaining('Kredensial yang Anda berikan salah');

  await LoginPage.assertErrorMessage('Kredensial yang Anda berikan salah');
});

//TODO: TC02-NEGATIVE => Verify login failed with Invalid credentials
// -- using Data Driven Test (Scenario Outline) step definitions
When(
  /^I login with email: (.+) and password: (.+)$/,
  async (email, password) => {
    await LoginPage.login(email, password);
    await browser.pause(2000);
  }
);

Then(/^It shows an alert message: (.+)$/, async (expectedErrorMessage) => {
  const alert = await $('[role="alert"]');
  expect(alert).toHaveTextContaining(expectedErrorMessage);

  // await LoginPage.assertErrorMessage(expectedErrorMessage);
  await browser.pause(1000);
});

//TODO: TC03-POSITIVE => Login successfully with Valid credentials
When(/^I login with valid credentials$/, async () => {
  await LoginPage.login('admin.farraz@gmail.com', 'farraz123');
});

Then(/^I should be on the dashboard page$/, async () => {
  await DashboardPage.assertDashboardPageUrl();
  await browser.pause(1000);

  await DashboardPage.logout();
  await browser.pause(1000);
});
