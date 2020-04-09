const User = require('../../models/user');
const localStrategy = require("passport-local").Strategy;

const options = {
    usernameField: "email",
    passwordField: "password",
    session: false
}

const signup = new localStrategy(options, async (email, password, done) => {
    try {
        // save information provided by user to the database
        const user = await User.create({ email, password })
        // send user info to the next middleware
        return done(null, user);
    } catch (error) {
        done(error);
    }
})

const login = new localStrategy(options, async (email, password, done) => {
    try {
        // find user associated with th email provided
        const user = await User.findOne({ email });
        if (!user) {
            return done(null, false, { message: "User not found" })
        }

        //Validate password and make sure it matches the hashed password in db
        const validate = await user.isValidPassword(password);
        if (!validate) {
            return done(null, false, { message: "wrong password" })
        }
        //Send user information to the next middelware 
        return done(null, user, { message: "logged in successfullly" })
    } catch (error) {
        return done(error)
    }
})

module.exports = {
    signup,
    login
}