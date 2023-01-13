const express = require('express');
const app = express();



// #1

//console.log("Hello world!");

// #2

// app.get("/", function(req, res) {
//     res.send("Hello Express!")
// }); 

// #3

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});


