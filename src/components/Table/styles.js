import styled from 'styled-components'

export const Container = styled.table`
  margin-top: 40px;
  border-collapse: collapse;
  margin-bottom: 15px;

  .garbage {
    padding: 0 3px !important;
  }

  svg {
    font-size: 21px;
    padding: 0 2px;
    border: 1px solid #222239;
    border-radius: 4px;

    &:hover {
      background: #222239;
      color: #fff;
      cursor: pointer;
    }
  }

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

  tfoot {
    background: #d5d5d9;
    border: 1px solid #b3b8bd;

    td {
      color: #5d5c5c;
      font-weight: 300;
      height: 40px;
    }
  }
`
