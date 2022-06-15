let express = require('express');
let app = express();
absolutePath=__dirname + views/index.html
console.log("Hello World");
app.get("/",(req,res)=>{
    res.sendFile(absolutePath)
})



































 module.exports = app;
