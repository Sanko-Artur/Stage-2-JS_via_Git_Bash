const { Builder, By, Key, until } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({ implicit: 6000 });
driver.manage().window().maximize();

class BaseInterection {
  constructor(driver) {
    this.driver = driver;
  }

  async openURL(url) {
    await this.driver.get(url);
  }

  async selectElement(element) {
    await this.driver.findElement(element).click();
  }

  async inputTextIntoElement(element, text) {
    await this.driver.findElement(element).sendKeys(text);
  }

  async pressEnter() {
    await driver.actions().keyDown(Key.ENTER).keyUp(Key.ENTER).perform();
  }

  async close() {
    await this.driver.quit();
  }

  async getTextFromElement(element) {
    await document.querySelector(element).textContent;
  }

  async accessToFrame(element) {
    await this.driver.switchTo().frame(element);
  }

  async openNewTab() {
    await driver
      .actions()
      .keyDown(Key.CONTROL + 'T')
      .keyUp(Key.CONTROL + 'T')
      .perform();
  }

  async changeTabToprevious() {
    await driver
      .actions()
      .keyDown(Key.CONTROL + Key.SHIFT + Key.TAB)
      .keyUpn(Key.CONTROL + Key.SHIFT + Key.TAB)
      .perform();
  }

  async inputText() {
    await driver
      .actions()
      .keyDown(Key.CONTROL + 'V')
      .keyUpn(Key.CONTROL + 'V')
      .perform();
  }

  async changeTabToNext() {
    await driver
      .actions()
      .keyDown(Key.CONTROL + Key.TAB)
      .keyUpn(Key.CONTROL + Key.TAB)
      .perform();
  }
}

module.exports = BaseInterection;
