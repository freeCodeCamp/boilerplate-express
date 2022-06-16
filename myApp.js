

require("dotenv").config()
let express = require('express');
let app = express();
absolutePath=__dirname + "/views/index.html";
ruta=__dirname+"/public"
console.log("Hello World");
// app.get("/",(req,res)=>{
//     res.sendFile(absolutePath)
// })
app.use("/public",express.static(ruta))
const mensaje=process.env['MESSAGE_STYLE']
app.get('/json',(req,res)=>{
   
     if(mensaje==="uppercase"){
        res.json(
            {"message": "HELLO JSON"}
            );
    
     } else{
        res.json({"message": "Hello json"})
     }
    });

































 module.exports = app;
