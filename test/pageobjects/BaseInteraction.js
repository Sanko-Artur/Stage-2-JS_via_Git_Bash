class BaseInteraction {
  async openURL(url) {
    await browser.maximizeWindow();
    await browser.url(url);
  }

  async clickElement(selector) {
    await $(selector).click();
  }

  async inputTextIntoElement(selector, text) {
    await $(selector).setValue(text);
  }

  async pressEnter() {
    await browser.keys('Enter');
  }

  async switchFrame() {
    await browser.switchToFrame(0);
  }

  async waitForLoadingAnElemen(selector) {
    await $(selector).waitForDisplayed({ timeout: 15000 });
  }

  async clearElement(selector) {
    await $(selector).clearValue();
  }

  async openNewWindow(url) {
    await browser.newWindow(url);
  }

  async switchWindown(selector) {
    await browser.switchWindow(selector);
  }

  async pasteText(selector) {
    await $(selector).setValue(['Control', 'KeyV']);
  }
}

module.exports = BaseInteraction;
