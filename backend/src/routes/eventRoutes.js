// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const upload = require('../middleware/upload');

// Create event with multiple images (max 10)
router.post('/', upload.array('images', 10), eventController.createEvent);

// Get all events
router.get('/', eventController.getEvents);

// Get single event by id
router.get('/:id', eventController.getEventById);

// Update event with optional new images
router.put('/:id', upload.array('images', 10), eventController.updateEvent);

// Delete event
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
