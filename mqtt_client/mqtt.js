var mqtt    = require('mqtt');

var lan = 0;

if(lan == 1)
	var client  = mqtt.connect('mqtt://127.0.0.1');
else
	var client  = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', function () {
  client.subscribe('bench/arduino');
  client.subscribe('bench/esp8266');
  //client.publish('presence', 'Hello mqtt');
});

client.on('message', function (topic, message) {
  console.log(Date.now() +";"+message);
});


