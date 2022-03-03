//let mySecret = process.env['MESSAGE_STYLE']
var express = require('express');
var app = express();
var myMessage = 'Hello json';
console.log("Hello World");




app.get("/", (req, res) => {
    res.sendFile(
      __dirname +  "/views/index.html"
      );
     
});


app.get("/json", (req, res) => {

    if (process.env['MESSAGE_STYLE'] === "uppercase") {
         res.json({ "message": "HELLO JSON" })
    } else {
         res.json({ "message": "Hello json" })
    }
    
    

  })
//
  

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));




























module.exports = app;
clon