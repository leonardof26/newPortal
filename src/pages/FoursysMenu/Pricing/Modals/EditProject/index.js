import React from 'react'

import Modal from 'react-bootstrap/Modal'

import { Form } from '@unform/web'

import { Container, Header, Select, Body } from './styles'

import Input from '../../../../../components/Input'
import Button from '../../../../../components/Button'
import DatePicker from '../../../../../components/Unform/DatePicker'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

export default function EditProject({ show, close }) {
  return (
    <Container show={show} onHide={close} id="modal" size="xl" centered>
      <Header>
        <Modal.Header closeButton>
          <Modal.Title>
            <span>Dados Projeto: CBON - IN3289406 Ajustar Expurgo banco </span>
          </Modal.Title>
        </Modal.Header>
        <p />
      </Header>

      <Form onSubmit={data => console.log(data)}>
        <Modal.Body>
          <Body>
            <div>
              <div>
                <p>Proposta:</p>
                <Input name="proposal" />
              </div>
              <div>
                <p>RS Proposta:</p>
                <Input name="proposalRS" />
              </div>
              <div>
                <p>RS Contratação:</p>
                <Input name="hiringRS" />
              </div>
            </div>
            <div>
              <div>
                <p>Data Inicio Desenvolvimento:</p>
                <DatePicker name="inicialDate" />
              </div>
              <div>
                <p>Data Fim Desenvolvimento:</p>
                <DatePicker name="endDate" />
              </div>
              <div>
                <p>Data Prevista para Envio da PT:</p>
                <DatePicker name="sendDate" />
              </div>
            </div>
            <div>
              <div>
                <p>Nível Desconto:</p>
                <Select name="discountLevel" />
              </div>
              <div>
                <p>Métrica:</p>
                <Select name="metric" />
              </div>
              <div className="optsInputs">
                <div>
                  <p>Qt. Pontos Função:</p>
                  <Input name="funcPoints" />
                </div>
                <div>
                  <p>Índice Produtiv:</p>
                  <Input name="funcPoints" />
                </div>
              </div>
            </div>
            <div>
              <Select name="teste" options={options} isMulti />
            </div>
          </Body>
        </Modal.Body>

        <Modal.Footer>
          <Button type="button" onClick={close}>
            Voltar
          </Button>
          <Button type="submit" darken>
            Salvar
          </Button>
        </Modal.Footer>
      </Form>
    </Container>
  )
}
