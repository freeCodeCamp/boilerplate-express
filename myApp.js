let express = require('express');
let app = express();

console.log("hello world")

app.get("/",function(req,res){
    res.send("Hello Express");
})

app.get("/",(req,res)=>{
    res.send(__dirname+ "/public/index.html");
});

app.use(express.static(__dirname + "/public"));

app.use("/public",express.static(__dirname + "/public"));

app.get("/json",(req,res)=>{
    res.json({
        "message":"Hello json"
    });
});




























 module.exports = app;
