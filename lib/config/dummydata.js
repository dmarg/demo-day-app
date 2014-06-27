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
      cofounders: [{name: 'Larry Page', linkedinurl: 'http://www.linkedin.com/in/tlytle'},{name: 'Sergey Brin', linkedinurl: 'http://www.linkedin.com/pub/sergey-brin/7/94b/641'}],
      founded: 'September 7, 1998',
      industry: 'Software, Video Streaming, Information Technology, Blogging Platforms, Email, Search',
      email: 'google@gmail.com',
      website: 'http://www.google.com',
      image: 'http://vectorlogo.biz/wp-content/uploads/2013/01/GOOGLE-FAVICON-VECTOR-LOGO-128x128.png',
      meetmelink: "http://www.meetme.so/MikeYoung",
  }, {
      name: 'Facebook',
      info: 'Facebook is an online social networking service that allows users to connect with friends and family, and make new connections.',
      cofounders: [{name: 'Mark Zuckerberg', linkedinurl: 'http://www.linkedin.com/pub/mark-zuckerberg/0/290/362'}],
      founded: 'February 1, 2004',
      industry: 'Networking, Communities, Identity, All Students, Colleges, Facebook Applications, Social Media',
      email: 'mark@facebook.com',
      website: 'http://www.facebook.com',
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmXgHgCKy15qtlRP6658qE9ob30cVo88sRwB2S0b6quNnv97Xr_g',
      meetmelink: "http://www.meetme.so/MikeYoung",
  }, {
      name: 'Apple',
      info: 'Apple is a multinational corporation that designs, develops and sells consumer electronics, computer software and personal computers.',
      cofounders: [{name: 'Steve Wozniak', linkedinurl: 'http://www.linkedin.com/pub/steve-wozniak/0/116/370'},{name: 'Steve Jobs', linkedinurl: 'http://www.linkedin.com/pub/steve-jobs/59/4b5/8a6'}],
      founded: 'April 1, 1976',
      industry: 'Computers, Consumer Electronics, Hardware, Software',
      email: 'steve@apple.com',
      website: 'http://www.apple.com',
      image: 'http://oit2.utk.edu/macvolplace/MenuImages/apple_icon.png',
      meetmelink: "http://www.meetme.so/MikeYoung",
  }, {
      name: 'Amazon',
      info: 'Amazon is an international e-commerce company and online retailer that sells various products such as books, movies, electronics and others.',
      cofounders: [{name: 'Jeff Bezos', linkedinurl: 'http://uk.linkedin.com/pub/jeff-bezos/48/85b/415'}],
      founded: 'May 15, 1997',
      industry: 'Consumer Goods, Groceries, Crowdsourcing, E-Commerce',
      email: 'jeff@amazon.com',
      website: 'http://www.amazon.com',
      image: 'http://tosdr.org/logo/amazon.png',
      meetmelink: "http://www.meetme.so/MikeYoung",
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
