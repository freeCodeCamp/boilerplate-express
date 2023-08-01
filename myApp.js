let express = require('express');
let app = express();

app.get("/", (require, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

app.use("/public", express.static(__dirname + "/public"))

app.get("/json", (require, res) => {
  res.json({
    message: "Hello json"
  })
})

 module.exports = app;
//  http://localhost:3000/