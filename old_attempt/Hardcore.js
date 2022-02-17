const { Builder, By, Key, until } = require('selenium-webdriver');

(async function helloSelenium() {
  let driver = await new Builder().forBrowser('chrome').build();

  // 1. Открыть https://cloud.google.com/
  // 2. Нажав кнопку поиска по порталу вверху страницы, ввести в поле поиска"Google Cloud Platform Pricing Calculator"
  // 3. Запустить поиск, нажав кнопку поиска.

  await driver.get('https://cloud.google.com/');

  let clickSearchButton = await driver
    .findElement(By.xpath('//input[@name="q"]'))
    .click();

  let inputSearch = await driver
    .findElement(By.xpath('//input[@name="q"]'))
    .sendKeys('Google Cloud Platform Pricing Calculator');

  await driver.actions().keyDown(Key.ENTER).keyUp(Key.ENTER).perform();

  await driver.sleep(5000);

  // 4. В результатах поиска кликнуть "Google Cloud Platform Pricing Calculator" и перейти на страницу калькулятора.
  let selectSearchResults = await driver
    .findElement(By.xpath('//b[text()="Google Cloud Pricing Calculator"][1]'))
    .click();
  await driver.sleep(5000);

  // Number of instances: 4
  let selectNumberOfInstances = await driver
    .findElement(By.xpath('//input[@id="input_76"]'))
    .click();

  let inputNumberOfInstances = await driver
    .findElement(By.xpath('//input[@id="input_76"]'))
    .sendKeys('4');

  // set series
  let selectSeries = await driver
    .findElement(By.xpath('//*[@id="select_value_label_71"]/span[1]/div'))
    .click();
  await driver.sleep(2000);

  let chooseTypeOfSeries = await driver
    .findElement(By.xpath('//*[@id="select_option_216"]/div'))
    .click();
  await driver.sleep(2000);

  // Instance type: n1-standard-8    (vCPUs: 8, RAM: 30 GB)
  let selectMachineType = await driver
    .findElement(By.xpath('//*[@id="select_value_label_72"]/span[1]/div'))
    .click();
  await driver.sleep(2000);

  let chooseMachineType = await driver
    .findElement(By.xpath('//*[@id="select_option_419"]/div'))
    .click();
  await driver.sleep(2000);

  //Выбрать Add GPUs
  // * Number of GPUs: 1
  // * GPU type: NVIDIA Tesla V100
  let selectAddGpus = await driver
    .findElement(
      By.xpath(
        '//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[11]/div[1]/md-input-container/md-checkbox/div[2]'
      )
    )
    .click();
  await driver.sleep(2000);

  let selectGpuType = await driver
    .findElement(By.xpath('//*[@id="select_462"]'))
    .click();
  await driver.sleep(2000);

  let chooseGpuType = await driver
    .findElement(By.xpath('//*[@id="select_option_469"]/div'))
    .click();
  await driver.sleep(2000);

  let selectNumberOfGpus = await driver
    .findElement(By.xpath('//*[@id="select_value_label_451"]/span[1]'))
    .click();
  await driver.sleep(2000);

  let chooseNumberOfGpus = await driver
    .findElement(By.xpath('//*[@id="select_option_473"]'))
    .click();
  await driver.sleep(2000);

  // Local SSD: 2x375 Gb
  let selectLocalSsd = await driver
    .findElement(By.xpath('//*[@id="select_value_label_413"]/span[1]'))
    .click();
  await driver.sleep(2000);

  let choosetLocalSsd = await driver
    .findElement(By.xpath('//*[@id="select_option_440"]/div'))
    .click();
  await driver.sleep(2000);

  // Datacenter location: Frankfurt (europe-west3)
  let selectDatacenterLocation = await driver
    .findElement(By.xpath('//*[@id="select_value_label_74"]/span[1]/div'))
    .click();
  await driver.sleep(2000);

  let chooseDatacenterLocation = await driver
    .findElement(By.xpath('//*[@id="select_option_237"]/div'))
    .click();
  await driver.sleep(2000);

  // Commited usage: 1 Year
  let selectCommitedUsage = await driver
    .findElement(By.xpath('//*[@id="select_value_label_75"]/span[1]'))
    .click();
  await driver.sleep(2000);

  let chooseCommitedUsage = await driver
    .findElement(By.xpath('//*[@id="select_option_114"]/div'))
    .click();
  await driver.sleep(2000);

  // 7. Нажать Add to Estimate
  let selectButtonAdd = await driver
    .findElement(
      By.xpath(
        '//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[19]/button'
      )
    )
    .click();
  await driver.sleep(2000);

  // 8. Выбрать пункт EMAIL ESTIMATE
  let selectButtonAdd = await driver
    .findElement(By.xpath('//*[@id="email_quote"]'))
    .click();
  await driver.sleep(2000);

  // 9. В новой вкладке открыть https://yopmail.com/ или аналогичный сервис для генерации временных email'ов
  await driver.executeScript('window.open("https://yopmail.com/");');
  await driver.sleep(3000);

  // 10. Скопировать почтовый адрес сгенерированный в yopmail.com  (//*[@id="listeliens"]/a[1])
  let selectButtonNewPost = await driver
    .findElement(
      By.xpath(
        '//a[@title="Генератор Одноразовых адресов электронной почты создаёт новый адрес для вас за один клик!"]'
      )
    )
    .click();
  await driver.sleep(2000);

  let clickButtonCopy = await driver
    .findElement(By.xpath('//*[@id="cprnd"]'))
    .click();
  await driver.sleep(2000);

  // 11. Вернуться в калькулятор, в поле Email ввести адрес из предыдущего пункта  ( await driver.switchTo().window(handle) )
  await driver
    .actions()
    .keyDown(Key.CONTROL + Key.SHIFT + Key.TAB)
    .keyUpn(Key.CONTROL + Key.SHIFT + Key.TAB)
    .perform();
  await driver.sleep(2000);

  let selectEmail = await driver
    .findElement(By.xpath('//*[@id="input_443"]'))
    .click();
  await driver.sleep(2000);

  await driver
    .actions()
    .keyDown(Key.CONTROL + 'v')
    .keyUpn(Key.CONTROL + 'v')
    .perform();
  await driver.sleep(2000);

  // 12. Нажать SEND EMAIL
  let clickButtonSendEmail = await driver
    .findElement(
      By.xpath('//*[@id="dialogContent_449"]/form/md-dialog-actions/button[2]')
    )
    .click();
  await driver.sleep(2000);

  // 13. Дождаться письма с рассчетом стоимости и проверить что Total Estimated Monthly Cost в письме совпадает с тем, что отображается в калькуляторе
  await driver
    .actions()
    .keyDown(Key.CONTROL + Key.TAB)
    .keyUpn(Key.CONTROL + Key.TAB)
    .perform();
  await driver.sleep(2000);

  let clickButtonCheckEmail = await driver
    .findElement(
      By.xpath('/html/body/div/div[2]/main/div/div[2]/div/div/div[2]/button[2]')
    )
    .click();
  await driver.sleep(2000);
})();

// node ./Hardcore.js
