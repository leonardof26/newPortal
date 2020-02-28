import styled from 'styled-components'

import { Input } from '@rocketseat/unform'

export const Container = styled.input`
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

  .error {
    border: 1px solid #7159c1;
    background: #7159c1;
  }
`
