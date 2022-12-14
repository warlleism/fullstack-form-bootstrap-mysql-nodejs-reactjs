import React from "react";
import Form from 'react-bootstrap/Form';

const Select = (props) => {

    const skills = ['HTML', 'CSS', 'PHP', 'JavaScript', 'Java', 'Ruby', 'Python', 'C#', 'React', 'Angular', 'VUE', 'jQuery', 'Svelte', 'Bootstrap', 'Django', 'Laravel', 'ExpressJS', 'Java', 'NodeJS', 'Elixir', 'Asp .NET', 'Spring Boot', 'Koa', 'Phoenix']



    const filter = (event) => {

        if (props.dados.skills.includes(event)) {
            const filtrado = props.dados.skills.filter(word => word != event)
            return props.setDados({ ...props.dados, skills: filtrado })
        }

        props.setDados({ ...props.dados, skills: [...props.dados.skills, event] })
    }

    return (
        <>

            <Form.Group className="mb-3 field" controlId="formBasicEmail" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                {
                    skills.map((e) => {
                        return (
                            <Form.Check value={e} label={e} style={{ width: 200 }} onChange={(e) => filter(e.target.value)} />
                        )
                    })
                }
            </Form.Group>
        </>
    )
}

export default Select;