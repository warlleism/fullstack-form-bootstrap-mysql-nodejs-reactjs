const express = require("express");
const Router = express.Router();
const readAll = require('./read')
const register = require('./create')

Router.get("/readAll", readAll)

Router.post("/register", register)

module.exports = Router;