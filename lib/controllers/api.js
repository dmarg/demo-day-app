'use strict';

var mongoose = require('mongoose'),
    Company = mongoose.model('Company'),
    User = mongoose.model('User');

/**
 * Get awesome things
 */
exports.companies = function(req, res) {
  return Company.find(function (err, companies) {
    if (!err) {
      return res.json(companies);
    } else {
      return res.send(err);
    }
  });
};

exports.findCurrent = function (req, res) {
  return Company.findOne(req.query, function (err, company) {
    if (!err) {
      return res.json(company);
    } else {
      return res.send(err);
    }
  });
};

exports.findCurrentUser = function (req, res) {
  return User.findOne(req.query, function (err, user) {
    if (!err) {
      return res.json(user);
    } else {
      return res.send(err);
    }
  });
};