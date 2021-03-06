// import React, { useRef, useState, useEffect } from 'react'
// import { registerLocale } from 'react-datepicker'
// import { useField } from '@unform/core'
// import pt from 'date-fns/locale/pt'
// import ReactDatePicker from '../../DatePicker'

// import { Container } from '../../DatePicker/styles'

// export default function Calendar({ name, ...rest }) {
//   registerLocale('pt', pt)

//   const datepickerRef = useRef(null)
//   const { fieldName, registerField, defaultValue, error } = useField(name)
//   const [date, setDate] = useState(defaultValue || null)

//   useEffect(() => {
//     registerField({
//       name: fieldName,
//       ref: datepickerRef.current,
//       path: 'props.selected',
//       clearValue: ref => {
//         ref.clear()
//       },
//     })
//   }, [fieldName, registerField])

//   return (
//     <Container>
//       <ReactDatePicker
//         locale="pt"
//         ref={datepickerRef}
//         selected={date}
//         onChange={setDate}
//         {...rest}
//       />
//     </Container>
//   )
// }

import React, { useRef, useState, useEffect } from 'react'
import ReactDatePicker, { registerLocale } from 'react-datepicker'

import pt from 'date-fns/locale/pt'
import { useField } from '@unform/core'

import { FaRegCalendarAlt } from 'react-icons/fa'
import { Container } from '../../DatePicker/styles'

const DatePicker = ({ name, dateFormat, ...rest }) => {
  registerLocale('pt', pt)

  const datepickerRef = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)

  const [date, setDate] = useState(defaultValue || null)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: ref => {
        ref.clear()
      },
    })
  }, [fieldName, registerField])

  return (
    <Container error={error}>
      <div>
        <span>
          <FaRegCalendarAlt />
        </span>
        <ReactDatePicker
          ref={datepickerRef}
          selected={date}
          onChange={setDate}
          locale="pt"
          dateFormat={dateFormat || 'dd/MM/yyyy'}
          {...rest}
        />
      </div>
    </Container>
  )
}

export default DatePicker
