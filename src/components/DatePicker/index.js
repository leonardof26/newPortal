import React from 'react'

import pt from 'date-fns/locale/pt'

import { FaRegCalendarAlt } from 'react-icons/fa'
import DatePicker, { registerLocale } from 'react-datepicker'

import { Container } from './styles'

export default function Calendar({ children, ...rest }) {
  registerLocale('pt', pt)

  // const ExampleCustomInput = ({ value, onClick }) => (
  //   <button className="example-custom-input" onClick={onClick}>
  //     {value}
  //   </button>
  // )

  return (
    <Container>
      <DatePicker locale="pt" {...rest} />
      {/* <div className="icon">
        <FaRegCalendarAlt />
      </div> */}
    </Container>
  )
}
