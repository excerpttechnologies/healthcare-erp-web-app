const Doctor = require("../models/doctorModel");
const { getAll, getById, createOne, updateOne, deleteOne } = require("./crudController");

module.exports = {
  getDoctors: getAll(Doctor),
  getDoctorById: getById(Doctor),
  createDoctor: createOne(Doctor),
  updateDoctor: updateOne(Doctor),
  deleteDoctor: deleteOne(Doctor),
};
