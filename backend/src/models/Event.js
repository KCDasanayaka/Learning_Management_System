// models/Event.js
const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  public_id: { type: String, required: true }
});

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    date: { type: Date, required: true },
    images: [ImageSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);
