const { Model, DataTypes } = require('sequelize')

class Cadastro extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            cpf: DataTypes.NUMBER,
            cargo: DataTypes.STRING,
            salario: DataTypes.NUMBER,
            apresentacao: DataTypes.STRING,
            numero: DataTypes.NUMBER,
            genero: DataTypes.STRING,
            necessidades: DataTypes.STRING,
            linkedin: DataTypes.STRING,
            github: DataTypes.STRING,
            stackoverflow: DataTypes.STRING,
            skils: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Cadastro