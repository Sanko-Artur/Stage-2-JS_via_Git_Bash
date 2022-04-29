const pastebin = require('../pageobjects/PastebinInteraction');

describe('Test for task "I Can Win"', function () {
  const textNewPaste = 'Hello from WebDriver';
  const textPasteName = 'helloweb';

  it('have to "Open https://pastebin.com in any browser"', async function () {
    await pastebin.openURL();
  });

  it('have to "Create New Paste with following data: Hello from WebDriver"', async function () {
    await pastebin.inputNewPaste(textNewPaste);
  });

  it('have to "Create New Paste Expiration with following data: 10 Minutes"', async function () {
    await pastebin.setPasteExpiration();
  });

  it('have to "Create New Paste Name / Title with following data: helloweb"', async function () {
    await pastebin.inputPasteName(textPasteName);
  });
});

// npx wdio run ./wdio.conf.js
