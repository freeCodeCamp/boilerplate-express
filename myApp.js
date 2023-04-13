let express = require('express');
let app = express();






console.log('Hello World')


/*app.get("/", (request, response) => {
 response.send('Hello Express')
})*/

app.use('/public', express.static(__dirname + '/public'));

app.get("/", (request, response) => {
 response.sendFile(__dirname + '/views/index.html')
})





































 module.exports = app;
