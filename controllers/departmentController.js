const Department = require("../models/departmentModel");
const { getAll, getById, createOne, updateOne, deleteOne } = require("./crudController");

module.exports = {
  getDepartments: getAll(Department),
  getDepartmentById: getById(Department),
  createDepartment: createOne(Department),
  updateDepartment: updateOne(Department),
  deleteDepartment: deleteOne(Department),
};
