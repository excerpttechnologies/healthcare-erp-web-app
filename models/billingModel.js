const mongoose = require("mongoose");

const billingSchema = mongoose.Schema(
  {
    Invoice: { type: String, required: true, unique: true },
    Patient: { type: String, required: true },
    Date: { type: Date },
    Amount: { type: String },
    Method: { type: String },
    Due: { type: Date },
    Status: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Billing", billingSchema);
