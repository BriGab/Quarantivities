const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.use("/auth", require('./authRoutes'))

router.use(function (req, res) {
    console.log(req.body)
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router

