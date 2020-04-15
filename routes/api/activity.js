const router = require("express").Router();
const activityController = require("../../controllers/activityController");
const profileController = require("../../controllers/profileController");
const passport = require('../../config/passport')

// Matches with "/api/activities/"
router.route("/")
  .all(passport.authenticate('jwt'))
  .get(activityController.findAll)
  .put(activityController.updateOne)
  // .post(profileController.create)
  
// router.route("/:id")
//   .put(activityController.updateLikes)
  // .get(activityController.findLikes)


// Matches with "/api/activities/home"
// router.route("/home")
//   .all(passport.authenticate('jwt'))
//   .get(activityController.find)
// .put(activityController.update)
// .delete(activityController.remove);


module.exports = router;