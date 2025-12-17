require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const assetRoutes = require("./routes/assets.routes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/assets", assetRoutes);

app.listen(3000, () => console.log("Backend running on port 3000"));
