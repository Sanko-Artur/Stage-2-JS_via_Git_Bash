const calculator = require('../pageobjects/CalculatorInteraction.js');
const yopmail = require('../pageobjects/YopmailInteraction.js');

describe('Test for task "Hardcore"', function () {
  const textSearchRequest = 'Google Cloud Platform Pricing Calculator';

  const textForInstaces = '4';

  let email;
  let googleCloudTabHandle;
  let yopmailTabHandle;

  const totalEstimatedInPost = 'USD 1,082.77';

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

  it('have to "13.2. Проверить что Total Estimated Monthly Cost в письме совпадает с тем, что отображается в калькуляторе"', async function () {
    await expect(await yopmail.getTextFromPost()).toHaveTextContaining(
      totalEstimatedInPost
    );
  });
});

// npx wdio run ./wdio.conf.js
