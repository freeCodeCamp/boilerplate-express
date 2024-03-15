let express = require("express");
let app = express();

console.log("Hello World");

module.exports = app;
/* app.get("/", (req, res) => {
  res.send("Hello Express");
}); */
//show html on local host
absolutePath = __dirname + "/views/index.html";
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});
cssPath = __dirname + "/public";
app.use("/public", express.static(cssPath));
