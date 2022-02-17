const { Builder, By, Key, until } = require('selenium-webdriver');

(async function helloSelenium() {
  let driver = await new Builder().forBrowser('chrome').build();

  // 1. Открыть https://pastebin.com  или аналогичный сервис в любом браузере
  await driver.get('https://pastebin.com/');

  // 2. Создать New Paste со следующими деталями:
  // * Код:
  // git config --global user.name  "New Sheriff in Town"
  // git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
  // git push origin master --force
  let inputNewPaste = await driver.findElement(By.id('postform-text'))
    .sendKeys(`git config --global user.name  "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force'`);
  await driver.sleep(2000);

  // * Syntax Highlighting: "Bash"
  let clickDropDownSyntaxHighlighting = await driver
    .findElement(By.id('select2-postform-format-container'))
    .click();
  await driver.sleep(2000);

  let inputSyntaxHighlighting = await driver
    .findElement(By.xpath('/html/body/span[2]/span/span[1]/input'))
    .sendKeys('Bash');
  await driver.sleep(2000);

  await driver.actions().keyDown(Key.ENTER).keyUp(Key.ENTER).perform();

  // * Paste Expiration: "10 Minutes"
  let clickDropDowntPasteExpiration = await driver
    .findElement(By.id('select2-postform-expiration-container'))
    .click();
  await driver.sleep(2000);

  let selectTenMinutes = await driver
    .findElement(By.xpath("//li[text()='10 Minutes']"))
    .click();
  await driver.sleep(2000);

  // * Paste Name / Title: "how to gain dominance among developers"
  let inputPasteName = await driver
    .findElement(By.id('postform-name'))
    .sendKeys('how to gain dominance among developers');

  // 3. Сохранить paste и проверить следующее:
  // * Заголовок страницы браузера соответствует Paste Name / Title
  // * Синтаксис подвечен для bash
  // * Проверить что код соответствует введенному в пункте 2
  let clickButtonCreatNewPaste = await driver
    .findElement(By.xpath('//*[@id="w0"]/div[5]/div[1]/div[8]/button'))
    .click();
})();

// node ./Bring-It-On.js
