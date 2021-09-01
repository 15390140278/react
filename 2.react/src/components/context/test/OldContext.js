import React, { Component } from 'react'

class Page extends Component {
  state = {
    color: 'gray'
  }

  // 定义子上下文对象的属性和类型
  static childContextTypes = {
    color: 'string',
    setColor: 'function'
  }

  // 定义真正的子上下文
  getChildContext() {
    return {
      color: this.state.color,
      setColor: this.setColor
    }
  }

  setColor = color => {
    this.setState({
      color
    })
  }

  render() {
    return (
      <div style={{ border: '1px solid red', padding: '5px' }}>
        Page
        <Header></Header>
        <Main></Main>
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div style={{ border: '1px solid red', padding: '5px' }}>
        Header
        <Title></Title>
      </div>
    )
  }
}

class Title extends Component {
  // 指定要获取的上下文对象
  static contextTypes = {
    color: 'string',
    setColor: 'function'
  }

  render() {
    // this.context 根据contextTypes 过滤的结果
    /**
     * {
      color: 'gray',
      setColor: setColor = color => {
    this.setState({
      color
    })
  }
    }
     */
    return <div style={{ border: '1px solid red', padding: '5px', color: this.context.color }}>Title</div>
  }
}

class Main extends Component {
  render() {
    return (
      <div style={{ border: '1px solid red', padding: '5px' }}>
        Main
        <Content></Content>
      </div>
    )
  }
}

class Content extends Component {
  render() {
    return <div style={{ border: '1px solid red', padding: '5px' }}>Content</div>
  }
}

export default Page
