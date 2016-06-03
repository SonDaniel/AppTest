var express = require('express');
var app = express();
var io = require('socket.io')(http);

var port = process.env.PORT || 8080;

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('a user disconnected');
	});

	socket.on('chat message', function(msg){
		console.log('message: ' + msg);
		io.emit('chat message', msg);
	});

});


app.listen(port, function(){
	console.log('Our app is running on http://localhost:' + port);
});