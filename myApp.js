let express = require('express');
let app = express();
require('dotenv').config();

let bodyParser = require('body-parser');

app.get("/", (req, res) => {
    res.sendFile( __dirname + '/views/index.html');
    app.use('/public', express.static(__dirname + '/public'));
});

app.get("/json", (req, res, next) => {
    let returnMessage = process.env.MESSAGE_STYLE == "uppercase" ? "HELLO JSON" : "Hello json";

    console.log(process.env.MESSAGE_STYLE);
    console.log(returnMessage);
    res.json({"message": returnMessage});

    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.send({ time: req.time })
});

app.get('/:word/echo', (req, res) => {
    res.send({ echo: req.params.word });
});

app.get('/name', (req, res) => {
    var firstName = req.query.first;
    var lastName = req.query.last;
    // var { first: firstName, last: lastName } = req.query;
    
    res.json({ name: `${firstName} ${lastName}` });
});


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/name", (req, res) => {
    var { first: firstName, last: lastName } = req.body;
    res.json({ name: `${firstName} ${lastName}` });
})

module.exports = app;
