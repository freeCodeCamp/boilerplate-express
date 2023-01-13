let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));
// Meet the Node console
console.log("Hello World");

app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/json", function(req, res){
    res.json({ message: "Hello json" });
})



































 module.exports = app;
