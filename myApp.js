let bodyParser = require('body-parser')
let express = require('express');
let app = express();


app.use(bodyParser.urlencoded({extended: false}));


app.use("/public", express.static(__dirname + "/public"));

app.use("/", function(req, res, next) {
  const method = req.method;
  const path = req.path;
  const ip = req.ip;
  console.log(`${method} ${path} - ${ip}`);

  // res.sendFile(`${__dirname}/views/index.html`)
  next();
})

app.get("/json", function(req, res) {
  let message = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    message.toUpperCase();
    console.log("Uppercasing now");
  }

  console.log(process.env['MESSAGE_STYLE'], message)

  res.json({ "message": message });
});


app.get('/now',
  function(req, res, next) {
    console.log(`@${Date()}`)
    req.time = new Date().toString(); // create a new key ("time") with value of the current date and time converted into a string
    console.log(`!${req.time}`)
    next();
  },
  function(req, res) {
    res.send({ time: req.time })
  }
)

app.get('/:word/echo', (req, res) => {
  const word = req.params.word;
  res.send({ echo: word })
})

app.get('/name', (req, res) => {
  const firstName = req.query.first;
  const lastName = req.query.last;

  res.send({ name: `${firstName} ${lastName}` })
})

app.post('/name', (req, res) => {
  const firstName = req.body.first;
  const lastName = req.body.last;
  res.send({name: `${firstName} ${lastName}` })
})





























module.exports = app;
