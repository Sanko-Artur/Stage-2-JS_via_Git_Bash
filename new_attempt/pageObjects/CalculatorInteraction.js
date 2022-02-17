const { By } = require('selenium-webdriver');
const BaseInteraction = require('./BaseInteraction');
const BaseInteraction = require('./YopmailInteraction');

class CalculatorInteraction extends BaseInteraction {
  constructor(driver) {
    super(driver);

    this.iframe = await driver.findElement(
      By.xpath(
        '//iframe[@id="apiproxybf221f87683c831e9bba1607f3c31f5cae7a3c6f0.3731985532"]'
      )
    );

    this.url = 'https://cloud.google.com/';
    this.searchButton = By.xpath('//input[@name="q"]');
    this.searchResult = By.xpath(
      '//b[text()="Google Cloud Pricing Calculator"][1]'
    );
    this.frame_1 = By.xpath(
      '//iframe[@id="apiproxybf221f87683c831e9bba1607f3c31f5cae7a3c6f0.3731985532"]'
    );
    this.frame_2 = By.xpath(
      '//iframe[@id="apiproxy1e6529cf69db7e05469dc4744974bc80422fd7bc0.1841053624"]'
    );
    this.typeOFCalculator = By.xpath('//div[@title="Compute Engine"][1]');
    this.numberOfInstances = By.xpath('//input[@id="input_76"]');
    this.series = By.xpath('//*[@id="select_value_label_71"]/span[1]/div'); // new xpath
    this.typeOfSeries = By.xpath('//*[@id="select_option_216"]/div'); // new xpath
    this.machineType_1 = By.xpath(
      '//*[@id="select_value_label_72"]/span[1]/div'
    ); // new xpath
    this.machineType_2 = By.xpath('//*[@id="select_option_419"]/div'); // new xpath
    this.addGpus = By.xpath(
      '//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[11]/div[1]/md-input-container/md-checkbox/div[2]'
    ); // new xpath
    this.gpuType_1 = By.xpath('//*[@id="select_462"]');
    this.gpuType_2 = By.xpath('//*[@id="select_option_469"]/div'); // new xpath
    this.numberOfGpus_1 = By.xpath('//*[@id="select_value_label_451"]/span[1]'); // new xpath
    this.numberOfGpus_2 = By.xpath('//*[@id="select_option_473"]');
    this.localSsd_1 = By.xpath('//*[@id="select_value_label_413"]/span[1]'); // new xpath
    this.localSsd_2 = By.xpath('//*[@id="select_option_440"]/div'); // new xpath
    this.datacenterLocation_1 = By.xpath(
      '//*[@id="select_value_label_74"]/span[1]/div'
    ); // new xpath
    this.datacenterLocation_2 = By.xpath('//*[@id="select_option_237"]/div'); // new xpath
    this.commitedUsage_1 = By.xpath('//*[@id="select_value_label_75"]/span[1]'); // new xpath
    this.commitedUsage_2 = By.xpath('//*[@id="select_option_114"]/div'); // new xpath
    this.buttonAdd = By.xpath(
      '//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[19]/button'
    ); // new xpath
    this.buttonEmailEstimate = By.id('email_quote');
    this.textSearchRequest = 'Google Cloud Platform Pricing Calculator';
    this.textForInstaces = '4';
    this.url_2 = 'https://yopmail.com/';
    this.fieldForMail = By.id('input_539');
    this.buttonSendEmail = By.xpath(
      '//*[@id="dialogContent_545"]/form/md-dialog-actions/button[2]'
    );
  }
  // 1. Открыть https://cloud.google.com/
  async openURL() {
    await super.openURL(this.url);
  }
  // 2. Нажав кнопку поиска по порталу вверху страницы, ввести в поле поиска"Google Cloud Platform Pricing Calculator"
  async setSearchItem(text) {
    await this.selectElement(this.searchButton);
    await this.inputTextIntoElement(this.searchButton, text); // this.textSearchRequest
  }

  // 3. Запустить поиск, нажав кнопку поиска.
  async startSearching() {
    await super.pressEnter();
  }
  // 4. В результатах поиска кликнуть "Google Cloud Platform Pricing Calculator" и перейти на страницу калькулятора.
  async chooseSearchResult() {
    await this.selectElement(this.searchResult);
  }

  async switchFrame() {
    await super.accessToFrame(frame_1);
  }

  // 5. Активировать раздел COMPUTE ENGINE вверху страницы
  async chooseTypeOfCalculator() {
    await this.selectElement(this.typeOFCalculator);
  }

  // 6. Заполнить форму следующими данными:
  //  * Number of instances: 4
  async setNumberOfInstances(text) {
    this.selectElement(this.numberOfInstances);
    this.inputTextIntoElement(this.numberOfInstances, text); // this.textForInstaces
  }

  //       ???  нужно ли эти пункты прокликивать, если они по дэфолту уже выбраны  ???
  // * What are these instances for?: оставить пустым
  //  * Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS
  //  * VM Class: Regular

  // set series
  async setSeries() {
    this.selectElement(this.series);
    this.selectElement(this.typeOfSeries);
  }

  // Instance type: n1-standard-8    (vCPUs: 8, RAM: 30 GB)
  async setInstancType() {
    this.selectElement(this.machineType_1);
    this.selectElement(this.machineType_2);
  }

  //Выбрать Add GPUs
  // * Number of GPUs: 1
  // * GPU type: NVIDIA Tesla V100
  // не всегда доступно к выбору -> NVIDIA Tesla V100
  async setGPUs() {
    this.selectElement(this.addGpus);
    this.selectElement(this.gpuType_1);
    this.selectElement(this.gpuType_2);
    this.selectElement(this.numberOfGpus_1);
    this.selectElement(this.numberOfGpus_2);
  }

  // Local SSD: 2x375 Gb
  async setSSD() {
    this.selectElement(this.localSsd_1);
    this.selectElement(this.localSsd_2);
  }

  // Datacenter location: Frankfurt (europe-west3)
  async setDatacenterLocation() {
    this.selectElement(this.datacenterLocation_1);
    this.selectElement(this.datacenterLocation_2);
  }

  // Commited usage: 1 Year
  async setCommitedUsage() {
    this.selectElement(this.commitedUsage_1);
    this.selectElement(this.commitedUsage_2);
  }

  // 7. Нажать Add to Estimate
  async clickOnTheButtonAddToEstimate() {
    this.selectElement(this.buttonAdd);
  }

  // 8. Выбрать пункт EMAIL ESTIMATE
  async clickOnButtonEmailEstimate() {
    this.selectElement(this.buttonEmailEstimate);
  }

  // 9. В новой вкладке открыть https://yopmail.com/ или аналогичный сервис для генерации временных email'ов
  async openNewTab() {
    super.openNewTab();
  }

  async openNewURL() {
    this.openURL(this.url_2);
  }

  // 10. Скопировать почтовый адрес сгенерированный в yopmail.com
  async createNewMail() {
    super.createNewMail();
  }

  async copyMail() {
    super.copyMail();
  }

  // 11. Вернуться в калькулятор, в поле Email ввести адрес из предыдущего пункта
  async changeTabToprevious() {
    super.changeTabToprevious();
  }

  async selectInputFieldForMail() {
    this.selectElement(this.fieldForMail);
  }

  async inputMail() {
    super.inputText();
  }

  // 12. Нажать SEND EMAIL
  async clickOnButtonSendEmail() {
    this.selectElement(this.buttonSendEmail);
  }

  // 13. Дождаться письма с рассчетом стоимости и проверить что Total Estimated Monthly Cost в письме совпадает с тем,
  // что отображается в калькуляторе
  async changeTabToNext() {
    super.changeTabToNext();
  }

  async clickButtonForCheckMail() {
    super.clickButtonForCheckMail();
  }
}

module.exports = new CalculatorInteraction();
