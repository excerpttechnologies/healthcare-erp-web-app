const Billing = require("../models/billingModel");
const { getAll, getById, createOne, updateOne, deleteOne } = require("./crudController");

module.exports = {
  getBilling: getAll(Billing),
  getBillingById: getById(Billing),
  createBilling: createOne(Billing),
  updateBilling: updateOne(Billing),
  deleteBilling: deleteOne(Billing),
};
