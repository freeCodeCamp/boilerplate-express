var express = require('express');
var app = express();
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

// Get Query Parameter Input from the Client
app.get("/name", (req, res) => {
  const firstName = req.query.first;
  const lastName = req.query.last;
  res.send({ name: `${firstName} ${lastName}` });
});

// Get Route Parameter Input from the Client
app.get("/:word/echo", (req, res) => {
  const word = req.params.word;
  res.send({ echo: word });
});

// Get Data from POST Requests
app.post("/name", (req, res) => {
  const firstName = req.body.first;
  const lastName = req.body.last;
  res.send({ name: `${firstName} ${lastName}` });
});

module.exports = app;
