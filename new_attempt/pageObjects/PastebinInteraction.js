const { By } = require('selenium-webdriver');
const BaseInteraction = require('./BaseInteraction');

class PastebinInteraction extends BaseInteraction {
  constructor(driver) {
    super(driver);
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
  }
  // * select Syntax Highlighting and choose "Bash"
  async selectSyntaxHighlighting(text) {
    await this.selectElement(this.syntaxHighlighting);
    await this.inputTextIntoElement(this.inputSyntaxHighlightingBash, text);
  }
  // * Paste Expiration: "10 Minutes"
  async selectPasteExpiration() {
    await this.selectElement(this.dropDownPasteExpiration);
    await this.selectElement(this.tenMinutes);
  }
  // * Paste Name / Title: "helloweb"
  // or
  // * Paste Name / Title: "how to gain dominance among developers"
  async inputPasteName(text) {
    await this.inputTextIntoElement(this.pasteName, text);
  }

  async clickButton() {
    await this.selectElement(this.button);
  }
}

module.exports = new PastebinInteraction();
