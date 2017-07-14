var express = require('express');
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport'); 
var messageRoutes = express.Router();
var User = require('../models/user');
var middle = require('../middleware');

// POST /sendmail
messageRoutes.post('/sendmessage', function(req, res) {
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
      res.status('200').json({message: req.body});
    }
  }); 
});

module.exports = messageRoutes;