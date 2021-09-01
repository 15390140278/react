import React, { Component } from 'react'
import actions from '../store/actions/counter'
import { connect } from 'react-redux'
// import { connect } from '../react-redux'

// // 重写actions里所有的方法返回新的actions
// let bindActions = bindActionCreators(actions, store.dispatch)
// // 重写actions某一个方法,返回新的方法
// // let bindAction = bindActionCreators(actions.decrement, store.dispatch)

class Counter extends Component {
  // state = {
  //   number: store.getState()
  // }

  // componentDidMount() {
  //   this.unsubscribe = store.subscribe(() => {
  //     this.setState({
  //       number: store.getState()
  //     })
  //   })
  // }

  // componentWillUnmount() {
  //   this.unsubscribe()
  // }

  render() {
    return (
      <>
        <p>{this.props.number}</p>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.props.asyncIncrement}>过一秒加一</button>

        {/* <button onClick={bindAction}>-</button> */}
      </>
    )
  }
}

// {number: 0} => {number: 0} 将成为当前组件.props actions也会并入组件的props中
// 可以过滤数据
// const mapStateToProps = state => state
const mapStateToProps = state => ({ number: state.number * 10 })
const mapDispatchToProps = dispatch => {
  return {
    increment: (...args) => dispatch(actions.increment(...args)),
    decrement: (...args) => dispatch(actions.decrement(...args))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
