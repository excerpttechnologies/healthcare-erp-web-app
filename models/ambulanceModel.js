const mongoose = require("mongoose");

const ambulanceSchema = mongoose.Schema(
  {
    ID: { type: String, required: true, unique: true },
    Vehicle: { type: String },
    Type: { type: String },
    Driver: { type: String },
    Phone: { type: String },
    Location: { type: String },
    Status: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ambulance", ambulanceSchema);
