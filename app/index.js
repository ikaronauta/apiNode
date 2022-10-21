const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

global.succes = require("./helpers/reponses").succes;
global.error = require("./helpers/reponses").error;

app.use("/api/v1", require("./routes.js"));

module.exports = app;
