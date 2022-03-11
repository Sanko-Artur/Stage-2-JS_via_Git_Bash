const calculator = require('../pageobjects/CalculatorInteraction.js');

describe('Test for task "Hurt Me Plenty"', function () {
  const textSearchRequest = 'Google Cloud Platform Pricing Calculator';

  const textForInstaces_a = '4';
  // const contentForInstaces_b = '[class="ng-binding ng-scope"]'; //document.querySelector('[class="ng-binding ng-scope"]').textContent;

  // const typeOfCalcolator_a = By.xpath('//span[text()="Compute Engine"]');
  // const typeOfCalcolator_b = 'Compute Engine';

  // const operatingSystemb_a = '[class="md-list-item-text flex"]'; //document.querySelector('[class="md-list-item-text flex"]').textContent;
  // const operatingSystemb_b = 'Operating System / Software: Free';

  // const vmClass_a = By.xpath('//div[text()="VM class: regular"]'); //[class="md-list-item-text ng-binding"][4]
  // const vmClass_b = 'VM class: regular';

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

  // для каждого it нужно ли предоставлять доступ к frame
  // before(async function () {
  //   await calculator.openURL();
  //   await calculator.setSearchItem(textSearchRequest);
  //   await calculator.startSearching();
  //   await calculator.chooseSearchResult();
  //   await calculator.switchFrame();
  //   await calculator.chooseTypeOfCalculator();
  //   await calculator.setNumberOfInstances(textForInstaces_a);
  //   await calculator.setSeries();
  //   await calculator.setInstancType();
  //   await calculator.setGPUs();
  //   await calculator.setSSD();
  //   await calculator.setDatacenterLocation();
  //   await calculator.setCommitedUsage();
  //   await calculator.clickButtonAddToEstimate();
  // });

  // 8. Проверить соответствие данных следующих полей: VM Class, Instance type, Region, local SSD, commitment term
  // 9. Проверить что сумма аренды в месяц совпадает с суммой получаемой при ручном прохождении теста.

  it('have to "1. Открыть https://cloud.google.com/"', async function () {
    await calculator.openURL();
    await browser.pause(3000);
  });

  // it('have to "2.1. Нажав кнопку поиска по порталу вверху страницы"', async function () {
  //   await calculator.сlickSearchField(textSearchRequest);
  // });

  it('have to "2.2. Ввести в поле поиска"Google Cloud Platform Pricing Calculator"', async function () {
    await calculator.setSearchItem(textSearchRequest);
    await browser.pause(3000);
  });

  it('have to "3. Запустить поиск, нажав кнопку поиска."', async function () {
    await calculator.startSearching();
    await browser.pause(3000);
  });

  it('have to "4. В результатах поиска кликнуть "Google Cloud Platform Pricing Calculator" и перейти на страницу калькулятора."', async function () {
    await calculator.chooseSearchResult();
    await browser.pause(5000);
  });

  it('have to "switch the frame"', async function () {
    await calculator.switchFrame();
    await browser.pause(5000);
  });

  it('have to "6. Заполнить форму следующими данными: * Number of instances: 4"', async function () {
    await calculator.setNumberOfInstances(textForInstaces_a);
    await browser.pause(5000);
  });

  // it('type of calcolator should be "Compute Engine"', async function () {
  //   expect(calculator.getTextFromElement()).to.be.equal(typeOfCalcolator_b);
  // });

  // it('"Number of instances" should contain "4"', async function () {
  //   expect(calculator.getTextFromElement(contentForInstaces_b)).to.be.equal(
  //     textForInstaces_a
  //   );
  // });

  // it('"Operating System / Software" should contain "Free"', async function () {
  //   expect(calculator.getTextFromElement(operatingSystemb_a)).to.be.equal(
  //     operatingSystemb_b
  //   );
  // });

  // it('"VM Class" should contain "Regular"', async function () {
  //   expect(calculator.getTextFromElement(vmClass_a)).to.be.equal(vmClass_b);
  // });

  // it('"Instance type" should contain "n1-standard-8"', async function () {
  //   expect(calculator.getTextFromElement(instanceType_a)).to.be.equal(
  //     instanceType_b
  //   );
  // });

  // it('"GPU dies" should contain "1 NVIDIA Tesla V100"', async function () {
  //   expect(calculator.getTextFromElement(gpu_a)).to.be.equal(gpu_b);
  // });

  // it('"Local SSD" should contain "2x375 GiB"', async function () {
  //   expect(calculator.getTextFromElement(localSSD_a)).to.be.equal(localSSD_b);
  // });

  // it('"Region" should contain "Frankfurt"', async function () {
  //   expect(g).to.be.equal(g_1);
  // });

  // it('"Commited usage" should contain "1 Year"', async function () {
  //   expect(h).to.be.equal(h_1);
  // });

  // it('"Total Estimated Cost" should equal "sumOfRentByHand"', async function () {
  //   expect(sumOfRentAuto).to.be.equal(sumOfRentByHand);
  // });

  // after(async function () {
  //   await calculator.close();
  // });
});

// npx wdio run ./wdio.conf.js
