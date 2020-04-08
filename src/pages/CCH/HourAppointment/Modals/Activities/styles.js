import styled from 'styled-components'

import Modal from 'react-bootstrap/Modal'
import ScrollableTable from '../../../../../components/ScrollableTable'

export const Container = styled(Modal)``

export const TopInfo = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;

  span {
    margin-left: 10px;
  }
`

export const ActivitiesTable = styled(ScrollableTable)`
  margin: 15px 0;
  width: 100%;

  button {
    background: center;
    border: none;
    font-weight: 650;
  }

  textarea {
    width: 300px;
    resize: none;
    height: 25px;
    border: 1px solid #b3b8bd;
    border-radius: 5px;
    font-size: 12px;
    padding: 2px;
  }

  tbody td,
  thead th {
    &:nth-child(1) {
      width: 40%;
      float: left;
      padding-left: 5px;
    }

    &:nth-child(2) {
      width: 15%;
      float: left;
      justify-content: center;
      text-align: center;
    }

    &:nth-child(3) {
      width: 45%;
      float: left;
    }
  }
`

export const BottomButtons = styled.div`
  button:first-child {
    margin-right: 15px;
  }
`
