const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const noticeRoutes = require('./src/routes/noticeRoutes');

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', noticeRoutes);

// Connect to mongooDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB Successfully");
  })
  .catch((error) => console.error(error));

// Check the PORT
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });