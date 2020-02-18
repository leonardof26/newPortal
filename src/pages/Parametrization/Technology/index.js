import React, { useState, useEffect } from 'react'

import { Form as Rform } from '@rocketseat/unform'

import Form from 'react-bootstrap/Form'
import { MdDelete } from 'react-icons/md'
import { FaTrashAlt } from 'react-icons/fa'
import { technology } from '../../../services/API/calls'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Title from '../../../components/Title'

import { Container, TopForm, TechsTable, CheckBox } from './styles'

export default function Tecnology() {
  const [technolyList, setTechnologyList] = useState([])

  useEffect(() => {
    async function getTechs() {
      const response = await technology.getTechnologies()

      setTechnologyList(response.data)
    }

    getTechs()
  }, [])

  return (
    <Container>
      <Title>Parametrização: Tecnologias</Title>

      <Rform>
        <TopForm>
          {/* <Form.Check
            custom
            type="checkbox"
            id="custom-checkbox"
            class="custom-control-label"
          /> */}
          <div>
            <p>Tecnologia:</p>
            <Input name="tech" />
          </div>

          <Button type="submit" darken>
            Cadastrar
          </Button>
        </TopForm>
      </Rform>

      <TechsTable>
        <thead>
          <tr>
            <th>Ativo</th>
            <th>Tecnologia</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {technolyList.map(tech => (
            <tr key={tech.cdTecnologia.toString()}>
              <td>
                <CheckBox>
                  <input type="checkbox" />
                  <span className="checkbox" />
                </CheckBox>
              </td>
              <td>{tech.dsTecnologia}</td>
              <td>
                <FaTrashAlt />
              </td>
            </tr>
          ))}
        </tbody>
      </TechsTable>
    </Container>
  )
}
