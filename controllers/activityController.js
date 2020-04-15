const db = require("../models");

module.exports = {

    findAll: function (req, res) {
        db.Activity
            .find({ category: req.query.category})
            .then(dbActivity => res.json(dbActivity))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Activity
            .create(req.body)
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
        db.Activity
            .findOneAndUpdate(
                { _id: req.body.id }, 
                { $inc: { likes: 1 } },
                { upsert: true }
            )
            .then(dbActivity => res.json(dbActivity))
            .catch(err => res.status(422).json(err));
    },

    mostCooking: function(req, res) {
        db.Activity
            .find({ "category": "Cooking" })
            .sort({ "likes": -1 })
            .limit(1)
            .then(dbActivity => res.json(dbActivity))
            .catch(err => res.status(422).json(err));        
    }, 

    mostFitness: function(req, res) {

    },

    mostRandom: function(req, res) {

    },

    mostCrafts: function(req, res) {

    }
}