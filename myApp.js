let express = require('express');// Light weight js  web framework
let app = express();

//onsole.log("Hello World");

/*-----------------------------------------------------------
 The get is the express app method.
The "/" is the root path which the network will take to get to your website path.
There is the handler which is the function that will handle the request and the responss
------------------------------------------------------------*/
app.get("/", function(req, res){
    res.send("Hello Express");
});


































 module.exports = app;
