const Staff = require("../models/staffModel");
const { getAll, getById, createOne, updateOne, deleteOne } = require("./crudController");

module.exports = {
  getStaff: getAll(Staff),
  getStaffById: getById(Staff),
  createStaff: createOne(Staff),
  updateStaff: updateOne(Staff),
  deleteStaff: deleteOne(Staff),
};
