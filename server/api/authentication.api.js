var express = require('express');
var router = express.Router();
var User = require('../models/user');
var middle = require('../middleware');

// GET /profile
router.get('/profile', middle.requiresLogin, function(req, res, next) {
  debugger;
  User.findById(req.session.userId)
    .exec(function(error, user) {
      if (error) {
        return next(error);
      } else {
        return res.json(user);
      }
    })
});

// GET /logout
router.get('/logout', function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

// POST /login
router.post('/login', function(req, res, next) {
  debugger;
  if (req.body.user.email && req.body.user.password) {
    User.authenticate(req.body.user.email, req.body.user.password, function(error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });
  } else {
    var err = new Error('Email and password are required');
    err.status = 401;
    return next(err);
  }
});

// POST /register
router.post('/register', function(req, res, next) {
  debugger;
  if (req.body.user.email &&
    req.body.user.username &&
    req.body.user.password &&
    req.body.user.confirmPassword) {

    if (req.body.user.password !== req.body.user.confirmPassword) {
      var err = new Error('Passwords do not match.');
      err.status = 400;
      return next(err);
    };

    var userData = {
      email: req.body.user.email,
      username: req.body.user.username,
      password: req.body.user.password
    };

    User.create(userData, function(error, user) {
      if (error) {
        return next(error);
      } else {
        debugger;
        req.session.userId = user._id;
        return res.send("you just created a user");
        return res.redirect('/profile');
      }
    });

  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
});

module.exports = router;
