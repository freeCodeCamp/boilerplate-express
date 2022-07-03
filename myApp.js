let express = require('express');
let app = express();
console.log("Hello World");
/* app.get("/", (req, res)=> res.send("Hello Express")) */
let htmlPath = __dirname + "/views/index.html" ;
app.get("/", (req, res)=> res.sendFile(htmlPath));
express.static("/public")





































 module.exports = app;
