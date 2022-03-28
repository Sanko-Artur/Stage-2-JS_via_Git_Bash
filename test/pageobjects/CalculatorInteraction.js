const BaseInteraction = require('./BaseInteraction');

class CalculatorInteraction extends BaseInteraction {
  constructor() {
    super();

    this.url = 'https://cloud.google.com/';

    this.searchButton = '[name="q"]';

    this.searchResult = '//b[text()="Google Cloud Pricing Calculator"]';

    this.typeOFCalculator =
      "//md-tab-item[@class='md-tab ng-scope ng-isolate-scope md-ink-ripple md-active']/child::div[@title='Compute Engine']";

    this.numberOfInstances = '#input_81';

    this.instances = '#input_82';

    this.operatingSystemDropDown = '#select_value_label_73';
    this.operatingSystem = "//md-option[@id='select_option_83']//child::div";

    this.vmClassDropDown = '#select_value_label_74';
    this.vmClass = "//md-option[@id='select_option_96']/child::div";

    this.seriesDropDown = '//md-select-value[@id="select_value_label_76"]';
    this.typeOfSeries =
      '//md-option[@id="select_option_221"]/child::div[@class="md-text ng-binding"]';

    this.machineTypeDropDown = '//*[@id="select_value_label_77"]';
    this.machineType =
      '//*[@id="select_option_424"]/child::div[@class="md-text ng-binding"]';

    this.checkBoxAddGpus =
      "//*[@aria-label='Add GPUs']/child::div[@class='md-label']";
    this.gpuTypeDropDown = '#select_457';
    this.gpuType = "//*[@id='select_option_464']/child::div";
    this.numberOfGpusDropDown = '#select_value_label_456';
    this.numberOfGpus =
      "//md-option[@id='select_option_468']/child::div[@class='md-text ng-binding']";

    this.localSsdDropDown = '#select_value_label_418';
    this.localSsd = "//md-option[@id='select_option_445']/child::div";

    this.datacenterLocationDropDown = '#select_value_label_79';
    this.datacenterLocation = "//md-option[@id='select_option_242']/child::div";

    this.commitedUsageDropDown = '#select_value_label_80';
    this.commitedUsage = "//md-option[@id='select_option_119']/child::div";

    this.buttonAddToEstimate =
      "//div[@class='layout-align-end-start layout-row']/child::button[@aria-label='Add to Estimate']";

    // this.checkFieldVMClass =
    //   "//md-list-item[@ng-if='item.items.editHook && item.items.editHook.initialInputs.class']/child::div[@class='md-list-item-text ng-binding']";

    this.buttonEmailEstimate = "//button[@id='email_quote']";

    this.inputForEmail = '//input[@type="email"]';

    this.buttonSendEmail = '//button[@aria-label="Send Email"]';

    this.urlYopMail = 'https://yopmail.com/ru/email-generator';
  }
  // 1. Открыть https://cloud.google.com/
  async openURL() {
    await super.openURL(this.url);
  }

  // 2. Нажав кнопку поиска по порталу вверху страницы, ввести в поле поиска"Google Cloud Platform Pricing Calculator"
  async setSearchItem(text) {
    await this.inputTextIntoElement(this.searchButton, text);
  }

  // 3. Запустить поиск, нажав кнопку поиска.
  async startSearching() {
    await this.pressEnter();
  }

  // 4. В результатах поиска кликнуть "Google Cloud Platform Pricing Calculator" и перейти на страницу калькулятора.
  async chooseSearchResult() {
    await this.clickElement(this.searchResult);
  }

  async switchFrame() {
    await super.switchFrame();
  }

  // 5. Активировать раздел COMPUTE ENGINE вверху страницы
  async chooseTypeOfCalculator() {
    await this.waitForLoadingAnElemen(this.typeOFCalculator);
    await this.clickElement(this.typeOFCalculator);
  }

  // 6. Заполнить форму следующими данными:
  //  * Number of instances: 4
  async setNumberOfInstances(text) {
    await this.waitForLoadingAnElemen(this.numberOfInstances);
    await this.inputTextIntoElement(this.numberOfInstances, text);
  }

  // * What are these instances for?: оставить пустым
  async clearInstancesField() {
    await this.waitForLoadingAnElemen(this.instances);
    await this.clearElement(this.instances);
  }

  //  * Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS
  async setOperatingSystem() {
    await this.waitForLoadingAnElemen(this.operatingSystemDropDown);
    await this.clickElement(this.operatingSystemDropDown);
    await this.waitForLoadingAnElemen(this.operatingSystem);
    await this.clickElement(this.operatingSystem);
  }

  //  * VM Class: Regular
  async setVMClass() {
    await this.waitForLoadingAnElemen(this.vmClassDropDown);
    await this.clickElement(this.vmClassDropDown);
    await this.waitForLoadingAnElemen(this.vmClass);
    await this.clickElement(this.vmClass);
  }

  // set series
  async setSeries() {
    await this.waitForLoadingAnElemen(this.seriesDropDown);
    await this.clickElement(this.seriesDropDown);
    await this.waitForLoadingAnElemen(this.typeOfSeries);
    await this.clickElement(this.typeOfSeries);
  }

  // Instance type: n1-standard-8    (vCPUs: 8, RAM: 30 GB)
  async setInstancType() {
    await this.waitForLoadingAnElemen(this.machineTypeDropDown);
    await this.clickElement(this.machineTypeDropDown);
    await this.waitForLoadingAnElemen(this.machineType);
    await this.clickElement(this.machineType);
  }

  //Выбрать Add GPUs
  // * Number of GPUs: 1
  // * GPU type: NVIDIA Tesla V100
  async setGPUs() {
    await this.waitForLoadingAnElemen(this.checkBoxAddGpus);
    await this.clickElement(this.checkBoxAddGpus);
    await this.waitForLoadingAnElemen(this.gpuTypeDropDown);
    await this.clickElement(this.gpuTypeDropDown);
    await this.waitForLoadingAnElemen(this.gpuType);
    await this.clickElement(this.gpuType);
    await this.waitForLoadingAnElemen(this.numberOfGpusDropDown);
    await this.clickElement(this.numberOfGpusDropDown);
    await this.waitForLoadingAnElemen(this.numberOfGpus);
    await this.clickElement(this.numberOfGpus);
  }

  // Local SSD: 2x375 Gb
  async setSSD() {
    await this.waitForLoadingAnElemen(this.localSsdDropDown);
    await this.clickElement(this.localSsdDropDown);
    await this.waitForLoadingAnElemen(this.localSsd);
    await this.clickElement(this.localSsd);
  }

  // Datacenter location: Frankfurt (europe-west3)
  async setDatacenterLocation() {
    await this.waitForLoadingAnElemen(this.datacenterLocationDropDown);
    await this.clickElement(this.datacenterLocationDropDown);
    await this.waitForLoadingAnElemen(this.datacenterLocation);
    await this.clickElement(this.datacenterLocation);
  }

  // Commited usage: 1 Year
  async setCommitedUsage() {
    await this.waitForLoadingAnElemen(this.commitedUsageDropDown);
    await this.clickElement(this.commitedUsageDropDown);
    await this.waitForLoadingAnElemen(this.commitedUsage);
    await this.clickElement(this.commitedUsage);
  }

  // 7. Нажать Add to Estimate
  async clickButtonAddToEstimate() {
    await this.waitForLoadingAnElemen(this.buttonAddToEstimate);
    await this.clickElement(this.buttonAddToEstimate);
  }

  // 8. Выбрать пункт EMAIL ESTIMATE
  async clickButtonEmailEstimate() {
    await this.waitForLoadingAnElemen(this.buttonEmailEstimate);
    await this.clickElement(this.buttonEmailEstimate);
  }

  // 11. Вернуться в калькулятор, в поле Email ввести адрес из предыдущего пункта
  async pasteNewEmail() {
    await this.waitForLoadingAnElemen(this.inputForEmail);
    await this.pasteText(this.inputForEmail);
  }

  // 12. Нажать SEND EMAIL
  async clickButtonSendEmail() {
    await this.waitForLoadingAnElemen(this.buttonSendEmail);
    await this.clickElement(this.buttonSendEmail);
  }

  // 13. Дождаться письма с рассчетом стоимости и проверить что Total Estimated Monthly Cost в письме совпадает с тем,
  // что отображается в калькуляторе
  async returnToYopmail() {
    await this.switchWindown(this.urlYopMail);
  }
}

module.exports = new CalculatorInteraction();
