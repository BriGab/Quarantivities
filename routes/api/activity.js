const router = require("express").Router();
const activityController = require("../../controllers/activityController");
const passport = require('../../config/passport')

// Matches with "/api/activities"
router.route("/")
  .all(passport.authenticate('jwt')) //making sure these are secure routes
  .get(activityController.findAll) //getting all activities onto the card 
  .put(activityController.updateOne) //updating the likes when they are clicked
  // .get(activityController.findLikes)

module.exports = router;