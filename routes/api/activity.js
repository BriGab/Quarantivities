const router = require("express").Router();
const activityController = require("../../controllers/activityController");
const passport = require('../../config/passport')

// Matches with "/api/activities"
router.route("/")
  .all(passport.authenticate('jwt'))
  .get(activityController.findAll)
  // .post(activityController.create)
  .put(activityController.updateOne)
  // .get(activityController.findLikes)

// Matches with "/api/activities/home"
// router.route("/home")
//   .all(passport.authenticate('jwt'))
//   .get(activityController.find)
// .put(activityController.update)
// .delete(activityController.remove);


module.exports = router;