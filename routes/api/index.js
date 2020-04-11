const router = require("express").Router();
const activityRoutes = require("./activity")
const messageRoutes = require("./messages");
const secureRoutes = require('./secureRoutes');


//const appointmentRoutes = require("./appointment")


//Routes
router.use("/activities", activityRoutes);
router.use("/messages", messageRoutes);
router.use('/profile', secureRoutes);

//router.use("/appointment", appointmentRoutes);

module.exports = router;
