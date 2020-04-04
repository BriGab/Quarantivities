const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/activities", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
 mongoose.connection
 .once("open", () => console.log("connected"))
 .on("error", (error) => {
    console.log("err: ", error)
 })

const activitySeed = [
    {
        title: "Venus Williams' at-home Workout", 
        thumbnail: "",
        description: "Workout like the stars with this at-home workout tutorial by Venus Williams",
        href: " https://www.popsugar.com/fitness/venus-williams-instagram-at-home-workout-47344751",
        likes: 0,
        category: "Fitness",
    }
]
    db.Activity
    .deleteMany({})
    .then(() => db.Activity.collection.insertMany(activitySeed))
    .then(data => {
        console.log(data.result.n + "records inserted")
        process.exit(0)
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    });
