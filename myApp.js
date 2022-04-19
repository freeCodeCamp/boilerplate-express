var express = require('express');
require('dotenv').config();
var app = express();


app.use("/public",express.static(__dirname +"/public"));

app.get('/',function(req,res){
  //res.send("Hello Express");
  let indexPage = __dirname + "/views/index.html";
  res.sendFile(indexPage);
});

app.get("/json",function(req, res){
  if(process.env.MESSAGE_STYLE == 'upercase')
      res.json({message:"Hello json"});
  res.json({message : "HELLO JSON"});    
})




















 module.exports = app;
