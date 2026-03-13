const InventoryItem = require("../models/inventoryModel");
const { getAll, getById, createOne, updateOne, deleteOne } = require("./crudController");

module.exports = {
  getInventory: getAll(InventoryItem),
  getInventoryById: getById(InventoryItem),
  createInventory: createOne(InventoryItem),
  updateInventory: updateOne(InventoryItem),
  deleteInventory: deleteOne(InventoryItem),
};
