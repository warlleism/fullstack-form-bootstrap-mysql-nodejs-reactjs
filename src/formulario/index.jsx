import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from "../components/select";
import './style.scss'

const Formulario = () => {

    const dados_pessoas_initial = {
        nome: 'initial',
        email: 'initial',
        cpf: 'initial',
        cargo: 'initial',
        salario: 'initial',
        apresentacao: 'initial',
        telefone: 'initial',
        genero: 'initial',
        necessidade: 'initial',
        linkedin: 'initial',
        github: 'initial',
        stack: 'initial',
        skills: []
    }

    const [dadosPessoais, setDadosPessoais] = useState(dados_pessoas_initial)

    const [data, setData] = useState([])
    const [skills, setSkills] = useState()

    useEffect(() => {
        fetch("http://localhost:3003/readAll")
            .then(res => res.json())
            .then(data => {
                setData(data)
                setSkills(data.skils.split(','))
            })
    }, [])

    const Validacao = (valid, nome) => {
        if (valid) {
            return (
                <>
                    <Form.Text className="text-muted">
                        campo {nome ? `de ${nome}` : false} não preenchido.
                    </Form.Text>
                </>
            )
        }
    }

    const EnviarDados = (event) => {
        event.preventDefault()
    }

    window.addEventListener('scroll', () => {
        const user = document.getElementById('user')
        const phone = document.getElementById('phone')
        const social = document.getElementById('social')

        if (window.scrollY >= 0) {
            user.style.maxWidth = '70px'
            phone.style.maxWidth = '60px'
            user.style.border = 'solid 2px #05f1db'
            phone.style.border = 'solid 0px #05f1db'
        }

        if (window.scrollY >= 328) {
            user.style.maxWidth = '60px'
            phone.style.maxWidth = '80px'
            social.style.maxWidth = '60px'
            user.style.border = 'solid 0px #05f1db'
            social.style.border = 'solid 0px #05f1db'
            phone.style.border = 'solid 2px #05f1db'
        }

        if (window.scrollY >= 918) {
            phone.style.maxWidth = '60px'
            social.style.maxWidth = '70px'
            social.style.border = 'solid 2px #05f1db'
            phone.style.border = 'solid 0px #05f1db'
        }
    })

    return (
        <div className="conteiner-user-info">
            {console.log(skills)}
            <div className="time-line">
                <a href="#person-info">
                    <img src={require('../image/user.png')} alt="" id="user" />
                </a>
                <div className="line"></div>
                <a href="#person-cont">
                    <img src={require('../image/telephone.png')} alt="" id="phone" />
                </a>
                <div className="line"></div>
                <a href="#person-social">
                    <img src={require('../image/github.png')} alt="" id="social" />
                </a>
            </div>

            <Form onSubmit={EnviarDados}>

                <div className="personal-info" id="person-info">

                    <Form.Group className="mb-3 field" controlId="formBasicEmail">
                        <Form.Label>Nome completo:</Form.Label>
                        <Form.Control type="text" placeholder="Maria da Silva" required onChange={(e) => setDadosPessoais({ ...dadosPessoais, nome: e.target.value })} />
                        {Validacao(dadosPessoais.nome == '', 'nome')}
                    </Form.Group>

                    <Form.Group className="mb-3 field" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="nome@examplo.com" required onChange={(e) => setDadosPessoais({ ...dadosPessoais, email: e.target.value })} />
                        {Validacao(dadosPessoais.email == '', 'email')}

                    </Form.Group>

                    <div className="inline-field">

                        <Form.Group className="mb-3 field" controlId="formBasicEmail">
                            <Form.Label>CPF:</Form.Label>
                            <Form.Control
                                type="number"
                                value={dadosPessoais.cpf}
                                required
                                placeholder="00000000000"
                                onChange={(e) => setDadosPessoais({ ...dadosPessoais, cpf: e.target.value.length > 11 ? dadosPessoais.cpf : e.target.value })} />
                            {
                                dadosPessoais.cpf.length >= 13
                                    ?
                                    <Form.Text className="text-muted">
                                        formato incorreto
                                    </Form.Text>
                                    :
                                    false
                            }
                            {Validacao(dadosPessoais.cpf == '', 'cpf')}
                        </Form.Group>

                        <Form.Group className="mb-3 field" controlId="formBasicEmail">
                            <Form.Label>Cargo:</Form.Label>
                            <Form.Control type="text" placeholder="Administrador" required onChange={(e) => setDadosPessoais({ ...dadosPessoais, cargo: e.target.value })} />
                            {Validacao(dadosPessoais.cargo == '', 'cargo')}
                        </Form.Group>

                        <Form.Group className="mb-3 field" controlId="formBasicEmail">
                            <Form.Label>Pretensão salárial R$:</Form.Label>
                            <Form.Control type="number" placeholder="1200" required onChange={(e) => setDadosPessoais({ ...dadosPessoais, salario: e.target.value })} />
                            {Validacao(dadosPessoais.salario == '', 'pretensão salárial')}
                        </Form.Group>
                    </div>

                </div>

                <div className="personal-info" id="person-cont">

                    <Form.Group className="mb-3 field" controlId="formBasicEmail">
                        <Form.Label>Apresentação:</Form.Label>
                        <Form.Control as="textarea" style={{ height: '300px' }} required onChange={(e) => setDadosPessoais({ ...dadosPessoais, apresentacao: e.target.value })} />
                        {Validacao(dadosPessoais.apresentacao == '', 'apresentação')}
                    </Form.Group>

                    <div className="inline-field">

                        <Form.Group className="mb-3 field" controlId="formBasicEmail">
                            <Form.Label>Whatsapp:</Form.Label>
                            <Form.Control type="text" placeholder="(55)999999999" required onChange={(e) => setDadosPessoais({ ...dadosPessoais, telefone: e.target.value })} />
                            {
                                dadosPessoais.telefone.length >= 14
                                    ?
                                    <Form.Text className="text-muted">
                                        formato incorreto
                                    </Form.Text>
                                    :
                                    false
                            }
                            {Validacao(dadosPessoais.telefone == '', 'whatsapp')}
                        </Form.Group>

                        <Form.Group className="mb-3 field" controlId="formBasicEmail">
                            <Form.Label>Gênero:</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setDadosPessoais({ ...dadosPessoais, genero: e.target.value })}>
                                <option value=''>Selecione uma opção</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Não binário">Não binário</option>
                                <option value="Outro">Outro</option>
                                <option value="Prefiro não informar">Prefiro não informar</option>
                            </Form.Select>
                            {Validacao(dadosPessoais.genero == '', 'gênero')}
                        </Form.Group>

                        <Form.Group className="mb-3 field" controlId="formBasicEmail">
                            <Form.Label>Necessidade especial:</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setDadosPessoais({ ...dadosPessoais, necessidade: e.target.value })}>
                                <option value=''>Selecione uma opção</option>
                                <option value="Não tenho necessidade especiail">Não tenho necessidade especiail</option>
                                <option value="Deficiência Física">Deficiência Física</option>
                                <option value="Deficiência Mental">Deficiência Mental</option>
                                <option value="Deficiência Auditiva">Deficiência Auditiva</option>
                                <option value="Deficiência Visual">Deficiência Visual</option>
                                <option value="Deficiência Intelectual">Deficiência Intelectual</option>
                                <option value="Outro">Outro</option>
                            </Form.Select>
                            {Validacao(dadosPessoais.necessidade == '', 'necessidade especial')}
                        </Form.Group>
                    </div>
                </div>

                <div className="personal-info" id="person-social">

                    <Form.Group className="mb-3 field" controlId="formBasicEmail">
                        <Form.Label>Linkedin:</Form.Label>
                        <Form.Control type="text" placeholder="https://www.linkedin.com/" onChange={(e) => setDadosPessoais({ ...dadosPessoais, linkedin: e.target.value })} />
                        {Validacao(dadosPessoais.linkedin == '')}
                    </Form.Group>

                    <Form.Group className="mb-3 field" controlId="formBasicEmail">
                        <Form.Label>Github:</Form.Label>
                        <Form.Control type="text" placeholder="https://www.github.com/" onChange={(e) => setDadosPessoais({ ...dadosPessoais, github: e.target.value })} />
                        {Validacao(dadosPessoais.github == '')}
                    </Form.Group>

                    <Form.Group className="mb-3 field" controlId="formBasicEmail">
                        <Form.Label>Stack Overflow:</Form.Label>
                        <Form.Control type="text" placeholder="https://www.stackoverflow.com/" onChange={(e) => setDadosPessoais({ ...dadosPessoais, stack: e.target.value })} />
                        {Validacao(dadosPessoais.stack == '')}
                    </Form.Group>
                </div>

                <div className="personal-info" id="person-social" >
                    <Form.Label>Skills:</Form.Label>
                    <Select setDados={setDadosPessoais} dados={dadosPessoais} />
                    {Validacao(dadosPessoais.skills == '', 'skills')}
                </div>

                {/* {
                    skills
                        ?
                        <div className="personal-info" id="person-social" >
                            {
                                skills.map((e) => {
                                    return (
                                        <>
                                            <div>{e}</div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        :
                        false
                } */}

                <Button variant="primary" type="submit" style={{ border: "none" }}>
                    Enviar
                </Button>
            </Form>

        </div>
    )
}

export default Formulario;