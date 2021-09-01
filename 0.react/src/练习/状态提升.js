/*
 * @Author: your name
 * @Date: 2021-06-06 19:24:42
 * @LastEditTime: 2021-06-09 21:51:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \0.react\src\index.js
 */
import React from 'react'
import ReactDom from 'react-dom'

// 状态提升
class P extends React.Component {
  state = {
    number: 0
  }

  add = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  sub = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  change = newVal => {
    this.setState({
      number: newVal
    })
  }

  render() {
    return (
      <>
        <A number={this.state.number} add={this.add} change={this.change} />
        <B number={this.state.number} sub={this.sub} />
      </>
    )
  }
}

class A extends React.Component {
  InputRef = React.createRef()

  handleChange = () => {
    this.props.change(this.InputRef.current.value)
  }

  render() {
    return (
      <>
        <input value={this.props.number} ref={this.InputRef} onChange={this.handleChange} />
        <button onClick={this.props.add}>+</button>
      </>
    )
  }
}

class B extends React.Component {
  render() {
    return (
      <>
        <input value={this.props.number} />
        <button onClick={this.props.sub}>-</button>
      </>
    )
  }
}

ReactDom.render(
  <>
    <P />
  </>,
  document.getElementById('root')
)
