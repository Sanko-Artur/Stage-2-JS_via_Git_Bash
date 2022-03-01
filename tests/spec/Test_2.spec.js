const pastebin = require('../../pageObjects/PastebinInteraction');
const { By } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Test for task "Bring It On"', function () {
  const textNewPaste =
    'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\n  git push origin master --force';
  const textHighlighting = 'Bash';
  const textPasteExpiration = '10 Minutes';
  const textPasteName = 'how to gain dominance among developers';

  const contentNewPaste = By.xpath('//div[@class="source"]/child::ol');
  // '.source';
  //document.querySelector('.source').textContent;
  const contentHighlighting = By.xpath(
    '//a[@class="btn -small h_800"][text()="Bash"]'
  );
  // //div[@class="left"]/child::a
  // '[class="btn -small h_800"]';
  //document.querySelector('[class="btn -small h_800"]').textContent;
  const contentPasteExpiration = By.xpath('//div[@class="expire"]');
  const contentTitle = By.xpath('title'); // 'title'; //document.querySelector('title').textContent;

  // const pastebin = new PastebinInteraction();

  // before(async function () {
  //   await pastebin.openURL();
  //   await pastebin.inputNewPaste(textNewPaste);
  //   await pastebin.setSyntaxHighlighting(textHighlighting);
  //   await pastebin.selectDropDownExpiration();
  //   await pastebin.selectTenMinutes();
  //   await pastebin.inputPasteName(textPasteName);
  //   await pastebin.clickButton();
  // });

  it('have to "Открыть https://pastebin.com или аналогичный сервис в любом браузере"', async function () {
    await pastebin.openURL();
  });

  it('have to "Создать New Paste со следующими деталями: * Код: git ..."', async function () {
    await pastebin.inputNewPaste(textNewPaste);
  });

  it('have to "Создать New Paste со следующими деталями: * Syntax Highlighting: "Bash""', async function () {
    await pastebin.setSyntaxHighlighting(textHighlighting);
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

  // 3. Сохранить paste и проверить следующее:
  // * Проверить что код соответствует введенному в пункте 2
  it('"New Paste" should contain valid value', async function () {
    const newPaste = await pastebin.getTextFromNewPaste(contentNewPaste);
    expect(newPaste).to.be.equal(textNewPaste);
  });

  // * Синтаксис подвечен для bash
  it('"Syntax Highlighting" should display valid value', async function () {
    const highlighting = await pastebin.getTextFromSyntaxHighlighting(
      contentHighlighting
    );
    expect(highlighting).to.be.equal(textHighlighting);
  });

  // * Проверить что код соответствует введенному в пункте 2
  it('"Paste Expiration" should display valid value', async function () {
    const pasteExpiration = await pastebin.getTextFromPasteExpiration(
      contentPasteExpiration
    );
    expect(pasteExpiration).to.be.equal(textPasteExpiration);
  });

  // * Заголовок страницы браузера соответствует Paste Name / Title
  it('Title of the page should display valid value', async function () {
    const title = await pastebin.getTextFromTitle();
    expect(title).to.be.equal(textPasteName);
  });

  after(async function () {
    await pastebin.close();
  });
});

// npm test
