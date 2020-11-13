var express = require('express');
var app = express();

//lesson one
console.log("Hello World");

//lesson two
// app.get("/", function(req, res) {
//   res.send('Hello Express');
// });

//lesson three
 app.get("/", function(req, res) {
   res.sendFile(__dirname + "/views/index.html");
 });

//lesson four
app.use(express.static(__dirname + "/public"));

//lesson five
app.get("/json", function(req, res) {

  if(process.env.MESSAGE_STYLE == "uppercase"){
    res.json({"message": "HELLO JSON"});
  }else {
    res.json({"message": "Hello json"});
  }
  
})





























 module.exports = app;
