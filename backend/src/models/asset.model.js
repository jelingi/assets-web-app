const mongoose = require("mongoose");

const AssetSchema = new mongoose.Schema(
  {
    name: String,
    type: String,
    serialNumber: String,
    status: String,
    assignedTo: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Asset", AssetSchema);
