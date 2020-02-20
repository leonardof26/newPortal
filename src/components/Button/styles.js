import styled from 'styled-components'

import { darken } from 'polished'

export const Container = styled.button`
  border: 1px solid #222239;
  background: ${props => (props.darken ? '#222239' : '#fff')};
  color: ${props => (props.darken ? '#fff' : '#222239')};
  border-radius: 4px;
  padding: ${props => (props.big ? '0 32px' : '0 20px')};
  transition: background 0.2s;
  height: ${props => (props.big ? '40px' : '32px')};

  &:hover {
    background: ${props =>
      props.darken ? darken(0.08, '#222239') : darken(0.08, '#fff')};
  }
`
