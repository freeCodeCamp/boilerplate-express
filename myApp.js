

require("dotenv").config()
let express = require('express');
let app = express();
absolutePath=__dirname + "/views/index.html";
ruta=__dirname+"/public"
console.log("Hello World");
app.get("/",(req,res)=>{
    res.sendFile(absolutePath)
})
app.use("/public",express.static(ruta))

app.get('/json',(req,res)=>{
    const mensaje=process.env['MESSAGE_STYLE']
     if(mensaje==="uppercase"){
        res.json(
            {
                "message":"HELLO JSON".toUpperCase()
            }
            );
    
     } else{
        res.json({"message":"hello json"})
     }
    });

































 module.exports = app;
