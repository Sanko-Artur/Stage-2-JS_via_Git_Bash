const BaseInteraction = require('./BaseInteraction');

class CalculatorInteraction extends BaseInteraction {
  constructor() {
    super();

    this.url = 'https://cloud.google.com/';

    this.searchButton = '[name="q"]';

    this.searchResult = '//b[text()="Google Cloud Pricing Calculator"]';

    this.typeOFCalculator =
      "//md-tab-item[@class='md-tab ng-scope ng-isolate-scope md-ink-ripple md-active']/child::div";

    this.numberOfInstances = '#input_82';

    this.instances = '#input_83';

    this.operatingSystemDropDown = '#select_value_label_74';
    this.operatingSystem = "//md-option[@id='select_option_84']//child::div";

    this.vmClassDropDown = '#select_value_label_75';
    this.vmClass = "//md-option[@id='select_option_97']/child::div";

    this.seriesDropDown = '//md-select-value[@id="select_value_label_77"]';
    this.typeOfSeries =
      '//md-option[@id="select_option_222"]/child::div[@class="md-text ng-binding"]';

    this.machineTypeDropDown = '//*[@id="select_value_label_78"]';
    this.machineType =
      '//*[@id="select_option_431"]/child::div[@class="md-text ng-binding"]';

    this.checkBoxAddGpus =
      "//*[@aria-label='Add GPUs']/child::div[@class='md-label']";
    this.gpuTypeDropDown = '#select_464';
    this.gpuType = "//*[@id='select_option_471']/child::div";
    this.numberOfGpusDropDown = '#select_value_label_463';
    this.numberOfGpus =
      "//md-option[@id='select_option_475']/child::div[@class='md-text ng-binding']";

    this.localSsdDropDown = '#select_value_label_425';
    this.localSsd = "//md-option[@id='select_option_452']/child::div";

    this.datacenterLocationDropDown = '#select_value_label_80';
    this.datacenterLocation = "//md-option[@id='select_option_243']/child::div";

    this.commitedUsageDropDown = '#select_value_label_81';
    this.commitedUsage = "//md-option[@id='select_option_120']/child::div";

    this.buttonAddToEstimate =
      "//div[@class='layout-align-end-start layout-row']/child::button[starts-with(@ng-disabled, 'ComputeEngineForm')]";

    this.buttonEmailEstimate = "//button[@id='email_quote']";
    this.barEmailYourEstimate =
      "//md-toolbar[@class='cpc-toolbar md-default-theme']/child::h2[@class='md-toolbar-tools']";

    this.inputForEmail = '//input[@type="email"]';

    this.buttonSendEmail =
      '//button[starts-with(@ng-click, "emailQuote.emailQuote(true)")]';

    this.checkFieldVMClass =
      "//md-list[@class='cartitem ng-scope']/child::md-list-item[4]";
    this.checkFieldInstanceType =
      "//md-list[@class='cartitem ng-scope']/child::md-list-item[5]";
    this.checkFieldRegion =
      "//md-list[@class='cartitem ng-scope']/child::md-list-item[1]";
    this.checkFieldVLocalSSD =
      "//md-list-item[@class='md-1-line md-no-proxy ng-scope'][3]/child::div";
    this.checkFieldCommitmentTerm =
      "//md-list[@class='cartitem ng-scope']/child::md-list-item[3]";
    this.checkFieldTotalEstimatedCostPerMonth =
      "//h2[@class='md-title']/child::b[@class='ng-binding']";
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
    await this.waitForLoadingAnElement(this.typeOFCalculator);
    await this.clickElement(this.typeOFCalculator);
  }

  // 6. Заполнить форму следующими данными:
  //  * Number of instances: 4
  async setNumberOfInstances(text) {
    await this.waitForLoadingAnElement(this.numberOfInstances);
    await this.inputTextIntoElement(this.numberOfInstances, text);
  }

  // * What are these instances for?: оставить пустым
  async clearInstancesField() {
    await this.waitForLoadingAnElement(this.instances);
    await this.clearElement(this.instances);
  }

  //  * Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS
  async setOperatingSystem() {
    await this.waitForLoadingAnElement(this.operatingSystemDropDown);
    await this.clickElement(this.operatingSystemDropDown);
    await this.waitForLoadingAnElement(this.operatingSystem);
    await this.clickElement(this.operatingSystem);
  }

  //  * VM Class: Regular
  async setVMClass() {
    await this.waitForLoadingAnElement(this.vmClassDropDown);
    await this.clickElement(this.vmClassDropDown);
    await this.waitForLoadingAnElement(this.vmClass);
    await this.clickElement(this.vmClass);
  }

  // set series
  async setSeries() {
    await this.waitForLoadingAnElement(this.seriesDropDown);
    await this.clickElement(this.seriesDropDown);
    await this.waitForLoadingAnElement(this.typeOfSeries);
    await this.clickElement(this.typeOfSeries);
  }

  // Instance type: n1-standard-8    (vCPUs: 8, RAM: 30 GB)
  async setInstancType() {
    await this.waitForLoadingAnElement(this.machineTypeDropDown);
    await this.clickElement(this.machineTypeDropDown);
    await this.waitForLoadingAnElement(this.machineType);
    await this.clickElement(this.machineType);
  }

  //Выбрать Add GPUs
  // * Number of GPUs: 1
  // * GPU type: NVIDIA Tesla V100
  async setGPUs() {
    await this.waitForLoadingAnElement(this.checkBoxAddGpus);
    await this.clickElement(this.checkBoxAddGpus);
    await this.waitForLoadingAnElement(this.gpuTypeDropDown);
    await this.clickElement(this.gpuTypeDropDown);
    await this.waitForLoadingAnElement(this.gpuType);
    await this.clickElement(this.gpuType);
    await this.waitForLoadingAnElement(this.numberOfGpusDropDown);
    await this.clickElement(this.numberOfGpusDropDown);
    await this.waitForLoadingAnElement(this.numberOfGpus);
    await this.clickElement(this.numberOfGpus);
  }

  // Local SSD: 2x375 Gb
  async setSSD() {
    await this.waitForLoadingAnElement(this.localSsdDropDown);
    await this.clickElement(this.localSsdDropDown);
    await this.waitForLoadingAnElement(this.localSsd);
    await this.clickElement(this.localSsd);
  }

  // Datacenter location: Frankfurt (europe-west3)
  async setDatacenterLocation() {
    await this.waitForLoadingAnElement(this.datacenterLocationDropDown);
    await this.clickElement(this.datacenterLocationDropDown);
    await this.waitForLoadingAnElement(this.datacenterLocation);
    await this.clickElement(this.datacenterLocation);
  }

  // Commited usage: 1 Year
  async setCommitedUsage() {
    await this.waitForLoadingAnElement(this.commitedUsageDropDown);
    await this.clickElement(this.commitedUsageDropDown);
    await this.waitForLoadingAnElement(this.commitedUsage);
    await this.clickElement(this.commitedUsage);
  }

  // 7. Нажать Add to Estimate
  async clickButtonAddToEstimate() {
    await this.waitForLoadingAnElement(this.buttonAddToEstimate);
    await this.clickElement(this.buttonAddToEstimate);
  }

  // 8. Выбрать пункт EMAIL ESTIMATE
  async clickButtonEmailEstimate() {
    await this.waitForLoadingAnElement(this.buttonEmailEstimate);
    await this.clickElement(this.buttonEmailEstimate);
    await this.waitForLoadingAnElement(this.barEmailYourEstimate);
  }

  // 11. Вернуться в калькулятор, в поле Email ввести адрес из предыдущего пункта
  async pasteNewEmail(text) {
    await this.waitForLoadingAnElement(this.inputForEmail);
    await this.inputTextIntoElement(this.inputForEmail, text);
  }

  // 12. Нажать SEND EMAIL
  async clickButtonSendEmail() {
    await this.waitForLoadingAnElement(this.buttonSendEmail);
    await this.clickElement(this.buttonSendEmail);
    await this.waitForDisappearAnElement(this.buttonSendEmail);
  }

  // 13. Дождаться письма с рассчетом стоимости и проверить что Total Estimated Monthly Cost в письме совпадает с тем,
  // что отображается в калькуляторе
  async returnToYopmail(handle) {
    await this.switchWindow(handle);
  }

  async getTextFromFieldVMClass() {
    const elem = await $(this.checkFieldVMClass);
    return elem;
  }

  async getTextFromFieldInstanceType() {
    const elem = await $(this.checkFieldInstanceType);
    return elem;
  }

  async getTextFromFieldRegion() {
    const elem = await $(this.checkFieldRegion);
    return elem;
  }

  async getTextFromFieldVLocalSSD() {
    const elem = await $(this.checkFieldVLocalSSD);
    return elem;
  }

  async getTextFromFieldCommitmentTerm() {
    const elem = await $(this.checkFieldCommitmentTerm);
    return elem;
  }

  async getTextFromFieldTotalEstimatedCostPerMonth() {
    const elem = await $(this.checkFieldTotalEstimatedCostPerMonth);
    return elem;
  }
}

module.exports = new CalculatorInteraction();
