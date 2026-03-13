const express = require("express");
const {
  getBedsWards,
  getBedWardById,
  createBedWard,
  updateBedWard,
  deleteBedWard,
} = require("../controllers/bedsWardsController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getBedsWards).post(protect, createBedWard);
router.route("/:id").get(protect, getBedWardById).put(protect, updateBedWard).delete(protect, deleteBedWard);

module.exports = router;
