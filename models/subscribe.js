const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubscribeSchema = new Schema({
  emailAddress: String,
});

const Subscribe = mongoose.model("Subscribe", SubscribeSchema);
module.exports = Subscribe;