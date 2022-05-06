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

// npx wdio run ./wdio.conf.js
// npx wdio run ./wdio.conf.js --suite otherTests
// npx wdio run ./wdio.conf.js --suite smokeTest

// npm install edgedriver --save-dev
// npm install geckodriver --save-dev
// npm install wdio-edgedriver-service --save-dev
// npm install wdio-geckodriver-service --save-dev