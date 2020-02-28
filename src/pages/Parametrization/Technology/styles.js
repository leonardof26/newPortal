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

export const TechsTable = styled(Table)`
  margin-left: auto;
  margin-right: auto;
  width: 40%;

  div {
    border: 1px solid #222239;
    border-radius: 4px;
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;

    &:hover {
      background: #f1f1f1;
      cursor: pointer;
    }
  }

  tbody td,
  thead th {
    &:nth-child(1) {
      width: 12%;
      text-align: center;
    }
    &:nth-child(2) {
      width: 80%;
      text-align: left;
    }
    &:nth-child(3) {
      width: 8%;
      text-align: right;
    }
  }
`
export const CheckBox = styled.label`
  display: inline-flex;
  align-items: center;
  align-content: center;
  padding-bottom: 0;
  margin-bottom: 0;
  border: 1px solid #222239;
  border-radius: 2px;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkbox {
      background-color: #fff;
    }

    &:checked ~ .checkbox:after {
      display: block;
    }
  }

  .checkbox {
    position: relative;
    top: 0;
    left: 0;
    height: 13px;
    width: 13px;
    background-color: #fff;

    &:hover {
      background-color: #f1f1f1;
    }

    &:after {
      content: '';
      position: absolute;
      display: none;

      left: 5px;
      top: 0px;
      width: 4px;
      height: 11px;
      border: solid #222239;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`
