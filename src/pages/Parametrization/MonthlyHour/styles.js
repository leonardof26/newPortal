import styled from 'styled-components'

import { darken } from 'polished'
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

export const CodeForm = styled.div`
  width: 150px;
  p {
    font-size: 15px;
    margin-bottom: 0;
  }
`

export const Select = styled(ReactSelect)`
  .css-yk16xz-control,
  .css-1hwfws3,
  .css-1pahdxg-control,
  .css-6q0nyr-Svg {
    min-height: 30px;
    height: 30px;
    position: initial;
  }
  .css-tlfecz-indicatorContainer,
  .css-1gtu0rj-indicatorContainer {
    padding: 0 8px;
  }
`

export const YearTable = styled.table`
  margin-top: 70px;
  width: 100%;

  thead {
    background: #222239;
    color: #fff;
    border: 1px solid #222239;

    th {
      font-weight: 400;
      padding: 10px 0;
      font-size: 15px;
    }
  }

  tbody {
    border: 1px solid #b3b8bd;

    td {
      padding: 5px 0;
    }
    input {
      width: 70px;
      height: 25px;
      border: 1px solid #b3b8bd;
      border-radius: 5px;
      font-size: 12px;
      padding: 4px;
    }
  }

  tbody td,
  thead th {
    text-align: center;
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
    margin-top: 10px;
    margin-right: 20px;

    background: #222239;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 10px 40px;

    &:hover {
      background: ${darken(0.2, '#222239')};
    }
  }
`
