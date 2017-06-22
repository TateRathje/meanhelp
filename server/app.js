var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var router = require('./api/authentication.api.js');

var PORT = process.env.PORT || 3000;

var app = express();

require('./database');

// For production build
app.use(express.static(path.join(__dirname, '../public')));

app.all('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Dev API Root
app.use('http://localhost:8080/', router);

// Real API Root
//app.use('https://mysterious-falls-55416.herokuapp.com/api/v1/', router);

app.listen(PORT, function() {
	console.log('Server running on ' + PORT);
});