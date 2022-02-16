var express = require('express');
var app = express();

console.log('Hello World')

app.get('/', async (_req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});




































 module.exports = app;
