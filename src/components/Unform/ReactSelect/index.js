import React, { useRef, useEffect } from 'react'
import ReactSelect, { OptionTypeBase, Props as SelectProps } from 'react-select'
import { useField } from '@unform/core'
import { Container } from './styles'

const customStyles = {
  control: base => ({
    ...base,
    height: 32,
    minHeight: 32,
    position: 'initial',
  }),
  multiValue: (styles, { data }) => {
    const color = '#89BAB1'
    return {
      ...styles,
      backgroundColor: color,
    }
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: '#fff',
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: '#fff',
    ':hover': {
      backgroundColor: data.color,
      color: '#f1f1f1',
    },
  }),
}

const Select = ({ name, ...rest }) => {
  const selectRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return []
          }

          return ref.state.value.map(option => option.value)
        }
        if (!ref.state.value) {
          return ''
        }

        return ref.state.value.value
      },
    })
  }, [fieldName, registerField, rest.isMulti])

  return (
    <Container
      error={error}
      // defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      styles={customStyles}
      {...rest}
    />
  )
}

export default Select
