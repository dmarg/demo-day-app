'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    session = require('./controllers/session'),
    middleware = require('./middleware'),
    passport = require('passport');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.route('/api/Company')
    .get(api.companies);

  app.route('/api/findCurrent/?')
    .get(api.findCurrent);

   app.route('/api/findCurrentUser/?')
    .get(api.findCurrentUser);

  app.route('/api/users')
    .post(users.create)
    .put(users.changePassword);

  app.route('/api/users/me')
    .get(users.me);

  app.route('/api/users/:id')
    .get(users.show);

  app.route('/api/session')
    .post(session.login)
    .delete(session.logout);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  //LinkedIn Authentication

  app.get('/auth/linkedin',
    passport.authenticate('linkedin', { scope: ['r_basicprofile', 'r_emailaddress', 'r_contactinfo', 'w_messages'] }));

  app.get('/auth/linkedin/callback',
    passport.authenticate('linkedin', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });

  // app.get('/auth/linkedin', passport.authenticate('linkedin', { state: 'email'  }));
  // app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
  //    successRedirect: '/',
  //    failureRedirect: '/login'
  // }));

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get( middleware.setUserCookie, index.index);
};