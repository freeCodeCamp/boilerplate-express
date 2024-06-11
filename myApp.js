require('dotenv').config()
let express = require('express');
let app = express();
let bodyParser = require('body-parser')

app.use(function(req, res, next){
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html')
})

app.use('/public', express.static(__dirname + '/public'))

app.get('/json', function (req, res) {
    if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json({ "message": "HELLO JSON" })
    } else {
        res.json({ "message": "Hello json" }) 
    }
})

app.get('/now', function (req,res,next){
    req.time = new Date().toString()
    next()
}, function(req, res){
    res.send({time : req.time})
})

app.get('/:word/echo', function (req, res){
    res.send({ echo: req.params.word })
})

app.route('/name').get(function(req, res){
    const { first: firstname, last: lastname } = req.query
    res.json({ name: `${firstname} ${lastname}`})
}).post(function(req,res){
    const { first: firstname, last: lastname} = req.body
    res.json({ name: `${firstname} ${lastname}`})
})


















module.exports = app;