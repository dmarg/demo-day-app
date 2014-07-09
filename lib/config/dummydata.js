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
Company.find().remove(function() {
  Company.create({
    name: "DreamIt",
    info: "DreamIt Ventures is a venture capital firm specializing in incubation and seed investments. The firm seeks to invest between $10,000 and $30,000 in each company that goes through one of its top-ranked accelerator programs.",
    cofounders: [{name: "David Bookspan", linkedinurl: "http://www.linkedin.com/in/davidbookspan"},{name: "Michael Levinson", linkedinurl: "http://www.linkedin.com/in/levinsonmike"}, {name: "Steven Welch", linkedinurl: "http://www.linkedin.com/in/livefreeordie"}],
    founded: "2007",
    industry: "Seed Fund, Incubator, Technology, Health Care",
    email: "dreamit@dreamit.com",
    website: "http://www.dreamitventures.com/",
    image: "http://www.alleywatch.com/wp-content/uploads/2014/05/2011-DreamIt-D_brand-mark_blue_supersmall-copy.png",
    meetmelink: "http://www.meetme.so/MikeYoung",
    facebook: "https://www.facebook.com/dreamitventures",
    twitter: "https://twitter.com/DreamitVentures",
    order: 1,
  }, {
      name: 'Google',
      info: 'Google is a search and advertising service provider that aims to organize and monetize the world’s information.',
      cofounders: [{name: 'Larry Page', linkedinurl: 'http://www.linkedin.com/in/tlytle'},{name: 'Sergey Brin', linkedinurl: 'http://www.linkedin.com/pub/sergey-brin/7/94b/641'}],
      founded: 'September 7, 1998',
      industry: 'Software, Video Streaming, Information Technology, Blogging Platforms, Email, Search',
      email: 'google@gmail.com',
      website: 'http://www.google.com',
      image: 'http://schools.hwdsb.on.ca/georgerallan/files/2013/11/google-logo.jpg',
      meetmelink: "http://www.meetme.so/MikeYoung",
      facebook: "https://www.facebook.com/Google",
      twitter: "https://twitter.com/google",
      order: 2,
  }, {
      name: 'Facebook',
      info: 'Facebook is an online social networking service that allows users to connect with friends and family, and make new connections.',
      cofounders: [{name: 'Mark Zuckerberg', linkedinurl: 'http://www.linkedin.com/pub/mark-zuckerberg/0/290/362'}],
      founded: 'February 1, 2004',
      industry: 'Networking, Communities, Identity, All Students, Colleges, Facebook Applications, Social Media',
      email: 'mark@facebook.com',
      website: 'http://www.facebook.com',
      image: 'http://lauragrb.com/wp-content/plugins/easy-contact/facebook-logo-png-white-5117.png',
      meetmelink: "http://www.meetme.so/MikeYoung",
      facebook: "https://www.facebook.com/facebook",
      twitter: "https://twitter.com/facebook",
      order: 3,
  }, {
      name: 'Apple',
      info: 'Apple is a multinational corporation that designs, develops and sells consumer electronics, computer software and personal computers.',
      cofounders: [{name: 'Steve Wozniak', linkedinurl: 'http://www.linkedin.com/pub/steve-wozniak/0/116/370'},{name: 'Steve Jobs', linkedinurl: 'http://www.linkedin.com/pub/steve-jobs/59/4b5/8a6'}],
      founded: 'April 1, 1976',
      industry: 'Computers, Consumer Electronics, Hardware, Software',
      email: 'steve@apple.com',
      website: 'http://www.apple.com',
      image: 'http://upload.wikimedia.org/wikipedia/commons/a/a5/Apple_gray_logo.png',
      meetmelink: "http://www.meetme.so/MikeYoung",
      facebook: "https://www.facebook.com/pages/Apple-Inc/137947732957611",
      twitter: "https://twitter.com/applenws",
      order: 4,
  }, {
      name: 'Amazon',
      info: 'Amazon is an international e-commerce company and online retailer that sells various products such as books, movies, electronics and others.',
      cofounders: [{name: 'Jeff Bezos', linkedinurl: 'http://uk.linkedin.com/pub/jeff-bezos/48/85b/415'}],
      founded: 'May 15, 1997',
      industry: 'Consumer Goods, Groceries, Crowdsourcing, E-Commerce',
      email: 'jeff@amazon.com',
      website: 'http://www.amazon.com',
      image: 'http://cdn.dice.com/wp-content/uploads/2013/10/amazon-1.png',
      meetmelink: "http://www.meetme.so/MikeYoung",
      facebook: "https://www.facebook.com/Amazon",
      twitter: "https://twitter.com/amazon",
      order: 5,
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
