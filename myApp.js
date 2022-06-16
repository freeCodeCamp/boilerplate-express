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

app.get("/json",(req,res)=>{
    
    var mensaje=(process.env.MESSAGE_STYLE==='uppercase')? "HELLO JSON":"hello json"
    res.json(
        {
            message:mensaje
            
        }
        );
});

































 module.exports = app;
