import React, { Component } from 'react'
// import { bindActionCreators } from '../redux'
import { bindActionCreators } from 'redux'
import store from '../store/index'
import actions from '../store/actions/counter1'

// 重写actions里所有的方法返回新的actions
let bindActions = bindActionCreators(actions, store.dispatch)
// 重写actions某一个方法,返回新的方法
// let bindAction = bindActionCreators(actions.decrement, store.dispatch)

export default class Counter extends Component {
  state = {
    number: store.getState().counter1
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        // store.getState() = {counter1:0,counter2:1}
        number: store.getState().counter1
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <>
        <p>{this.state.number}</p>
        <button onClick={bindActions.increment}>+</button>
        <button onClick={bindActions.decrement}>-</button>
        {/* <button onClick={bindAction}>-</button> */}
      </>
    )
  }
}
