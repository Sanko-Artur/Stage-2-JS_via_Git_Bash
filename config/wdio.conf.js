const fs = require('fs');
const path = require('path');
const { browser } = require('./browsers.js');

exports.config = {
  specs: ['./test/specs/**/Test_1.js'],

  suites: {
    smokeTest: ['./test/specs/Test_4.js'],
    otherTests: [
      './test/specs/Test_1.js',
      './test/specs/Test_2.js',
      './test/specs/Test_3.js',
    ],
  },

  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 5,
      browserName: browser,
      acceptInsecureCerts: true,
    },
  ],

  logLevel: 'info',

  bail: 0,

  baseUrl: 'http://localhost',

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ['chromedriver', 'edgedriver'],

  framework: 'mocha',

  reporters: [
    'spec',
    [
      'junit',
      {
        outputDir: './jenkinsReporter',
        outputFileFormat: function (options) {
          return `results-${options.cid}.${options.capabilities.browserName}.xml`;
        },
      },
    ],
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },

  onPrepare: function (config, capabilities) {
    const screenshots = 'screenshots';
    const jenkinsReporter = 'jenkinsReporter';

    if (!fs.existsSync(`./${screenshots}`)) {
      fs.mkdirSync(`${screenshots}`);
    }

    fs.readdir(`${screenshots}`, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(path.join(`${screenshots}`, file), (err) => {
          if (err) throw err;
        });
      }
    });

    fs.readdir(`${jenkinsReporter}`, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(path.join(`${jenkinsReporter}`, file), (err) => {
          if (err) throw err;
        });
      }
    });
  },

  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      const date = new Date().toLocaleString().replace(/:/g, '-');
      const nameFile = path.basename(test.file).replace(/\W/g, '_');
      const nameTest = test.title.replace(/\W/g, '_');

      await browser.saveScreenshot(
        `./screenshots/Date_${date}_FileName_${nameFile}_TestName_${nameTest}.png`
      );
    }
  },
};