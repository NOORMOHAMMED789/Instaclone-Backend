const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const userData = require("./app_mongoose");
mongoose.set("strictQuery", false);
app.use(cors());

const PORT = 4000;
app.use(express.json());

const data = require("./app_mongoose");
console.log(data);

app.get("/", (req, res) => {
  res.json(userData);
});

app.listen(PORT, () => {
  console.log("server is running at the port 4000");
});
