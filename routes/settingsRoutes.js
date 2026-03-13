const express = require("express");
const { getSettings, getSettingByKey, upsertSetting } = require("../controllers/settingsController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getSettings);
router.get("/:key", protect, getSettingByKey);
router.post("/", protect, upsertSetting);

module.exports = router;
