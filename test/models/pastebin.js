class Pastebin {
  constructor() {
    this.textNewPasteTest1 = 'Hello from WebDriver';
    this.textPasteNameTest1 = 'helloweb';

    this.textNewPasteTest2 =
      'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force';
    this.textHighlighting = 'Bash';
    this.textPasteNameTest2 = 'how to gain dominance among developers';
    this.textPasteExpiration = '10 MIN';
    this.contentTitle = 'how to gain dominance among developers - Pastebin.com';
  }
}

module.exports = new Pastebin();
