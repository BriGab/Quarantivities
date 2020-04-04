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
        category: "Fitness"
    }, 
    {
        title: "Black Bean Burger", 
        thumbnail: "",
        description: "A yummy way to eat semi-healthy and enjoy it!",
        href: "https://sallysbakingaddiction.com/best-black-bean-burgers/",
        likes: 0,
        category: "Cooking"
    },
    {
        title: "How to Cut your Own Hair", 
        thumbnail: "",
        description: "Don't let those locks get out of hand in the quarantine!",
        href: "https://www.allure.com/story/how-to-cut-your-own-hair",
        likes: 0,
        category: "Random"
    },
    {
        
        title: "Bookbinding 101", 
        thumbnail: "",
        description: "Japanese book binding technique to make your own journal",
        href: "https://www.designsponge.com/2013/03/bookbinding-101-japanese-four-hold-binding.html",
        likes: 0,
        category: "Crafts"
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
