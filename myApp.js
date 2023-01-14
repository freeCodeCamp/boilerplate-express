let express = require('express');
let app = express();
require("dotenv").config();

app.use("/public", express.static(__dirname + "/public"));
// Meet the Node console
console.log("Hello World");

app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", function(req, res){
    let msgObj = { message: "Hello json" };
    if (process.env.MESSAGE_STYLE){
        res.json({ "message": "HELLO JSON"});
    } else res.json({ message: "Hello json" });
});



































 module.exports = app;
