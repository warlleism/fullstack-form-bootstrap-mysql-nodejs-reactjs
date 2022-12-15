const Formulario = require('../model/cadastro')


const CreateUser = async (req, res) => {

    var { nome, email, cpf, cargo, salario, apresentacao, telefone, genero, necessidade, linkedin, github, stackoverflow, skills } = req.body

    skills = skills.join()

    try {

        const formulario = await Formulario.create({ nome, email, cpf, cargo, salario, apresentacao, telefone, genero, necessidade, linkedin, github, stackoverflow, skills })

        return res.status(200).send({ status: 200, sucess: 'Cadastrado com sucesso' });


    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }

}

module.exports = CreateUser