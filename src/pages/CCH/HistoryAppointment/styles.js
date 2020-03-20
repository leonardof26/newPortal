import styled from 'styled-components'

import ReactSelect from '../../../components/Unform/ReactSelect'
import ScrollableTable from '../../../components/ScrollableTable'

export const Container = styled.div`
  margin: 0 2%;

  p {
    margin-bottom: 5px;
  }
`

export const HourInfo = styled.div`
  margin-top: 10px;
  display: flex;
  width: 25%;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
  }

  input {
    height: 32px;
    border-radius: 5px;
    border: 1px solid #b3b8bd;
    padding: 4px;
  }

  .hourMonth {
    p {
      :first-child {
        font-weight: bold;
      }

      :last-child {
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: flex-end;
        height: 32px;
      }
    }
  }
`

export const EmployeeInfo = styled.div`
  margin-top: 20px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  align-items: flex-end;

  > div {
    width: 25%;

    :last-of-type {
      width: 6%;
    }
  }

  input {
    width: 100%;
  }
`

export const Select = styled(ReactSelect)`
  .css-yk16xz-control,
  .css-1hwfws3,
  .css-1pahdxg-control {
    min-height: 32px;
    height: 32px;
  }
  .css-tlfecz-indicatorContainer,
  .css-1gtu0rj-indicatorContainer {
    padding: 5px 8px;
  }
`

export const ActivitiesTable = styled(ScrollableTable)`
  width: 100%;
  min-width: 950px;
  margin-top: 20px;

  button {
    background: #fff;
    border: none;

    :disabled {
      background: #eee;
    }

    :last-child {
      margin-left: 10px;
    }
  }

  tbody td,
  thead th {
    &:nth-child(1) {
      width: 30%;
      float: left;
      padding-left: 15px;
    }
    &:nth-child(2) {
      width: 27%;
      float: left;
    }

    &:nth-child(3) {
      width: 25%;
      float: left;
    }
    &:nth-child(4) {
      justify-content: center;
    }
    &:nth-child(5) {
      justify-content: center;
    }
    width: 9%;
    float: left;
  }
`

export const BottomInfo = styled.div`
  margin-top: 10px;
  display: flex;

  div {
    &:last-of-type {
      margin-left: 100px;
    }

    span {
      &:first-of-type {
        font-weight: bold;
        margin-right: 10px;
      }
    }
  }
`
