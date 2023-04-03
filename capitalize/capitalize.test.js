'use strict'

const capitalize = require('./capitalize');

describe('As a user I want a way to capitalize my strings', () => {

  test('Should capitalize a string', () => {
    let output = capitalize('kameron');
    expect(output).toEqual('KAMERON');
  });
});