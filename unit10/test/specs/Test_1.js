const pastebin = require('../pageobjects/PastebinInteraction');

describe('Test for task "I Can Win"', function () {
  const textNewPaste = 'Hello from WebDriver';
  const textPasteName = 'helloweb';

  it('have to "Открыть https://pastebin.com или аналогичный сервис в любом браузере"', async function () {
    await pastebin.openURL();
  });

  it('have to "Создать New Paste со следующими деталями: * Код: "Hello from WebDriver""', async function () {
    await pastebin.inputNewPaste(textNewPaste);
  });

  it('have to "Создать New Paste со следующими деталями: * Paste Expiration: "10 Minutes""', async function () {
    await pastebin.setPasteExpiration();
  });

  it('have to "Создать New Paste со следующими деталями: * Paste Name / Title: "helloweb""', async function () {
    await pastebin.inputPasteName(textPasteName);
  });
});

// npx wdio run ./wdio.conf.js
