const express = require('express');
const app = express();
require("dotenv").config();

app.use("/public", express.static(__dirname + "/public"));


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

// #4

app.use("/public", express.static(__dirname + "/public")); 


// #5

// app.get("/json", (req, res) => {
//   res.json({ message: "Hello json" });
// });


// #6

app.get("/json", (req, res) => {
  const mySecret = (process.env["MESSAGE_STYLE"] ?? "").toLowerCase();
  console.log(mySecret);
  if (mySecret === "uppercase") {
    res.json({ message: "HELLO JSON" });
    console.log("HELLO JSON");
  } else {
    res.json({ message: "Hello json" });
    console.log("hello json");
  }
});

// #7

const middleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

app.get("/now", middleware, (req, res) => {
  res.send({
    time: req.time
  });
});



