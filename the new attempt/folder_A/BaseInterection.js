const { Builder, By, Key, until } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({ implicit: 6000 });

class BaseInterection {
  constructor(driver) {
    this.driver = driver;
  }

  async openURL(theURL) {
    await this.driver.get(theURL);
  }

  async selectElement(element) {
    await this.driver.findElement(element).click();
  }

  async inputTextIntoElement(element, text) {
    await this.driver.findElement(element).sendKeys(text);
  }
}

module.exports = BaseInterection;
