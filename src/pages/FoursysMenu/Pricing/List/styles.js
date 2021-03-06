import styled from 'styled-components'
import { lighten } from 'polished'

import ReactSelect from '../../../../components/Unform/ReactSelect'
import Table from '../../../../components/Table'

export const Container = styled.div`
  margin: 0 2%;

  form {
    display: flex;
    align-content: flex-end;
    align-items: flex-end;

    > div {
      margin-right: 10px;
    }

    .select {
      width: 25%;
    }

    p {
      margin-bottom: 5px;
    }
  }
`

export const Select = styled(ReactSelect)`
  .css-tlfecz-indicatorContainer,
  .css-1gtu0rj-indicatorContainer {
    padding: 0px 8px;
  }
`

export const ProjectsTable = styled(Table)`
  width: 100%;
  min-width: 900px;

  a {
    color: #212529;
    text-decoration: underline;
  }

  tbody td,
  thead th {
    &:nth-child(1) {
      width: 5%;
      text-align: center;
    }
    &:nth-child(2) {
      width: 30%;
      text-align: left;
    }
    &:nth-child(3) {
      width: 13%;
      text-align: left;
    }
    &:nth-child(4) {
      width: 18%;
      text-align: left;
    }
    &:nth-child(5) {
      width: 9%;
      text-align: center;
    }
    &:nth-child(6) {
      width: 14%;
      text-align: left;
    }
    &:nth-child(7) {
      width: 7%;
      text-align: center;
    }
    &:nth-child(8) {
      width: 4%;
      text-align: center;
    }
  }
`

export const Prompt = styled.div`
  padding: 5px 0;
  background: ${props => {
    switch (props.tag) {
      case 'red':
        return lighten(0.2, '#ff3a30')
      case 'green':
        return lighten(0.2, '#30d158')
      case 'yellow':
        return lighten(0.2, '#ffd60a')
      default:
        return 'unset'
    }
  }};
  border-radius: 4px;
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
