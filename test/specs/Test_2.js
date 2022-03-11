const pastebin = require('../pageobjects/PastebinInteraction');

describe('Test for task "Bring It On"', function () {
  const textNewPaste =
    'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force';
  const textHighlighting = 'Bash';
  const textPasteName = 'how to gain dominance among developers';
  const textPasteExpiration = '10 MIN';

  // const contentNewPaste = '[//div[@class="source"]/child::ol]'; // '[class="bash"]';
  // const contentHighlighting = '[class="btn -small h_800"][1]';
  // const contentPasteExpiration = '[class="expire"]';

  it('have to "Открыть https://pastebin.com или аналогичный сервис в любом браузере"', async function () {
    await pastebin.openURL();
    await browser.pause(3000);
  });

  it('have to "Создать New Paste со следующими деталями: * Код: git ..."', async function () {
    await pastebin.inputNewPaste(textNewPaste);
    await browser.pause(3000);
  });

  it('have to "Создать New Paste со следующими деталями: * Syntax Highlighting: "Bash""', async function () {
    await pastebin.clickSyntaxHighlightingDropDown();
    await browser.pause(3000);
    // await pastebin.setBush();
  });

  it('have to "Bash""', async function () {
    // await pastebin.clickSyntaxHighlightingDropDown();
    await pastebin.setBush(textHighlighting);
    await browser.pause(3000);
    await pastebin.pressEnter();
    await browser.pause(3000);
  });

  it('have to "Создать New Paste со следующими деталями: * Paste Expiration: "10 Minutes""', async function () {
    await pastebin.clickPasteExpirationDropDown();
    await browser.pause(3000);
    // await pastebin.setTenMinutes();
  });

  it('have to "10 Minutes""', async function () {
    // await pastebin.clickPasteExpirationDropDown();
    await pastebin.setTenMinutes();
    await browser.pause(3000);
  });

  it('have to "Создать New Paste со следующими деталями: * Paste Name / Title: "how to gain dominance among developers""', async function () {
    await pastebin.inputPasteName(textPasteName);
    await browser.pause(3000);
  });

  it('have to click the button "Create New Paste"', async function () {
    await pastebin.clickButtonCreateNewPaste();
    await browser.pause(3000);
  });

  // 3. Сохранить paste и проверить следующее:
  // * Проверить что код соответствует введенному в пункте 2
  it('"New Paste" should contain valid value', async function () {
    await browser.pause(5000);
    await expect(pastebin.getTextFromNewPaste).toHaveText(textNewPaste); // toHaveTextContaining
    await browser.pause(3000);
  });

  //   [0-0] Error in "Test for task "Bring It On"."New Paste" should contain valid value"
  //   Error: Expect  to have text
  //   Expected: "git config --global user.name  \"New Sheriff in Town\"
  //   git reset $(git commit-tree HEAD^{tree} -m \"Legacy code\")
  //   git push origin master --force"
  //   Received: undefined
  //   at Context.<anonymous> (D:\QA\JavaScript\WebStorm task\epam\Stage 2\Unit 10 - Automation Tools (WebDriverIO - WDIO)\HW\test\specs\Test_2.js:64:48)

  // * Синтаксис подвечен для bash
  it('"Syntax Highlighting" should display valid value', async function () {
    await browser.pause(5000);
    await expect(pastebin.getTextFromSyntaxHighlighting).isEqual(
      textHighlighting
    ); // toHaveTextContaining
    await browser.pause(3000);
  });

  //  [0-0] Error in "Test for task "Bring It On"."Syntax Highlighting" should display valid value"
  //  Error: Expect  to have text
  //  Expected: "Bash"
  //  Received: undefined
  //  at Context.<anonymous> (D:\QA\JavaScript\WebStorm task\epam\Stage 2\Unit 10 - Automation Tools (WebDriverIO - WDIO)\HW\test\specs\Test_2.js:86:58)

  // * Проверить что код соответствует введенному в пункте 2
  it('"Paste Expiration" should display valid value', async function () {
    await browser.pause(5000);
    await expect(pastebin.getTextFromPasteExpiration).equals(
      textPasteExpiration
    ); // toHaveTextContaining
    await browser.pause(3000);
  });

  //  [0-0] Error in "Test for task "Bring It On"."Paste Expiration" should display valid value"
  //  Error: Expect  to have text
  //  Expected: "10 MIN"
  //  Received: undefined
  //  at Context.<anonymous> (D:\QA\JavaScript\WebStorm task\epam\Stage 2\Unit 10 - Automation Tools (WebDriverIO - WDIO)\HW\test\specs\Test_2.js:96:55)

  // // * Заголовок страницы браузера соответствует Paste Name / Title
  it('Title of the page should display valid value', async function () {
    await browser.pause(5000);
    await expect(pastebin.getTextFromTitle).toHaveTextContaining(textPasteName); // toHaveTextContaining
    await browser.pause(3000);
  });
});

//  [0-0] Error in "Test for task "Bring It On".Title of the page should display valid value"
//  Error: Expect  to have text
//  Expected: "how to gain dominance among developers"
//  Received: undefined
//  at Context.<anonymous> (D:\QA\JavaScript\WebStorm task\epam\Stage 2\Unit 10 - Automation Tools (WebDriverIO - WDIO)\HW\test\specs\Test_2.js:106:45)

// npx wdio run ./wdio.conf.js
