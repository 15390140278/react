import React from 'react'
import Route from './Route'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (WrappedComponent) {
  return props => <Route {...props} component={WrappedComponent} />
}
