const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api"); //this is referring to our own API the one we are creating with our db

router.use("/api", apiRoutes);

router.use(function(req,res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router

