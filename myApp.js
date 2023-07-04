let express = require('express');
let app = express();
// app.get('/', (req, res) => {
//     console.log("Hello, world!"); // Add this line
//     res.send("Hello, world!");
//   });
const htmlFile = __dirname + '/views/index.html'
function firstReq(req, res) {
    res.sendFile(htmlFile);
    // res.send('Hello Express')
    
}
app.get('/', firstReq)
 console.log("Hello World")

 module.exports = app;
