'use strict'

const app = require('./server');

const PORT = process.env.PORT || 3002

app.listen(3002, () => {
  console.log('App is listening to you... And watching...On PORT: 3002')
});