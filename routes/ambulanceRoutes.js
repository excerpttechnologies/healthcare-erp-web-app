const express = require("express");
const {
  getAmbulances,
  getAmbulanceById,
  createAmbulance,
  updateAmbulance,
  deleteAmbulance,
} = require("../controllers/ambulanceController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getAmbulances).post(protect, createAmbulance);
router.route("/:id").get(protect, getAmbulanceById).put(protect, updateAmbulance).delete(protect, deleteAmbulance);

module.exports = router;
