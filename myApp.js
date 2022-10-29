let express = require('express');
let app = express();
 
const absolutePath = __dirname + '/public/style.css';

app.use('/public/style.css', express.static(absolutePath) );
app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
})




































 module.exports = app;
