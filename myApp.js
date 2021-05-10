var express = require('express');
var app = express();

const absolutePath = __dirname + "/views/index.html"

app.use(express.static(__dirname));

app.get("/json", function(req, res) {
  let response = "Hello json";
  if(process.env.MESSAGE_STYLE === "uppercase") {
    response = response.toUpperCase();
    console.log({process.env.MESSAGE_STYLE});
  }
  res.json({"message": response });
})

app.get("/", function(req, res) {
  res.sendFile(absolutePath);
})

module.exports = app;
