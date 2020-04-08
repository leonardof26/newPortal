import styled from 'styled-components'

import Modal from 'react-bootstrap/Modal'

import DatePicker, { registerLocale } from 'react-datepicker'

import { Form as Unform } from '@unform/web'

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

export const Body = styled.div`
  margin: 0 5%;

  > div {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;

    > div {
      width: 32%;
    }

    input {
      width: 100%;
    }

    &:first-child {
      margin-top: 14px;
    }

    &:last-child {
      flex-direction: column;
      align-content: flex-start;
      align-items: flex-start;

      > div {
        width: 66%;
        margin-bottom: 14px;
      }
    }

    .optsInputs {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: space-between;

      div {
        width: 47%;
      }
    }
  }
`

export const Select = styled(ReactSelect)``
