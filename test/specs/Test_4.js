const calculator = require('../pageobjects/CalculatorInteraction.js');
const yopmail = require('../pageobjects/YopmailInteraction.js');
const calculatorModel = require('../models/calculator.js');

describe('Test for task "Hardcore"', function () {
  let email;
  let googleCloudTabHandle;
  let yopmailTabHandle;

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
    await calculator.clickButtonEmailEstimate();
    googleCloudTabHandle = await browser.getWindowHandle();
    await yopmail.openNewTab();
    await yopmail.setNewEmail();
    email = await yopmail.getEmail();
    yopmailTabHandle = await browser.getWindowHandle();
    await yopmail.returnToCalculator(googleCloudTabHandle);
    await calculator.switchFrame();
    await calculator.switchFrame();
    await calculator.pasteNewEmail(email);
    await calculator.clickButtonSendEmail();
    await browser.pause(2000);
    await calculator.returnToYopmail(yopmailTabHandle);
    await yopmail.clickButtonChechEmail();
    await yopmail.switchFrame();
    await yopmail.waitForDisplayPost();
  });

  it('13.2. Check that the Total Estimated Monthly Cost in the letter equally with  displayed in the calculator', async function () {
    await expect(await yopmail.getTextFromPost()).toHaveTextContaining(
      calculatorModel.totalEstimatedInPost
    );
  });
});

// npx wdio run ./wdio.conf.js
