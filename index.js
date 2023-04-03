'use strict'

const app = require('./server');

const PORT = process.env.PORT || 3002

app.listen(`${PORT}`, () => {
  console.log(`App is listening to you... And watching...On PORT:${PORT}`)
});