import React, { Component } from 'react'
import RouterContext from './context'
import pathToRegexp from 'path-to-regexp'

export default class Route extends Component {
  static contextType = RouterContext
  render() {
    console.log('ok')
    let { pathname } = this.context.location
    let { path = '/', component: Component, exact = false, render, children } = this.props
    let paramNames = []
    let regxp = pathToRegexp(path, paramNames, { end: exact })
    let result = pathname.match(regxp)
    let props = {
      location: this.context.location,
      history: this.context.history
    }
    if (result) {
      console.log(result)
      // /:id/:name
      paramNames = paramNames.map(item => item.name)
      console.log(paramNames)
      let [url, ...values] = result
      let params = {}
      for (let i = 0; i < paramNames.length; i++) {
        params[paramNames[i]] = values[i]
      }
      console.log(params)
      props.match = {
        path,
        url,
        isExact: url === pathname,
        params
      }
      console.log(props)
      if (Component) {
        return <Component {...props} />
      } else if (render) {
        return render(props)
      } else if (children) {
        // children都会渲染
        return children(props)
      } else {
        return null
      }
    } else {
      // children都会渲染
      if (children) {
        return children(props)
      } else {
        return null
      }
    }
  }
}
