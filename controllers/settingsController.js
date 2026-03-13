const Setting = require("../models/settingModel");
const asyncHandler = require("express-async-handler");

const getSettings = asyncHandler(async (req, res) => {
  const settings = await Setting.find({});
  res.json(settings);
});

const getSettingByKey = asyncHandler(async (req, res) => {
  const setting = await Setting.findOne({ key: req.params.key });
  if (!setting) {
    res.status(404);
    throw new Error("Setting not found");
  }
  res.json(setting);
});

const upsertSetting = asyncHandler(async (req, res) => {
  const { key, value, description } = req.body;
  if (!key) {
    res.status(400);
    throw new Error("Key is required");
  }

  const updated = await Setting.findOneAndUpdate(
    { key },
    { value, description },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  res.json(updated);
});

module.exports = { getSettings, getSettingByKey, upsertSetting };
