import React, { Component } from 'react'

class LifeCycle extends Component {
  // 默认值，外界没有传值就用这个
  static defaultProps = {
    name: '计数器'
  }

  constructor(props) {
    super(props)
    this.state = {
      name: 'zs',
      number: 0
    }
    console.log(this.props)
    console.log('1初始化  props and state')
  }

  componentWillMount() {
    console.log('2componentWillMount')
  }

  componentDidMount() {
    console.log('4 componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('5 询问组件是否更新')
    return true
  }

  componentWillUpdate() {
    console.log('6 组件将要更新-执行render')
  }

  componentDidUpdate() {
    console.log('7 组件更新完成')
  }

  add = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  render() {
    // 首次执行完后调用componentDidMount
    // 其他情况执行完后调用componentDidUpdate
    console.log('3. render')
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.add}>+</button>
        {this.state.number % 2 === 0 && <Sub number={this.state.number} />}
      </div>
    )
  }
}

class Sub extends Component {
  // 组件收到新属性，第一次不会触发
  componentWillReceiveProps() {
    console.log('sub 1 receive props')
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.number % 3 === 0) {
      return true
    } else {
      return false
    }
  }

  componentWillUnmount() {
    console.log('sub 2 componentWillUnmount')
  }

  render() {
    return (
      <div>
        <p>{this.props.number}</p>
      </div>
    )
  }
}

export default LifeCycle
