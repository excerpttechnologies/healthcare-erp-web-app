const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema(
  {
    ID: { type: String, required: true, unique: true },
    Name: { type: String, required: true },
    Specialty: { type: String },
    Department: { type: String },
    Phone: { type: String },
    Status: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);
