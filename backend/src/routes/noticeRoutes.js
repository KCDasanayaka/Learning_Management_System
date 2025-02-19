const express = require("express");
const noticeController = require("../controllers/noticeController");

const router = express.Router();

router.post("/notices", noticeController.createNotice);
router.get("/notices", noticeController.getAllNotices);
router.put("/notices/:id", noticeController.updateNotice);
router.delete("/notices/:id", noticeController.deleteNotice);

module.exports = router;