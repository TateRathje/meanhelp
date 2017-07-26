var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var path = require('path');
var db = require('./database');
var authRoutes = require('./api/authentication.api.js');
var messageRoutes = require('./api/message.api.js');

var PORT = process.env.PORT || 3000;

var app = express();



// use sessions for tracking logins
app.use(session({
	secret: 'it is good to love',
	resave: true,
	saveUninitialized: false,
	store: new MongoStore({
		mongooseConnection: db
	})
}));

app.use(function(req, res, next) {
	res.locals.currentUser = req.session.userId;
	next();
});

// For production build
app.use(express.static(path.join(__dirname, '../public')));

// app.all('/*', function(req, res) {
// 	res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Dev API Roots
app.use('/', authRoutes);
app.use('/message', messageRoutes);

// Real API Root
//app.use('/api/v1/', router);

app.listen(PORT, function() {
	console.log('Server running on ' + PORT);
});