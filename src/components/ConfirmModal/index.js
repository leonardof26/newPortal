import React from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from '../Button'

import { Container } from './styles'

export default function ConfirmModal({ handleClose, ...rest }) {
  return (
    <Container {...rest} centered onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Confirmar Exclusão</Modal.Title>
      </Modal.Header>
      <Modal.Body>Você tem certeza que deseja excluir a tecnologia?</Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleClose()}>Não</Button>
        <Button darken onClick={() => handleClose(true)}>
          Sim
        </Button>
      </Modal.Footer>
    </Container>
  )
}
