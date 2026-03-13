const mongoose = require("mongoose");

const medicalRecordSchema = mongoose.Schema(
  {
    ID: { type: String, required: true, unique: true },
    Patient: { type: String, required: true },
    Doctor: { type: String, required: true },
    Date: { type: Date },
    Diagnosis: { type: String },
    Type: { type: String },
    Status: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MedicalRecord", medicalRecordSchema);
