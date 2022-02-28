const { Builder, By, Key, until } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
// driver.manage().setTimeouts().implicitlyWait(20, TimeUnit.SECONDS);

class BaseInteraction {
  constructor() {
    this.driver = driver;
  }

  async openURL(url) {
    await this.driver.manage().window().maximize();
    await this.driver.get(url);
  }

  async clickElement(element) {
    await this.driver.findElement(element).click();
  }

  async inputTextIntoElement(element, text) {
    await this.driver.findElement(element).sendKeys(text);
  }

  async close() {
    await this.driver.quit();
  }

  async getTextFromElement(element) {
    await document.querySelector(element).textContent;
  }
}

module.exports = BaseInteraction;
