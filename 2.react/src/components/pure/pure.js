import React, { Component } from 'react'
import PureComponent from './PureComponent'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
    this.InputRef = React.createRef()
  }

  add = () => {
    this.setState({
      number: parseInt(this.state.number) + parseInt(this.InputRef.current.value)
    })
  }

  render() {
    console.log('render App')

    return (
      <div>
        <Son number={this.state.number} />
        {/* {Son({ number: this.state.number })} */}
        <input ref={this.InputRef} />
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}

class Son1 extends PureComponent {
  render() {
    console.log('render Son')
    return (
      <>
        <h1>{this.props.number}</h1>
      </>
    )
  }
}

function Son(props) {
  console.log('son render')
  return (
    <>
      <h1>{props.number}</h1>
    </>
  )
}

// Son = memo(Son)

function memo1(FuncComponent) {
  // 匿名class
  return class extends PureComponent {
    render() {
      return <FuncComponent {...this.props} />
    }
  }
}

function memo(FuncComponent) {
  // 匿名class
  return class extends PureComponent {
    render() {
      return FuncComponent(this.props)
    }
  }
}

export default App
