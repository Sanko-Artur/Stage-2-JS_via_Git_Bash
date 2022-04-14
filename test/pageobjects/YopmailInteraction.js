const BaseInteraction = require('./BaseInteraction');

class YopmailInteraction extends BaseInteraction {
  constructor() {
    super();
    this.yopmail = 'https://yopmail.com/';

    this.generatorEmail =
      "//div[@id='listeliens']/child::a[@href='email-generator']";
    this.fieldWithEmail = '#egen';
    this.copyNewEmail = '#cprnd';

    this.elementOfPost =
      '//h3[contains(text(), "Total Estimated Monthly Cost")]';
    this.buttonCheckEmail = "//button[@onclick='egengo();']";

    this.checkFieldEstimatedInPost =
    '//h3[contains(text() , "Total Estimated Monthly Cost")]/../following-sibling::td/h3';

  }
  // 9. В новой вкладке открыть https://yopmail.com/ или аналогичный сервис для генерации временных email'ов
  async openNewTab() {
    await this.openNewWindow(this.yopmail);
  }

  // 10. Скопировать почтовый адрес сгенерированный в yopmail.com
  async setNewEmail() {
    await this.waitForLoadingAnElement(this.generatorEmail);
    await this.clickElement(this.generatorEmail);
  }

  async getEmail() {
    // await this.getTextFromElement(this.fieldWithEmail);
    const elem = await $(this.fieldWithEmail).getText();
    return elem;
  }

  // 11. Вернуться в калькулятор, в поле Email ввести адрес из предыдущего пункта
  async returnToCalculator(handle) {
    await this.switchWindow(handle);
  }

  // 13. Дождаться письма с рассчетом стоимости и проверить что Total Estimated Monthly Cost в письме совпадает с тем,
  // что отображается в калькуляторе
  async clickButtonChechEmail() {
    await this.waitForLoadingAnElement(this.buttonCheckEmail);
    await this.clickElement(this.buttonCheckEmail);
  }

  async switchFrame() {
    await browser.switchToFrame(2);
  }
  async waitForDisplayPost() {
    await this.waitForLoadingAnElement(this.elementOfPost);
  }

  async getTextFromPost() {
    await $(this.checkFieldEstimatedInPost).waitForDisplayed({ timeout: 6000 });
    const elem = await $(this.checkFieldEstimatedInPost);
    return elem;
  }
}

module.exports = new YopmailInteraction();
