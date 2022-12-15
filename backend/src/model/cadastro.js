const { Model, DataTypes } = require('sequelize')

class Cadastro extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            cpf: DataTypes.STRING,
            cargo: DataTypes.STRING,
            salario: DataTypes.STRING,
            apresentacao: DataTypes.STRING,
            telefone: DataTypes.STRING,
            genero: DataTypes.STRING,
            necessidades: DataTypes.STRING,
            linkedin: DataTypes.STRING,
            github: DataTypes.STRING,
            stackoverflow: DataTypes.STRING,
            skils: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Cadastro