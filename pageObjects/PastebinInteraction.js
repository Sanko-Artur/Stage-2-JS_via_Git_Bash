const { By } = require('selenium-webdriver');
const BaseInteraction = require('./BaseInteraction');

class PastebinInteraction extends BaseInteraction {
  constructor() {
    super();
    this.URL = 'https://pastebin.com/';

    this.newPaste = By.id('postform-text');
    this.syntaxHighlighting = By.id('select2-postform-format-container');
    this.inputSyntaxHighlightingBash = By.xpath(
      '//span[@class="select2-search select2-search--dropdown"]/child::input[@class="select2-search__field"]'
    );
    this.dropDownPasteExpiration = By.id(
      'select2-postform-expiration-container'
    );
    this.tenMinutes = By.xpath("//li[text()='10 Minutes']");
    this.pasteName = By.id('postform-name');
    this.button = By.xpath('//button');
  }
  // 1. Открыть https://pastebin.com или аналогичный сервис в любом браузере
  async openURL() {
    await super.openURL(this.URL);
    await this.driver.sleep(500);
  }
  // 2. Создать New Paste со следующими деталями:
  // * Код: "Hello from WebDriver"
  // or
  // * Код:
  // git config --global user.name  "New Sheriff in Town"
  // git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
  // git push origin master --force
  async inputNewPaste(text) {
    await this.inputTextIntoElement(this.newPaste, text);
    await this.driver.sleep(500);
  }
  // * select Syntax Highlighting and choose "Bash"
  async selectSyntaxHighlighting(text) {
    await this.clickElement(this.syntaxHighlighting);
    await this.driver.sleep(500);
    await this.inputTextIntoElement(this.inputSyntaxHighlightingBash, text);
    await this.driver.sleep(500);
  }
  // * Paste Expiration: "10 Minutes"
  async selectPasteExpiration() {
    await this.clickElement(this.dropDownPasteExpiration);
    await this.driver.sleep(500);
    await this.clickElement(this.tenMinutes);
    await this.driver.sleep(500);
  }
  // * Paste Name / Title: "helloweb"
  // or
  // * Paste Name / Title: "how to gain dominance among developers"
  async inputPasteName(text) {
    await this.inputTextIntoElement(this.pasteName, text);
    await this.driver.sleep(500);
  }

  async clickButtonCreateNewPaste() {
    await this.clickElement(this.button);
    await this.driver.sleep(500);
  }
}

module.exports = new PastebinInteraction();
