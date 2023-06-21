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

app.post("/:word/echo",(req,res)=>{
    const {word} = req.params;
    res.json({
        echo:word
    })
})


app.get("/name",(req,res)=>{
    let firstName = req.query.first;
    let lastName = req.query.last;
   // let {first :firstName,last: lastName} = req.query; destructuring way
    res.json({name: `${firstName} ${lastName}`});
});

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
