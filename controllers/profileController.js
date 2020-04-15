const db = require("../models");

module.exports = {

    findAll: function (req, res) {
        db.User
            .find({ activity: req.query.activity })
            .then()
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




}