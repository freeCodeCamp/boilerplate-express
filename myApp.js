let express = require('express');
let app = express();

app.use((req,res,next) => {
  var method = req.method, path = req.path, ip = req.ip;
  console.log(method + " " + path + " - " + ip);
  next();
})

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
