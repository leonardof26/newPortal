import styled from 'styled-components'

export const Container = styled.input`
  height: 32px;
  border: 1px solid;
  border-color: ${props => (props.error ? '#a94442' : '#ced4da')};

  width: 100%;
  font-weight: 400;
  line-height: 1.5;
  background-clip: padding-box;

  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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
