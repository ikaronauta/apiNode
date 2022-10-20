const route = require("express").Router();
const root = require("./root.controllers.js");

route.get("/", root.get);
