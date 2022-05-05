#!/usr/bin/env node
const yargs = require('yargs');
const argv = yargs.argv;
let browser;

if (argv.browserName === 'chrome') {
  browser = argv.browserName;
} else if (argv.browserName === 'edge') {
  browser = argv.browserName;
}

module.exports = { browser };

// node ./browsers.js --browserName chrome
// node ./browsers.js --browserName edge
