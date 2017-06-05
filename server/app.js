'use strict';

var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.all('/*', function(req, res) {
	res.send(`\
		<!DOCTYPE html>\
		<html lang="en">\
			<head>\
				<title>'MEAN APP'</title>\
			</head>\
			<body>\
				<h1>Hey Yo!</h1>\
				<script src="bundle.js"></script>\
			</body>\
		</html>\
		`);
});

app.listen(PORT, function() {
	console.log('Server running on ' + PORT);
});