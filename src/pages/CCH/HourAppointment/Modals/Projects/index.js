import React, { useState } from 'react'

import { Form } from '@unform/web'

import Modal from 'react-bootstrap/Modal'

import { FaFileAlt } from 'react-icons/fa'

import Input from '../../../../../components/Input'
import Button from '../../../../../components/Button'
import Header from '../../../../../components/Modal/Header'

import {
  Container,
  TopInfo,
  ProjectsTable,
  JustifyButton,
  Observation,
  BottomButtons,
} from './styles'

const projects = [
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'CHES - Automatizar Estorno de Pagto e Reativ. Parc',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'CHES - Recuperar Inf. de Expurgo de Pagamento',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'CLIE - Ajuste na rotina para atender PRIVATE',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'CLIE - IN2055502 - CPF alterado relac CLIE X PSDC',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'CROT - Corporate/Empresas',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'EMPG - Automatizar Estorno de Pagto e Reativ. Parc',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '04:00', saved: false },
    canJustify: true,
  },
  {
    client: 'Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '', saved: false },
    canJustify: false,
  },
  {
    client: 'Banco Mercedes Benz S/A',
    project: 'BPGC - Integração CADU e EMPF',
    hours: { quantity: '04:00', saved: true },
    canJustify: true,
  },
]

export default function Projects({ show, close, openActivities, dayjustify }) {
  const [selectedProject, setSelectedProject] = useState()

  return (
    <Container show={show} onHide={close} id="modal" size="lg">
      <Header>Horas por Projeto</Header>

      <Modal.Body>
        <TopInfo>
          <div>
            <strong>Dia:</strong>
            <span>19/03/2020</span>
          </div>
          <div>
            <strong>Horas Lançadas:</strong>
            <span>00:00</span>
          </div>
          <div>
            <strong>Horas Não Justificadas:</strong>
            <span>08:52</span>
          </div>
        </TopInfo>

        <Form>
          <ProjectsTable>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Projeto</th>
                <th>Horas</th>
                <th>Justificado</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={String(index)}>
                  <td>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(index)}
                    >
                      {project.client}
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(index)}
                    >
                      {project.project}
                    </button>
                  </td>
                  <td>
                    <Input
                      className="hourInput"
                      name={String(index)}
                      maxLength={5}
                      // onChange={handleInputChange}
                      disabled={index !== selectedProject}
                    />
                  </td>
                  <td>
                    <JustifyButton>
                      <FaFileAlt />
                    </JustifyButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProjectsTable>

          <Observation>
            <p>Observações Gerais:</p>
            <textarea name="obs" multiline />
          </Observation>

          <Modal.Footer>
            <BottomButtons>
              <Button darken type="submit">
                Salvar
              </Button>
              <Button type="button" onClick={close}>
                Voltar
              </Button>
            </BottomButtons>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Container>
  )
}
