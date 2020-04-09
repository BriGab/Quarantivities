const { User } = require("../models");
const bodyParser = require("body-parser");
const passport = require("passport");
const JWT = require("jsonwebtoken")
const AuthController = {};


module.exports = {

    register: (req, res) => {
        Users = new User({ username: req.body.username, email: req.body.email});
        // console.log(Users)

        User.register(Users, req.body.password, function(err, user) {
            console.log(req.body.password)
            console.log(Users)
            if(err) {
                // console.log(user)
                res.json({ success: false, message: "Your account could not be saved Error: ", err})
            } else {
                res.json({ success: true, message: "Your account has been saved"})
            }
        })
    },

    doLogin: (req, res) => {
        if(!req.body.username) {
            res.json({ success: false, message: "Username was not given"})
        } else {
            if(!req.body.password) {
                res.json({ success: false, message: "Password was not given"})
            } else {
                passport.authenticate("local", function(err, user, info) {
                    if(err) {
                        res.json({success: false, message: err})
                    } else {
                        if(! user) {
                            res.json({ success: false, message: 'username or password incorrect'})
                        } else {
                        req.login(user, function(err) {
                            if(err) {
                                res.json({ success: false, message: err})
                            } else {
                                const token = jwt.toString({userId : user._id, username: user.username}, secretkey,{expiresIn: '24h'})
                                res.json({succes: true, message: "Authentication Successful", token: token})
                            }
                        })
                        }
                    }
                }) (req,res)
            }
        }
    }
}