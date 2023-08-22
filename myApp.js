require('dotenv').config();
let express = require('express');
let app = express();
const port = 3000
const html_file_path= __dirname+'/views/index.html';
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log(`Hello World`)

  //res.send("Hello Express")
  res.sendFile(html_file_path)
console.log(`Example app listening on port ${port}`)

})

app.get('/json',(req,res)=>{
  if(process.env.MESSAGE_STYLE=='uppercase'){
    res.json({
      "message":"HELLO JSON"
  });

  }
  else{
    res.json({
      "message":"Hello Json"
  });
  }

    


});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




































 module.exports = app;
