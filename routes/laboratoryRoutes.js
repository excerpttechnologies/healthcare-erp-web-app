const express = require("express");
const {
  getLaboratory,
  getLaboratoryById,
  createLaboratory,
  updateLaboratory,
  deleteLaboratory,
} = require("../controllers/laboratoryController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getLaboratory).post(protect, createLaboratory);
router.route("/:id").get(protect, getLaboratoryById).put(protect, updateLaboratory).delete(protect, deleteLaboratory);

module.exports = router;
