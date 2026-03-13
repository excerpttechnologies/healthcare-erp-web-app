const asyncHandler = require("express-async-handler");

const getAll = (Model) =>
  asyncHandler(async (req, res) => {
    const query = {};

    // Simple search across string fields (optional)
    if (req.query.q) {
      const regex = new RegExp(req.query.q, "i");
      query.$or = Object.keys(Model.schema.paths)
        .filter((key) => Model.schema.paths[key].instance === "String")
        .map((key) => ({ [key]: regex }));
    }

    const items = await Model.find(query).sort({ createdAt: -1 });
    res.json(items);
  });

const getById = (Model) =>
  asyncHandler(async (req, res) => {
    const item = await Model.findById(req.params.id);
    if (!item) {
      res.status(404);
      throw new Error("Not found");
    }
    res.json(item);
  });

const createOne = (Model) =>
  asyncHandler(async (req, res) => {
    const item = new Model(req.body);
    const created = await item.save();
    res.status(201).json(created);
  });

const updateOne = (Model) =>
  asyncHandler(async (req, res) => {
    const item = await Model.findById(req.params.id);
    if (!item) {
      res.status(404);
      throw new Error("Not found");
    }

    Object.assign(item, req.body);
    const updated = await item.save();
    res.json(updated);
  });

const deleteOne = (Model) =>
  asyncHandler(async (req, res) => {
    const item = await Model.findById(req.params.id);
    if (!item) {
      res.status(404);
      throw new Error("Not found");
    }

    await item.remove();
    res.json({ message: "Deleted" });
  });

module.exports = { getAll, getById, createOne, updateOne, deleteOne };
