const { Builder, By, Key, until } = require('selenium-webdriver');

(async function helloSelenium() {
  let driver = await new Builder().forBrowser('chrome').build();

  // 1. Открыть https://pastebin.com или аналогичный сервис в любом браузере
  await driver.get('https://pastebin.com/');

  // 2. Создать New Paste со следующими деталями:
  // * Код: "Hello from WebDriver"
  let inputNewPaste = await driver
    .findElement(By.id('postform-text'))
    .sendKeys('Hello from WebDriver');
  await driver.sleep(2000);

  // * Paste Expiration: "10 Minutes"
  let clickDropDowntPasteExpiration = await driver
    .findElement(By.id('select2-postform-expiration-container'))
    .click();
  await driver.sleep(2000);

  let selectTenMinutes = await driver
    .findElement(By.xpath("//li[text()='10 Minutes']"))
    .click();
  await driver.sleep(2000);

  // * Paste Name / Title: "helloweb"
  let inputPasteName = await driver
    .findElement(By.id('postform-name'))
    .sendKeys('helloweb');
  await driver.sleep(2000);

  let clickButtonCreatNewPaste = await driver
    .findElement(By.xpath('//*[@id="w0"]/div[5]/div[1]/div[8]/button'))
    .click();
})();

//node ./I-Can-Win.js
