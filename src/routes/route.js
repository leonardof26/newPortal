import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import DefaultLayout from '../pages/_layouts/default'

export default function RouteWrapper({
  component: Component,
  isPrivate,
  path,
  ...rest
}) {
  const signed = localStorage.getItem('ID_TOKEN') === null

  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }

  return (
    <Route
      {...rest}
      render={props =>
        path !== '/login' ? (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  path: PropTypes.string.isRequired,
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}
