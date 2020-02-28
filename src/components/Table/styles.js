import styled from 'styled-components'

export const Container = styled.table`
  margin-top: 40px;
  border-collapse: collapse;
  margin-bottom: 15px;

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

    tr {
      :hover {
        background: #ecf3f8;
      }
    }

    td {
      border-bottom: 1px solid #b3b8bd;
      height: 40px;
    }
  }
`
