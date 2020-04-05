const db = require("../models");

module.exports = {

    findAll: function(req, res) {
        console.log(res.data)
        db.Activity
        .find(req.query)
        db.Activity
        .then(dbActivity => res.json(dbActivity))
        .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Activity
          .findById(req.params.id)
          .then(dbActivity => res.json(dbActivity))
          .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Activity
          .create(req.body)
          .then(dbActivity => res.json(dbActivity))
          .catch(err => res.status(422).json(err));
    }



}