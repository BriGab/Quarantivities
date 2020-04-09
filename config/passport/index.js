const passport = require("passport");
const localStrategy = require('./localStrategy')
const jwtStrategy = require('./jwtStrategy')

//Passport middleware to handle user registrations
passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});


passport.use('signup', localStrategy.signup);

//Passport middleware to handle user login
passport.use('login', localStrategy.login);

//Verifying that the token sent by the user is valid
passport.use('jwt', jwtStrategy)

module.exports = passport;