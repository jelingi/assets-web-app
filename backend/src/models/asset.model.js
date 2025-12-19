const mongoose = require("mongoose");

const AssetSchema = new mongoose.Schema(
  {
    name: String,
    type: String,
    serialNumber: String,
    status: String,
    assignedTo: String,
    location: { type: String, default: '' },
    notes: { type: String, default: '' },

   history: {
      type: [Object],
      default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Asset", AssetSchema);
