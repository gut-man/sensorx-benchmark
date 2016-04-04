var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var i = 0;

app.use(bodyparser.text());

app.get('/bench/esp8266', function (req, res) {
  i++;
  console.log(i+" "+Date.now() +" "+req.body);
  //res.send("ok");
});

app.post('/bench/arduino', function(req,res){
  i++;
  console.log(i+" "+Date.now() +" "+req.body);
  //res.send("ok");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
