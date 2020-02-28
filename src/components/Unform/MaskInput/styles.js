import styled from 'styled-components'

import NumberFormat from 'react-number-format'

export const Container = styled(NumberFormat)`
  height: 32px;
  border-radius: 5px;
  border: 1px solid #b3b8bd;
  border-color: ${props => (props.error ? '#a94442' : '#b3b8bd')};
  padding: 4px;

  :focus {
    border-color: ${props => (props.error ? '#843534' : '#66afe9')};
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      ${props =>
        props.error ? '0 0 6px #ce8483' : '0 0 8px rgba(102, 175, 233, .6)'};
  }
`
