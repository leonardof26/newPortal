import styled from 'styled-components'

import Select from 'react-select'
import Table from '../../../components/Table'

export const Container = styled.div`
  .popover {
    top: 45px;
  }
  margin: 0 2%;

  .serchInput {
    width: 13%;
    margin-top: 3%;

    input {
      width: 100%;
      height: 32px;
      border-radius: 5px;
      border: 1px solid #b3b8bd;
      border-color: ${props => (props.error ? '#a94442' : '#b3b8bd')};

      padding: 4px;

      :focus {
        border-color: ${props => (props.error ? '#843534' : '#66afe9')};
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
          ${props =>
            props.error
              ? '0 0 6px #ce8483'
              : '0 0 8px rgba(102, 175, 233, .6)'};
      }

      .error {
        border: 1px solid #7159c1;
        background: #7159c1;
      }
    }
  }
`

export const TopForm = styled.div`
  display: flex;
  align-content: center;
  align-items: flex-start;
  margin-top: 15px;
  justify-content: space-between;

  p {
    margin-bottom: 5px;
  }

  > div {
    width: 30%;
    margin-right: 20px;

    &:last-child {
      width: 20%;
    }
  }

  .react-switch-selector-wrapper {
    border-radius: 5px;

    ::before {
      border-radius: 5px;
      border-color: #222239;
    }
  }

  .react-switch-selector-option-label {
    margin: 0;
    padding: 8px 0;
  }
`

export const ReactSelect = styled(Select)`
  .css-tlfecz-indicatorContainer,
  .css-1gtu0rj-indicatorContainer {
    padding: 0px 8px;
  }
`

export const TableDiv = styled.div`
  overflow-x: auto;
  height: 100%;
`

export const ProjectsTable = styled(Table)`
  margin-top: 10px;
  width: min-content;

  svg {
    border: none;
    padding: 0;

    :hover {
      background: #ecf3f8;
      color: #111;
    }
  }

  thead th {
    height: 20px;
  }

  tbody td,
  thead tr:first-child th {
    &:nth-child(1) {
      min-width: 60px;
      width: 5%;
    }
    &:nth-child(2) {
      min-width: 400px;
      width: 25%;
      text-align: left;
    }
    &:nth-child(3) {
      min-width: 250px;
      width: 13%;
      text-align: left;
    }

    &:nth-child(4) {
      min-width: 250px;
      width: 13%;
      text-align: left;
    }

    min-width: 100px;
    text-align: center;
  }

  thead tr:nth-child(2) {
    text-align: center;
  }
`

export const Pagination = styled.div`
  float: right;
  margin-top: 30px;
  margin-bottom: 15px;

  span {
    border: 1px solid #222239;
    padding: 5px 8px;
    margin-bottom: 10px;

    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      background-color: #222239;
      color: #fff;
    }

    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background-color: #222239;
      color: #fff;
    }
  }
`
export const Teste = styled.div``

export const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  width: 100px;
  height: 40px;
  left: calc(100% - 130px);
  top: calc(100% + 70px);
  background: #eee;
  z-index: 20000;

  ${Teste}:hover & {
    display: none;
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #eee;
  }
`
