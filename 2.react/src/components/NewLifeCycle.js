import React, { Component } from 'react'

class Counter extends Component {
  state = { 
    number: 0
  }

  add = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  render() {
    return (
      <>
        <p>{this.state.number}</p>
        <button onClick={this.add}>+</button>
        <SubCounter number={this.state.number} />
      </>
    )
  }
}

class SubCounter extends Component {
  state = {
    number: 0
  }

  // 根据新的属性对象派生状态对象  新的属性对象  旧的状态对象
  // 目的，将属性全映射为状态，方便操作
  static getDerivedStateFromProps(nextProps, prevState) {

    // 返回的对象与state合并
    if (nextProps.number %2 === 0) {
      return {
        number: prevState.number + nextProps.number
      }
    } else if (nextProps.number %3 === 0) {
      return {
        number: prevState.number + nextProps.number
      }
    }
  }
  render() {
    return <div>{this.state.number}</div>
  }
}

export default Counter