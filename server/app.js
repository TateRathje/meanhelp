'use strict';

var express = require('express');
var app = express();
var path = require('path');

var PORT = process.env.PORT || 3000;

app.all('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, function() {
	console.log('Server running on ' + PORT);
});