const Laboratory = require("../models/laboratoryModel");
const { getAll, getById, createOne, updateOne, deleteOne } = require("./crudController");

module.exports = {
  getLaboratory: getAll(Laboratory),
  getLaboratoryById: getById(Laboratory),
  createLaboratory: createOne(Laboratory),
  updateLaboratory: updateOne(Laboratory),
  deleteLaboratory: deleteOne(Laboratory),
};
