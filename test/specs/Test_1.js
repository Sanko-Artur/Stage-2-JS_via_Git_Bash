const pastebin = require('../pageobjects/PastebinInteraction.js');
const pastebinModel = require('../models/pastebin.js');

describe('Test for task "I Can Win"', function () {
  it('have to "Open https://pastebin.com in any browser"', async function () {
    await pastebin.openURL();
  });

  it('have to "Create New Paste with following data: Hello from WebDriver"', async function () {
    await pastebin.inputNewPaste(pastebinModel.textNewPasteTest1);
  });

  it('have to "Create New Paste Expiration with following data: 10 Minutes"', async function () {
    await pastebin.setPasteExpiration();
  });

  it('have to "Create New Paste Name / Title with following data: helloweb"', async function () {
    await pastebin.inputPasteName(pastebinModel.textPasteNameTest1);
  });
});

// npm install chromedriver --save-dev
// npm install wdio-chromedriver-service --save-dev
// npm install edgedriver --save-dev
// npm install wdio-edgedriver-service --save-dev
// npm i -D msedgedriver --edgechromiumdriver_version=101.0.1210.39
