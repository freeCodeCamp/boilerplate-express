let express = require('express');
let app = express();
console.log('Hello World')

/*app.get("/", (request, response) => {
 response.send('Hello Express')
})*/

app.get("/", (request, response) => {
 response.sendFile(_dirname + '/view/index.html')
})

































 module.exports = app;
