const mangoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "recipe name is required"
    },
    ingredients: {
        type: String,
    },
    directions: {
        type:String
    },

    author: {
        type: String,
        required: "author is required"
    },

    date: { type: Date, default: Date.now }

});

const Recipe = mangoose.model("Recipe, recipeSchema");

module.exports = Recipe;