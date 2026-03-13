const MedicalRecord = require("../models/medicalRecordModel");
const { getAll, getById, createOne, updateOne, deleteOne } = require("./crudController");

module.exports = {
  getMedicalRecords: getAll(MedicalRecord),
  getMedicalRecordById: getById(MedicalRecord),
  createMedicalRecord: createOne(MedicalRecord),
  updateMedicalRecord: updateOne(MedicalRecord),
  deleteMedicalRecord: deleteOne(MedicalRecord),
};
