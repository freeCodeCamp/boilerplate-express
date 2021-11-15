var express = require('express');
var app = express();

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

console.log("Hello World")




 module.exports = app;
