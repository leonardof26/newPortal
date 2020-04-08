import styled from 'styled-components'

import Select from 'react-select'

export const Container = styled(Select)`
  .react-select__control,
  .css-8bspxi-control,
  .react-select__menu,
  .react-select__menu-list {
    z-index: 10090 !important;
  }

  .react-select__control {
    border-color: ${props => (props.error ? '#a94442' : 'hsl(0,0%,80%)')};
  }

  .react-select__indicatorContainer,
  .react-select__indicatorContainer,
  .react-select__indicator,
  .react-select__dropdown-indicator,
  .css-tlfecz-indicatorContainer {
    padding: 5px 8px;
  }

  .react-select__value-container,
  .react-select__value-container--has-value,
  .css-1hwfws3 {
    position: initial;
  }

  .react-select__control,
  .css-8bspxi-control {
    height: ${props => (props.isMulti ? 'auto' : '32px')};
  }
`
