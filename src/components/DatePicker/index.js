import React from 'react'

import pt from 'date-fns/locale/pt'

import { FaRegCalendarAlt } from 'react-icons/fa'

import DatePicker, { registerLocale } from 'react-datepicker'

import { Container } from './styles'

export default function Calendar({ children, dateFormat, ...rest }) {
  registerLocale('pt', pt)

  return (
    <Container>
      <div>
        <span>
          <FaRegCalendarAlt />
        </span>
        <DatePicker
          locale="pt"
          {...rest}
          dateFormat={dateFormat || 'dd/MM/yyyy'}
        />
      </div>
    </Container>
  )
}
