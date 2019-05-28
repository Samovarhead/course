var http = require('http');
var fs = require('fs');
var port = 3000;

var app = http.createServer(function (req, res) {
  fs.readFile('index.html', 'utf-8', function (err, data) {
    res.write(data);
    res.end();
  });
});

app.listen(port, function () {
	console.log('+port');
});