const express = require("express");
const Router = express.Router();
const readAll = require('./read')

Router.get("/readAll", readAll)

module.exports = Router;