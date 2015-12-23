module.exports = {
  "test stylus": function(browser) {
    browser.url("http://localhost:4000/stylus")
      .waitForElementVisible('body', 1000)
      .assert.title("juicy-grid: stylus")
      .end();
  }
};
