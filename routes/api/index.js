const router = require("express").Router();
const activityRoutes = require("./activity");
const userRoutes = require("./user");

// Book routes
router.use("/activities", activityRoutes);

router.use("/signup", userRoutes);

module.exports = router;
