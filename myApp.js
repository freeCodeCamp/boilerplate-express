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
  
  console.log(req.method+" "+req.path+" - "+req.ip);
  
});

app.get("/now", function(req, res, next){
    req.time = new Date().toString();
    next();
}, function(req, res) {
  res.json({time: req.time});
});





























 module.exports = app;
