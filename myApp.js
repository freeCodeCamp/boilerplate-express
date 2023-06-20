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

app.use(function middleware(req,res,next){
 next();   
});

app.get('/now',(req,res,next)=>{
     req.time = new Date().toString();
     next();
},
(req,res)=>{
    res.send({
        time:req.time
    });
}
);

app.get("/json",(req,res)=>{
    if(process.env.MESSAGE_STYLE == "uppercase"){
    res.json({
        "message":"Hello json"
    });
}
else{
    res.json({
        "message": "HELLO JSON"
    });
}
});




























 module.exports = app;
