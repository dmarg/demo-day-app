'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    LinkedInStrategy = require('passport-linkedin').Strategy,
    config = require('./config');

var LINKEDIN_API_KEY = config.linkedin.apiKey,
    LINKEDIN_SECRET_KEY = config.linkedin.secretKey;

/**
 * Passport configuration
 */
passport.serializeUser(function(user, done) {
  console.log("serializing: ", user);
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  console.log("deserializing:", id);
  User.findOne({
    _id: id
  }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
    done(err, user);
  });
});

// add other strategies for more authentication flexibility
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password' // this is the virtual field on the model
  },
  function(email, password, done) {
    User.findOne({
      email: email.toLowerCase()
    }, function(err, user) {
      if (err) return done(err);

      if (!user) {
        return done(null, false, {
          message: 'This email is not registered.'
        });
      }
      if (!user.authenticate(password)) {
        return done(null, false, {
          message: 'This password is not correct.'
        });
      }
      return done(null, user);
    });
  }
));

passport.use(new LinkedInStrategy({
    consumerKey: LINKEDIN_API_KEY,
    consumerSecret: LINKEDIN_SECRET_KEY,
    callbackURL: "http://localhost:9000/auth/linkedin/callback",
    profileFields: ['id', 'first-name', 'last-name', 'email-address', 'headline']
  },
  function(token, tokenSecret, profile, done) {
    // asynchronous verification, for effect...
        process.nextTick(function () {
          console.log(profile);

          User.findOne({ 'linkedin.id': profile.id}, function(err, user) {
            // if there is an error, stop everything and return that
            // ie an error connecting to the database
            if (err)
               return done(err);

            // if the user is found, then log them in
            if (user) {
               return done(null, user); // user found, return that user
            } else {
               // if there is no user found with that linkedin id, create them
              console.log(user);
              var newUser = new User();

                // set all of the linkedin information in our user model
              newUser.linkedin.id = profile.id; // set the users linkedin id
              // newUser.linkedin.token = token; // we will save the token that linkedin provides to the user
              newUser.linkedin.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
              newUser.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
              newUser.linkedin.email = profile.emails[0].value; // linkedin can return multiple emails so we'll take the first
              newUser.email = profile.emails[0].value;
          //      //newUser.telephone =
          //      newUser.email = profile.emails[0].value;
          //      newUser.profile_picture = profile._json.picture.data.url;
              newUser.provider = "linkedin";
          //      // save our user to the database
          //      console.log(newUser.profile_picture);
              newUser.save(function(err) {
                   if (err) { throw err; }

                   // if successful, return the new user
                   return done(null, newUser);
               });
            }
          });


          // return done(null, profile);
        });
  }
));



// passport.use(new LinkedInStrategy({
//           clientID: LINKEDIN_KEY,
//           clientSecret: LINKEDIN_SECRET,
//           callbackURL: "https://localhost:9000/auth/linkedin/callback",
//           scope: ['r_emailaddress', 'r_basicprofile']
//         }, function(accessToken, refreshToken, profile, done) {
//             // asynchronous verification, for effect...
//             process.nextTick(function () {
//               console.log(profile);

//               User.findOne({ 'linkedin.id': profile.id}, function(err, user) {
//                 // if there is an error, stop everything and return that
//                 // ie an error connecting to the database
//                 if (err)
//                    return done(err);

//                 // if the user is found, then log them in
//                 if (user) {
//                    return done(null, user); // user found, return that user
//                 } else {
//                    // if there is no user found with that linkedin id, create them
//                    User.count({}, function (err, count) {

//                        var newUser = new User();

//                        // set all of the linkedin information in our user model
//                        newUser.linkedin.id    = profile.id; // set the users linkedin id
//                        newUser.linkedin.token = token; // we will save the token that linkedin provides to the user
//                        newUser.linkedin.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
//                        newUser.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
//                        newUser.linkedin.email = profile.emails[0].value; // linkedin can return multiple emails so we'll take the first
//                        //newUser.telephone =
//                        newUser.email = profile.emails[0].value;
//                        newUser.rank = count+1;
//                        newUser.profile_picture = profile._json.picture.data.url;
//                        newUser.provider = "linkedin";
//                        // save our user to the database
//                        console.log(newUser.profile_picture);
//                        newUser.save(function(err) {
//                            if (err)
//                                throw err;

//                            // if successful, return the new user
//                            return done(null, newUser);
//                        });

//                    });

//                 }
//               });


//               return done(null, profile);
//             });
//             }
//         ));

module.exports = passport;

