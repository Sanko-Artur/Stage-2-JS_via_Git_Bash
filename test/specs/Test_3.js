const calculator = require('../pageobjects/CalculatorInteraction.js');
const calculatorModel = require('../models/calculator.js');

describe('Test for task "Hurt Me Plenty"', function () {
  before(async function () {
    await calculator.openURL();
    await calculator.setSearchItem(calculatorModel.textSearchRequest);
    await calculator.startSearching();
    await calculator.chooseSearchResult();
    await calculator.switchFrame();
    await calculator.switchFrame();
    await calculator.chooseTypeOfCalculator();
    await calculator.setNumberOfInstances(calculatorModel.textForInstaces);
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

  it('8. Field VM Class should display: Regular', async function () {
    await expect(
      await calculator.getTextFromFieldVMClass()
    ).toHaveTextContaining(calculatorModel.vmClass);
  });

  it('8. Field Instance type should display: n1-standard-8 (vCPUs: 8, RAM: 30 GB)', async function () {
    await expect(
      await calculator.getTextFromFieldInstanceType()
    ).toHaveTextContaining(calculatorModel.instanceType);
  });

  it('8. Field Datacenter location should display: Frankfurt (europe-west3)', async function () {
    await expect(
      await calculator.getTextFromFieldRegion()
    ).toHaveTextContaining(calculatorModel.region);
  });

  it('8. Field Local SSD should display: 2x375 Gb', async function () {
    await expect(
      await calculator.getTextFromFieldVLocalSSD()
    ).toHaveTextContaining(calculatorModel.localSSD);
  });

  it('8. Field Commited usage should display: 1 Year', async function () {
    await expect(
      await calculator.getTextFromFieldCommitmentTerm()
    ).toHaveTextContaining(calculatorModel.commitmentTerm);
  });

  it('9. Check that the rental amount per month is the same as the amount received by manually passing the test', async function () {
    await expect(
      await calculator.getTextFromFieldTotalEstimatedCostPerMonth()
    ).toHaveTextContaining(calculatorModel.totalEstimatedCostPerMonth);
  });
});

// npx wdio run ./wdio.conf.js
