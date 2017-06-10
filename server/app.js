'use strict';

var express = require('express');
var app = express();
var path = require('path');

var PORT = process.env.PORT || 3000;

// For production buind
app.use(express.static(path.join(__dirname, '../public')));

app.all('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, function() {
	console.log('Server running on ' + PORT);
});