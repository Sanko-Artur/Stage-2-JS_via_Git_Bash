const BaseInteraction = require('./BaseInteraction');

class YopmailInteraction extends BaseInteraction {
  constructor() {
    super();
    this.yopmail = 'https://yopmail.com/';

    this.generatorEmail =
      "//div[@id='listeliens']/child::a[@href='email-generator']";
    this.fieldWithEmail = '#egen';
    this.copyNewEmail = '#cprnd';
    this.titleOfCalculator = 'Google Cloud Pricing Calculator';

    this.buttonCheckEmail = "//button[@onclick='egengo();']";
    this.choosePost = "//div[@class='mctn']/div[@class='m']"; // //div[@class='mctn']/div[2]
  }
  // 9. В новой вкладке открыть https://yopmail.com/ или аналогичный сервис для генерации временных email'ов
  async openNewTab() {
    await this.openNewWindow(this.yopmail);
  }

  // 10. Скопировать почтовый адрес сгенерированный в yopmail.com
  async setNewEmail() {
    await this.waitForLoadingExtraElemenOfDOM(this.generatorEmail);
    await this.clickElement(this.generatorEmail);
    await this.waitForLoadingExtraElemenOfDOM(this.copyNewEmail);
    await this.clickElement(this.copyNewEmail);
  }

  // 11. Вернуться в калькулятор, в поле Email ввести адрес из предыдущего пункта
  async returnToCalculator() {
    await this.switchWindown(this.titleOfCalculator);
  }

  // 13. Дождаться письма с рассчетом стоимости и проверить что Total Estimated Monthly Cost в письме совпадает с тем,
  // что отображается в калькуляторе
  async checkPost() {
    await this.waitForLoadingExtraElemenOfDOM(this.buttonCheckEmail);
    await this.clickElement(this.buttonCheckEmail);
    await this.waitForLoadingExtraElemenOfDOM(this.choosePost);
    await this.clickElement(this.choosePost);
  }
}

module.exports = new YopmailInteraction();
