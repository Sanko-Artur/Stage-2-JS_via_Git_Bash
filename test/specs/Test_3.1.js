const calculator = require('../pageobjects/CalculatorInteraction.js');

describe('Test for task "Hurt Me Plenty"', function () {
  const textSearchRequest = 'Google Cloud Platform Pricing Calculator';

  const textForInstaces_a = '4';
  // const contentForInstaces_b = '[class="ng-binding ng-scope"]'; //document.querySelector('[class="ng-binding ng-scope"]').textContent;

  // const typeOfCalcolator_a = By.xpath('//span[text()="Compute Engine"]');
  // const typeOfCalcolator_b = 'Compute Engine';

  // const operatingSystemb_a = '[class="md-list-item-text flex"]'; //document.querySelector('[class="md-list-item-text flex"]').textContent;
  // const operatingSystemb_b = 'Operating System / Software: Free';

  const checkFieldVMClass =
    "//md-list-item[@ng-if='item.items.editHook && item.items.editHook.initialInputs.class']/child::div[@class='md-list-item-text ng-binding']";
  const vmClass = 'VM class: regular';

  // const instanceType_a = `[ng-class="item.items.sustainedUse || item.items.isInstanceCommitted ? 'cpc-cart-multiline' : ''"]`; //document.querySelector(`[ng-class="item.items.sustainedUse || item.items.isInstanceCommitted ? 'cpc-cart-multiline' : ''"]`).textContent;
  // const instanceType_b = 'Instance type: n1-standard-8';

  // const ? = By.xpath('//*[text()="Number of GPUs: 1"]');
  // const ?_1 = 'Number of GPUs: 1'
  // const ? = By.xpath('//*[text()="GPU type: NVIDIA Tesla V100"]');
  // const ?_1 = 'GPU type: NVIDIA Tesla V100'
  // const gpu_a = `[ng-class="item.items.sustainedUse || item.items.isGpuCommitted ? 'cpc-cart-multiline' : ''"]`; //document.querySelector(`[ng-class="item.items.sustainedUse || item.items.isGpuCommitted ? 'cpc-cart-multiline' : ''"]`).textContent;
  // const gpu_b = 'GPU dies: 1 NVIDIA Tesla V100';

  // const localSSD_a = `[ng-class="item.items.isSsdCommitted ? 'cpc-cart-multiline' : ''"]`; //document.querySelector(`[ng-class="item.items.isSsdCommitted ? 'cpc-cart-multiline' : ''"]`).textContent;
  // const localSSD_b = 'Local SSD: 2x375 GiB';

  // const region_a = By.xpath('//div[text()="Region: Frankfurt"]'); //[class="md-list-item-text ng-binding"][1]
  // const region_b = 'Region: Frankfurt';

  // const commitmentTerm_a = By.xpath('//div[text()="Commitment term: 1 Year"]'); //[class="md-list-item-text ng-binding"][3]
  // const commitmentTerm_b = 'Commitment term: 1 Year';

  // const sumOfRentAuto = By.xpath(
  //   '//h2[@class="md-title"]/child::b[@class="ng-binding"]'
  // ); //
  // const sumOfRentByHand = 'USD 2,277.05 per 1 month';
  // const calculator = new CalculatorInteraction();

  before(async function () {
    await calculator.openURL();
    await calculator.setSearchItem(textSearchRequest);
    await calculator.startSearching();
    await calculator.chooseSearchResult();
    await calculator.switchFrame();
    await browser.pause(2000);
    await calculator.switchFrame();
    await browser.pause(2000);
    await calculator.chooseTypeOfCalculator();
    await browser.pause(2000);
    await calculator.setNumberOfInstances(textForInstaces_a);
    await browser.pause(2000);
    await calculator.clearInstancesField();
    await browser.pause(2000);
    await calculator.setOperatingSystem();
    await browser.pause(2000);
    await calculator.setVMClass();
    await browser.pause(2000);
    await calculator.setSeries();
    await browser.pause(2000);
    await calculator.setInstancType();
    await browser.pause(2000);
    await calculator.setGPUs();
    await browser.pause(2000);
    await calculator.setSSD();
    await browser.pause(2000);
    await calculator.setDatacenterLocation();
    await browser.pause(2000);
    await calculator.setCommitedUsage();
    await browser.pause(2000);
    await calculator.clickButtonAddToEstimate();
    await browser.pause(2000);
  });

  it('Проверить соответствие данных следующих полей: "* VM Class: Regular"', async function () {
    await browser.pause(2000);
    const elem = $(checkFieldVMClass);
    await expect(elem).toHaveTextContaining(vmClass);
  });
});

// npx wdio run ./wdio.conf.js
