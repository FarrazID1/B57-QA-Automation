const { Given, When, Then } = require('@wdio/cucumber-framework');
const Page = require('../pages/page');
const LoginPage = require('../pages/login.page');
const DashboardPage = require('../pages/dashboard.page');
const CategoryPage = require('../pages/category.page');
const categoryPage = require('../pages/category.page');

//TODO -> open URL -- same like: before each
Given(/^I open create new category page$/, async () => {
  await Page.open('/');
  await browser.pause(1000);
  await LoginPage.login('admin.farraz@gmail.com', 'farraz123');
  await browser.pause(1000);
  await DashboardPage.assertDashboardPageUrl();
  await browser.pause(1000);

  await DashboardPage.kategori();
  await browser.pause(1000);
  await CategoryPage.tambah();
  await browser.pause(1000);
  await CategoryPage.assertKategoriBaruPageUrl();
  await browser.pause(1000);
});

//TODO: TC01-POSITIVE => Admin add new category with valid data
// When(/^admin input nama: (.+)$/, async (catName) => {
//   await CategoryPage.inputCatName(catName);
// });

// When(/^admin input deskripsi: (.+)$/, async (catDesc) => {
//   await CategoryPage.inputCatDesc(catDesc);
// });

// When(/^admin click simpan button$/, async () => {
//   await CategoryPage.simpan();
//   await browser.pause(1000);
// });

// Then(/^admin should see toast success message : (.+)$/, async (message) => {
//   await categoryPage.assertKategoriPageUrl();
//   await browser.pause(1000);

//   await DashboardPage.logout();
//   await browser.pause(1000);
// });

//TODO: TC02-NEGATIVE => Admin add new category with invalid data
// When(/^admin input nama and deskripsi$/, async () => {
//   await CategoryPage.inputCatName('');
//   await CategoryPage.inputCatDesc('dummy');
// });

When(/^admin input nama: (.+)$/, async (catName) => {
  await CategoryPage.inputCatName('');
});

When(/^admin input deskripsi: (.+)$/, async (catDesc) => {
  await CategoryPage.inputCatDesc(catDesc);
});

When(/^admin click simpan button$/, async () => {
  await CategoryPage.simpan();
  await browser.pause(1000);
});

Then(/^admin should see warning message: (.+)$/, async (message) => {
  await categoryPage.assertErrorMessage(message);
  await browser.pause(1000);

  await DashboardPage.logout();
  await browser.pause(1000);
});

// Then(/^admin should see warning message$/, async () => {
//   await CategoryPage.assertErrorMessage(`"name" is not allowed to be empty`);
//   await browser.pause(2000);

//   await DashboardPage.logout();
//   await browser.pause(1000);
// });
