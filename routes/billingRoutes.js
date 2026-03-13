const express = require("express");
const {
  getBilling,
  getBillingById,
  createBilling,
  updateBilling,
  deleteBilling,
} = require("../controllers/billingController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getBilling).post(protect, createBilling);
router.route("/:id").get(protect, getBillingById).put(protect, updateBilling).delete(protect, deleteBilling);

module.exports = router;
