var express = require('express');
var app = express();
require("dotenv").config();

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
