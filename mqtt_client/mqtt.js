
var  lan = 1;

var mqtt    = require('mqtt');
if(lan == 1)
	var client  = mqtt.connect('mqtt://192.168.2.110');
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
  // message is Buffer
  console.log(Date.now() +" "+message.toString());
});


