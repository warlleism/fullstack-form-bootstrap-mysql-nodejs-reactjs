const Formulario = require('../model/cadastro')


const CreateUser = async (req, res) => {

    var { nome, email, cpf, cargo, salario, apresentacao, telefone, genero, necessidade, linkedin, github, stackoverflow, skills } = req.body

    // const user = Formulario.findOne({ where: email })

    // if (user) {
    //     console.log(user)
    //     return res.send({ status: 200, sucess: 'Email já cadastrado', icon: "info" });
    // }

    skills = skills.join()

    try {

        const formulario = await Formulario.create({ nome, email, cpf, cargo, salario, apresentacao, telefone, genero, necessidade, linkedin, github, stackoverflow, skills })

        return res.status(200).send({ status: 200, sucess: 'Cadastrado com sucesso', icon: 'success' });


    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err, icon: 'error' });
    }

}

module.exports = CreateUser