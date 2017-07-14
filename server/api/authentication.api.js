var express = require('express');
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport'); 
var authRoutes = express.Router();
var User = require('../models/user');
var middle = require('../middleware');

// GET /profile
authRoutes.get('/profile', middle.requiresLogin, function(req, res, next) {
  User.findById(req.session.userId)
    .exec(function(error, user) {
      if (error) {
        return next(error);
      } else {
        return res.json(user);
      }
    })
});

// PUT /profile/:id
authRoutes.put('/profile/:id', function(req, res, next) {
  var id = req.params.id;
  var user = req.body;
  var newSkills = req.body.userInfo.skills;
  User.findByIdAndUpdate(id, { $set: { skills: newSkills }}, {new: true}, function(err, user) {
    if (err) {
      return next(err);
    }
    res.json(user);
  }) 
});

// GET /logout
authRoutes.get('/logout', function(req, res, next) {
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
authRoutes.post('/login', function(req, res, next) {
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
authRoutes.post('/register', function(req, res, next) {
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

authRoutes.post('/sendmessage', function(req, res) {
  debugger;
  var options = {
    auth: {
      api_key: process.env.SENDGRID_API || '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' 
    }
  }
  var mailer = nodemailer.createTransport(sgTransport(options));
  mailer.sendMail(req.body, function(error, info) {
    if (error) {
      res.status('401').json({err: info});
    } else {
      res.status('200').json({success: true});
    }
  }); 
});

module.exports = authRoutes;
