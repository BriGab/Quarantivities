const db = require("../models");

module.exports = {

    findAll: function (req, res) {
        console.log("this is the one", req.user)
        db.User
            .find(req.user._id, {activity: req.user.activity})
            .populate("activity")
            .then(dbUser => {
                res.json(dbUser)
            })
            .catch(err => {
                res.json(err)
            })
    },

    create: function (req, res) {
        console.log("about to post", req.user);
        db.Activity
            .create(req.body)
            .then(({ _id }) => {
                console.log(_id)
                return db.User.findByIdAndUpdate(req.user._id, { $push: { activity: _id } }, { new: true })
            })
            .then(dbUser => {
                res.json(dbUser)
            })
            .catch(err => res.status(422).json(err));
    },

    mostLikes: function(req, res) {
        db.Activity
            .find({})
            .sort({ likes: -1 })
            .limit(5)
            .then(dbActivity => res.json(dbActivity))
            .catch(err => res.status(422).json(err));   
            }     
    }





