let express = require('express');
let app = express();
require('dotenv').config()

app.get("/", (require, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

app.use("/public", express.static(__dirname + "/public"))

// **5) serve JSON on a specific route
// app.get("/json", (require, res) => {
//   res.json({
//     message: "Hello json"
//   })
// })

// **6) Use the env. file to configure the app
app.get ("/json", function (require, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json(
      { "message": "HELLO JSON"}
    )
  } else {
    res.json(
      { "message": "Hello json"}
    )
  }
})

 module.exports = app;
//  http://localhost:3000/