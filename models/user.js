const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose")


let userSchema = new Schema({
    name: {
      type: String,
      trim: true,
      unique: true,
      required: "Username is Required"
    },
  
    username: {
      type: String,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },  

    password: {
      type: String,
      unique: true, 
      validate: [({ length }) => length >= 6, "Password should be longer."]
    },
   
    activity: [
        {
        type: Schema.Types.ObjectId,
        ref: "Activity"
        }
    ]   
});

userSchema.plugin(passportLocalMongoose);

let User = mongoose.model("User", userSchema)

module.exports = User;