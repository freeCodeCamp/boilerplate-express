let express = require('express');
let app = express();
require('dotenv').config()

app.use((request, response, next) => {
  console.log(request.method + " " + request.path + " - " + request.ip);
  next();
});






console.log('Hello World')


/*app.get("/", (request, response) => {
 response.send('Hello Express')
})*/

app.use('/public', express.static(__dirname + '/public'));

app.get("/", (request, response) => {
 response.sendFile(__dirname + '/views/index.html')
})


let message = {"message": "Hello json"};
/*app.get('/json', (request, response) => {
  response.json(message)
})*/


app.get("/json", (request, response) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response.json({ message: "HELLO JSON" });
  } else {
    response.json(message);
  }
});


app.get('/now', (request, response, next) => {
  request.time = new Date().toString()
  next()
} , (request, response) => {
  response.json({'time' : request.time})
})


app.get('/:word/echo', (request, response) => {
  response.json({echo : request.params.word})
})




























 module.exports = app;
