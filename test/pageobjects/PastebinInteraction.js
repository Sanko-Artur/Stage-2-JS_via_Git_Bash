const BaseInteraction = require('./BaseInteraction');

class PastebinInteraction extends BaseInteraction {
  constructor() {
    super();
    this.url = 'https://pastebin.com/';

    this.newPaste = '#postform-text';

    this.dropDownPasteExpiration = '#select2-postform-expiration-container';
    this.tenMinutes = "//li[text()='10 Minutes']";

    this.pasteName = '#postform-name';

    this.syntaxHighlightingDropDown =
      "//*[@id='select2-postform-format-container']";
    this.syntaxHighlightingInput = "//input[@class='select2-search__field']";

    this.button = 'button';
  }
  // 1. Открыть https://pastebin.com или аналогичный сервис в любом браузере
  async openURL() {
    await super.openURL(this.url);
  }

  // 2. Создать New Paste
  async inputNewPaste(text) {
    await this.waitForLoadingAnElemen(this.newPaste);
    await this.inputTextIntoElement(this.newPaste, text);
  }

  // * select Syntax Highlighting and choose "Bash"
  async setSyntaxHighlightning(text) {
    await this.waitForLoadingAnElemen(this.syntaxHighlightingDropDown);
    await this.clickElement(this.syntaxHighlightingDropDown);
    await this.waitForLoadingAnElemen(this.syntaxHighlightingInput);
    await this.inputTextIntoElement(this.syntaxHighlightingInput, text);
    await this.pressEnter();
  }

  // * Paste Expiration: "10 Minutes"
  async setPasteExpiration() {
    await this.waitForLoadingAnElemen(this.dropDownPasteExpiration);
    await this.clickElement(this.dropDownPasteExpiration);
    await this.waitForLoadingAnElemen(this.tenMinutes);
    await this.clickElement(this.tenMinutes);
  }

  // * Paste Name / Title:
  async inputPasteName(text) {
    await this.waitForLoadingAnElemen(this.pasteName);
    await this.inputTextIntoElement(this.pasteName, text);
  }

  // 3. Сохранить paste
  async clickButtonCreateNewPaste() {
    await this.waitForLoadingAnElemen(this.button);
    await this.clickElement(this.button);
  }
}

module.exports = new PastebinInteraction();
