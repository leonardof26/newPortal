import styled from 'styled-components'

export const Container = styled.table`
  .NoRegisters {
    text-align: center;
    width: 100% !important;
  }

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

  thead,
  tbody,
  tr,
  td,
  th {
    display: block;
  }

  tr:after {
    content: ' ';
    display: block;
    visibility: hidden;
    clear: both;
  }

  thead {
    color: #fff;
    padding-right: 15px;
    font-size: 13px;
    background: #222239;

    th {
      font-weight: 300;
      padding: 10px 0;
    }
  }

  tbody {
    display: block;
    overflow-y: scroll;
    height: 250px;
    border: 1px solid #b3b8bd;
    border-top: none;
    border-right: none;

    tr {
      border-bottom: 1px solid #b3b8bd;

      :hover {
        background: #ecf3f8;
      }

      &:last-child {
        border-bottom: none;
      }

      td {
        font-size: 13px !important;
        padding: 10px 0;
      }
    }
  }

  tbody td,
  thead th {
    width: auto;
    float: left;
  }
`
