const BaseInteraction = require('./BaseInteraction');

class YopmailInteraction extends BaseInteraction {
  constructor() {
    super();
    this.yopmail = 'https://yopmail.com/';

    this.generatorEmail =
      "//div[@id='listeliens']/child::a[@href='email-generator']";
    this.fieldWithEmail = '#egen';
    this.copyNewEmail = '#cprnd';
    this.urlCalculator = 'Google Cloud Pricing Calculator';

    this.buttonCheckEmail = "//button[@onclick='egengo();']";
    this.choosePost = "//button[@class='lm']";
  }
  // 9. В новой вкладке открыть https://yopmail.com/ или аналогичный сервис для генерации временных email'ов
  async openNewTab() {
    await this.openNewWindow(this.yopmail);
  }

  // 10. Скопировать почтовый адрес сгенерированный в yopmail.com
  async setNewEmail() {
    await this.waitForLoadingAnElemen(this.generatorEmail);
    await this.clickElement(this.generatorEmail);
    await this.waitForLoadingAnElemen(this.copyNewEmail);
    await this.clickElement(this.copyNewEmail);
  }

  // 11. Вернуться в калькулятор, в поле Email ввести адрес из предыдущего пункта
  async returnToCalculator() {
    await this.switchWindown(this.urlCalculator);
  }

  // 13. Дождаться письма с рассчетом стоимости и проверить что Total Estimated Monthly Cost в письме совпадает с тем,
  // что отображается в калькуляторе
  async checkPost() {
    await this.waitForLoadingAnElemen(this.buttonCheckEmail);
    await this.clickElement(this.buttonCheckEmail);
    await this.waitForLoadingAnElemen(this.choosePost);
    await this.clickElement(this.choosePost);
  }
}

module.exports = new YopmailInteraction();
