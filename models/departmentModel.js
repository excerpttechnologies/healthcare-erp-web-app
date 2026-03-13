const mongoose = require("mongoose");

const departmentSchema = mongoose.Schema(
  {
    ID: { type: String, required: true, unique: true },
    Name: { type: String, required: true },
    Head: { type: String },
    Staff: { type: String },
    Beds: { type: String },
    Floor: { type: String },
    Status: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Department", departmentSchema);
