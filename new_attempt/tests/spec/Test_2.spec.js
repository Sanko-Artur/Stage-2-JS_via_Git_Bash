const pastebin = require('../../pageObjects/PastebinInteraction');
const { expect } = require('chai');

describe('Test for task "Bring It On"', function () {
  const textNewPaste = `git config --global user.name  "New Sheriff in Town"
    git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
    git push origin master --force`; //across /n
  const textHighlighting = 'Bash';
  const textPasteName = 'how to gain dominance among developers';

  const contentNewPaste = `['div.class="source"']`; //By.xpath("//div[@class='source']")      //textNewPaste
  const contentHighlighting = `['div.class="left" a']`; //By.xpath("//div[@class='left']/a")      //textHighlighting
  const contentTitle = 'title'; //By.xpath('//title')      textPasteName

  // const pastebin = new PastebinInteraction();

  before(async function () {
    await pastebin.openURL();
    await pastebin.inputNewPaste(textNewPaste);
    await pastebin.selectSyntaxHighlighting(textHighlighting);
    await pastebin.pressEnter();
    await pastebin.selectPasteExpiration();
    await pastebin.inputPasteName(textPasteName);
    await pastebin.clickButton();
  });

  it('"New Paste" should contain valid value', async function () {
    expect(pastebin.getTextFromElement(contentNewPaste)).to.be.equal(
      textNewPaste
    );
  });

  it('"Syntax Highlighting" should display valid value', async function () {
    expect(pastebin.getTextFromElement(contentHighlighting)).to.be.equal(
      textHighlighting
    );
  });

  it('title of the page should display valid value', async function () {
    expect(pastebin.getTextFromElement(contentTitle)).to.be.equal(
      textPasteName
    );
  });

  after(async function () {
    await pastebin.close();
  });
});

// 3. Сохранить paste и проверить следующее:
// * Заголовок страницы браузера соответствует Paste Name / Title
// * Синтаксис подвечен для bash
// * Проверить что код соответствует введенному в пункте 2

// npm test
