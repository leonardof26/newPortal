import React from 'react'

import { Form } from '@unform/web'
import { Link } from 'react-router-dom'

import Title from '../../../../components/Title'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import { Container, Select, ProjectsTable, Pagination, Prompt } from './styles'

const teste = [
  { label: 'Pendente de Precificação', value: 'Pendente de Precificação' },
]

const customStyles = {
  control: base => ({
    ...base,
    height: 32,
    minHeight: 32,
    position: 'initial',
  }),
}

export default function List() {
  return (
    <Container>
      <Title>Precificação</Title>

      <Form>
        <div>
          <p>Código Projeto:</p>
          <Input name="code" />
        </div>
        <div className="select">
          <p>Status:</p>
          <Select name="status" options={teste} styles={customStyles} />
        </div>
        <Button type="submit" darken>
          Consultar
        </Button>
      </Form>

      <ProjectsTable>
        <thead>
          <tr>
            <th>Id</th>
            <th>Projeto</th>
            <th>Cliente</th>
            <th>Gerente</th>
            <th>Proposta</th>
            <th>Status</th>
            <th>Prazo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>6322</td>
            <td>
              <Link to={{ pathname: '/menufoursys/pricing/edit', state: '' }}>
                CBON - IN3289406 Ajustar Expurgo banco
              </Link>
            </td>
            <td>Bradesco Seguro</td>
            <td>Viviane de Oliveira</td>
            <td>P201910B9</td>
            <td>Pendente de Precificação</td>
            <td>15/01/2020</td>
          </tr>
          <tr>
            <td>6322</td>
            <td>
              <Link to="/">CBON - IN3289406 Ajustar Expurgo banco</Link>
            </td>
            <td>Bradesco</td>
            <td>Viviane de Oliveira</td>
            <td>P201910B9</td>
            <td>Pendente de Precificação</td>
            <td>
              <Prompt>15/01/2020</Prompt>
            </td>
          </tr>
          <tr>
            <td>6322</td>
            <td>
              <Link to="/">CBON - IN3289406 Ajustar Expurgo banco</Link>
            </td>
            <td>Bradesco</td>
            <td>Viviane de Oliveira</td>
            <td>P201910B9</td>
            <td>Pendente de Precificação</td>
            <td>
              <Prompt>15/01/2020</Prompt>
            </td>
          </tr>
          <tr>
            <td>6322</td>
            <td>
              <Link to="/">CBON - IN3289406 Ajustar Expurgo banco</Link>
            </td>
            <td>Bradesco</td>
            <td>Viviane de Oliveira</td>
            <td>P201910B9</td>
            <td>Pendente de Precificação</td>
            <td>
              <Prompt>15/01/2020</Prompt>
            </td>
          </tr>
          <tr>
            <td>6322</td>
            <td>
              <Link to="/">CBON - IN3289406 Ajustar Expurgo banco</Link>
            </td>
            <td>Bradesco</td>
            <td>Viviane de Oliveira</td>
            <td>P201910B9</td>
            <td>Pendente de Precificação</td>
            <td>
              <Prompt>15/01/2020</Prompt>
            </td>
          </tr>
          <tr>
            <td>6322</td>
            <td>
              <Link to="/">CBON - IN3289406 Ajustar Expurgo banco</Link>
            </td>
            <td>Bradesco</td>
            <td>Viviane de Oliveira</td>
            <td>P201910B9</td>
            <td>Pendente de Precificação</td>
            <td>
              <Prompt>15/01/2020</Prompt>
            </td>
          </tr>
          <tr>
            <td>6322</td>
            <td>
              <Link to="/">CBON - IN3289406 Ajustar Expurgo banco</Link>
            </td>
            <td>Bradesco</td>
            <td>Viviane de Oliveira</td>
            <td>P201910B9</td>
            <td>Pendente de Precificação</td>
            <td>
              <Prompt>15/01/2020</Prompt>
            </td>
          </tr>
          <tr>
            <td>6322</td>
            <td>
              <Link to="/">CBON - IN3289406 Ajustar Expurgo banco</Link>
            </td>
            <td>Bradesco</td>
            <td>Viviane de Oliveira</td>
            <td>P201910B9</td>
            <td>Pendente de Precificação</td>
            <td>
              <Prompt>15/01/2020</Prompt>
            </td>
          </tr>
          <tr>
            <td>6322</td>
            <td>
              <Link to="/">CBON - IN3289406 Ajustar Expurgo banco</Link>
            </td>
            <td>Bradesco</td>
            <td>Viviane de Oliveira</td>
            <td>P201910B9</td>
            <td>Pendente de Precificação</td>
            <td>
              <Prompt>15/01/2020</Prompt>
            </td>
          </tr>
          <tr>
            <td>6322</td>
            <td>
              <Link to="/">CBON - IN3289406 Ajustar Expurgo banco</Link>
            </td>
            <td>Bradesco</td>
            <td>Viviane de Oliveira</td>
            <td>P201910B9</td>
            <td>Pendente de Precificação</td>
            <td>
              <Prompt>15/01/2020</Prompt>
            </td>
          </tr>
        </tbody>
      </ProjectsTable>

      <Pagination>
        <span>Anterior</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>13</span>
        <span>Proximo</span>
      </Pagination>
    </Container>
  )
}
