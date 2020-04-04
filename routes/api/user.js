const router = require("express").Router();
const userController = require("../../controllers/userController");


// Matches with "/api/signup"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/signup/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;