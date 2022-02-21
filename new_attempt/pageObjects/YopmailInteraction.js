const { By } = require('selenium-webdriver');
const BaseInteraction = require('./BaseInteraction');

class YopmailInteraction extends BaseInteraction {
  constructor(driver) {
    super(driver);
    this.url = 'https://yopmail.com/';

    this.newMail = By.xpath(
      '//div[@id="listeliens"]/child::a[@href="email-generator"]'
    );
    this.buttonForCopyMail = By.xpath('//button[@id="cprnd"]');
    this.buttonForCheckMail = By.xpath('//button[@onclick="egengo();"]');
  }

  // 9. В новой вкладке открыть https://yopmail.com/ или аналогичный сервис для генерации временных email'ов
  async openURL() {
    await super.openURL(this.url);
  }
  // iframe
  // async switchFrame() {
  //   await super.accessToFrame();
  // }

  async createNewMail() {
    this.selectElement(this.newMail);
  }

  // 10. Скопировать почтовый адрес сгенерированный в yopmail.com
  async copyMail() {
    this.selectElement(this.buttonForCopyMail);
  }

  // 13. Дождаться письма с рассчетом стоимости и проверить что Total Estimated Monthly Cost в письме совпадает с тем,
  // что отображается в калькуляторе
  async clickButtonForCheckMail() {
    this.selectElement(this.buttonForCheckMail);
  }
}

module.exports = new YopmailInteraction();