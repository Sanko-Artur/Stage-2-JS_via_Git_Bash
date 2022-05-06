#!/usr/bin/env node
const yargs = require('yargs');
const argv = yargs.argv;
let browser;

if (argv.browserName === 'chrome') {
  browser = argv.browserName;
} else if (argv.browserName === 'edge') {
  browser = argv.browserName;
}

console.log(argv);
console.log(argv.browserName);

module.exports = { browser };

// node ./config/browsers.js -- --browserName chrome
// node ./config/browsers.js --browserName chrome
// node ./config/browsers.js -- --browserName edge
// node ./config/browsers.js --browserName edge
// npm test -- --browserName edge
