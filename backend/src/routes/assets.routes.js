const express = require("express");
const Asset = require("../models/asset.model");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await Asset.find());
});

router.post("/", async (req, res) => {
  res.status(201).json(await Asset.create(req.body));
});

router.put("/:id", async (req, res) => {
  res.json(await Asset.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete("/:id", async (req, res) => {
  await Asset.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted" });
});

module.exports = router;
