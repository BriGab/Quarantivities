const db = require("../models");

module.exports = {

    findAll: function (req, res) {  //Grabs user specific activities to display
        db.User
            .find(req.user._id, { activity: req.user.activity })
            .populate({path:"activity", options: { sort: { title: 1 }}})
            .then(dbUser => {
                res.json(dbUser)
            })
            .catch(err => {
                res.json(err)
            })
    },

    create: function (req, res) { //Creates user activities
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

    mostLikes: function (req, res) { //Pulls top liked activities
        db.Activity
            .find({})
            .sort({ likes: -1 })
            .limit(5)
            .then(dbActivity => res.json(dbActivity))
            .catch(err => res.status(422).json(err));
    },

    remove: function (req, res) { //Removes a user created activity
        console.log("delete", req.query.id)
        db.Activity
            .findById({ _id: req.query.id })
            .then(dbActivity => dbActivity.remove())
            .then(dbActivity => res.json(dbActivity))
            .catch(err => {
                res.json(err)
            })
    }
}





