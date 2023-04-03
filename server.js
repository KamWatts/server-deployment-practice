'use strict'

const express = require('express');
const capitalize = require('./capitalize/capitalize');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/capitalize-me', function(request, response, next) {
  if (request.query.message) {
    let UpperMessage = capitalize(request.query.message);
    response.send(UpperMessage);
  } else {
    response.send('Please attach a message')
  }
});

module.exports = app;