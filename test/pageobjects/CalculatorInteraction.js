const BaseInteraction = require('./BaseInteraction');

class CalculatorInteraction extends BaseInteraction {
  constructor() {
    super();

    this.url = 'https://cloud.google.com/';

    this.searchButton = '[name="q"]';

    this.searchResult = '//b[text()="Google Cloud Pricing Calculator"]';

    this.typeOFCalculator =
      "//md-tab-item[@class='md-tab ng-scope ng-isolate-scope md-ink-ripple md-active']/child::div[@title='Compute Engine']";

    this.numberOfInstances = '#input_80';

    this.instances = '#input_81';

    this.operatingSystemDropDown = '#select_value_label_72';
    this.operatingSystem = "//md-option[@id='select_option_82']//child::div";

    this.vmClassDropDown = '#select_value_label_73';
    this.vmClass = "//md-option[@id='select_option_95']/child::div";

    this.seriesDropDown = '//md-select-value[@id="select_value_label_75"]';
    this.typeOfSeries =
      '//md-option[@id="select_option_220"]/child::div[@class="md-text ng-binding"]';

    this.machineTypeDropDown = '//*[@id="select_value_label_76"]';
    this.machineType =
      '//*[@id="select_option_423"]/child::div[@class="md-text ng-binding"]';

    this.checkBoxAddGpus =
      "//*[@aria-label='Add GPUs']/child::div[@class='md-label']";
    this.gpuTypeDropDown = '#select_456';
    this.gpuType = "//*[@id='select_option_463']/child::div";
    this.numberOfGpusDropDown = '#select_value_label_455';
    this.numberOfGpus =
      "//md-option[@id='select_option_467']/child::div[@class='md-text ng-binding']";

    this.localSsdDropDown = '#select_value_label_417';
    this.localSsd = "//md-option[@id='select_option_444']/child::div";

    this.datacenterLocationDropDown = '#select_value_label_78';
    this.datacenterLocation = "//md-option[@id='select_option_241']/child::div";

    this.commitedUsageDropDown = '#select_value_label_79';
    this.commitedUsage = "//md-option[@id='select_option_118']/child::div";

    this.buttonAddToEstimate =
      "//div[@class='layout-align-end-start layout-row']/child::button[@aria-label='Add to Estimate']";

    this.checkFieldVMClass =
      "//md-list-item[@ng-if='item.items.editHook && item.items.editHook.initialInputs.class']/child::div[@class='md-list-item-text ng-binding']";

    this.buttonEmailEstimate = "//button[@id='email_quote']";

    this.yopmail = 'https://yopmail.com/';

    this.generatorEmail =
      "//div[@id='listeliens']/child::a[@href='email-generator']";
    this.fieldWithEmail = '#egen';
    this.copyNewEmail = '#cprnd';
    this.titleOfCalculator = 'Google Cloud Pricing Calculator';
    this.inputForEmail =
      "//md-input-container[@class='flex md-input-invalid']/child::input[@id='input_542']";

    this.buttonSendEmail = '//button[@aria-label="Send Email"]';

    this.urlYopMail = 'https://yopmail.com/ru/email-generator';
    this.buttonCheckEmail = "//button[@onclick='egengo();']";
    this.choosePost = "//div[@class='mctn']/div[@class='m']"; // //div[@class='mctn']/div[2]
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
    await this.waitForLoadingExtraElemenOfDOM(this.typeOFCalculator);
    await this.clickElement(this.typeOFCalculator);
  }

  // 6. Заполнить форму следующими данными:
  //  * Number of instances: 4
  async setNumberOfInstances(text) {
    await this.inputTextIntoElement(this.numberOfInstances, text);
  }

  // * What are these instances for?: оставить пустым
  async clearInstancesField() {
    await this.clearElement(this.instances);
  }

  //  * Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS
  async setOperatingSystem() {
    await this.waitForLoadingExtraElemenOfDOM(this.operatingSystemDropDown);
    await this.clickElement(this.operatingSystemDropDown);
    await this.waitForLoadingExtraElemenOfDOM(this.operatingSystem);
    await this.clickElement(this.operatingSystem);
  }

  //  * VM Class: Regular
  async setVMClass() {
    await this.waitForLoadingExtraElemenOfDOM(this.vmClassDropDown);
    await this.clickElement(this.vmClassDropDown);
    await this.waitForLoadingExtraElemenOfDOM(this.vmClass);
    await this.clickElement(this.vmClass);
  }

  // set series
  async setSeries() {
    await this.waitForLoadingExtraElemenOfDOM(this.seriesDropDown);
    await this.clickElement(this.seriesDropDown);
    await this.waitForLoadingExtraElemenOfDOM(this.typeOfSeries);
    await this.clickElement(this.typeOfSeries);
  }

  // Instance type: n1-standard-8    (vCPUs: 8, RAM: 30 GB)
  async setInstancType() {
    await this.waitForLoadingExtraElemenOfDOM(this.machineTypeDropDown);
    await this.clickElement(this.machineTypeDropDown);
    await this.waitForLoadingExtraElemenOfDOM(this.machineType);
    await this.clickElement(this.machineType);
  }

  //Выбрать Add GPUs
  // * Number of GPUs: 1
  // * GPU type: NVIDIA Tesla V100
  async setGPUs() {
    await this.waitForLoadingExtraElemenOfDOM(this.checkBoxAddGpus);
    await this.clickElement(this.checkBoxAddGpus);
    await this.waitForLoadingExtraElemenOfDOM(this.gpuTypeDropDown);
    await this.clickElement(this.gpuTypeDropDown);
    await this.waitForLoadingExtraElemenOfDOM(this.gpuType);
    await this.clickElement(this.gpuType);
    await this.waitForLoadingExtraElemenOfDOM(this.numberOfGpusDropDown);
    await this.clickElement(this.numberOfGpusDropDown);
    await this.waitForLoadingExtraElemenOfDOM(this.numberOfGpus);
    await this.clickElement(this.numberOfGpus);
  }

  // Local SSD: 2x375 Gb
  async setSSD() {
    await this.waitForLoadingExtraElemenOfDOM(this.localSsdDropDown);
    await this.clickElement(this.localSsdDropDown);
    await this.waitForLoadingExtraElemenOfDOM(this.localSsd);
    await this.clickElement(this.localSsd);
  }

  // Datacenter location: Frankfurt (europe-west3)
  async setDatacenterLocation() {
    await this.waitForLoadingExtraElemenOfDOM(this.datacenterLocationDropDown);
    await this.clickElement(this.datacenterLocationDropDown);
    await this.waitForLoadingExtraElemenOfDOM(this.datacenterLocation);
    await this.clickElement(this.datacenterLocation);
  }

  // Commited usage: 1 Year
  async setCommitedUsage() {
    await this.waitForLoadingExtraElemenOfDOM(this.commitedUsageDropDown);
    await this.clickElement(this.commitedUsageDropDown);
    await this.waitForLoadingExtraElemenOfDOM(this.commitedUsage);
    await this.clickElement(this.commitedUsage);
  }

  // 7. Нажать Add to Estimate
  async clickButtonAddToEstimate() {
    await this.waitForLoadingExtraElemenOfDOM(this.buttonAddToEstimate);
    await this.clickElement(this.buttonAddToEstimate);
  }

  // 8. Выбрать пункт EMAIL ESTIMATE
  async clickButtonEmailEstimate() {
    await this.waitForLoadingExtraElemenOfDOM(this.buttonEmailEstimate);
    await this.clickElement(this.buttonEmailEstimate);
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

  async pasteNewEmail() {
    await this.waitForLoadingExtraElemenOfDOM(this.inputForEmail);
    await this.clickElement(this.inputForEmail);
    await this.pasteText();
  }

  // 12. Нажать SEND EMAIL
  async clickButtonSendEmail() {
    await this.waitForLoadingExtraElemenOfDOM(this.buttonSendEmail);
    await this.clickElement(this.buttonSendEmail);
  }

  // 13. Дождаться письма с рассчетом стоимости и проверить что Total Estimated Monthly Cost в письме совпадает с тем,
  // что отображается в калькуляторе
  async returnToYopmail() {
    await this.switchWindown(this.urlYopMail);
  }

  async checkPost() {
    await this.waitForLoadingExtraElemenOfDOM(this.buttonCheckEmail);
    await this.clickElement(this.buttonCheckEmail);
    await this.waitForLoadingExtraElemenOfDOM(this.choosePost);
    await this.clickElement(this.choosePost);
  }
}

module.exports = new CalculatorInteraction();
