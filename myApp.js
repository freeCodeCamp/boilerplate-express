var express = require('express');
var app = express();

const absolutePath = __dirname + "/views/index.html"
app.get("/", function(req, res) {
  res.sendFile(absolutePath);
})

 module.exports = app;
