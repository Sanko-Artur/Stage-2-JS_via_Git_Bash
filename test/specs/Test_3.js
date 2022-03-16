const calculator = require('../pageobjects/CalculatorInteraction.js');

describe('Test for task "Hurt Me Plenty"', function () {
  const textSearchRequest = 'Google Cloud Platform Pricing Calculator';

  const textForInstaces = '4';

  const checkFieldVMClass =
    "//div[normalize-space(text()) = 'VM class: regular']";
  const vmClass = 'VM class: regular';

  const checkFieldInstanceType =
    "//div[normalize-space(text()) = 'Instance type: n1-standard-8']";
  const instanceType = 'Instance type: n1-standard-8';

  const checkFieldRegion =
    "//div[normalize-space(text()) = 'Region: Frankfurt']";
  const region = 'Region: Frankfurt';

  const checkFieldVLocalSSD =
    "//div[normalize-space(text()) = 'Local SSD: 2x375 GiB']";
  const localSSD = 'Local SSD: 2x375 GiB';

  const checkFieldCommitmentTerm =
    "//div[normalize-space(text()) = 'Commitment term: 1 Year']";
  const commitmentTerm = 'Commitment term: 1 Year';

  const checkFieldTotalEstimatedCostPerMonth =
    "//h2[@class='md-title']/child::b[@class='ng-binding']";
  const totalEstimatedCostPerMonth =
    'Total Estimated Cost: USD 1,082.77 per 1 month';

  it('have to "1. Открыть https://cloud.google.com/"', async function () {
    await calculator.openURL();
  });

  it('have to "2.2. Ввести в поле поиска"Google Cloud Platform Pricing Calculator"', async function () {
    await calculator.setSearchItem(textSearchRequest);
  });

  it('have to "3. Запустить поиск, нажав кнопку поиска."', async function () {
    await calculator.startSearching();
  });

  it('have to "4. В результатах поиска кликнуть "Google Cloud Platform Pricing Calculator" и перейти на страницу калькулятора."', async function () {
    await calculator.chooseSearchResult();
  });

  it('have to "switch the frame first"', async function () {
    await calculator.switchFrame();
    await browser.pause(2000);
  });

  it('have to "switch the frame second"', async function () {
    await calculator.switchFrame();
    await browser.pause(2000);
  });

  it('have to "5. Активировать раздел COMPUTE ENGINE вверху страницы"', async function () {
    await calculator.chooseTypeOfCalculator();
    await browser.pause(2000);
  });

  it('have to "6. Заполнить форму следующими данными: * Number of instances: 4"', async function () {
    await calculator.setNumberOfInstances(textForInstaces);
    await browser.pause(2000);
  });

  it('have to "6. Заполнить форму следующими данными: * What are these instances for?: оставить пустым"', async function () {
    await calculator.clearInstancesField();
    await browser.pause(2000);
  });

  it('have to "6. Заполнить форму следующими данными: * Operating System / Software: Free:"', async function () {
    await calculator.setOperatingSystem();
    await browser.pause(2000);
  });

  it('have to "6. Заполнить форму следующими данными: * VM Class: Regular"', async function () {
    await calculator.setVMClass();
    await browser.pause(2000);
  });

  it('have to "6. Заполнить форму следующими данными: setSeries N1"', async function () {
    await calculator.setSeries();
    await browser.pause(2000);
  });

  it('have to "6. Заполнить форму следующими данными: * Instance type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)"', async function () {
    await calculator.setInstancType();
    await browser.pause(2000);
  });

  it('have to "6. Заполнить форму следующими данными: setGPUs"', async function () {
    await calculator.setGPUs();
    await browser.pause(2000);
  });

  it('have to "6. Заполнить форму следующими данными: Local SSD: 2x375 Gb"', async function () {
    await calculator.setSSD();
    await browser.pause(2000);
  });

  it('have to "6. Заполнить форму следующими данными: Datacenter location: Frankfurt (europe-west3)"', async function () {
    await calculator.setDatacenterLocation();
    await browser.pause(2000);
  });

  it('have to "6. Заполнить форму следующими данными: Commited usage: 1 Year"', async function () {
    await calculator.setCommitedUsage();
    await browser.pause(2000);
  });

  it('have to "7. Нажать Add to Estimate"', async function () {
    await calculator.clickButtonAddToEstimate();
    await browser.pause(2000);
  });

  it('8. Проверить соответствие данных следующих полей: "* VM Class: Regular"', async function () {
    await browser.pause(2000);
    const elem = $(checkFieldVMClass);
    await expect(elem).toHaveTextContaining(vmClass);
  });

  it('8. Проверить соответствие данных следующих полей: "* Instance type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)"', async function () {
    await browser.pause(2000);
    const elem = $(checkFieldInstanceType);
    await expect(elem).toHaveTextContaining(instanceType);
  });

  it('8. Проверить соответствие данных следующих полей: "* Datacenter location: Frankfurt (europe-west3)"', async function () {
    await browser.pause(2000);
    const elem = $(checkFieldRegion);
    await expect(elem).toHaveTextContaining(region);
  });

  it('8. Проверить соответствие данных следующих полей: "* Local SSD: 2x375 Gb"', async function () {
    await browser.pause(2000);
    const elem = $(checkFieldVLocalSSD);
    await expect(elem).toHaveTextContaining(localSSD);
  });

  it('8. Проверить соответствие данных следующих полей: "* Commited usage: 1 Year"', async function () {
    await browser.pause(2000);
    const elem = $(checkFieldCommitmentTerm);
    await expect(elem).toHaveTextContaining(commitmentTerm);
  });

  it('9. Проверить что сумма аренды в месяц совпадает с суммой получаемой при ручном прохождении теста.', async function () {
    await browser.pause(2000);
    const elem = $(checkFieldTotalEstimatedCostPerMonth);
    await expect(elem).toHaveTextContaining(totalEstimatedCostPerMonth);
  });
});

// npx wdio run ./wdio.conf.js
