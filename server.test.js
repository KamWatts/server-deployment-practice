'use strict'

const supertest = require('supertest');

const app = require('./server');
const request = supertest(app);

describe('As a user I want to send a request and get a capitalized message', () => {

  test('Should return KAMERON when sending a GET request to /capitalize-me', async () => {

  let response = await request.get('/capitalize-me?message=Kameron');
  expect(response.text).toEqual('KAMERON');

  });
});