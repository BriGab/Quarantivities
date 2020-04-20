const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;


const activitySchema = new Schema({
    title: {
        type: String,
        required: "Please enter a title.",
        trim: true
    },
    description: {
        type: String,
        trim: true,
    },
    href: {
        type: String,
        required: "Enter the url of the activity.",
        trim: true
    },
    likes: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        ref: "Category",
        required: true
    }
});

activitySchema.pre("save", function (next) {
    this.title = this.title.charAt(0).toUpperCase() + this.title.slice(1)
    console.log("this title", this.title)
    next();
})



const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
