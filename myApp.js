let express = require('express');
let app = express();

app.get('/', (require, res) => {
  res.send("Hello Express")
})



 module.exports = app;
//  http://localhost:3000/