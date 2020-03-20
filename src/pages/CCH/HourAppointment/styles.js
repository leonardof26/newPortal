import styled from 'styled-components'

import ScrollableTable from '../../../components/ScrollableTable'

export const Container = styled.div`
  margin: 0 2%;
`

export const TopInformation = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    span:first-child {
      margin-right: 10px;
      font-weight: 650;
    }
  }
`

export const CCHInfo = styled.div`
  margin-top: 25px;
  display: flex;
`

export const CchTable = styled(ScrollableTable)`
  width: 60%;
  min-width: 760px;

  thead > tr {
    padding: 5px 0;
  }

  tbody {
    height: 400px;

    tr > td:last-child {
      margin-left: 14px;
    }

    td > div {
      display: flex;
    }
  }

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
      width: 6%;
      float: left;
      padding-left: 5px;
    }

    &:nth-child(2) {
      width: 6%;
      float: left;
    }

    &:nth-child(3) {
      margin-left: 20px;
      width: 9%;
      float: left;
    }

    &:nth-child(4) {
      margin-left: 20px;
      width: 9%;
      float: left;
    }

    &:nth-child(5) {
      margin-left: 20px;
      width: 9%;
      float: left;
    }

    &:nth-child(6) {
      margin-left: 20px;
      width: 8%;
      float: left;
    }

    &:nth-child(7) {
      margin-left: 20px;
      width: 9%;
      float: left;
    }

    &:nth-child(8) {
      margin-left: 20px;
      width: 8%;
      float: left;
    }

    &:nth-child(9) {
      margin-left: 20px;
      width: 9%;
      float: left;
    }

    &:nth-child(10) {
      width: 6%;
      float: left;
      justify-content: flex-end;
    }

    text-align: center;
    justify-content: center;
  }
`

export const StaticInfo = styled.span`
  color: ${props => (props.isHoliday ? '#ff453a' : '#222239')};
  font-size: 12px;
  cursor: pointer;
`

export const SaveButton = styled.button`
  height: 50%;

  svg {
    font-size: 21px;
    padding: 0 4px;
    border: 1px solid #222239;
    border-radius: 5px;
    color: #222239;
    background: #fff;
  }
`

export const JustifyButton = styled.button`
  background: #fff;
  height: 50%;
  cursor: ${props => (props.status === 'disabled' ? 'default' : 'pointer')};

  svg {
    color: ${props => {
      switch (props.status) {
        case 'justified':
          return '#0a7aff'
        case 'unjustified':
          return '#ff453a'
        default:
          return '#d1d1d6'
      }
    }};
    font-size: 21px;
    padding: 0 5px;
    border: 1px solid
      ${props => {
        switch (props.status) {
          case 'justified':
            return '#0a7aff'
          case 'unjustified':
            return '#ff453a'
          default:
            return '#d1d1d6'
        }
      }};
    border-radius: 5px;
    background: #fff;
  }
`

export const TotalHours = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 15px;
    border-bottom: 1px solid #707070;
    width: 75%;
    color: #222239;
  }

  table {
    margin-top: 20px;
    font-size: 13px;
    border: 1px solid #222239;
    color: #292929;

    tr {
      td {
        padding: 5px 10px;

        &:last-child {
          font-weight: bold;
        }
      }
      &:nth-child(even) {
        background-color: rgba(34, 34, 57, 0.15);
      }
    }
  }
`

export const BottonButtons = styled.div`
  width: 60%;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 50px;
  display: flex;

  button {
    margin-right: 15px;

    &:last-child {
      margin: 0;
    }
  }
`
