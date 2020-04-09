const router = require("express").Router();
const activityRoutes = require("./activity");
const userRoutes = require("./user");
const appointmentRoutes = require("./appointment")

// Book routes
router.use("/activities", activityRoutes);

router.use("/signup", userRoutes);

router.use("/appointment", appointmentRoutes);

module.exports = router;
