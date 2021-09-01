import React, { Component } from 'react'
import RouterContext from './context'

export default class Prompt extends Component {
  static contextType = RouterContext

  componentWillUnmount() {
    this.context.history.block(null)
  }

  render() {
    let history = this.context.history
    const { when, message } = this.props
    if (when) {
      history.block(message)
    } else {
      history.block(null)
    }
    return null
  }
}
