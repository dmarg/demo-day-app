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
      image: 'http://vectorlogo.biz/wp-content/uploads/2013/01/GOOGLE-FAVICON-VECTOR-LOGO-128x128.png',
  }, {
      name: 'Facebook',
      info: 'Facebook is an online social networking service that allows users to connect with friends and family, and make new connections.',
      cofounders: 'Mark Zuckerberg',
      founded: 'February 1, 2004',
      industry: 'Networking, Communities, Identity, All Students, Colleges, Facebook Applications, Social Media',
      email: 'mark@facebook.com',
      website: 'http://www.facebook.com',
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmXgHgCKy15qtlRP6658qE9ob30cVo88sRwB2S0b6quNnv97Xr_g',
  }, {
      name: 'Apple',
      info: 'Apple is a multinational corporation that designs, develops and sells consumer electronics, computer software and personal computers.',
      cofounders: 'Steve Jobs and Steve Wozniak',
      founded: 'April 1, 1976',
      industry: 'Computers, Consumer Electronics, Hardware, Software',
      email: 'steve@apple.com',
      website: 'http://www.apple.com',
      image: 'http://oit2.utk.edu/macvolplace/MenuImages/apple_icon.png',
  }, {
      name: 'Amazon',
      info: 'Amazon is an international e-commerce company and online retailer that sells various products such as books, movies, electronics and others.',
      cofounders: 'Jeff Bezos',
      founded: 'May 15, 1997',
      industry: 'Consumer Goods, Groceries, Crowdsourcing, E-Commerce',
      email: 'jeff@amazon.com',
      website: 'http://www.amazon.com',
      image: 'http://tosdr.org/logo/amazon.png',
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
