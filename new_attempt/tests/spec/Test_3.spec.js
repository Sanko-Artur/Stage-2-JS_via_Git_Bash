const calculator = require('../../pageObjects/CalculatorInteraction');
const { expect } = require('chai');
const { By } = require('selenium-webdriver');

describe('Test for task "Hurt Me Plenty"', function () {
  const textSearchRequest = 'Google Cloud Platform Pricing Calculator';
  const textForInstaces = '4';
  const textForInstaces_2 = By.xpath('//span[text()="4"]');

  const a = By.xpath('//div[text()="Compute Engine"]');
  const a_1 = 'Compute Engine';
  const b = By.xpath(
    '//div[text()="Operating System / Software:"]/span[text()="Free"]'
  );
  const b_1 = 'Operating System / Software: Free';
  const c = By.xpath('//div[text()="VM class: regular"]');
  const c_1 = 'VM class: regular';
  const d = By.xpath('//div[text()="Instance type: n1-standard-8"]');
  const d_1 = 'Instance type: n1-standard-8';
  // const ? = By.xpath('//*[text()="Number of GPUs: 1"]');
  // const ?_1 = 'Number of GPUs: 1'
  // const ? = By.xpath('//*[text()="GPU type: NVIDIA Tesla V100"]');
  // const ?_1 = 'GPU type: NVIDIA Tesla V100'
  const e = By.xpath('//div[text()="GPU dies: 1 NVIDIA Tesla V100"]');
  const e_1 = 'GPU dies: 1 NVIDIA Tesla V100';
  const f = By.xpath('//div[text()="Local SSD: 2x375 GiB"]');
  const f_1 = 'Local SSD: 2x375 GiB';
  const g = By.xpath('//div[text()="Region: Frankfurt"]');
  const g_1 = 'Region: Frankfurt';
  const h = By.xpath('//div[text()="Commitment term: 1 Year"]');
  const h_1 = 'Commitment term: 1 Year';

  const sumOfRent = '';
  // const calculator = new CalculatorInteraction();

  // для каждого it нужно ли предоставлять доступ к frame
  before(async function () {
    await calculator.openURL();
    await calculator.setSearchItem(textSearchRequest);
    await calculator.startSearching();
    await calculator.chooseSearchResult();
    await calculator.switchFrame();
    await calculator.chooseTypeOfCalculator();
    await calculator.setNumberOfInstances(textForInstaces);
    await calculator.setSeries();
    await calculator.setInstancType();
    await calculator.setGPUs();
    await calculator.setSSD();
    await calculator.setDatacenterLocation();
    await calculator.setCommitedUsage();
    await calculator.clickOnTheButtonAddToEstimate();
  });

  it('type of calcolator should be "Compute Engine"', async function () {
    expect(a).to.be.equal(a_1);
  });

  it('"Number of instances" should contain "4"', async function () {
    expect(textForInstaces_2).to.be.equal(textForInstaces);
  });

  it('"Operating System / Software" should contain "Free"', async function () {
    expect(b).to.be.equal(b_1);
  });

  it('"VM Class" should contain "Regular"', async function () {
    expect(c).to.be.equal(c_1);
  });

  it('"Instance type" should contain "n1-standard-8"', async function () {
    expect(d).to.be.equal(d_1);
  });

  it('"GPU dies" should contain "1 NVIDIA Tesla V100"', async function () {
    expect(e).to.be.equal(e_1);
  });

  it('"Local SSD" should contain "2x375 GiB"', async function () {
    expect(f).to.be.equal(f_1);
  });
  it('"Region" should contain "Frankfurt"', async function () {
    expect(g).to.be.equal(g_1);
  });
  it('"Commited usage" should contain "1 Year"', async function () {
    expect(h).to.be.equal(h_1);
  });

  after(async function () {
    await calculator.close();
  });
});
