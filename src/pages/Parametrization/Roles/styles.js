import styled from 'styled-components'

import Table from '../../../components/Table'

export const Container = styled.div`
  margin: 0 2%;
`

export const TopForm = styled.div`
  margin-top: 15px;
  display: flex;
  align-content: flex-end;
  align-items: ${props => (props.error ? 'center' : 'flex-end')};

  div {
    margin-right: 20px;
    display: flex;
    flex-direction: column;

    &:first-child {
      width: 22%;
    }

    &:nth-child(2) {
      width: 150px;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    margin-bottom: 5px;
  }

  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`

export const RoleTable = styled(Table)`
  margin-left: auto;
  margin-right: auto;
  min-width: 400px;
  width: 60%;
  margin-bottom: 15px;

  tbody td,
  thead th {
    &:nth-child(1) {
      width: 10%;
      text-align: center;
    }
    &:nth-child(2) {
      width: 50%;
    }
    &:nth-child(3) {
      width: 25%;
      text-align: center;
    }
    &:nth-child(4) {
      width: 15%;
      text-align: center;
    }
  }
`
