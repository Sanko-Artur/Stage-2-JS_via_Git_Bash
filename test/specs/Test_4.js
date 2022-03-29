const calculator = require('../pageobjects/CalculatorInteraction.js');
const yopmail = require('../pageobjects/YopmailInteraction.js');

describe('Test for task "Hardcore"', function () {
  const textSearchRequest = 'Google Cloud Platform Pricing Calculator';

  const textForInstaces = '4';

  let title;

  const checkFieldEstimatedInPost = '//td[contains(text() , "USD 1,082.77")]';
  const totalEstimatedInPost = 'Estimated Monthly Cost: USD 1,082.77';

  it('have to "1. Открыть https://cloud.google.com/"', async function () {
    await calculator.openURL();
  });

  it('have to "2.2. Ввести в поле поиска"Google Cloud Platform Pricing Calculator"', async function () {
    await calculator.setSearchItem(textSearchRequest);
  });

  it('have to "3. Запустить поиск, нажав кнопку поиска."', async function () {
    await calculator.startSearching();
  });

  it('have to "4. В результатах поиска кликнуть "Google Cloud Platform Pricing Calculator" и перейти на страницу калькулятора."', async function () {
    await calculator.chooseSearchResult();
  });

  it('have to "switch the frame first"', async function () {
    await calculator.switchFrame();
  });

  it('have to "switch the frame second"', async function () {
    await calculator.switchFrame();
  });

  it('have to "5. Активировать раздел COMPUTE ENGINE вверху страницы"', async function () {
    await calculator.chooseTypeOfCalculator();
  });

  it('have to "6. Заполнить форму следующими данными: * Number of instances: 4"', async function () {
    await calculator.setNumberOfInstances(textForInstaces);
  });

  it('have to "6. Заполнить форму следующими данными: * What are these instances for?: оставить пустым"', async function () {
    await calculator.clearInstancesField();
  });

  it('have to "6. Заполнить форму следующими данными: * Operating System / Software: Free:"', async function () {
    await calculator.setOperatingSystem();
  });

  it('have to "6. Заполнить форму следующими данными: * VM Class: Regular"', async function () {
    await calculator.setVMClass();
  });

  it('have to "6. Заполнить форму следующими данными: setSeries N1"', async function () {
    await calculator.setSeries();
  });

  it('have to "6. Заполнить форму следующими данными: * Instance type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)"', async function () {
    await calculator.setInstancType();
  });

  it('have to "6. Заполнить форму следующими данными: setGPUs"', async function () {
    await calculator.setGPUs();
  });

  it('have to "6. Заполнить форму следующими данными: Local SSD: 2x375 Gb"', async function () {
    await calculator.setSSD();
  });

  it('have to "6. Заполнить форму следующими данными: Datacenter location: Frankfurt (europe-west3)"', async function () {
    await calculator.setDatacenterLocation();
  });

  it('have to "6. Заполнить форму следующими данными: Commited usage: 1 Year"', async function () {
    await calculator.setCommitedUsage();
  });

  it('have to "7. Нажать Add to Estimate"', async function () {
    await calculator.clickButtonAddToEstimate();
  });

  it('have to "8. Выбрать пункт EMAIL ESTIMATE"', async function () {
    await calculator.clickButtonEmailEstimate();
    await browser.pause(2000);
    title = await browser.getTitle();
    await browser.pause(2000);
  });

  it('have to "9. В новой вкладке открыть https://yopmail.com/ или аналогичный сервис для генерации временных email\'ов"', async function () {
    await yopmail.openNewTab();
  });

  it('have to "10. Скопировать почтовый адрес сгенерированный в yopmail.com"', async function () {
    await yopmail.setNewEmail();
  });

  it('have to "11.1 Вернуться в калькулятор"', async function () {
    await browser.switchWindow(title);
    // await yopmail.returnToCalculator();
  });

  it('have to "11.2 В поле Email ввести адрес из предыдущего пункта"', async function () {
    await calculator.pasteNewEmail();
  });

  it('have to "12. Нажать SEND EMAIL"', async function () {
    await calculator.clickButtonSendEmail();
  });

  it('have to "13.1. Дождаться письма с рассчетом стоимости"', async function () {
    await calculator.returnToYopmail();
    await yopmail.checkPost();
  });

  it('have to "13.2. Проверить что Total Estimated Monthly Cost в письме совпадает с тем, что отображается в калькуляторе"', async function () {
    const elem = $(checkFieldEstimatedInPost);
    await expect(elem).toHaveTextContaining(totalEstimatedInPost);
  });
});

// npx wdio run ./wdio.conf.js