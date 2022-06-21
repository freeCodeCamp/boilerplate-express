const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("dotenv").config();

const PORT = 3005;
//Get Query Parameter Input from the Client  Example http://localhost:3005/name/?first=mohammad&last=alamin
app.get("/name", function (req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`,
  });
});
//Implement a Root-Level Request Logger Middleware
app.use((req, res, next) => {
  console.log(req.method + " " + req.path + "-" + req.ip);
  next();
});
//Serve an HTML File
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
//Serve Static Assets
app.use("/public", express.static(__dirname + "/public"));
//// Serve JSON on a Specific Route
// app.get("/json",(req,res)=>{
//     res.json({
//         "message": "HELLO JSON"
//     })
// })

//Use the .env File
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});
//Chain Middleware to Create a Time Server
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time,
    });
  }
);
//Get Route Parameter Input from the Client
app.get("/:word/echo", (req, res) => {
  console.log(req.params);
  let { word } = req.params;
  res.json({
    echo: word,
  });
});
app.listen(process.env.PORT || PORT, () => {
  console.log("Hello World");
  console.log(`The server started listening on port ${PORT}`);
});
module.exports = app;
