const mongoose = require("mongoose");

const bedsWardsSchema = mongoose.Schema(
  {
    Bed: { type: String, required: true, unique: true },
    Ward: { type: String },
    Room: { type: String },
    Floor: { type: String },
    Patient: { type: String },
    Type: { type: String },
    Status: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BedWard", bedsWardsSchema);
