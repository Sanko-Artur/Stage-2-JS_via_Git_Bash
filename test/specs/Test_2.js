const pastebin = require('../pageobjects/PastebinInteraction.js');
const pastebinModel = require('../models/pastebin.js');


describe('Test for task "Bring It On"', function () {
    before(async function () {
    await pastebin.openURL();
    await pastebin.inputNewPaste(pastebinModel.textNewPasteTest2);
    await pastebin.setSyntaxHighlightning(pastebinModel.textHighlighting);
    await pastebin.setPasteExpiration();
    await pastebin.inputPasteName(pastebinModel.textPasteNameTest2);
    await pastebin.clickButtonCreateNewPaste();
  });

  it('"New Paste" should contain valid value', async function () {
    await expect(await pastebin.getTextFromNewPaste()).toHaveTextContaining(
      pastebinModel.textNewPasteTest2
    );
  });

  it('"Syntax Highlighting" should display valid value', async function () {
    await expect(
      await pastebin.getTextFromSyntaxHighlighting()
    ).toHaveTextContaining(pastebinModel.textHighlighting);
  });

  it('"Paste Expiration" should display valid value', async function () {
    await expect(
      await pastebin.getTextFromPasteExpiration()
    ).toHaveTextContaining(pastebinModel.textPasteExpiration);
  });

  it('Title of the page should display valid value', async function () {
    await expect(browser).toHaveTitle(pastebinModel.contentTitle);
  });
});

// npx wdio run ./wdio.conf.js
