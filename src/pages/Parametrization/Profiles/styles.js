import styled from 'styled-components'

import ReactSelect from '../../../components/Unform/ReactSelect'

export const Container = styled.div`
  margin: 0 2%;
`

export const Title = styled.h1`
  margin-top: 10px;
  background-color: #fbfbfb;
  color: #222239;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 200;
  height: 38px;
  padding: 9px 15px;
  box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.2);
`

export const FormSelect = styled.div`
  width: 25%;

  p {
    margin-bottom: 5px;
  }
`

export const TopForm = styled.div`
  margin-top: 10px;
  display: flex;
  align-content: flex-end;
  align-items: ${props => (props.error ? 'center' : 'flex-end')};

  div {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
  }

  button {
    height: 38px;
    padding: 0 30px;
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

export const ProfileTable = styled.table`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
  min-width: 400px;
  width: 35%;
  margin-bottom: 10px;

  thead {
    background: #222239;
    color: #fff;
    border-radius: 10px;
    border: 1px solid #222239;

    th {
      padding: 15px 0;
      font-weight: 300;
    }
  }

  tbody {
    border: 1px solid #b3b8bd;

    td {
      border-bottom: 1px solid #b3b8bd;
      padding: 15px 0;

      svg {
        font-size: 21px;
        padding: 0 2px;
        border: 1px solid #222239;
        border-radius: 4px;

        &:hover {
          background: #f1f1f1;
          cursor: pointer;
        }
      }
    }
  }

  tbody td,
  thead th {
    &:nth-child(1) {
      width: 15%;
      text-align: center;
    }
    &:nth-child(2) {
      width: 50%;
    }
    &:nth-child(3) {
      width: 25%;
      text-align: center;
    }
    &:nth-child(4) {
      width: 15%;
      text-align: center;
    }
  }
`
export const Select = styled(ReactSelect)``
