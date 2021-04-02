var express = require('express');
var app = express();

//next

/** 4) Serve static assets  */
app.use(express.static(__dirname + '/public/'));

app.get("/", function(req, res) {
res.sendFile("/views/index.html", { root : __dirname});
});










































































 module.exports = app;
