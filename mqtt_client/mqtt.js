var mqtt    = require('mqtt');

var lan = 1;
var i = 0;

if(lan == 1)
	var client  = mqtt.connect('mqtt://127.0.0.1');
else
	var client  = mqtt.connect('mqtt://test.mosquitto.org');
var t_star  = "";
var t_stop ="";
client.on('connect', function () {
  client.subscribe('bench/arduino');
  client.subscribe('bench/esp8266');
  //client.publish('presence', 'Hello mqtt');
});

client.on('message', function (topic, message) {
  i++;
  console.log(i+";"+Date.now() +";"+message);
});


