const express = require('express');
const app = express();

app.use = (express.json());

//const port = 3007;

app.get("/", function(req, res) {
    res.send("Hello World!")
})




//Server!
// app.listen(port, () => {
//   console.log(`Server is running port on ${port}`);
// });
































 module.exports = app;
