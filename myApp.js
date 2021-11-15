var express = require('express');
var app = express();
require("dotenv").config();

// Implement a Root-Level Request Logger Middleware
app.use("/", function (req, res, next) {
  const string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next()
});

// Chain Middleware to Create a Time Server
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({ time: req.time });
  }
);

app.use("/public", express.static(__dirname + "/public"));
    

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (request, response) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
     response.send({ message: "Hello json".toUpperCase()});
    } else {
    response.send({ message: "Hello json"});
    }
    
});





module.exports = app;
