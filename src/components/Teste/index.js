// import React from 'react'

// import pt from 'date-fns/locale/pt'

// import { FaRegCalendarAlt } from 'react-icons/fa'

// import DatePicker, { registerLocale } from 'react-datepicker'

// import { Container } from './styles'

// export default function Calendar({ children, ...rest }) {
//   registerLocale('pt', pt)

//   const ExampleCustomInput = ({ value, onClick, onChange }) => (
//     <button type="button" className="example-custom-input" onClick={onClick}>
//       {value}

//       <div className="icon">
//         <FaRegCalendarAlt />
//       </div>
//     </button>
//   )

//   return (
//     <Container>
//       <label>
//         <span>
//           <FaRegCalendarAlt />
//         </span>
//         <DatePicker locale="pt" {...rest} dateFormat="dd/MM/yyyy" />
//       </label>

//       {/* <div className="icon">
//         <FaRegCalendarAlt />
//       </div> */}
//     </Container>
//   )
// }

import React, { useState } from 'react'

import pt from 'date-fns/locale/pt'
import { isValid } from 'date-fns'

import { FaRegCalendarAlt } from 'react-icons/fa'

import DatePicker, { registerLocale } from 'react-datepicker'

import { Container } from './styles'

export default function Calendar({ children, ...rest }) {
  const [date, setDate] = useState()

  function handleChange(date, onChange, teste) {
    console.log(rest)
    if (date.length < 3) {
      return
    }
    onChange(teste)
  }

  registerLocale('pt', pt)

  const ExampleCustomInput = ({ onChange, ...rest }) => (
    <label>
      <span>
        <FaRegCalendarAlt />
      </span>
      {console.log(onChange)}
      <input {...rest} onChange={date => handleChange(date, onChange, this)} />
    </label>
  )

  return (
    <Container>
      <DatePicker
        locale="pt"
        {...rest}
        dateFormat="dd/MM/yyyy"
        customInput={<ExampleCustomInput />}
      />

      {/* <div className="icon">
        <FaRegCalendarAlt />
      </div> */}
    </Container>
  )
}
