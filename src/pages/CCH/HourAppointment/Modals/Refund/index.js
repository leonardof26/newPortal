import React, { useState, useEffect, useMemo } from 'react'

import { Form } from '@unform/web'

import Modal from 'react-bootstrap/Modal'
import { formatPrice } from '../../../../../util/format'

import Input from '../../../../../components/Input'
import Button from '../../../../../components/Button'

import {
  Container,
  Header,
  Select,
  TopForm,
  RefundsTable,
  Footer,
  BottomButtons,
} from './styles'

const TypeOptions = [
  { label: 'Táxi', value: 'Táxi' },
  { label: 'Almoço', value: 'Almoço' },
  { label: 'Jantar', value: 'Jantar' },
  { label: 'Hospedagem', value: 'Hospedagem' },
  { label: 'Estacionamento', value: 'Estacionamento' },
  { label: 'Outros', value: 'Outros' },
]

const projectsOptions = [
  {
    label: 'BPGC - Integração CADU e EMPF',
    value: 'BPGC - Integração CADU e EMPF',
  },
  {
    label: 'CHES - Automatizar Estorno de Pagto e Reativ. Parc',
    value: 'CHES - Automatizar Estorno de Pagto e Reativ. Parc',
  },
  {
    label: 'CHES - Recuperar Inf. de Expurgo de Pagamento',
    value: 'CHES - Recuperar Inf. de Expurgo de Pagamento',
  },
  {
    label: 'CLIE - Ajuste na rotina para atender PRIVATE',
    value: 'CLIE - Ajuste na rotina para atender PRIVATE',
  },
  { label: 'CROT - Corporate/Empresas', value: 'CROT - Corporate/Empresas' },
  {
    label: 'CROT - Criar processo para direcionamento Contábil',
    value: 'CROT - Criar processo para direcionamento Contábil',
  },
]

const teste = [
  {
    id: '1',
    type: 'Estacionamento',
    description: 'Estacionamento matriz Bradesco',
    project: 'BPGC - Integração CADU e EMPF',
    date: '11/12',
    value: '20',
    formattedValue: 'R$20,00',
  },
  {
    id: '2',
    type: 'Almoço',
    description: 'Visita ao cliente Bradesco no dia 12 de dezembro',
    project: 'CHES - Automatizar Estorno de Pagto e Reativ. Parc',
    date: '12/12',
    value: '50',
    formattedValue: 'R$50,00',
  },
  {
    id: '3',
    type: 'Jantar',
    description: 'Jantar fim projeto equipe',
    project: 'CHES - Recuperar Inf. de Expurgo de Pagamento',
    date: '13/12',
    value: '100',
    formattedValue: 'R$100,00',
  },
  {
    id: '4',
    type: 'Hospedagem',
    description: 'Implantação Projeto',
    project: 'CLIE - Ajuste na rotina para atender PRIVATE',
    date: '14/12',
    value: '450',
    formattedValue: 'R$450,00',
  },
]

export default function Refund({ show, close }) {
  const [refundList, setRefundList] = useState([])

  const totalPrice = useMemo(() => {
    let total = 0

    refundList.map(refund => {
      total += parseInt(refund.value, 10)
    })

    return formatPrice(total)
  }, [refundList])

  useEffect(() => {
    setRefundList(teste)
  }, [])

  return (
    <Container show={show} onHide={close} id="modal" size="xl">
      <Header>
        <Modal.Header closeButton>
          <Modal.Title>
            <span>Reembolso - Dezembro/2019 </span>
          </Modal.Title>
        </Modal.Header>
        <p />
      </Header>

      <Modal.Body>
        <Form>
          <TopForm>
            <div>
              <div>
                <p>Tipo:</p>
                <Select name="type" options={TypeOptions} size="small" />
              </div>
              <div>
                <p>Projeto:</p>
                <Select name="project" options={projectsOptions} size="large" />
              </div>
              <div>
                <p>Data Nota:</p>
                <Input name="date" />
              </div>
              <div>
                <p>Valor:</p>
                <Input name="value" />
              </div>
            </div>
            <div>
              <div>
                <p>Descrição:</p>
                <Input
                  maxLength="150"
                  className="description"
                  name="description"
                />
              </div>
              <div>
                <Button darken type="submit">
                  Incluir
                </Button>
              </div>
            </div>
          </TopForm>
        </Form>

        <RefundsTable>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descrição</th>
              <th>Projeto</th>
              <th>Data</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {refundList.map(refund => (
              <tr key={refund.id}>
                <td>{refund.type}</td>
                <td>{refund.description}</td>
                <td>{refund.project}</td>
                <td>{refund.date}</td>
                <td>{refund.formattedValue}</td>
              </tr>
            ))}
          </tbody>
        </RefundsTable>
      </Modal.Body>
      <Modal.Footer>
        <Footer>
          <div>
            <span>Total Reembolso:</span>
            <span>{totalPrice}</span>
          </div>
          <BottomButtons>
            <Button darken type="button">
              Imprimir
            </Button>
            <Button type="button" onClick={close}>
              Voltar
            </Button>
          </BottomButtons>
        </Footer>
      </Modal.Footer>
    </Container>
  )
}
