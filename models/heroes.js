const mongoose = require("../db/connection");

const heroesSchema = new mongoose.Schema({
  heroName: String,
  birthdate: String,
  photo: String,
  notableAccomplishments: String,
  description: String
});

module.exports = mongoose.model("Heroes", heroesSchema);
