const db = require("../models");

module.exports = {
    
    findAll: function (req, res) {
        db.User
            .find({ activity: req.query.activity })
            .then()
    },


    create: function ({body}, res) {
        console.log("about to post");
        console.log(body);
        db.Activity
            .create(body)
            //need to update first param for user id
            .then(({_id}) => db.User.findOneAndUpdate({}, { $push: { activity: _id } }, { new: true } ))
            .then(dbUser => {
                res.json(dbUser)
            })
            .catch(err => res.status(422).json(err));
    },




}