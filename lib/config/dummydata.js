'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Company = mongoose.model('Company');

/**
 * Populate database with sample application data
 */

  // name: String,
  // info: String,
  // cofounders: String,
  // founded: String,
  // industry: String,
  // email: String,
  // website: String

//Clear old things, then add things in
Company.find({}).remove(function() {
  Company.create({
      name: 'Google',
      info: 'Google is a search and advertising service provider that aims to organize and monetize the world’s information.',
      cofounders: 'Larry Page and Sergey Brin',
      founded: 'September 7, 1998',
      industry: 'Software, Video Streaming, Information Technology, Blogging Platforms, Email, Search',
      email: 'google@gmail.com',
      website: 'http://www.google.com',
  }, {
      name: 'Facebook',
      info: 'Facebook is an online social networking service that allows users to connect with friends and family, and make new connections.',
      cofounders: 'Mark Zuckerberg',
      founded: 'February 1, 2004',
      industry: 'Networking, Communities, Identity, All Students, Colleges, Facebook Applications, Social Media',
      email: 'mark@facebook.com',
      website: 'http://www.facebook.com',
  }, function() {
      console.log('finished populating companies');
    }
  );
});

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, function() {
      console.log('finished populating users');
    }
  );
});
