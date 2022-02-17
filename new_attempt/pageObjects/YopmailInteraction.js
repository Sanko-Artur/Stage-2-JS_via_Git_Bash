const { By } = require('selenium-webdriver');
const BaseInteraction = require('./BaseInteraction');

class YopmailInteraction extends BaseInteraction {
  constructor(driver) {
    this.url = 'https://yopmail.com/';
    this.newMail = By.xpath(
      '//div[@id="listeliens"]/child::a[@href="email-generator"]'
    );
    this.buttonForCopyMail = By.xpath('//button[@id="cprnd"]');
    this.buttonForCheckMail = By.xpath(
      '/html/body/div/div[2]/main/div/div[2]/div/div/div[2]/button[2]'
    );
  }
  // iframe

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
