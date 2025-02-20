// controllers/eventController.js
const Event = require('../models/Event');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Create an event and upload images (if provided)
exports.createEvent = async (req, res) => {
  try {
    const { name, date } = req.body;
    // Create event first
    let event = new Event({ name, date });
    await event.save();

    // If files are uploaded, process them
    if (req.files && req.files.length > 0) {
      const uploadedImages = [];
      for (const file of req.files) {
        const fileStr = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
        const result = await cloudinary.uploader.upload(fileStr, { folder: 'events' });
        uploadedImages.push({ url: result.secure_url, public_id: result.public_id });
      }
      event.images = uploadedImages;
      await event.save();
    }
    res.status(201).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Get all events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single event by id
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an event (and optionally new images)
exports.updateEvent = async (req, res) => {
  try {
    const { name, date } = req.body;
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });

    event.name = name || event.name;
    event.date = date || event.date;

    // If new files are uploaded, delete old images and upload new ones
    if (req.files && req.files.length > 0) {
      if (event.images && event.images.length > 0) {
        for (const img of event.images) {
          await cloudinary.uploader.destroy(img.public_id);
        }
      }
      const uploadedImages = [];
      for (const file of req.files) {
        const fileStr = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
        const result = await cloudinary.uploader.upload(fileStr, { folder: 'events' });
        uploadedImages.push({ url: result.secure_url, public_id: result.public_id });
      }
      event.images = uploadedImages;
    }
    await event.save();
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an event and its images from Cloudinary
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });
    if (event.images && event.images.length > 0) {
      for (const img of event.images) {
        await cloudinary.uploader.destroy(img.public_id);
      }
    }
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
