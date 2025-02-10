import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { request, Response } from 'playwright';

const API_URL = 'https://www.rijksmuseum.nl/api/en/collection';
const API_KEY = '0fiuZFh4';
let context: any;
let response: Response;

Given('I have the API URL and key', async function () {
  context = await request.newContext();
});

When('I make a GET request to retrieve the collection', async function () {
  response = await context.get(`${API_URL}?key=${API_KEY}&ps=10`);
});

When('I make a GET request for the object with object number {string}', async function (objectNumber: string) {
  response = await context.get(`${API_URL}/${objectNumber}?key=${API_KEY}`);
});

Given('I have the API URL', async function () {
  this.apiUrl = 'https://www.rijksmuseum.nl/api/en/collection';  // API URL is initialized here
});

When('I make a GET request with missing API key', async function () {
  response = await context.get(`${API_URL}`);
});

Then('the response status should be {int}', async function (statusCode: number) {
  expect(response.status()).toBe(statusCode);
});

Then('the response should contain a list of art objects', async function () {
  const data = await response.json();
  expect(data.artObjects).toBeInstanceOf(Array);
  expect(data.artObjects.length).toBeGreaterThan(0);
});

Then('the response should contain the object number {string}', async function (objectNumber: string) {
  const data = await response.json();
  expect(data.artObject).toHaveProperty('objectNumber', objectNumber);
});

Then('the response body should indicate an error', async function () {
  const data = await response.json();
  expect(data.artObject).toBeNull();
  expect(data.artObjectPage).toBeNull();
});
