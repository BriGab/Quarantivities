const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}else {
  app.use(express.static("client/public"))
}

const passport = require('./config/passport');

app.use(passport.initialize())
app.use(require('./routes'))

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

app.listen(PORT, function () {

  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!!!`);

});
