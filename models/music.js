const mongoose = require("../db/connection");

const musicSchema = new mongoose.Schema({
  artistName: String,
  title: String,
  genre: String,
  year: String,
  link: String,
  artwork: String
});

module.exports = mongoose.model("Music", musicSchema)