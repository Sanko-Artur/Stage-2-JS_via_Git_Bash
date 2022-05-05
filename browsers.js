#!/usr/bin/env node
const yargs = require('yargs');
const argv = yargs.argv;
let browser;

if (argv.browserName === 'chrome') {
  console.log(`${argv.browserName}`);
  browser = 'chrome';
} else if (argv.browserName === 'edge') {
  console.log(`${argv.browserName}`);
  browser = 'edge';
}

module.exports = { browser };

// node ./browsers.js --browserName chrome
// node ./browsers.js --browserName edge
