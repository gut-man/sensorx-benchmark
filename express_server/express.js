var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var i = 0;

app.use(bodyparser.text());

app.get('/', function (req, res) {
  res.send("Express running");
});

app.post('/bench/esp8266', function (req, res) {
  console.log(Date.now() +";"+req.body);
  //res.send("ok");
});

app.post('/bench/arduino', function(req,res){
  console.log(Date.now() +";"+req.body);
  //res.send("ok");
})

app.listen(63070, function () {
  console.log('Express auf Port 63070 gestartet!');
});
