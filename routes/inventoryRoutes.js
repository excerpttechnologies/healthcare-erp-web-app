const express = require("express");
const {
  getInventory,
  getInventoryById,
  createInventory,
  updateInventory,
  deleteInventory,
} = require("../controllers/inventoryController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getInventory).post(protect, createInventory);
router.route("/:id").get(protect, getInventoryById).put(protect, updateInventory).delete(protect, deleteInventory);

module.exports = router;
