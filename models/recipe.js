const mongoose = require("../db/connection");

const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  photo: String,
  servings: String,
  ingredients: [String],
  steps: [String],
  author: String
});

module.exports = mongoose.model("Recipe", recipeSchema);
