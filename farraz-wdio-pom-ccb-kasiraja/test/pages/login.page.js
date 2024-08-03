// const { expect } = require('@wdio/globals');

class LoginPage {
  //! login for URL: https://kasirdemo.vercel.app/login
  //! as alternative for URL: https://kasirdemo.belajarqa.com/login
  //! -- email and password: 'admin.farraz@gmail.com' and 'farraz123'

  //TODO 1: define web element locator -- using getter method
  get emailInput() {
    // return $('#email');
    return $(`//input[@id="email"]`);
  }

  get passwordInput() {
    // return $('#password');
    return $(`//input[@id="password"]`);
  }

  get loginButton() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]'
    ); //locator field: login button
  }

  get errorMsg() {
    return $('//*[@role="alert"]');
    // --element locator --> the, create Xpath
  }

  //TODO 2: define 'element actions' here
  async login(email, password) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }

  async assertLoginPageUrl() {
    await expect(browser).toHaveUrl(this.loginPageUrl);
  }

  async assertErrorMessage(expectedErrorMessage) {
    await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
  }
}

module.exports = new LoginPage();
