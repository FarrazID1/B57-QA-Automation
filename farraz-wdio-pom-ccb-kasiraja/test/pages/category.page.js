//TODO: POM-Step 3 > define Page Object of 'Inventory Page'
class CategoryPage {
  //TODO 1: define web element locator -- using getter method
  get categoryPageUrl() {
    return 'https://kasirdemo.vercel.app/categories';
  }

  get categoryBaruPageUrl() {
    return 'https://kasirdemo.vercel.app/categories/create';
  }

  get kategoriButton() {
    return $(`//a[@href='/categories']`);
  }

  get tambahButton() {
    return $(`//a[@href='/categories/create']`);
  }

  get catNameInput() {
    return $(`//input[@id='nama']`);
  }

  get catDescInput() {
    return $(`//input[@id='deskripsi']`);
  }

  get simpanButton() {
    return $(`//button[@class='chakra-button css-l5lnz6']`);
  }

  get errorMsg() {
    return $('//*[@role="alert"]');
  }

  //TODO 2: define 'element actions' here
  async assertKategoriPageUrl() {
    await expect(browser).toHaveUrl(this.categoryPageUrl);
  }

  async tambah() {
    await this.tambahButton.click();
  }

  async assertKategoriBaruPageUrl() {
    await expect(browser).toHaveUrl(this.categoryBaruPageUrl);
  }

  async inputCatName(catName) {
    await this.catNameInput.setValue(catName);
  }

  async inputCatDesc(catDesc) {
    await this.catDescInput.setValue(catDesc);
  }

  async simpan() {
    await this.simpanButton.click();
  }

  async assertErrorMessage(expectedErrorMessage) {
    await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
  }
}

module.exports = new CategoryPage();
