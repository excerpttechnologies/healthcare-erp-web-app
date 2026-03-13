const mongoose = require("mongoose");

const staffSchema = mongoose.Schema(
  {
    ID: { type: String, required: true, unique: true },
    Name: { type: String, required: true },
    Role: { type: String },
    Department: { type: String },
    Phone: { type: String },
    Shift: { type: String },
    Status: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Staff", staffSchema);
