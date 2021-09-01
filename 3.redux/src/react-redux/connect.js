import React, { Component } from 'react'
import ReduxContext from './context'
import { bindActionCreators } from '../redux'

export default function (mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    return class extends Component {
      static contextType = ReduxContext

      // context上下文对象
      constructor(props, context) {
        super(props)
        this.state = mapStateToProps(context.store.getState())
      }

      componentDidMount() {
        this.unsubscribe = this.context.store.subscribe(() => {
          this.setState(mapStateToProps(this.context.store.getState()))
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        let actions = {}
        if (typeof mapDispatchToProps === 'function') {
          actions = mapDispatchToProps(this.context.store.dispatch)
        } else {
          actions = bindActionCreators(mapDispatchToProps, this.context.store.dispatch)
        }
        return <WrappedComponent dispatch={this.context.store.dispatch} {...this.state} {...actions} />
      }
    }
  }
}
