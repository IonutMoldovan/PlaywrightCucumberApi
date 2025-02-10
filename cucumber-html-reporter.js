// cucumber.report.js

const reporter = require('cucumber-html-reporter');

const options = {
  jsonFile: 'reports/cucumber_report.json',
  launchReport: true,
  noInlineScreenshots: false,
  output: 'reports/report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  screenshotsDirectory: 'reports/screenshots/',
  storeScreenshots: true,
  theme: 'bootstrap',
};

reporter.generate(options);