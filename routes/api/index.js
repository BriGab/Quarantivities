const router = require("express").Router();
const activityRoutes = require("./activity");

// Book routes
router.use("/activities", activityRoutes);

module.exports = router;
