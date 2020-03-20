import styled from 'styled-components'

import Table from '../../../../components/Table'

export const Container = styled.div`
  margin: 0 2%;
`

export const TopInfo = styled.div`
  margin-top: 30px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`

export const TotalHours = styled.div`
  display: flex;
  position: absolute;
  left: calc(50% - 225px);

  > div {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 60px;
    display: flex;
    flex-direction: column;

    border: 1px solid #222239;
    border-radius: 4px;

    span {
      text-align: center;
    }
  }
`

export const PeriodOpts = styled.div`
margin-top: 20px;
  display: flex;
  align-content: flex-end;
  align-items: flex-end;

  p {
    margin-bottom: 5px;
  }

  > div {
    width: 25%;
    margin-right: 50px;
  }

  input {
    width: 100%;
  }

  .react-datepicker-wrapper {
    width: 100%;h
  }
`

export const TableDiv = styled.div`
  margin-top: 50px;
  overflow-x: auto;
`

export const ResourceTable = styled(Table)`
  margin-top: 10px;
  margin-bottom: 0;
  width: min-content;

  input {
    width: 70px;
    height: 27px;
  }

  thead th {
    height: 20px;
  }

  tbody td,
  thead tr:first-child th {
    &:nth-child(1) {
      padding-left: 15px;
      min-width: 300px;
      width: 28%;
      text-align: left;
    }

    min-width: 100px;
    text-align: center;
  }

  thead tr:nth-child(2) {
    text-align: center;
  }

  tfoot td {
    text-align: center;
    font-weight: 500;
  }
`
export const BottomScreen = styled.div`
  position: absolute;
  bottom: 20px;
  right: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  border-top: 1px solid #eee;

  button {
    margin-top: 15px;
    margin-right: 20px;
    margin-bottom: 5px;
  }
`
