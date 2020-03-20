import React from 'react'

import Modal from 'react-bootstrap/Modal'
import { Container } from './styles'

export default function Header({ children, ...rest }) {
  return (
    <Container rest>
      <Modal.Header closeButton>
        <Modal.Title>
          <span>{children} </span>
        </Modal.Title>
      </Modal.Header>
      <p />
    </Container>
  )
}
