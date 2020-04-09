const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const passport = require('./config/passport');
app.use(passport.initialize())
app.use(require('./routes'))

// const routes = require("./routes/routes")
// const secureRoute = require("./routes/secureRoutes")
// // Add routes
// app.use('/', routes);
// //Plugin our jwt strategy as middleware so only verified users can access this route
// app.use('/user', passport.authenticate("jwt", { session : false }), secureRoute)


// Connect to the Mongo DB
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/activities", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection
  .once("open", () => console.log("connected"))
  .on("error", (error) => {
    console.log("err: ", error)
  })


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
