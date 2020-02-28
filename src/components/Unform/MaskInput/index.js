import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useField } from '@unform/core'

import { Container } from './styles'

export default function MaskInput({ err, name, ...rest }) {
  const ref = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)

  function parseSelectValue(selectRef) {
    return selectRef.state.numAsString
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      getValue: parseSelectValue,
      clearValue: pickerRef => {
        pickerRef.clear()
      },
    })
  }, [ref.current, fieldName]) // eslint-disable-line

  return (
    <>
      <Container
        error={error && err}
        name={fieldName}
        ref={ref}
        defaultValue={defaultValue}
        {...rest}
      />
      {/* {error && <span>{error}</span>} */}
    </>
  )
}

MaskInput.propTypes = {
  name: PropTypes.string.isRequired,
}
