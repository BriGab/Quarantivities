const db = require("../models");

module.exports = {

    findAll: function (req, res) {
        db.Activity
            .find({ category: req.query.category})
            .sort({title: 1})
            .then(dbActivity => res.json(dbActivity))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Activity
            .findById(req.params.id)
            .then(dbActivity => res.json(dbActivity))
            .catch(err => res.status(422).json(err));
    },
    updateOne: function(req, res) {
        console.log("update", req.body.id)
        db.Activity
            .findOneAndUpdate(
                { _id: req.body.id }, 
                { $inc: { likes: 1 } },
                { upsert: true }
            )
            .then(dbActivity => res.json(dbActivity))
            .catch(err => res.status(422).json(err));
    }

}