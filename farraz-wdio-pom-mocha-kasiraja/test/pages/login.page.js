//TODO: POM-Step 2 > define Page Object of 'Login Page'
class LoginPage {
  //TODO 1: define 'web element locator' here
  get loginPageUrl() {
    return 'https://kasirdemo.vercel.app/login';
  }

  get emailInput() {
    return $('#email'); //locator field: email
  }

  get passwordInput() {
    return $('#password'); //locator field: password
  }

  get loginButton() {
    return $(
      '/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]'
    ); //locator field: login button
  }

  get errorMsg() {
    return $('//*[@role="alert"]');
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

  async getErrorMessageText() {
    return await this.errorMsg.getText();
  }
}

module.exports = new LoginPage();
