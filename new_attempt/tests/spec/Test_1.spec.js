const pastebin = require('../../pageObjects/PastebinInteraction');

describe('Test for task "I Can Win"', function () {
  const textNewPaste = 'Hello from WebDriver';
  const textPasteName = 'helloweb';

  // const pastebin = new PastebinInteraction();

  it('have to fill few string by some value and save it', async function () {
    await pastebin.openURL();
    await pastebin.inputNewPaste(textNewPaste);
    await pastebin.selectPasteExpiration();
    await pastebin.inputPasteName(textPasteName);
    await pastebin.clickButton();
  });

  after(async function () {
    await pastebin.close();
  });
});

// npm test
