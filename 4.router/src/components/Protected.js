import React from 'react'
import { Route, Redirect } from 'react-router-dom'
//rest = {path:profile,exact:true}
// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('login') ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }} />
        )
      }
    />
  )
}
