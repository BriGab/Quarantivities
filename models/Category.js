const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema ({
    Fitness: {
        name: "Fitness",
        activities: [
            Activity._id
        ]
    },
    Random: {
        name: "Random",
        activities: [
            Activity._id
        ]
    },
    Cooking: {
    name: "Cooking",
        activities: [
            Activity._id
        ]
    },
    Crafts: {
        name: "Crafts",
        activities: [
            Activity._id
        ]
    }
})

const Category = mongoose.model("Category", categorySchema)

module.exports = Category;