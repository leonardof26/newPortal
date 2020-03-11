import styled from 'styled-components'

import Select from 'react-select'

export const Container = styled(Select)`
  .css-yk16xz-control {
    border-color: ${props => (props.error ? '#a94442' : 'hsl(0,0%,80%)')};
  }
`
