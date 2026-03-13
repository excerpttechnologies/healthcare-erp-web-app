const BedWard = require("../models/bedsWardsModel");
const { getAll, getById, createOne, updateOne, deleteOne } = require("./crudController");

module.exports = {
  getBedsWards: getAll(BedWard),
  getBedWardById: getById(BedWard),
  createBedWard: createOne(BedWard),
  updateBedWard: updateOne(BedWard),
  deleteBedWard: deleteOne(BedWard),
};
