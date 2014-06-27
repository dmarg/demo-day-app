'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Company Schema
 */

 var FounderSchema = new Schema({
  name: String,
  linkedinurl: String
 });

var CompanySchema = new Schema({
  name: String,
  info: String,
  cofounders: [
    FounderSchema
  ],
  founded: String,
  industry: String,
  email: String,
  website: String,
  image: String,
  meetmelink: String
});

/**
 * Validations
 */
// ThingSchema.path('awesomeness').validate(function (num) {
//   return num >= 1 && num <= 10;
// }, 'Awesomeness must be between 1 and 10');

mongoose.model('Company', CompanySchema);
