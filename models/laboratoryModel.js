const mongoose = require("mongoose");

const laboratorySchema = mongoose.Schema(
  {
    ID: { type: String, required: true, unique: true },
    Patient: { type: String, required: true },
    Test: { type: String },
    Doctor: { type: String },
    Date: { type: Date },
    Priority: { type: String },
    Status: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Laboratory", laboratorySchema);
