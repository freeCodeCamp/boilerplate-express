let express = require('express');
let app = express();

console.log("Hello World");

app.get("/", function(req, res) {
  absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
})

app.get("/json",function(req,res){
  var message = "Hello json";
  if(process.env.MESSAGE_STYLE == "uppercase"){
    message = message.toUpperCase();
  }
  res.json({"message": message});
})

app.use("/public", express.static(__dirname + "/public"))






























module.exports = app;
