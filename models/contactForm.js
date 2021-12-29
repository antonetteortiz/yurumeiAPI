const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactFormSchema = new Schema({
  name: String,
  emailAddress: String,
  subject: String,
  message: String,
  createdAt: Date,
});

const ContactForm = mongoose.model("ContactForm", ContactFormSchema);
module.exports = ContactForm;