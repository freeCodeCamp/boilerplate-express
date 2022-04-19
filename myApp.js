var express = require('express');
var app = express();
console.log("Hello World");

app.use("/public",express.static(__dirname +"/public"));

app.get('/',function(req,res){
  //res.send("Hello Express");
  let indexPage = __dirname + "/views/index.html";
  res.sendFile(indexPage);
});




































 module.exports = app;
