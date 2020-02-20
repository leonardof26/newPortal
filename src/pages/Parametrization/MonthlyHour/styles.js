import styled, { keyframes } from 'styled-components'

import ReactSelect from '../../../components/Unform/ReactSelect'
import MaskInput from '../../../components/Unform/MaskInput'

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  margin: 0 2%;
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
    min-height: 32px;
    height: 32px;
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
  min-width: 900px;
  border-collapse: collapse;

  thead {
    background: #222239;
    color: #fff;
    font-size: 14px !important;
    border: 1px solid #222239;

    th {
      font-weight: 300;
      height: 40px;
    }
  }

  tbody {
    border: 1px solid #b3b8bd;
    font-size: 13px !important;

    td {
      height: 40px;
    }
    input {
      width: 70px;
      height: 27px;
      text-align: right;
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
    margin-top: 15px;
    margin-right: 20px;
    margin-bottom: 5px;
  }
`

export const Input = styled(MaskInput)``

export const Loading = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: block;

  svg {
    position: absolute;
    animation: ${rotate} 2s linear infinite;
    left: 48%;
    top: 40%;
  }
`
