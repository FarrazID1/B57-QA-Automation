//TODO: POM-Step 3 > define Page Object of 'Inventory Page'
class DashboardPage {
  get dashboardPageUrl() {
    return 'https://kasirdemo.vercel.app/dashboard';
    // return '/dashboard';
  }

  get menuButton() {
    return $('#menu-button-14');
  }

  get menuList() {
    return $('#menu-list-14');
  }

  get logoutButton() {
    return $('#menu-list-14-menuitem-12');
  }

  async assertDashboardPageUrl() {
    await expect(browser).toHaveUrl(this.dashboardPageUrl);
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutButton.click();
  }
}

module.exports = new DashboardPage();
