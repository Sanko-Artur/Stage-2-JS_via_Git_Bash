const pastebin = require('../pageobjects/PastebinInteraction');

describe('Test for task "Bring It On"', function () {
  const textNewPaste =
    'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force';
  const textHighlighting = 'Bash';
  const textPasteName = 'how to gain dominance among developers';
  const textPasteExpiration = '10 MIN';

  const contentNewPaste = '//div[@class="source"]/child::ol';
  const contentSyntaxHighlighting = '//div[@class="left"]/child::a';
  const contentPasteNameTitle = 'title';
  const contentPasteExpiration = '//div[@class="expire"]';

  it('have to "Открыть https://pastebin.com или аналогичный сервис в любом браузере"', async function () {
    await pastebin.openURL();
    await browser.pause(2000);
  });

  it('have to "Создать New Paste со следующими деталями: * Код: git ..."', async function () {
    await pastebin.inputNewPaste(textNewPaste);
    await browser.pause(2000);
  });

  it('have to "Создать New Paste со следующими деталями: * Syntax Highlighting: "Bash""', async function () {
    await pastebin.setSyntaxHighlightning(textHighlighting);
    await browser.pause(2000);
  });

  it('have to "Создать New Paste со следующими деталями: * Paste Expiration: "10 Minutes""', async function () {
    await pastebin.setPasteExpiration();
    await browser.pause(2000);
  });

  it('have to "Создать New Paste со следующими деталями: * Paste Name / Title: "how to gain dominance among developers""', async function () {
    await pastebin.inputPasteName(textPasteName);
    await browser.pause(2000);
  });

  it('have to click the button "Create New Paste"', async function () {
    await pastebin.clickButtonCreateNewPaste();
  });

  // 3. Сохранить paste и проверить следующее:
  // * Проверить что код соответствует введенному в пункте 2
  it('"New Paste" should contain valid value', async function () {
    await browser.pause(2000);
    const elem = await $(contentNewPaste);
    await expect(elem).toHaveTextContaining(textNewPaste);
  });

  // * Синтаксис подвечен для bash
  it('"Syntax Highlighting" should display valid value', async function () {
    await browser.pause(2000);
    const elem = await $(contentSyntaxHighlighting);
    await expect(elem).toHaveTextContaining(textHighlighting);
  });

  // * Проверить что код соответствует введенному в пункте 2
  it('"Paste Expiration" should display valid value', async function () {
    await browser.pause(2000);
    const elem = await $(contentPasteExpiration);
    await expect(elem).toHaveTextContaining(textPasteExpiration);
  });

  // // * Заголовок страницы браузера соответствует Paste Name / Title
  it('Title of the page should display valid value', async function () {
    await browser.pause(2000);
    // const elem = await $(contentPasteNameTitle); // await browser.getTitle(); //
    // const textTitle = elem.getTitle();
    const elem = await browser.getTitle();
    await expect(elem).toHaveTextContaining(textPasteName);
  });
});

// npx wdio run ./wdio.conf.js
