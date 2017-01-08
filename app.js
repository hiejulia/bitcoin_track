var express = require('express');
var path = require('path');
var app = express();//express
var server = require('http').Server(app);//server
var io = require('socket.io')(server);//socket io
var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));

server.listen(port, function() {
  console.log("Listening on port " + port);
});
