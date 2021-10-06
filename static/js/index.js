function LED1_On() {
  //alert("led on");
  console.log("semsor_1");
  //document.getElementById("sensor").innerHTML="led on";
  message = new Paho.MQTT.Message("ON");
      message.destinationName = "efromero.fie@unach.edu.ec/t1";
      client.send(message);
}

function LED1_Off(){  

  console.log("sensor_2");
  message = new Paho.MQTT.Message("OFF");
      message.destinationName = "efromero.fie@unach.edu.ec/t1";
      client.send(message);
}


function LED1_his(){  

  console.log("historial");
  message = new Paho.MQTT.Message("HIST");
      message.destinationName = "efromero.fie@unach.edu.ec/t1";
      client.send(message);
}







// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "aecajas.fie@unach.edu.ec",
    password: "andres11",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("aecajas.fie@edu.ec/t2");
    message = new Paho.MQTT.Message("");
    message.destinationName = "aecajas.fie@edu.ec/t2";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  document.getElementById("sensor").innerHTML=message.payloadString;
  }
