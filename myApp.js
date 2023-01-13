let express = require('express');
let app = express();

// Meet the Node console
console.log("Hello World");

app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");
})




































 module.exports = app;
