const router = require("express").Router();
const activityController = require("../../controllers/activityController");
const passport = require('../../config/passport')

// Matches with "/api/activities"
router.route("/api/activities")
  .get(activityController.findAll)
  .post(activityController.create);

// Matches with "/api/activities/:id"
router
  .route("/api/activities/:id")
  .get(activityController.findById)
  // .put(activityController.update)
  // .delete(activityController.remove);


module.exports = router;