const BaseInteraction = require('./BaseInteraction');

class PastebinInteraction extends BaseInteraction {
  constructor() {
    super();
    this.url = 'https://pastebin.com/';

    this.newPaste = '#postform-text';

    this.dropDownPasteExpiration = '#select2-postform-expiration-container';
    this.tenMinutes = "//li[text()='10 Minutes']"; //new xpath
    //'#select2-postform-expiration-result-lqrl-10M';

    this.pasteName = '#postform-name';

    this.syntaxHighlightingDropDown = '#select2-postform-format-container';
    this.syntaxHighlightingInput = '.select2-search__field'; //new xpath
    //'#select2-postform-format-result-sa8w-8';    '//span[@class="select2-search select2-search--dropdown"]/child::input[@class="select2-search__field"]'

    this.button = 'button';

    this.contentNewPaste = '//div[@class="source"]/child::ol';
    //'.bash' //'ol*=git'; // '[class="bash"]'; //div[@class="source"]/child::ol
    this.contentSyntaxHighlighting = '//div[@class="left"]/child::a';
    this.contentPasteNameTitle = '//title';
    this.contentPasteExpiration = '//div[@class="expire"]';
  }
  // 1. Открыть https://pastebin.com или аналогичный сервис в любом браузере
  openURL() {
    return super.openURL(this.url);
  }

  // 2. Создать New Paste
  async inputNewPaste(text) {
    await this.inputTextIntoElement(this.newPaste, text);
  }

  // * select Syntax Highlighting and choose "Bash"
  // async setSyntaxHighlightning(text){
  //   await this.clickElement(this.syntaxHighlightingDropDown);
  //   await this.inputTextIntoElement(this.syntaxHighlightingInput, text);
  //   await this.pressEnter
  // }

  async clickSyntaxHighlightingDropDown() {
    await this.clickElement(this.syntaxHighlightingDropDown);
  }

  async setBush(text) {
    await this.inputTextIntoElement(this.syntaxHighlightingInput, text);
    // await this.clickElement(this.syntaxHighlightingBush);
  }

  async pressEnter() {
    await super.pressEnter();
  }

  // * Paste Expiration: "10 Minutes"
  // async setPasteExpiration(){
  //   await this.clickElement(this.dropDownPasteExpiration);
  //   await this.clickElement(this.tenMinutes);
  // }

  async clickPasteExpirationDropDown() {
    await this.clickElement(this.dropDownPasteExpiration);
  }

  async setTenMinutes() {
    await this.clickElement(this.tenMinutes);
  }

  // * Paste Name / Title:
  async inputPasteName(text) {
    await this.inputTextIntoElement(this.pasteName, text);
  }

  // 3. Сохранить paste
  async clickButtonCreateNewPaste() {
    await this.clickElement(this.button);
  }

  // * Проверить что код соответствует введенному в пункте 2
  // Создать New Paste * Код: '...'
  async getTextFromNewPaste() {
    await this.getTextFromElement(this.contentNewPaste);
  }

  // * Синтаксис подвечен для bash
  getTextFromSyntaxHighlighting() {
    return this.getTextFromElement(this.contentSyntaxHighlighting);
  }

  // * Проверить что код соответствует введенному в пункте 2
  // * Paste Expiration: "10 Minutes"
  getTextFromPasteExpiration() {
    return this.getTextFromElement(this.contentPasteExpiration);
  }

  // * Заголовок страницы браузера соответствует Paste Name / Title
  async getTextFromTitle() {
    await this.getTextFromElement(this.contentPasteNameTitle);
  }

  // async getTextFromTitle() {
  //   await this.driver.sleep(5000);
  //   await super.getTextFromTitle();
  // }
}

module.exports = new PastebinInteraction();
