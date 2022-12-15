const sequelize = require("sequelize");
const config = require("../config/config");
const Cadastro = require('../model/cadastro')

const connection = new sequelize(config);

Cadastro.init(connection);

module.exports = connection;