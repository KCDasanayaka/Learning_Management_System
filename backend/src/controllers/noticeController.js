const Notice = require("../models/Notice");

// Create a new notice
exports.createNotice = async (req, res) => {
  try {
    const { title, deadline, pdfLink } = req.body;
    const notice = new Notice({ title, deadline, pdfLink });
    await notice.save();
    res.status(201).json(notice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all notices
exports.getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find();
    res.status(200).json(notices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a notice
exports.updateNotice = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, deadline, pdfLink } = req.body;
    const notice = await Notice.findByIdAndUpdate(
      id,
      { title, deadline, pdfLink },
      { new: true }
    );
    res.status(200).json(notice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a notice
exports.deleteNotice = async (req, res) => {
  try {
    const { id } = req.params;
    await Notice.findByIdAndDelete(id);
    res.status(200).json({ message: "Notice deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};