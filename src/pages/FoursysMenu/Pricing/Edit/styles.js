import styled, { keyframes } from 'styled-components'

import { darken } from 'polished'
import ReactSelect from '../../../../components/Unform/ReactSelect'
import Table from '../../../../components/Table'
import Button from '../../../../components/Button'

export const Container = styled.div`
  margin: 0 2%;

  table {
    margin-bottom: 0;

    > input {
      width: 70px;
      height: 27px;
    }

    > svg {
      border: 0;
      :hover {
        cursor: pointer;
        background: ${darken(0.1, '#e8e8eb')};
        color: black;
      }
    }
  }
`

export const TopInfo = styled.div`
  margin-top: 30px;
  margin-bottom: 25px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`

export const StaticInfo = styled.div`
  display: flex;
  align-content: center;
  align-items: center;

  div {
    margin-right: 10px;
    width: 40%;

    &:first-child {
      width: 20%;
    }

    input {
      width: 100%;
    }
  }

  p {
    margin-bottom: 5px;
  }
`

export const TopTotals = styled.div`
  display: flex;

  > div {
    display: flex;
    flex-direction: column;

    &:first-child {
      font-weight: bold;
      margin-right: 10px;
      text-align: right;
    }
  }
`

export const TableDiv = styled.div`
  overflow-x: auto;
  background: #eeeeee;
  border-radius: 5px;
  margin-top: 25px;
  margin-bottom: 25px;

  > div {
    padding: 10px 10px 20px 10px;
  }
`

export const TableTitle = styled.h1`
  font-size: 20px;
  border-bottom: 1px solid #222239;
  width: 25%;
`

export const ResultsTable = styled(Table)`
  margin-top: 10px;
  width: 100%;
  background: #fff;

  tbody td,
  thead th {
    text-align: center;
  }
`

export const RevenueTable = styled(Table)`
  margin-top: 10px;
  width: 70%;
  background: #fff;

  tbody tr:last-child {
    background: #e8e8eb;
    &:hover {
      background: ${darken(0.1, '#e8e8eb')};
    }
    td {
      text-align: left;
    }
  }

  tbody td,
  thead th {
    &:nth-child(1) {
      width: 4%;
    }
    &:nth-child(2) {
      width: 7%;
      text-align: center;
    }
    &:nth-child(3) {
      width: 35%;
      padding: 0 10px;
    }
    &:nth-child(4) {
      width: 10%;
      text-align: center;
    }
    &:nth-child(5) {
      width: 15%;
      text-align: center;
    }
    &:nth-child(6) {
      width: 15%;
      text-align: center;
    }
    &:nth-child(7) {
      width: 15%;
      text-align: center;
    }
  }

  tfoot {
    td {
      &:nth-child(1) {
        text-align: right;
      }
      text-align: center;
    }
  }
`

export const Select = styled(ReactSelect)`
  .css-yk16xz-control,
  .css-1hwfws3,
  .css-1pahdxg-control,
  .css-6q0nyr-Svg {
    position: initial;
  }
  .css-tlfecz-indicatorContainer,
  .css-1gtu0rj-indicatorContainer {
    padding: 0 8px;
  }
  .css-1hb7zxy-IndicatorsContainer {
    height: 27px;
  }

  .css-b8ldur-Input {
    padding: 0;
    margin: 0;
  }

  #react-select-2-input {
    height: 20px;
  }
`

export const SVG = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 60%;

  span {
    font-weight: 1000;
    font-size: 12px;
    padding: 0 4px;
    border: 1px solid #222239;
    border-radius: 4px;

    &:hover {
      background: #222239;
      color: #fff;
      cursor: pointer;
    }
  }
`
export const AddButton = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  width: 20%;
  cursor: pointer;
  width: 200px;

  span {
    font-weight: bold;
    margin-left: 5px;
  }
`

export const CostTable = styled(Table)`
  margin-top: 10px;
  width: min-content;
  background: #fff;

  thead th {
    height: 20px;
  }

  tbody tr:last-child {
    background: #e8e8eb;
    &:hover {
      background: ${darken(0.1, '#e8e8eb')};
    }
    td {
      text-align: left;
    }
  }

  tbody td,
  thead tr:first-child th {
    &:nth-child(1) {
      min-width: 39px;
      width: 3%;
    }
    &:nth-child(2) {
      min-width: 39px;
      width: 3%;
    }
    &:nth-child(3) {
      width: 20%;
      min-width: 262px;
      padding: 0 10px;
      text-align: left;
    }
    &:nth-child(4) {
      width: 8%;
      min-width: 104px;
    }
    &:nth-child(5) {
      width: 7%;
      min-width: 91px;
    }
    min-width: 100px;
    text-align: center;
  }

  thead tr:nth-child(2) {
    text-align: center;
  }

  tfoot {
    border: 1px solid #b3b8bd;
    text-align: center;

    td:first-child {
      text-align: right;
    }
  }
`

export const ExpensesTable = styled(Table)`
  background: #fff;
  margin-top: 5px;
  width: min-content;

  tbody td,
  thead th {
    &:nth-child(1) {
      min-width: 340px;
      text-align: right;
    }
    &:nth-child(2) {
      min-width: 195px;
      text-align: center;
    }
    min-width: 100px;
    text-align: center;
  }

  input {
    width: 95%;
    height: 27px;
    font-size: 13px !important;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 0;
  border-top: 1px solid #eee;

  button:nth-child(2) {
    margin: 0 10px;
  }
`

const rotate = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

export const SaveButton = styled.button`
  display: ${props => (props.botton ? 'none' : 'flex')};
  position: fixed;
  right: 5%;
  bottom: 5%;
  box-shadow: 3px 5px 28px 0 rgba(0, 0, 0, 0.2);
  animation: ${rotate} 0.5s linear;

  align-content: center;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #89bab1;
  color: #222239;
  border: 0;
  border-radius: 25px;
  svg {
    font-size: 20px;
  }
`
