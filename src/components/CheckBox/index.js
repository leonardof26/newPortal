import React from 'react'

import { Container } from './styles'

export default function CheckBox({ ...rest }) {
  return (
    <Container>
      <input type="checkbox" {...rest} />
      <span className="checkbox" />
    </Container>
  )
}
