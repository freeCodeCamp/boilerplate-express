var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
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

app.get("/:word/echo", function(req, res){
  res.json({"echo": req.params.word});
});

app.route("/name").get(function(req, res){
  let firstname = req.query.first;
  let lastname = req.query.last;
  let userObj = { "name": firstname+ " "+lastname};
  res.json(userObj);

}).post(function(req, res){
  let firstname = req.body.first;
  let lastname = req.body.last;
  let userObj = { "name": firstname+ " "+lastname};
  res.json(userObj);

});




























 module.exports = app;
