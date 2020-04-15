const JWTstrategy = require("passport-jwt").Strategy
const ExtractJWT = require("passport-jwt").ExtractJwt;
const User = require('../../models/user')

const options = {
    //secret used to sign JWT
    secretOrKey: 'top_secret',
    // expect the user ot send the token as a query parameter with the name "secret_token"
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret_token")
}

const jwt = new JWTstrategy(options, async (token, done) => {
    try {
        console.log("TOKEN", token);
        User.findById(token._id, 'email activity')
            .then(user => {
                if(!user)
                    throw 'no user'
                return done(null, user);
            })
        //Pass the user details to the next middelware
    } catch (error) {
        done(error)
    }
})

module.exports = jwt;