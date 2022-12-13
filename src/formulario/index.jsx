import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
        necessidade: 'initial'
    }

    const [dadosPessoais, setDadosPessoais] = useState(dados_pessoas_initial)

    const Validacao = (valid) => {
        if (valid) {
            return (
                <>
                    <Form.Text className="text-muted">
                        campo precisa ser preenchido
                    </Form.Text>
                </>
            )
        }
    }


    const EnviarDados = (event) => {
        event.preventDefault()
    }
    return (
        <div className="conteiner-user-info">

            <div className="time-line">
                <a href="#person-info">
                    <img src={require('../image/user.png')} alt="" />
                </a>
                <div className="line"></div>
                <a href="#person-cont">
                    <img src={require('../image/telephone.png')} alt="" />
                </a>
                <div className="line"></div>
                <a href="#person-social">
                    <img src={require('../image/github.png')} alt="" />
                </a>
            </div>

            <Form onSubmit={EnviarDados}>

                <div className="personal-info" id="person-info">

                    <Form.Group className="mb-3 field" controlId="formBasicEmail">
                        <Form.Label>Nome completo</Form.Label>
                        <Form.Control type="text" color="red" required onChange={(e) => setDadosPessoais({ ...dadosPessoais, nome: e.target.value })} />
                        {Validacao(dadosPessoais.nome == '')}
                    </Form.Group>

                    <Form.Group className="mb-3 field" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required onChange={(e) => setDadosPessoais({ ...dadosPessoais, email: e.target.value })} />
                        {
                            dadosPessoais.email == ''
                                ?
                                <Form.Text className="text-muted">
                                    campo precisa ser preenchido
                                </Form.Text>
                                :
                                false
                        }
                    </Form.Group>


                    <div className="inline-field">

                        <Form.Group className="mb-3 field" controlId="formBasicEmail">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control
                                type="number"
                                value={dadosPessoais.cpf}
                                required
                                onChange={(e) => setDadosPessoais({ ...dadosPessoais, cpf: e.target.value.length > 11 ? dadosPessoais.cpf : e.target.value })} />
                            {Validacao(dadosPessoais.cpf == '')}
                        </Form.Group>

                        <Form.Group className="mb-3 field" controlId="formBasicEmail">
                            <Form.Label>Cargo</Form.Label>
                            <Form.Control type="text" required onChange={(e) => setDadosPessoais({ ...dadosPessoais, cargo: e.target.value })} />
                            {Validacao(dadosPessoais.cargo == '')}
                        </Form.Group>

                        <Form.Group className="mb-3 field" controlId="formBasicEmail">
                            <Form.Label>Pretensão salárial</Form.Label>
                            <Form.Control type="number" required onChange={(e) => setDadosPessoais({ ...dadosPessoais, salario: e.target.value })} />
                            {
                                dadosPessoais.salario == ''
                                    ?
                                    <Form.Text className="text-muted">
                                        campo precisa ser preenchido
                                    </Form.Text>
                                    :
                                    false
                            }
                        </Form.Group>
                    </div>

                </div>

                <div className="personal-info" id="person-cont">

                    <Form.Group className="mb-3 field" controlId="formBasicEmail">
                        <Form.Label>Apresentação</Form.Label>
                        <Form.Control as="textarea" style={{ height: '300px' }} required onChange={(e) => setDadosPessoais({ ...dadosPessoais, apresentacao: e.target.value })} />
                        {Validacao(dadosPessoais.apresentacao == '')}
                    </Form.Group>

                    <div className="inline-field">

                        <Form.Group className="mb-3 field" controlId="formBasicEmail">
                            <Form.Label>Whatsapp</Form.Label>
                            <Form.Control type="number" required onChange={(e) => setDadosPessoais({ ...dadosPessoais, telefone: e.target.value })} />
                            {Validacao(dadosPessoais.telefone == '')}
                        </Form.Group>

                        <Form.Group className="mb-3 field" controlId="formBasicEmail">
                            <Form.Label>Gênero</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setDadosPessoais({ ...dadosPessoais, genero: e.target.value })}>
                                <option value=''>Selecione uma opção</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Não binário">Não binário</option>
                                <option value="Outro">Outro</option>
                                <option value="Prefiro não informar">Prefiro não informar</option>
                            </Form.Select>
                            {Validacao(dadosPessoais.genero == '')}
                        </Form.Group>

                        <Form.Group className="mb-3 field" controlId="formBasicEmail">
                            <Form.Label>Necessidade especial</Form.Label>
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
                            {Validacao(dadosPessoais.necessidade == '')}
                        </Form.Group>
                    </div>
                </div>

                <div className="personal-info" id="person-social">

                    <Form.Group className="mb-3 field" controlId="formBasicEmail">
                        <Form.Label>Linkedin</Form.Label>
                        <Form.Control type="text" required placeholder="https://www.linkedin.com/" onChange={(e) => setDadosPessoais({ ...dadosPessoais, nome: e.target.value })} />
                        {Validacao(dadosPessoais.nome == '')}
                    </Form.Group>

                    <Form.Group className="mb-3 field" controlId="formBasicEmail">
                        <Form.Label>Github</Form.Label>
                        <Form.Control type="text" required placeholder="https://www.github.com/" onChange={(e) => setDadosPessoais({ ...dadosPessoais, email: e.target.value })} />
                        {
                            dadosPessoais.email == ''
                                ?
                                <Form.Text className="text-muted">
                                    campo precisa ser preenchido
                                </Form.Text>
                                :
                                false
                        }
                    </Form.Group>

                    <Form.Group className="mb-3 field" controlId="formBasicEmail">
                        <Form.Label>Stack Overflow</Form.Label>
                        <Form.Control type="text" required placeholder="https://www.stackoverflow.com/" onChange={(e) => setDadosPessoais({ ...dadosPessoais, email: e.target.value })} />
                        {
                            dadosPessoais.email == ''
                                ?
                                <Form.Text className="text-muted">
                                    campo precisa ser preenchido
                                </Form.Text>
                                :
                                false
                        }
                    </Form.Group>

                </div>

                <Button variant="primary" type="submit" style={{ border: "none" }}>
                    Enviar
                </Button>
            </Form>

        </div>
    )
}

export default Formulario;