const express = require("express");
const Router = express.Router();
const read = require('./read')

Router.get("/read", read)

module.exports = Router;