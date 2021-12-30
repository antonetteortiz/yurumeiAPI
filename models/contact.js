const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: String,
  emailAddress: String,
  subject: String,
  message: String,
  createdAt: Date,
});

const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;