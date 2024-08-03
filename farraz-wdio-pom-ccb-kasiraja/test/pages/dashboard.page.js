//TODO: POM-Step 3 > define Page Object of 'Inventory Page'
class DashboardPage {
  //TODO 1: define web element locator -- using getter method
  get dashboardPageUrl() {
    return 'https://kasirdemo.vercel.app/dashboard';
  }

  get menuButton() {
    return $('#menu-button-14');
  }

  get kategoriButton() {
    return $(`//a[@href='/categories']`);
  }

  get logoutButton() {
    return $('#menu-list-14-menuitem-12');
  }

  //TODO 2: define 'element actions' here
  async dashboard() {
    await this.menuButton.click();
  }

  async assertDashboardPageUrl() {
    await expect(browser).toHaveUrl(this.dashboardPageUrl);
  }

  async kategori() {
    await this.kategoriButton.click();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutButton.click();
  }
}

module.exports = new DashboardPage();
