const Patient = require("../models/patientModel");
const { getAll, getById, createOne, updateOne, deleteOne } = require("./crudController");

module.exports = {
  getPatients: getAll(Patient),
  getPatientById: getById(Patient),
  createPatient: createOne(Patient),
  updatePatient: updateOne(Patient),
  deletePatient: deleteOne(Patient),
};
