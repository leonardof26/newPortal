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

export const ProjectsTable = styled(ScrollableTable)`
  margin-top: 15px;
  width: 100%;

  button {
    background: center;
    border: none;
    font-weight: 650;
  }

  tbody td,
  thead th {
    &:nth-child(1) {
      width: 25%;
      float: left;
      padding-left: 5px;
    }

    &:nth-child(2) {
      width: 50%;
      float: left;
    }

    &:nth-child(3) {
      width: 15%;
      float: left;
      text-align: center;
      justify-content: center;
    }

    &:nth-child(4) {
      width: 10%;
      float: left;
      text-align: center;
      justify-content: center;
    }

    width: 5%;
    float: left;
  }
`

export const JustifyButton = styled.button`
  margin-left: 4px;
  background: #fff;
  border: none;
  height: 50%;
  cursor: ${props => (props.status === 'disabled' ? 'default' : 'pointer')};

  svg {
    color: ${props => {
      switch (props.status) {
        case 'justified':
          return '#0e5faf'
        case 'unjustified':
          return '#c46767'
        default:
          return '#f1f1f1'
      }
    }};
    font-size: 21px;
    padding: 0 5px;
    border: 1px solid
      ${props => {
        switch (props.status) {
          case 'justified':
            return '#0e5faf'
          case 'unjustified':
            return '#c46767'
          default:
            return '#f1f1f1'
        }
      }};
    border-radius: 5px;
    background: #fff;
  }
`

export const Observation = styled.div`
  p {
    padding: 0;
    background: #fff;
    margin-top: 10px;
    color: #222239;
    font-weight: bold;
  }

  textarea {
    border-radius: 4px;
    width: 100%;
    border: 1px solid #c5c5c5;
    height: 50px;
    font-size: 10px;
  }
`

export const BottomButtons = styled.div`
  button:first-child {
    margin-right: 15px;
  }
`
