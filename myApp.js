let express = require('express');
let app = express();






console.log('Hello World')


/*app.get("/", (request, response) => {
 response.send('Hello Express')
})*/


app.get("/", (request, response) => {
 response.sendFile(__dirname + '/views/index.html')
})


app.use(express.static(__dirname + '/public'))


































 module.exports = app;
