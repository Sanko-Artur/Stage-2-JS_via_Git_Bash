const pastebin = require('../pageobjects/PastebinInteraction');

describe('Test for task "I Can Win"', function () {
  const textNewPaste = 'Hello from WebDriver';
  const textPasteName = 'helloweb';

  it('have to "Открыть https://pastebin.com или аналогичный сервис в любом браузере"', async function () {
    await pastebin.openURL();
    await browser.pause(2000);
  });

  it('have to "Создать New Paste со следующими деталями: * Код: "Hello from WebDriver""', async function () {
    await pastebin.inputNewPaste(textNewPaste);
    await browser.pause(2000);
  });

  it('have to "Создать New Paste со следующими деталями: * Paste Expiration: "10 Minutes""', async function () {
    await pastebin.setPasteExpiration();
    await browser.pause(2000);
  });

  it('have to "Создать New Paste со следующими деталями: * Paste Name / Title: "helloweb""', async function () {
    await pastebin.inputPasteName(textPasteName);
    await browser.pause(2000);
  });
});

// npx wdio run ./wdio.conf.js
