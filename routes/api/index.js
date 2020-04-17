const router = require("express").Router();
const activityRoutes = require("./activity")
const messageRoutes = require("./messages");
const secureRoutes = require('./secureRoutes');

//Routes
router.use("/activities", activityRoutes);
router.use("/messages", messageRoutes);
router.use('/profile', secureRoutes);

module.exports = router;
