const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  postedDate: { type: Date, default: Date.now },
  deadline: { type: Date, required: true },
  pdfLink: { type: String, required: true }, // Google Drive PDF link
});

module.exports = mongoose.model("Notice", noticeSchema);