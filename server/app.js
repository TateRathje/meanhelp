var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var router = require('./api/authentication.api.js');

var PORT = process.env.PORT || 3000;

var app = express();

require('./database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false} ));

var jsonParser = bodyParser.json();

// For production build
app.use(express.static(path.join(__dirname, '../public')));

// app.use('/', function(req, res) {
// 	res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// app.get('/profile', function(req, res, next) {
//   res.send("Here is your profile");
// });

app.post('/register', function(req, res, next) {
  debugger;
  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.confirmPassword) {

    if (req.body.password !== req.body.confirmPassword) {
      var err = new Error('Passwords do not match.');
      err.status = 400;
      return next(err);
    };

    var userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    };

    User.create(userData, function(error, user) {
    	if (error) {
    		return next(error);
    	} else {
    		req.session.userId = user._id;
        return res.send("you just created a user");
    		// return res.redirect('/profile');
    	}
    });

	} else {
		var err = new Error('All fields required.');
		err.status = 400;
		return next(err);
	}
});



// Dev API Root
app.use('/', router);

// Real API Root
//app.use('https://mysterious-falls-55416.herokuapp.com/api/v1/', router);

app.listen(PORT, function() {
	console.log('Server running on ' + PORT);
});