import styled from 'styled-components'

import ReactSelect from '../../../components/Unform/ReactSelect'
import Table from '../../../components/Table'

export const Container = styled.div`
  margin: 0 2%;
`

export const FormSelect = styled.div`
  width: 22%;

  p {
    margin-bottom: 5px;
  }
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

export const ProfileTable = styled(Table)`
  margin-left: auto;
  margin-right: auto;
  min-width: 400px;
  width: 60%;
  margin-bottom: 15px;

  svg {
    font-size: 21px;
    padding: 0 2px;
    border: 1px solid #222239;
    border-radius: 4px;

    &:hover {
      background: #f1f1f1;
      cursor: pointer;
    }
  }

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
export const Select = styled(ReactSelect)`
  .css-tlfecz-indicatorContainer,
  .css-1gtu0rj-indicatorContainer {
    padding: 5px 8px;
  }
`
