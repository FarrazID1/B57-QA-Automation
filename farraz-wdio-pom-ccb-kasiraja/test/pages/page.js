class Page {
  //define method - to open URL
  open(path) {
    return browser.url(path);
  }

  close() {
    return browser.close(); //! --invalid command--
  }
}

module.exports = new Page();
