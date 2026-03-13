const Ambulance = require("../models/ambulanceModel");
const { getAll, getById, createOne, updateOne, deleteOne } = require("./crudController");

module.exports = {
  getAmbulances: getAll(Ambulance),
  getAmbulanceById: getById(Ambulance),
  createAmbulance: createOne(Ambulance),
  updateAmbulance: updateOne(Ambulance),
  deleteAmbulance: deleteOne(Ambulance),
};
