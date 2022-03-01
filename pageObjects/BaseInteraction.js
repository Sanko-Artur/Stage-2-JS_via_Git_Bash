const { Builder, By, Key, until } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({ implicit: 10000 });

class BaseInteraction {
  constructor() {
    this.driver = driver;
  }

  async openURL(url) {
    await this.driver.manage().window().maximize();
    await this.driver.get(url);
  }

  async clickElement(element) {
    await (await this.driver.findElement(element)).click();
  }

  async inputTextIntoElement(element, text) {
    await (await this.driver.findElement(element)).sendKeys(text);
  }

  async close() {
    await this.driver.quit();
  }

  async pressEnter() {
    await driver.actions().keyDown(Key.ENTER).keyUp(Key.ENTER).perform();
  }

  async getTextFromElement(element) {
    return await (await this.driver.findElement(element)).getText();
  }

  async getTextFromTitle() {
    await this.driver.wait(until.elementLocated(By.css('html')));
    return await this.driver.getTitle();
  }

  // async getTextFromElement(element) {
  //   await document.querySelector(element).textContent;
  // }
}

module.exports = BaseInteraction;
