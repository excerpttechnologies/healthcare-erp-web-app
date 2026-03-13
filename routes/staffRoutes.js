const express = require("express");
const {
  getStaff,
  getStaffById,
  createStaff,
  updateStaff,
  deleteStaff,
} = require("../controllers/staffController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getStaff).post(protect, createStaff);
router.route("/:id").get(protect, getStaffById).put(protect, updateStaff).delete(protect, deleteStaff);

module.exports = router;
