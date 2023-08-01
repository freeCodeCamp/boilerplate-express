let express = require('express');
let app = express();

app.get("/", (require, res) => {
  res.sendFile(__dirname + "/views/index.html")
})



 module.exports = app;
//  http://localhost:3000/