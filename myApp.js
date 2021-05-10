var express = require('express');
var app = express();

const absolutePath = __dirname + "/views/index.html"

app.use(express.static(__dirname));

app.get("/json", function(req, res) {
  res.json({"message": "Hello json" });
})

app.get("/", function(req, res) {
  res.sendFile(absolutePath);
})

module.exports = app;
