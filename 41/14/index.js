var http = require('http');

var app = http.createServer(function(req, res) {
	res.write('hello');
	res.end();
});

app.listen(3000, function() {
	console.log('Server at http://localhost:3000');
});

