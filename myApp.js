var express = require('express');
var app = express();

const absolutePath = __dirname + "/views/index.html"

app.use(express.static(__dirname));

// it will be called before every request
app.use(function logger(req, res, next) {
  console.log(req.method+" "+ req.path +" - "+ req.ip);
  next();
})

app.get("/json", function(req, res) {
  let response = "Hello json";
  if(process.env.MESSAGE_STYLE == "uppercase") {
    response = response.toUpperCase();
  }
  res.json({"message": response });
})

app.get("/", function(req, res) {
  res.sendFile(absolutePath);
})

module.exports = app;
