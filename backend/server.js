const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");

const noticeRoutes = require("./src/routes/noticeRoutes");
const eventRoutes = require("./src/routes/eventRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to mongooDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", noticeRoutes);
app.use("/api/events", eventRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

// Check the PORT
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
