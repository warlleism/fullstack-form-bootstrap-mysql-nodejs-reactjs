import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from "../components/select";
import Swal from 'sweetalert2'
import './style.scss'

const Formulario = () => {

    useEffect(() => {

        let dadoStorage = JSON.parse(localStorage.getItem('dados'))

        setDadosPessoais({
            nome: dadoStorage ? dadoStorage?.nome : ' ',
            email: dadoStorage ? dadoStorage?.email : ' ',
            cpf: dadoStorage ? dadoStorage?.cpf : ' ',
            cargo: dadoStorage ? dadoStorage?.cargo : ' ',
            salario: dadoStorage ? dadoStorage?.salario : ' ',
            apresentacao: dadoStorage ? dadoStorage?.apresentacao : ' ',
            telefone: dadoStorage ? dadoStorage?.telefone : ' ',
            genero: dadoStorage ? dadoStorage?.genero : ' ',
            necessidade: dadoStorage ? dadoStorage?.necessidade : ' ',
            linkedin: dadoStorage ? dadoStorage?.linkedin : ' ',
            github: dadoStorage ? dadoStorage?.github : ' ',
            stackoverflow: dadoStorage ? dadoStorage?.stackoverflow : ' ',
            skills: []
        })
    }, [])


    const dados_pessoas_initial = {
        nome: '',
        email: '',
        cpf: '',
        cargo: '',
        salario: '',
        apresentacao: '',
        telefone: '',
        genero: '',
        necessidade: '',
        linkedin: '',
        github: '',
        stackoverflow: '',
        skills: '[]'
    }

    const [dadosPessoais, setDadosPessoais] = useState(dados_pessoas_initial)

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

    const OptionsRegister = {
        body: JSON.stringify(dadosPessoais),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const EnviarDados = async (event) => {
        event.preventDefault()

        localStorage.setItem("dados", JSON.stringify(dadosPessoais))

        if (dadosPessoais.skills == 0) {
            return Swal.fire({
                icon: 'warning',
                title: "Campo de skill não preenchido",
            })
        }

        await fetch('http://localhost:3003/register', OptionsRegister)
            .then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    Swal.fire({
                        icon: data.icon,
                        title: data.sucess,
                    })
                } else {
                    Swal.fire({
                        icon: data.icon,
                        title: data.error,
                    })
                }
            })

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
            {console.log(dadosPessoais)}
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
                        <Form.Control required type="text" defaultValue={dadosPessoais?.nome} placeholder="Maria da Silva" onChange={(e) => setDadosPessoais({ ...dadosPessoais, nome: e.target.value })} />
                        {Validacao(dadosPessoais.nome.length < 1, 'nome')}
                    </Form.Group>

                    <Form.Group className="mb-3 field" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control required type="email" defaultValue={dadosPessoais?.email} placeholder="nome@examplo.com" onChange={(e) => setDadosPessoais({ ...dadosPessoais, email: e.target.value })} />
                        {Validacao(dadosPessoais.email.length < 1, 'email')}

                    </Form.Group>

                    <div className="inline-field">

                        <Form.Group className="mb-3 field" controlId="formBasicEmail">
                            <Form.Label>CPF:</Form.Label>
                            <Form.Control required
                                type="number"
                                defaultValue={dadosPessoais?.cpf}
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
                            {Validacao(dadosPessoais.cpf.length < 1, 'cpf')}
                        </Form.Group>

                        <Form.Group className="mb-3 field" controlId="formBasicEmail">
                            <Form.Label>Cargo:</Form.Label>
                            <Form.Control required type="text" defaultValue={dadosPessoais?.cargo} placeholder="Administrador" onChange={(e) => setDadosPessoais({ ...dadosPessoais, cargo: e.target.value })} />
                            {Validacao(dadosPessoais.cargo.length < 1, 'cargo')}
                        </Form.Group>

                        <Form.Group className="mb-3 field" controlId="formBasicEmail">
                            <Form.Label>Pretensão salárial R$:</Form.Label>
                            <Form.Control required type="number" placeholder="1200" defaultValue={dadosPessoais?.salario} onChange={(e) => setDadosPessoais({ ...dadosPessoais, salario: e.target.value })} />
                            {Validacao(dadosPessoais.salario.length < 1, 'pretensão salárial')}
                        </Form.Group>
                    </div>

                </div>

                <div className="personal-info" id="person-cont">

                    <Form.Group className="mb-3 field" controlId="formBasicEmail">
                        <Form.Label>Apresentação:</Form.Label>
                        <Form.Control required as="textarea" defaultValue={dadosPessoais?.apresentacao} style={{ height: '300px' }} onChange={(e) => setDadosPessoais({ ...dadosPessoais, apresentacao: e.target.value })} />
                        {Validacao(dadosPessoais.apresentacao.length < 1, 'apresentação')}
                    </Form.Group>

                    <div className="inline-field">

                        <Form.Group className="mb-3 field" controlId="formBasicEmail">
                            <Form.Label>Whatsapp:</Form.Label>
                            <Form.Control required type="text" defaultValue={dadosPessoais?.telefone} placeholder="(55)999999999" onChange={(e) => setDadosPessoais({ ...dadosPessoais, telefone: e.target.value })} />
                            {
                                dadosPessoais.telefone.length >= 14
                                    ?
                                    <Form.Text className="text-muted">
                                        formato incorreto
                                    </Form.Text>
                                    :
                                    false
                            }
                            {Validacao(dadosPessoais.telefone.length < 1, 'whatsapp')}
                        </Form.Group>

                        <Form.Group className="mb-3 field" controlId="formBasicEmail">
                            <Form.Label>Gênero:</Form.Label>
                            <Form.Select aria-label="Default select example" required onChange={(e) => setDadosPessoais({ ...dadosPessoais, genero: e.target.value })}>
                                <option value=''>Selecione uma opção</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Não binário">Não binário</option>
                                <option value="Outro">Outro</option>
                                <option value="Prefiro não informar">Prefiro não informar</option>
                            </Form.Select>
                            {Validacao(dadosPessoais.genero.length < 1, 'gênero')}
                        </Form.Group>

                        <Form.Group className="mb-3 field" controlId="formBasicEmail">
                            <Form.Label>Necessidade especial:</Form.Label>
                            <Form.Select aria-label="Default select example" required onChange={(e) => setDadosPessoais({ ...dadosPessoais, necessidade: e.target.value })}>
                                <option value=''>Selecione uma opção</option>
                                <option value="Não tenho necessidade especiail">Não tenho necessidades especiais</option>
                                <option value="Deficiência Física">Deficiência Física</option>
                                <option value="Deficiência Mental">Deficiência Mental</option>
                                <option value="Deficiência Auditiva">Deficiência Auditiva</option>
                                <option value="Deficiência Visual">Deficiência Visual</option>
                                <option value="Deficiência Intelectual">Deficiência Intelectual</option>
                                <option value="Outro">Outro</option>
                            </Form.Select>
                            {Validacao(dadosPessoais.necessidade.length < 1, 'necessidade especial')}
                        </Form.Group>
                    </div>
                </div>

                <div className="personal-info" id="person-social">

                    <Form.Group className="mb-3 field" controlId="formBasicEmail">
                        <Form.Label>Linkedin:</Form.Label>
                        <Form.Control required type="text" defaultValue={dadosPessoais?.linkedin} placeholder="https://www.linkedin.com/" onChange={(e) => setDadosPessoais({ ...dadosPessoais, linkedin: e.target.value })} />
                        {Validacao(dadosPessoais.linkedin.length < 1)}
                    </Form.Group>

                    <Form.Group className="mb-3 field" controlId="formBasicEmail">
                        <Form.Label>Github:</Form.Label>
                        <Form.Control required type="text" defaultValue={dadosPessoais?.github} placeholder="https://www.github.com/" onChange={(e) => setDadosPessoais({ ...dadosPessoais, github: e.target.value })} />
                        {Validacao(dadosPessoais.github.length < 1)}
                    </Form.Group>

                    <Form.Group className="mb-3 field" controlId="formBasicEmail">
                        <Form.Label>Stack Overflow:</Form.Label>
                        <Form.Control required type="text" defaultValue={dadosPessoais?.stackoverflow} placeholder="https://www.stackoverflow.com/" onChange={(e) => setDadosPessoais({ ...dadosPessoais, stackoverflow: e.target.value })} />
                        {Validacao(dadosPessoais.stackoverflow.length < 1)}
                    </Form.Group>
                </div>

                <div className="personal-info" id="person-social" >
                    <Form.Label>Skills:</Form.Label>
                    <Select setDados={setDadosPessoais} dados={dadosPessoais} />
                </div>

                <Button variant="primary" type="submit" style={{ border: "none" }}>
                    Enviar
                </Button>
            </Form>

        </div>
    )
}

export default Formulario;