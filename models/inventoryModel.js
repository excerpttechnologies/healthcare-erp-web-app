const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema(
  {
    ID: { type: String, required: true, unique: true },
    Item: { type: String, required: true },
    Category: { type: String },
    Quantity: { type: String },
    Unit: { type: String },
    Supplier: { type: String },
    Status: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("InventoryItem", inventorySchema);
