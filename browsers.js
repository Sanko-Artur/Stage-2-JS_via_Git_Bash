const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const browserName = yargs(hideBin(process.browserName)).browserName;
let browser;

if (browserName.name === 'chrome') {
  browser = 'chrome';
} else if (browserName.name === 'edge') {
  browser = 'edge';
}

module.exports = { browser };
