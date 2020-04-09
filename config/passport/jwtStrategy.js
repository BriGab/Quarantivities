const JWTstrategy = require("passport-jwt").Strategy
const ExtractJWT = require("passport-jwt").ExtractJwt;

const options = {
    //secret used to sign JWT
    secretOrKey: 'top_secret',
    // expect the user ot send the token as a query parameter with the name "secret_token"
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret_token")
}

const jwt = new JWTstrategy(options, async (token, done) => {
    try {
        console.log("TOKEN", token);
        //Pass the user details to the next middelware
        return done(null, token.user);
    } catch (error) {
        done(error)
    }
})

module.exports = jwt;