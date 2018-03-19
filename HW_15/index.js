var http = require('http');
var port = 3000;

var event = require('events').EventEmitter;
var logger = new event();

logger.on('logIn', function () {
	var loginTime = new Date ();
	console.log ('Время входа: ' + loginTime);
});
logger.on('someAction', function () {
	var actionTime = new Date ();
	console.log ('Время перехода на страницу регистрации: ' + actionTime);
});
logger.on('logOut', function () {
	var logoutTime = new Date ();
	console.log ('Время выхода: ' + logoutTime);
});

var server = http.createServer(function (req, res) {
	if (req.url == '/') {
		logger.emit('logIn');
		res.end();
	} else if (req.url === '/registration') {
		logger.emit('someAction');
		res.end();
	} else if (req.url === '/out') {
		logger.emit('logOut');
		res.end();
	}
}).listen(port, function () {
	console.log('Go to localhost:3000');
});

//**********************
//npm install forever -g