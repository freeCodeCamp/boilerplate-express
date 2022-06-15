require('dotenv').config();
let express = require('express');// Light weight js  web framework
let app = express();



//console.log("Hello World");

/*-----------------------------------------------------------
 2. The get is the express app method.
The "/" is the root path which the network will take to get to your website path.
There is the handler which is the function that will handle the request and the responss
------------------------------------------------------------*/
/*app.get("/", function(req, res){
    res.send("Hello Express");
});*/


// 4. getting a staic file of css Place such an express file before the get method app
app.use("/public", express.static(__dirname + "/public"));

// 3. sendFile method goes and gets an static file to present to the page
app.get("/", function(req,res){
    res.sendFile(__dirname + "/views/index.html");
});

// 5. A Routing respondes to the /Json
app.get("/json",(req,res)=>{
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({"message": "HELLO JSON"});
    }
    else{res.json({"message": "Hello json"});
         }
});


































 module.exports = app;
