let express = require('express');
let app = express();

app.get('/', (req, res) => {
    console.log('Hello World');
    res.send('Hello World'); // This line is optional and sends "Hello World" as a response to the browser
  });































 module.exports = app;
