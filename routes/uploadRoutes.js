const express = require("express");
const multer = require("multer");
const path = require("path");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "uploads"));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");
    cb(null, `${baseName}-${Date.now()}${ext}`);
  },
});

const upload = multer({ storage });

router.post("/", protect, upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.status(201).json({
    originalName: req.file.originalname,
    fileName: req.file.filename,
    path: `/uploads/${req.file.filename}`,
    size: req.file.size,
  });
});

module.exports = router;
