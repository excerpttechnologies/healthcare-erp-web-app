const Appointment = require("../models/appointmentModel");
const { getAll, getById, createOne, updateOne, deleteOne } = require("./crudController");

module.exports = {
  getAppointments: getAll(Appointment),
  getAppointmentById: getById(Appointment),
  createAppointment: createOne(Appointment),
  updateAppointment: updateOne(Appointment),
  deleteAppointment: deleteOne(Appointment),
};
