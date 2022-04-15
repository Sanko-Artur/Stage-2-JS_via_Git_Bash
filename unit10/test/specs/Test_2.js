const pastebin = require('../pageobjects/PastebinInteraction');

describe('Test for task "Bring It On"', function () {
  const textNewPaste =
    'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force';
  const textHighlighting = 'Bash';
  const textPasteName = 'how to gain dominance among developers';
  const textPasteExpiration = '10 MIN';

  const contentTitle = 'how to gain dominance among developers - Pastebin.com';

  before(async function () {
    await pastebin.openURL();
    await pastebin.inputNewPaste(textNewPaste);
    await pastebin.setSyntaxHighlightning(textHighlighting);
    await pastebin.setPasteExpiration();
    await pastebin.inputPasteName(textPasteName);
    await pastebin.clickButtonCreateNewPaste();
  });

  it('"New Paste" should contain valid value', async function () {
    await expect(await pastebin.getTextFromNewPaste()).toHaveTextContaining(
      textNewPaste
    );
  });

  it('"Syntax Highlighting" should display valid value', async function () {
    await expect(
      await pastebin.getTextFromSyntaxHighlighting()
    ).toHaveTextContaining(textHighlighting);
  });

  it('"Paste Expiration" should display valid value', async function () {
    await expect(
      await pastebin.getTextFromPasteExpiration()
    ).toHaveTextContaining(textPasteExpiration);
  });

  it('Title of the page should display valid value', async function () {
    await expect(browser).toHaveTitle(contentTitle);
  });
});

// npx wdio run ./wdio.conf.js
