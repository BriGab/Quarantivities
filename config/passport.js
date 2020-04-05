import jwtSecret from "./jwtConfig";
import bcrypt from "./bcrypt";
const User = require('./models/user');

const BCRYPT_SALT_ROUNDS = 12;

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));
 
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());