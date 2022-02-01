const { By } = require('selenium-webdriver');
const BaseInterection = require('./BaseInterection');

class ICanWin extends BaseInterection {
  constructor(driver) {
    super(driver);
    this.theURL = 'https://pastebin.com/';

    this.textNewPaste = 'Hello from WebDriver';
    this.textPasteName = 'helloweb';

    this.newPaste = By.id('postform-text');
    this.dropDownPasteExpiration = By.id(
      'select2-postform-expiration-container'
    );
    this.pasteName = By.id('postform-name');

    this.tenMinutes = By.xpath("//li[text()='10 Minutes']");

    this.button = By.xpath('//button');
  }
  // 1. Открыть https://pastebin.com или аналогичный сервис в любом браузере
  async open() {
    await this.openURL(this.theURL);
  }
  // 2. Создать New Paste со следующими деталями:
  // * Код: "Hello from WebDriver"
  async inputNewPaste() {
    //text
    await this.inputTextIntoElement(this.newPaste, this.textNewPaste); //..., text
  }
  // * Paste Expiration: "10 Minutes"
  async selectPasteExpiration() {
    await this.selectElement(this.dropDownPasteExpiration);
    await this.selectElement(this.tenMinutes);
  }
  // * Paste Name / Title: "helloweb"
  async inputPasteName() {
    //text
    await this.inputTextIntoElement(this.pasteName, this.textPasteName); //..., text
  }
  async clickButton() {
    await this.selectElement(this.button);
  }
}

const icanwin = new ICanWin();
icanwin.open();
icanwin.inputNewPaste();
icanwin.selectPasteExpiration();
icanwin.inputPasteName();
icanwin.clickButton();

module.exports = new ICanWin();
// node ./folder_A/ICanWin.js
