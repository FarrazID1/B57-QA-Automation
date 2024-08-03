class Page {
  //define method - to open URL
  open(path) {
    return browser.url(path);
  }

  close() {
    return browser.close();
  }
}

module.exports = new Page();
