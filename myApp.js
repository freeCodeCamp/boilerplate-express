let express = require('express');
let app = express();
console.log("Hello World");
/* app.get("/", (req, res)=> res.send("Hello Express")) */
let htmlPath = __dirname + "/views/index.html";
let htmlPublic = __dirname + "/public";
app.get("/", (req, res) => res.sendFile(htmlPath));
app.use("/public",express.static(htmlPublic));
//add method express static
//the method app.get use to send the petition get to server declaraded up






































module.exports = app;
