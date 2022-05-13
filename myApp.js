var express = require('express');
require('dotenv').config();
var app = express();


app.use("/public",express.static(__dirname +"/public"));

app.get('/',function(req,res){
  //res.send("Hello Express");
  let indexPage = __dirname + "/views/index.html";
  res.sendFile(indexPage);
});



 if(process.env.MESSAGE_STYLE === "uppercase"){
   app.get("/json",function(req,res){
       res.json({message: "Hello json"});
   });
    
 }else{
  app.get("/json",function(req,res){
    res.json({message: "HELLO JSON"});
  });

 }

 





















 module.exports = app;
