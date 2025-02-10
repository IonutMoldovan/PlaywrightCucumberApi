Playwright Cucumber API Test Project
This repository demonstrates how to set up a Playwright API testing framework using Cucumber for testing the Rijksmuseum API.

Prerequisites
Node.js and npm (Node Package Manager) installed.
Git (for cloning the repository).
Playwright and Cucumber dependencies.
Steps to Set Up the Project
Clone the repository:

First, clone the repository to your local machine:

git clone https://github.com/IonutMoldovan/PlaywrightCucumberApi.git
cd PlaywrightCucumberApi
Install Dependencies:

Install all required dependencies using npm:

npm install
Set Up Environment:

Ensure that you have the Rijksmuseum API key (You can get one from the Rijksmuseum API documentation).
The default API URL is set as https://www.rijksmuseum.nl/api/en/collection.
API requests are configured in tests/steps/api-tests.ts.
Running Tests
1. Run Tests:
To run the tests, execute the following command:

npm run test
This will execute all the scenarios defined in the feature files (located in the tests/features/ folder). The test results will be logged to the console.

2. Generate HTML Report:
After running the tests, you can generate an HTML report using the following command:

npm run generate-report
This will generate the report in the reports/ folder. The default report file will be reports/cucumber_report.html.