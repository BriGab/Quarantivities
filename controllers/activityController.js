const db = require("../models");

module.exports = {

    findAll: function (req, res) {
        console.log(req.query)
        db.Activity
            .find({})
            .then(dbActivity => res.json(dbActivity))
            .catch(err => res.status(422).json(err));
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
    },
    updateOne: function(req, res) {
        console.log("I am here");
        console.log(req.body);
        console.log("req.likes", req.body);
        db.Activity
            .findOneAndUpdate(
                { _id: req.body.id }, 
                { $inc: { likes: 1 } },
                { upsert: true }
            )
            .then(dbActivity => res.json(dbActivity))
            .catch(err => res.status(422).json(err));
    }
    
    // updateOne: function(req, res) {
    //     console.log("I am here");
    //     console.log(req.params.id);
    //     db.Activity
    //         .update(
    //             { _id: req.params.id }, 
    //             { $inc: { likes: 1 } },
                
    //         )
    //         .then(dbActivity => res.json(dbActivity))
    //         .catch(err => res.status(422).json(err));
    // }
        // updateOne: function (req, res) {
        //     db.Activity.findById(req.params.id )
        //     .then(likes => {
        //         likes.likes = req.body.likes;
                
        //         likes.save()
        //             .then(() => res.json(dbActivity))
        //             .catch(err => res.status(400).json("Error:" + err));
        //     })
        //     .catch(err => res.status(400).json("Error:" + err));

        // }
    

}