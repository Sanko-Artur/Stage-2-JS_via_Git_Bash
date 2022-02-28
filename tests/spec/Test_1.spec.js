const pastebin = require('../../pageObjects/PastebinInteraction');

describe('Test for task "I Can Win"', function () {
  const textNewPaste = 'Hello from WebDriver';
  const textPasteName = 'helloweb';

  it('have to fill few string by some value and save it', async function () {
    await pastebin.openURL();
    await pastebin.inputNewPaste(textNewPaste);
    await pastebin.selectPasteExpiration();
    await pastebin.inputPasteName(textPasteName);
    await pastebin.clickButtonCreateNewPaste();
  });
  // it('have to "Открыть https://pastebin.com или аналогичный сервис в любом браузере"', async function () {
  //   await pastebin.openURL();
  // });

  // it('have to "Создать New Paste со следующими деталями: * Код: "Hello from WebDriver""', async function () {
  //   await pastebin.inputNewPaste(textNewPaste);
  // });

  // it('have to "Создать New Paste со следующими деталями: * Paste Expiration: "10 Minutes""', async function () {
  //   await pastebin.selectPasteExpiration();
  // });

  // it('have to "Создать New Paste со следующими деталями: * Paste Name / Title: "helloweb""', async function () {
  //   await pastebin.inputPasteName(textPasteName);
  // });

  // it('have to click the button "Create New Paste"', async function () {
  //   await pastebin.clickButtonCreateNewPaste();
  // });

  after(async function () {
    await pastebin.close();
  });
});

// npm test
