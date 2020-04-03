const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
 mongoose.connection
 .once("open", () => console.log("connected"))
 .on("error", (error) => {
    console.log("err: ", error)
 })

 const userSeed = 
     {
         userName: "Rubber Ducky",
         password: "password"
     }
 

 db.User
    .deleteMany({})
    .then(() => db.User.collection.insertOne(userSeed))
    .then(data => {
        console.log(data.result.n + "records inserted")
        process.exit(0)
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    })