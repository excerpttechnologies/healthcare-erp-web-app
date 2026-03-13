const mongoose = require("mongoose");

const patientSchema = mongoose.Schema(
  {
    ID: { type: String, required: true, unique: true },
    Name: { type: String, required: true },
    Age: { type: Number },
    Gender: { type: String },
    Doctor: { type: String },
    Status: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);
