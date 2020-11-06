const mongoose = require("../db/connection");

const musicSchema = new mongoose.Schema({
  artistName: String,
  title: String,
  genre: String,
  label: String,
  producer: String,
  year: String,
  tracks: [String]
});

module.exports = mongoose.model("Music", musicSchema)