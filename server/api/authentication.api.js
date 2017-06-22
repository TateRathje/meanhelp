var express = require('express');
var router = express.Router();
var User = require('../models/user');
var middle = require('../middleware');



router.post('/register', function(req, res, next) {
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

router.get('/profile', function(req, res, next) {
  debugger;
  res.send("Here is your profile");
});



module.exports = router;