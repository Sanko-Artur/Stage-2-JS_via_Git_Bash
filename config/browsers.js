#!/usr/bin/env node
const yargs = require('yargs');
const argv = yargs.argv;
let browser;

if (argv.browserName === 'chrome') {
  browser = {
    maxInstances: 5,
    browserName: 'chrome',
    acceptInsecureCerts: true,
  };
} else if (argv.browserName === 'edge') {
  browser = {
    browserName: 'MicrosoftEdge',
    maxInstances: 1,
  };
}

console.log(argv);
console.log(argv.browserName);
console.log(browser);

module.exports = { browser };
