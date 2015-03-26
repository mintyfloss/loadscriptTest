var express = require('express');
var app = express();

app.get('/index.html', function (req, res) {
    return res.sendFile(__dirname + '/public/index.html');
});

app.get('/main_built.js', function (req, res) {
    return res.sendFile(__dirname + '/public/main_built.js');
});

app.get('/script.js', function (req, res) {
	var response;

	setTimeout(function () {
		response = res.sendFile(__dirname + '/public/script.js');
	}, 2000);

    return response;
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

})