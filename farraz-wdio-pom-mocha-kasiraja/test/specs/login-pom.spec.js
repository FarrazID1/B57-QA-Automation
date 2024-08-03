const Page = require('../pages/page');
const LoginPage = require('../pages/login.page');
const DashboardPage = require('../pages/dashboard.page');
const dashboardPage = require('../pages/dashboard.page');

describe('Login to kasirdemo - using Page Object Models', () => {
  beforeEach(async () => {
    Page.open('/');
    // in each TC - will re-open baseURL: 'https://kasirdemo.vercel.app/login'
  });

  it('TC01-POSITIVE => should login successfully with valid credentials', async () => {
    await LoginPage.login('admin.farraz@gmail.com', 'farraz123');
    await DashboardPage.assertDashboardPageUrl();
    await DashboardPage.logout();
  });

  it('TC02-NEGATIVE => should show error for invalid EMAIL format', async () => {
    await LoginPage.login('invalid_email', 'farraz123');
    await LoginPage.assertErrorMessage(`"email" must be a valid email`);
  });

  it('TC03-NEGATIVE => should show error for invalid PASSWORD', async () => {
    await LoginPage.login('admin.farraz@gmail.com', 'invalid_password');
    await LoginPage.assertErrorMessage('Kredensial yang Anda berikan salah');
  });
});
