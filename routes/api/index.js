const router = require("express").Router();
const activityRoutes = require("./activity");
const secureRoutes = require('./secureRoutes')

//Routes
router.use("/activities", activityRoutes);

router.use('/profile', secureRoutes)

module.exports = router;
