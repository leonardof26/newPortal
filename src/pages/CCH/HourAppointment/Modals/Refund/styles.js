import styled from 'styled-components'

import Modal from 'react-bootstrap/Modal'
import ScrollableTable from '../../../../../components/ScrollableTable'
import ReactSelect from '../../../../../components/Unform/ReactSelect'

export const Container = styled(Modal)``

export const Header = styled.div`
  color: #222239;

  p {
    padding: 10px;
    background: #222239;
    flex: 1;
    margin: 0;
  }
`

export const Select = styled(ReactSelect)``

export const TopForm = styled.div`
  > div {
    display: flex;
    align-content: flex-end;
    align-items: flex-end;
    justify-content: space-between;

    &:nth-child(1) > div {
      width: 17%;

      :nth-child(2) {
        width: 45%;
      }
    }
    &:nth-child(2) {
      margin: 15px 0;
      > div:first-child {
        width: 81.66%;
      }
      > div:nth-child(2) {
        width: 17%;
      }
    }
  }
`

export const RefundsTable = styled(ScrollableTable)`
  margin-top: 15px;
  width: 100%;

  tbody td,
  thead th {
    &:nth-child(1) {
      width: 13%;
      float: left;
      padding-left: 5px;
    }

    &:nth-child(2) {
      width: 37%;
      float: left;
    }

    &:nth-child(3) {
      width: 36%;
      float: left;
    }

    &:nth-child(4) {
      width: 6%;
      float: left;
    }

    &:nth-child(5) {
      width: 7%;
      float: left;
      text-align: center;
    }
  }
`

export const BottomButtons = styled.div`
  button:first-child {
    margin-right: 20px;
  }
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  flex: 1;
`
