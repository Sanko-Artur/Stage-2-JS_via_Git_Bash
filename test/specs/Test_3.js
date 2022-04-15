const calculator = require('../pageobjects/CalculatorInteraction.js');

describe('Test for task "Hurt Me Plenty"', function () {
  const textSearchRequest = 'Google Cloud Platform Pricing Calculator';

  const textForInstaces = '4';

  const vmClass = 'VM class: regular';
  const instanceType = 'Instance type: n1-standard-8';
  const region = 'Region: Frankfurt';
  const localSSD = 'Local SSD: 2x375 GiB';
  const commitmentTerm = 'Commitment term: 1 Year';
  const totalEstimatedCostPerMonth =
    'Total Estimated Cost: USD 1,082.77 per 1 month';

  before(async function () {
    await calculator.openURL();
    await calculator.setSearchItem(textSearchRequest);
    await calculator.startSearching();
    await calculator.chooseSearchResult();
    await calculator.switchFrame();
    await calculator.switchFrame();
    await calculator.chooseTypeOfCalculator();
    await calculator.setNumberOfInstances(textForInstaces);
    await calculator.clearInstancesField();
    await calculator.setOperatingSystem();
    await calculator.setVMClass();
    await calculator.setSeries();
    await calculator.setInstancType();
    await calculator.setGPUs();
    await calculator.setSSD();
    await calculator.setDatacenterLocation();
    await calculator.setCommitedUsage();
    await calculator.clickButtonAddToEstimate();
  });

  it('8. Проверить соответствие данных следующих полей: "* VM Class: Regular"', async function () {
    await expect(
      await calculator.getTextFromFieldVMClass()
    ).toHaveTextContaining(vmClass);
  });

  it('8. Проверить соответствие данных следующих полей: "* Instance type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)"', async function () {
    await expect(
      await calculator.getTextFromFieldInstanceType()
    ).toHaveTextContaining(instanceType);
  });

  it('8. Проверить соответствие данных следующих полей: "* Datacenter location: Frankfurt (europe-west3)"', async function () {
    await expect(
      await calculator.getTextFromFieldRegion()
    ).toHaveTextContaining(region);
  });

  it('8. Проверить соответствие данных следующих полей: "* Local SSD: 2x375 Gb"', async function () {
    await expect(
      await calculator.getTextFromFieldVLocalSSD()
    ).toHaveTextContaining(localSSD);
  });

  it('8. Проверить соответствие данных следующих полей: "* Commited usage: 1 Year"', async function () {
    await expect(
      await calculator.getTextFromFieldCommitmentTerm()
    ).toHaveTextContaining(commitmentTerm);
  });

  it('9. Проверить что сумма аренды в месяц совпадает с суммой получаемой при ручном прохождении теста.', async function () {
    await expect(
      await calculator.getTextFromFieldTotalEstimatedCostPerMonth()
    ).toHaveTextContaining(totalEstimatedCostPerMonth);
  });
});

// npx wdio run ./wdio.conf.js
