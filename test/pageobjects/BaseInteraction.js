class BaseInteraction {
  openURL(url) {
    browser.maximizeWindow();
    return browser.url(url);
  }

  clickElement(element) {
    $(element).click();
  }

  inputTextIntoElement(element, text) {
    $(element).setValue(text);
  }

  pressEnter() {
    return browser.keys('Enter');
  }

  switchFrame(id) {
    return browser.switchToFrame(id);
  }

  // getTextFromElement(element) {
  //   return $(element).getText();
  // }

  getTextFromElement(element) {
    const elem = $(element); // .getText();
    let text = elem.getText();
    // return text
  }

  // async getTextFromTitle() {   // browser.getTitle()
  //   return await (
  //     await this.driver.wait(until.elementLocated(By.css('html')))
  //   ).getTitle();
  // }
}

module.exports = BaseInteraction;
