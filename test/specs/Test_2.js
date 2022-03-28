const pastebin = require('../pageobjects/PastebinInteraction');

describe('Test for task "Bring It On"', function () {
  const textNewPaste =
    'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force';
  const textHighlighting = 'Bash';
  const textPasteName = 'how to gain dominance among developers';
  const textPasteExpiration = '10 MIN';

  const contentNewPaste = '//div[@class="source"]/child::ol';
  const contentSyntaxHighlighting = '//div[@class="left"]/child::a';
  const contentPasteExpiration = '//div[@class="expire"]';
  const contentTitle = 'how to gain dominance among developers - Pastebin.com';

  it('have to "Открыть https://pastebin.com или аналогичный сервис в любом браузере"', async function () {
    await pastebin.openURL();
  });

  it('have to "Создать New Paste со следующими деталями: * Код: git ..."', async function () {
    await pastebin.inputNewPaste(textNewPaste);
  });

  it('have to "Создать New Paste со следующими деталями: * Syntax Highlighting: "Bash""', async function () {
    await pastebin.setSyntaxHighlightning(textHighlighting);
  });

  it('have to "Создать New Paste со следующими деталями: * Paste Expiration: "10 Minutes""', async function () {
    await pastebin.setPasteExpiration();
  });

  it('have to "Создать New Paste со следующими деталями: * Paste Name / Title: "how to gain dominance among developers""', async function () {
    await pastebin.inputPasteName(textPasteName);
  });

  it('have to click the button "Create New Paste"', async function () {
    await pastebin.clickButtonCreateNewPaste();
  });

  it('"New Paste" should contain valid value', async function () {
    const elem = await $(contentNewPaste);
    await expect(elem).toHaveTextContaining(textNewPaste);
  });

  it('"Syntax Highlighting" should display valid value', async function () {
    const elem = await $(contentSyntaxHighlighting);
    await expect(elem).toHaveTextContaining(textHighlighting);
  });

  it('"Paste Expiration" should display valid value', async function () {
    const elem = await $(contentPasteExpiration);
    await expect(elem).toHaveTextContaining(textPasteExpiration);
  });

  it('Title of the page should display valid value', async function () {
    await expect(browser).toHaveTitle(contentTitle);
  });
});

// npx wdio run ./wdio.conf.js
