// var http = require('http');
// var port = 3000;

// var app = http.createServer(function(req, res) {
// 	console.log(req.url);
// 	console.log(req.method);
// 	res.write('hello');
// 	res.end();
// });

// app.listen(port, function() {
// 	console.log('Server at http://localhost:3000');
// });
var http = require('http');
var port = 3000;

var app = http.createServer(function(req, res) {
	if (req.url === '/') {
		res.write('hello');
 		res.end();
	}else if (req.url === '/contact') {
		res.write('hello contact');
 		res.end();
	}
});

app.listen(port, function() {
	console.log('Server at http://localhost:3000');
});


