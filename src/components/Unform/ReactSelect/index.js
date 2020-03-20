import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

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

export default function ReactSelect({
  name,
  label,
  options,
  multiple,
  ...rest
}) {
  const ref = useRef(null)
  const { fieldName, registerField, error } = useField(name)

  function parseSelectValue(selectRef) {
    const selectValue = selectRef.state.value
    if (!multiple) {
      return selectValue ? selectValue.value : ''
    }

    return selectValue ? selectValue.map(option => option.id) : []
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      parseValue: parseSelectValue,
      clearValue: selectRef => {
        selectRef.select.clearValue()
      },
    })
  }, [ref.current, fieldName]) // eslint-disable-line

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <Container
        error={error}
        name={fieldName}
        aria-label={fieldName}
        options={options}
        isMulti={multiple}
        styles={customStyles}
        ref={ref}
        {...rest}
      />

      {error && <span>{error}</span>}
    </>
  )
}

ReactSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  multiple: PropTypes.bool,
}

ReactSelect.defaultProps = {
  label: '',
  multiple: false,
}
