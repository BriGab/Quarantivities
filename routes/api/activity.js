const router = require("express").Router();
const activityController = require("../../controllers/activityController");


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


// const con = {
//   getAll: function (req, res) { },
//   addOne: function (req, res) { },
//   getOne: function (req, res) { },
//   updateOne: function (req, res) { },
//   insertInoOne: function (req, res) { },
//   deleteOne: function (req, res) { },
// }

// router.route("/")
//   .get(con.getAll)
//   .post(con.addOne)

// router.get("/", con.getAll)

// router.post("/", con.addOne)

// router.route("/:id")
//   .all(middleware)
//   .get(con.getOne)
//   .put(con.updateOne)
//   .post(con.insertInoOne)
//   .delete(con.deleteOne)

// router.get("/:id", middleware, con.getOne)

// router.put("/:id", middleware, con.updateOne)

// router.post("/:id", middleware, con.insertInoOne)

// router.delete("/:id", middleware, con.deleteOne)

module.exports = router;