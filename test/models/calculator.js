class Calculator {
  constructor() {
    this.textSearchRequest = 'Google Cloud Platform Pricing Calculator';

    this.textForInstaces = '4';

    this.vmClass = 'VM class: regular';
    this.instanceType = 'Instance type: n1-standard-8';
    this.region = 'Region: Frankfurt';
    this.localSSD = 'Local SSD: 2x375 GiB';
    this.commitmentTerm = 'Commitment term: 1 Year';
    this.totalEstimatedCostPerMonth =
      'Total Estimated Cost: USD 1,082.77 per 1 month';
    this.totalEstimatedInPost = 'USD 1,082.77';
  }
}

module.exports = new Calculator();
