import styled from 'styled-components'

import ReactSelect from '../../../../components/Unform/ReactSelect'

export const Container = styled.div`
  > div {
    overflow-x: scroll;
  }

  table {
    /* thead {
      tr {
        &:first-child {
          td {
            &:first-child {
              width: 5%;
              text-align: center;
            }
          }
        }
      }
    } */
    tbody td,
    thead tr:first-child th {
      &:nth-child(1) {
        width: 5%;
        text-align: center;
      }
      &:nth-child(2) {
        width: 5%;
        text-align: center;
      }
      &:nth-child(3) {
        width: 130px;
        text-align: center;
      }
    }
  }
`

export const Select = styled(ReactSelect)``
