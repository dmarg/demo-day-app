'use strict';

var mongoose = require('mongoose'),
    Company = mongoose.model('Company');

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